"use client";

import ScrollSection from "../ScrollSection";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BatterySection() {
    return (
        <ScrollSection scrollStart={0.97} scrollEnd={1} align="center">
            <div className="max-w-4xl">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient">
                    70 hours of power. Zero compromises.
                </h2>

                <p className="text-xl md:text-2xl text-white/75 mb-12 max-w-3xl mx-auto leading-relaxed">
                    JBL Tune 770NC — built for long days, late nights, and nonstop sound.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto">
                    <Link href="/buy">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-white text-void px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-2xl cursor-pointer"
                        >
                            Buy JBL Tune 770NC
                        </motion.span>
                    </Link>

                    <Link href="/specs">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block bg-depth border-2 border-muted/50 hover:border-warmAccent/50 px-10 py-4 rounded-full text-lg font-semibold text-white/90 transition-all duration-300 cursor-pointer"
                        >
                            See full specs
                        </motion.span>
                    </Link>
                </div>

                <p className="text-sm text-white/50 mt-8">
                    Fast charge: 5 minutes = 3 hours of playtime.
                </p>
            </div>
        </ScrollSection>
    );
}
