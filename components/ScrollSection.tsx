"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollSectionProps {
    children: React.ReactNode;
    scrollStart: number; // 0-1
    scrollEnd: number; // 0-1
    align?: "left" | "center" | "right";
    className?: string;
}

export default function ScrollSection({
    children,
    scrollStart,
    scrollEnd,
    align = "center",
    className = "",
}: ScrollSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();

    // Fade in when in range, fade out when outside
    const opacity = useTransform(
        scrollYProgress,
        [
            Math.max(0, scrollStart - 0.05),
            scrollStart,
            scrollEnd,
            Math.min(1, scrollEnd + 0.05),
        ],
        [0, 1, 1, 0]
    );

    const y = useTransform(
        scrollYProgress,
        [scrollStart, scrollEnd],
        [20, -20]
    );

    const alignmentClasses = {
        left: "items-start text-left",
        center: "items-center text-center",
        right: "items-end text-right",
    };

    // Calculate vertical position based on scroll range
    const topPosition = `${scrollStart * 100}%`;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y, top: topPosition }}
            className={`absolute left-0 right-0 h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 pointer-events-none ${alignmentClasses[align]} ${className}`}
        >
            {children}
        </motion.div>
    );
}
