"use client";

import ScrollSection from "../ScrollSection";

export default function HeroSection() {
    return (
        <ScrollSection scrollStart={0} scrollEnd={0.28} align="center">
            <div className="max-w-4xl">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-gradient">
                    JBL Tune 770NC
                </h1>

                <p className="text-2xl md:text-4xl font-semibold mb-8 text-white/92">
                    Pure sound. Zero distractions.
                </p>

                <p className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed">
                    Wireless over-ear headphones with Adaptive Noise Cancelling and up to 70 hours of battery life.
                </p>
            </div>
        </ScrollSection>
    );
}
