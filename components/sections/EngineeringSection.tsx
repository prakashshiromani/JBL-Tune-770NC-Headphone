"use client";

import ScrollSection from "../ScrollSection";

export default function EngineeringSection() {
    return (
        <ScrollSection scrollStart={0.18} scrollEnd={0.40} align="left">
            <div className="max-w-2xl pt-24">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white/92">
                    Engineered for comfort
                </h2>

                <div className="space-y-4 text-white/65 text-lg md:text-xl leading-relaxed">
                    <p>
                        Lightweight design, plush ear cushions, and JBL's signature 40mm drivers deliver powerful sound without fatigue.
                    </p>
                    <p>
                        Built for long sessions — travel, work, and everything in between.
                    </p>
                </div>
            </div>
        </ScrollSection>
    );
}
