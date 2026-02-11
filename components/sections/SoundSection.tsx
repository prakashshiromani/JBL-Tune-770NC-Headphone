"use client";

import ScrollSection from "../ScrollSection";

export default function SoundSection() {
    return (
        <ScrollSection scrollStart={0.63} scrollEnd={0.97} align="left">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white/92">
                    Signature JBL sound.
                </h2>

                <div className="space-y-4 text-white/65 text-lg md:text-xl leading-relaxed">
                    <p>
                        Precision-tuned 40mm drivers deliver deep bass, crisp highs, and immersive balance.
                    </p>
                    <p>
                        Bluetooth 5.3 with multipoint connection lets you switch seamlessly between devices.
                    </p>
                </div>
            </div>
        </ScrollSection >
    );
}
