"use client";

import ScrollSection from "../ScrollSection";

export default function ANCSection() {
    return (
        <ScrollSection scrollStart={0.40} scrollEnd={0.63} align="right">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white/92">
                    Adaptive Noise Cancelling, your way.
                </h2>

                <div className="space-y-4 text-white/65 text-lg md:text-xl leading-relaxed">
                    <p>
                        Advanced microphones block unwanted noise in real time.
                    </p>
                    <p>
                        Ambient Aware lets you stay alert when needed.
                    </p>
                    <p>
                        TalkThru mode lowers music instantly for quick conversations.
                    </p>
                </div>
            </div>
        </ScrollSection>
    );
}
