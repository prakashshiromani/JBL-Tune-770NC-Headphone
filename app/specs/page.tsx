"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const colors = [
    { name: "Black", hex: "#1a1a1a", accent: "#333", image: "/image/black.webp" },
    { name: "Blue", hex: "#2B4C7E", accent: "#3A6BAF", image: "/image/blue.png" },
    { name: "White", hex: "#E8E4E0", accent: "#F5F2EF", image: "/image/white.png" },
];

const generalSpecs = [
    { label: "Model", value: "JBL Tune 770NC" },
    { label: "Type", value: "Over-Ear, Closed-Back" },
    { label: "Color Options", value: "Black, Blue, Purple, White" },
    { label: "Weight", value: "252 g / 8.9 oz" },
    { label: "Foldable", value: "Yes, Flat-Fold Design" },
    { label: "Ear Cushion Material", value: "Soft-Padded Leatherette" },
    { label: "Headband Material", value: "Lightweight Plastic with Padding" },
];

const driverSpecs = [
    { label: "Driver Size", value: "40 mm Dynamic Driver" },
    { label: "Frequency Response", value: "20 Hz – 20 kHz" },
    { label: "Impedance", value: "32 Ω" },
    { label: "Sensitivity", value: "103 dB SPL @ 1 kHz" },
    { label: "Maximum SPL", value: "97 dB" },
    { label: "THD", value: "< 1%" },
    { label: "Sound Signature", value: "JBL Pure Bass" },
];

const connectivitySpecs = [
    { label: "Bluetooth Version", value: "5.3" },
    { label: "Bluetooth Profiles", value: "A2DP 1.4, AVRCP 1.6, HFP 1.8" },
    { label: "Audio Codecs", value: "SBC, AAC" },
    { label: "Multipoint Connection", value: "Yes (2 Devices)" },
    { label: "Wireless Range", value: "Up to 10 m / 33 ft" },
    { label: "Wired Connection", value: "3.5 mm Audio Cable" },
    { label: "USB Type", value: "USB-C (Charging)" },
];

const batterySpecs = [
    { label: "Battery Life (ANC Off)", value: "Up to 70 Hours" },
    { label: "Battery Life (ANC On)", value: "Up to 44 Hours" },
    { label: "Charging Time", value: "~2 Hours (Full)" },
    { label: "Fast Charge", value: "5 min = 3 Hours Playback" },
    { label: "Battery Type", value: "Rechargeable Li-ion Polymer" },
    { label: "Battery Capacity", value: "610 mAh" },
    { label: "Charging Interface", value: "USB-C" },
];

const ancSpecs = [
    { label: "Noise Cancelling", value: "Adaptive ANC" },
    { label: "ANC Type", value: "Hybrid (Feedforward + Feedback)" },
    { label: "Ambient Aware", value: "Yes" },
    { label: "TalkThru", value: "Yes" },
    { label: "Microphones", value: "2 (for ANC + Calls)" },
    { label: "Voice Assistant", value: "Google Assistant, Siri" },
    { label: "App Support", value: "JBL Headphones App" },
];

const boxContents = [
    { label: "Headphones", value: "JBL Tune 770NC × 1" },
    { label: "Charging Cable", value: "USB-C Cable × 1" },
    { label: "Audio Cable", value: "3.5 mm Audio Cable × 1" },
    { label: "Documentation", value: "Quick Start Guide, Warranty Card, Safety Sheet" },
];

const sections = [
    {
        title: "General",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        ),
        data: generalSpecs,
        accent: "from-white/5 to-transparent",
    },
    {
        title: "Driver & Sound",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
        data: driverSpecs,
        accent: "from-warmAccent/5 to-transparent",
    },
    {
        title: "Connectivity",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M4.93 11.222a10 10 0 0114.14 0M1.394 7.636a15 15 0 0121.213 0" />
            </svg>
        ),
        data: connectivitySpecs,
        accent: "from-white/5 to-transparent",
    },
    {
        title: "Battery & Charging",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        data: batterySpecs,
        accent: "from-surface/20 to-transparent",
    },
    {
        title: "Active Noise Cancelling",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
            </svg>
        ),
        data: ancSpecs,
        accent: "from-muted/5 to-transparent",
    },
    {
        title: "In the Box",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
        data: boxContents,
        accent: "from-warmAccent/5 to-transparent",
    },
];

const highlights = [
    { value: "40mm", label: "Driver", sub: "Dynamic" },
    { value: "70H", label: "Battery", sub: "ANC Off" },
    { value: "5.3", label: "Bluetooth", sub: "Version" },
    { value: "252g", label: "Weight", sub: "Lightweight" },
    { value: "ANC", label: "Adaptive", sub: "Hybrid" },
    { value: "2×", label: "Multipoint", sub: "Devices" },
];

export default function SpecsPage() {
    const [selectedColor, setSelectedColor] = useState(0);

    return (
        <main className="min-h-screen bg-void text-white/92">
            {/* Top Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface/30">
                <div className="absolute inset-0 bg-void/80 glass-blur" />
                <div className="relative max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-lg font-semibold tracking-tight text-white/90 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        JBL Tune 770NC
                    </Link>
                    <Link href="/buy">
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white text-void px-6 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-all duration-300 cursor-pointer inline-block"
                        >
                            Buy Now — $79.95
                        </motion.span>
                    </Link>
                </div>
            </nav>

            {/* Hero */}
            <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-sm uppercase tracking-widest text-warmAccent mb-4">Technical Specifications</p>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-gradient">
                                Every Detail,{" "}
                                <br className="hidden sm:block" />
                                Engineered.
                            </h1>
                            <p className="text-lg sm:text-xl text-white/50 max-w-lg leading-relaxed">
                                From 40mm drivers delivering JBL Pure Bass to 70 hours of battery life, every specification is crafted for audiophile-grade performance.
                            </p>

                            {/* Color Selection */}
                            <div className="flex items-center gap-4 mt-8">
                                <span className="text-sm text-white/40 mr-1">Color</span>
                                {colors.map((color, index) => (
                                    <motion.button
                                        key={color.name}
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setSelectedColor(index)}
                                        className="group relative flex flex-col items-center gap-1.5 cursor-pointer"
                                    >
                                        <div
                                            className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${selectedColor === index
                                                    ? 'border-warmAccent shadow-lg shadow-warmAccent/20 scale-110'
                                                    : 'border-surface/50 hover:border-white/40'
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                        />
                                        <span className={`text-xs transition-all duration-200 ${selectedColor === index ? 'text-white/80' : 'text-white/30'
                                            }`}>
                                            {color.name}
                                        </span>
                                    </motion.button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Pulsing outer glow */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        "0 0 60px 10px rgba(105,92,88,0.08), 0 0 120px 40px rgba(105,92,88,0.04)",
                                        "0 0 80px 20px rgba(105,92,88,0.15), 0 0 160px 60px rgba(105,92,88,0.08)",
                                        "0 0 60px 10px rgba(105,92,88,0.08), 0 0 120px 40px rgba(105,92,88,0.04)",
                                    ],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-4 rounded-3xl pointer-events-none z-0"
                            />

                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-depth border border-surface/30">
                                {/* Breathing ambient glow */}
                                <motion.div
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 radial-gradient-bg"
                                />

                                {/* Floating product image */}
                                <motion.div
                                    animate={{
                                        y: [0, -14, 0],
                                        rotate: [0, 1.5, 0, -1.5, 0],
                                    }}
                                    transition={{
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                                    }}
                                    className="relative w-full h-full z-10"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={selectedColor}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.3 }}
                                            className="relative w-full h-full"
                                        >
                                            <Image
                                                src={colors[selectedColor].image}
                                                alt={`JBL Tune 770NC - ${colors[selectedColor].name}`}
                                                fill
                                                className="object-contain p-8 sm:p-12"
                                                priority
                                            />
                                        </motion.div>
                                    </AnimatePresence>
                                </motion.div>

                                {/* Shimmer sweep */}
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                                    className="absolute inset-0 z-20 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
                                    }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Key Highlights Bar */}
            <section className="py-10 border-y border-surface/20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
                        {highlights.map((h, i) => (
                            <motion.div
                                key={h.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                                className="text-center"
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{h.value}</p>
                                <p className="text-sm text-white/60">{h.label}</p>
                                <p className="text-xs text-white/30">{h.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Specifications Sections */}
            <section className="py-16 sm:py-24">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="space-y-8">
                        {sections.map((section, sectionIdx) => (
                            <motion.div
                                key={section.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: sectionIdx * 0.05, duration: 0.6 }}
                                className="group"
                            >
                                <div className={`bg-gradient-to-br ${section.accent} bg-depth border border-surface/30 rounded-2xl overflow-hidden hover:border-surface/50 transition-all duration-500`}>
                                    {/* Section Header */}
                                    <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-surface/20">
                                        <div className="w-9 h-9 rounded-lg bg-surface/40 flex items-center justify-center text-white/50 group-hover:text-white/80 transition-colors duration-300">
                                            {section.icon}
                                        </div>
                                        <h2 className="text-lg sm:text-xl font-semibold text-white/90">{section.title}</h2>
                                    </div>

                                    {/* Spec Rows */}
                                    <div className="divide-y divide-surface/15">
                                        {section.data.map((spec, i) => (
                                            <motion.div
                                                key={spec.label}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.03 }}
                                                className="flex items-center justify-between px-6 sm:px-8 py-4 hover:bg-white/[0.02] transition-colors duration-200"
                                            >
                                                <span className="text-sm sm:text-base text-white/45">{spec.label}</span>
                                                <span className="text-sm sm:text-base text-white/90 font-medium text-right">{spec.value}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Note */}
            <section className="py-16 border-t border-surface/20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm uppercase tracking-widest text-warmAccent mb-4">Compatibility</p>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-gradient">Works with Everything</h3>
                        <p className="text-white/50 leading-relaxed mb-8">
                            Compatible with all Bluetooth-enabled devices including iPhone, Android, Windows, macOS, and tablets.
                            Use the JBL Headphones App on iOS and Android for EQ customization, ANC adjustment, and firmware updates.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {["iOS", "Android", "Windows", "macOS", "Bluetooth 5.3", "USB-C", "3.5mm Aux"].map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-depth border border-surface/40 px-4 py-2 rounded-full text-sm text-white/60"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 sm:py-28 border-t border-surface/20 radial-gradient-bg">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-gradient">
                            Convinced by the specs?
                        </h2>
                        <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto">
                            Experience JBL Pure Bass sound with industry-leading noise cancelling.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="/buy">
                                <motion.span
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,255,255,0.2)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-white text-void px-12 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
                                >
                                    Buy Now — $79.95
                                </motion.span>
                            </Link>
                            <Link href="/">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-depth border-2 border-surface/50 hover:border-warmAccent/50 px-12 py-5 rounded-full text-lg font-semibold text-white/90 transition-all duration-300"
                                >
                                    ← Back to Experience
                                </motion.span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-surface/20 py-10">
                <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-sm text-white/30">© 2026 JBL — Harman International</span>
                    <div className="flex gap-6 text-sm text-white/30">
                        <span className="hover:text-white/60 transition-colors cursor-pointer">Privacy</span>
                        <span className="hover:text-white/60 transition-colors cursor-pointer">Terms</span>
                        <span className="hover:text-white/60 transition-colors cursor-pointer">Support</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}
