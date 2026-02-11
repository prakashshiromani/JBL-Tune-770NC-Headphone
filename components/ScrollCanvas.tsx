"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

const TOTAL_FRAMES = 240;

// Define three sequences for different scroll sections
const SEQUENCES = [
    { start: 0, end: 0.45, path: "/sequence/ezgif-frame-", name: "Overview" },
    { start: 0.45, end: 0.63, path: "/sequence2/ezgif-frame-", name: "Noise Cancelling" },
    { start: 0.63, end: 1, path: "/sequence3/ezgif-frame-", name: "Specs" },
];

export default function ScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [allImages, setAllImages] = useState<{ [key: string]: HTMLImageElement[] }>({});
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);

    const { scrollYProgress } = useScroll();

    // Preload all image sequences with priority batching
    useEffect(() => {
        let totalLoaded = 0;
        const totalToLoad = SEQUENCES.length * TOTAL_FRAMES;
        const BATCH_SIZE = 30; // Load 30 images concurrently for speed
        const PRIORITY_FRAMES = 15; // First 15 frames load with highest priority

        const loadImage = (path: string, index: number, priority = false) => {
            return new Promise<HTMLImageElement>((resolve, reject) => {
                const img = new Image();
                if (priority) {
                    img.fetchPriority = "high";
                }
                img.decoding = "async";
                img.src = `${path}${String(index).padStart(3, "0")}.jpg`;
                img.onload = () => resolve(img);
                img.onerror = () => resolve(img); // Don't block on errors
            });
        };

        // Load frames in concurrent batches for faster throughput
        const loadBatch = async (
            path: string,
            indices: number[],
            target: HTMLImageElement[],
            priority = false
        ) => {
            const promises = indices.map(i =>
                loadImage(path, i, priority).then(img => {
                    target[i - 1] = img;
                    totalLoaded++;
                    setLoadProgress(Math.floor((totalLoaded / totalToLoad) * 100));
                })
            );
            await Promise.all(promises);
        };

        const loadAllSequences = async () => {
            for (const sequence of SEQUENCES) {
                const sequenceImages: HTMLImageElement[] = new Array(TOTAL_FRAMES);

                // Phase 1: Load first PRIORITY_FRAMES instantly (hero visible fast)
                const priorityIndices = Array.from({ length: PRIORITY_FRAMES }, (_, i) => i + 1);
                await loadBatch(sequence.path, priorityIndices, sequenceImages, true);

                // Allow rendering as soon as the first sequence has initial frames
                if (sequence.name === "Overview") {
                    setAllImages(prev => ({ ...prev, [sequence.name]: sequenceImages }));
                    setImagesLoaded(true);
                }

                // Phase 2: Load remaining frames in fast batches
                const remaining = Array.from(
                    { length: TOTAL_FRAMES - PRIORITY_FRAMES },
                    (_, i) => i + PRIORITY_FRAMES + 1
                );

                for (let b = 0; b < remaining.length; b += BATCH_SIZE) {
                    const batch = remaining.slice(b, b + BATCH_SIZE);
                    await loadBatch(sequence.path, batch, sequenceImages);
                }

                // Update state with full sequence
                setAllImages(prev => ({ ...prev, [sequence.name]: sequenceImages }));
            }
        };

        loadAllSequences();
    }, []);

    // Render current frame based on scroll position
    useEffect(() => {
        if (!imagesLoaded || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (latest: number) => {
            // Determine which sequence to show based on scroll position
            let currentSequence = SEQUENCES[0];
            let localProgress = 0;

            for (const seq of SEQUENCES) {
                if (latest >= seq.start && latest < seq.end) {
                    currentSequence = seq;
                    // Normalize progress within this sequence's range
                    localProgress = (latest - seq.start) / (seq.end - seq.start);
                    break;
                }
            }

            // Handle the last sequence
            if (latest >= SEQUENCES[SEQUENCES.length - 1].start) {
                currentSequence = SEQUENCES[SEQUENCES.length - 1];
                localProgress = (latest - currentSequence.start) / (currentSequence.end - currentSequence.start);
            }

            const images = allImages[currentSequence.name];
            if (!images || images.length === 0) return;

            // Map scroll progress to frame index
            const frameIndex = Math.min(
                Math.floor(localProgress * (TOTAL_FRAMES - 1)),
                TOTAL_FRAMES - 1
            );

            const img = images[frameIndex];
            if (img && img.complete) {
                // Clear canvas
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate scaling to contain image (100% visibility)
                const scale = Math.min(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const scaledWidth = img.width * scale;
                const scaledHeight = img.height * scale;

                const x = (canvas.width - scaledWidth) / 2;
                const y = (canvas.height - scaledHeight) / 2;

                ctx.drawImage(img, x, y, scaledWidth, scaledHeight);
            }
        };

        // Set canvas size
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(scrollYProgress.get()); // Re-render on resize
        };
        resize();
        window.addEventListener("resize", resize);

        // Render initial frame (in case we are already scrolled or images just loaded)
        renderFrame(scrollYProgress.get());

        // Subscribe to scroll position changes
        const unsubscribe = scrollYProgress.on("change", (latest: number) => {
            renderFrame(latest);
        });

        return () => {
            unsubscribe();
            window.removeEventListener("resize", resize);
        };
    }, [imagesLoaded, allImages, scrollYProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: "#080707" }}
        />
    );
}
