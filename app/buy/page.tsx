"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const colors = [
    { name: "Black", hex: "#1a1a1a", accent: "#333", image: "/image/black.webp" },
    { name: "Blue", hex: "#2B4C7E", accent: "#3A6BAF", image: "/image/blue.png" },
    { name: "White", hex: "#E8E4E0", accent: "#F5F2EF", image: "/image/white.png" },
];

const specs = [
    { label: "Driver Size", value: "40mm" },
    { label: "Frequency", value: "20Hz – 20kHz" },
    { label: "Battery", value: "Up to 70H" },
    { label: "Bluetooth", value: "5.3" },
    { label: "ANC", value: "Adaptive" },
    { label: "Fast Charge", value: "5 min = 3H" },
];

const features = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        ),
        title: "JBL Pure Bass Sound",
        desc: "Legendary JBL signature sound with powerful bass.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M18.364 5.636a9 9 0 11-12.728 0M12 3v9" />
            </svg>
        ),
        title: "Adaptive ANC",
        desc: "Smart noise cancelling adapts to your surroundings.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "70H Battery Life",
        desc: "Marathon battery. 5-min charge = 3 hours playback.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M4.93 11.222a10 10 0 0114.14 0M1.394 7.636a15 15 0 0121.213 0" />
            </svg>
        ),
        title: "Bluetooth 5.3",
        desc: "Stable, multipoint connectivity. Pair two devices.",
    },
];

export default function BuyPage() {
    const [selectedColor, setSelectedColor] = useState(0);
    const [quantity, setQuantity] = useState(1);

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
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:block text-sm text-white/50">Free Shipping Worldwide</span>
                        <div className="w-px h-5 bg-white/20 hidden sm:block" />
                        <span className="hidden sm:block text-sm text-white/50">30-Day Returns</span>
                    </div>
                </div>
            </nav>

            {/* Hero Product Section */}
            <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left - Product Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="relative"
                        >
                            {/* Animated outer glow ring */}
                            <motion.div
                                animate={{
                                    boxShadow: [
                                        `0 0 60px 10px ${colors[selectedColor].accent}15, 0 0 120px 40px ${colors[selectedColor].accent}08`,
                                        `0 0 80px 20px ${colors[selectedColor].accent}25, 0 0 160px 60px ${colors[selectedColor].accent}12`,
                                        `0 0 60px 10px ${colors[selectedColor].accent}15, 0 0 120px 40px ${colors[selectedColor].accent}08`,
                                    ],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-4 rounded-3xl pointer-events-none z-0"
                            />

                            <div className="relative aspect-square rounded-3xl overflow-hidden bg-depth border border-surface/40">
                                {/* Animated ambient glow */}
                                <motion.div
                                    animate={{
                                        opacity: [0.2, 0.4, 0.2],
                                        scale: [1, 1.1, 1],
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0"
                                    style={{
                                        background: `radial-gradient(circle at 50% 40%, ${colors[selectedColor].accent}40, transparent 65%)`,
                                        transition: "background 0.8s ease",
                                    }}
                                />

                                {/* Floating product image */}
                                <motion.div
                                    animate={{
                                        y: [0, -12, 0],
                                        rotate: [0, 1.5, 0, -1.5, 0],
                                    }}
                                    transition={{
                                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                                        rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                                    }}
                                    className="relative w-full h-full z-10"
                                >
                                    <Image
                                        src={colors[selectedColor].image}
                                        alt="JBL Tune 770NC"
                                        fill
                                        className="object-contain p-8 sm:p-12"
                                        priority
                                    />
                                </motion.div>

                                {/* Shimmer sweep */}
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
                                    className="absolute inset-0 z-20 pointer-events-none"
                                    style={{
                                        background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 55%, transparent 60%)",
                                    }}
                                />
                            </div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-depth border border-surface/60 glass-blur rounded-full px-5 py-2 flex items-center gap-2"
                            >
                                <span className="w-2 h-2 rounded-full bg-warmAccent animate-pulse" />
                                <span className="text-sm text-white/70">In Stock — Ships in 24H</span>
                            </motion.div>
                        </motion.div>

                        {/* Right - Product Details */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                            className="flex flex-col"
                        >
                            {/* Breadcrumb */}
                            <div className="flex items-center gap-2 text-sm text-white/40 mb-6">
                                <span>Headphones</span>
                                <span>/</span>
                                <span>Over-Ear</span>
                                <span>/</span>
                                <span className="text-white/70">Tune 770NC</span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-gradient">
                                JBL Tune 770NC
                            </h1>

                            <p className="text-lg sm:text-xl text-white/60 mb-6">
                                Wireless Over-Ear Headphones with Adaptive Noise Cancelling
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mb-8">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill={i < 4 ? "#695C58" : "none"}
                                            stroke={i < 4 ? "#695C58" : "#494C49"}
                                            className="w-5 h-5"
                                        >
                                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-white/70 text-sm">4.5 out of 5</span>
                                <span className="text-white/40 text-sm">(2,847 reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-4 mb-8">
                                <span className="text-4xl sm:text-5xl font-bold text-white">$79.95</span>
                                <span className="text-xl text-white/40 line-through">$99.95</span>
                                <span className="bg-warmAccent/15 text-warmAccent px-3 py-1 rounded-full text-sm font-medium border border-warmAccent/20">
                                    Save 20%
                                </span>
                            </div>

                            {/* Color Selection */}
                            <div className="mb-8">
                                <p className="text-sm text-white/50 mb-3">
                                    Color — <span className="text-white/80">{colors[selectedColor].name}</span>
                                </p>
                                <div className="flex gap-3">
                                    {colors.map((color, index) => (
                                        <motion.button
                                            key={color.name}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => setSelectedColor(index)}
                                            className={`w-10 h-10 rounded-full border-2 transition-all duration-300 cursor-pointer ${selectedColor === index
                                                ? "border-white scale-110 shadow-lg"
                                                : "border-surface/60 hover:border-white/30"
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                            aria-label={`Select ${color.name}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Quantity */}
                            <div className="mb-8">
                                <p className="text-sm text-white/50 mb-3">Quantity</p>
                                <div className="flex items-center gap-1 bg-depth border border-surface/50 rounded-xl w-fit">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-4 py-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                                    >
                                        −
                                    </button>
                                    <span className="px-5 py-3 text-white font-medium min-w-[3rem] text-center">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                                        className="px-4 py-3 text-white/60 hover:text-white transition-colors cursor-pointer"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <Link href={`/checkout?color=${selectedColor}`}>
                                    <motion.span
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 inline-block w-full text-center bg-white text-void py-4 px-8 rounded-full text-lg font-semibold transition-all duration-300 shadow-2xl cursor-pointer"
                                    >
                                        Add to Cart — ${(79.95 * quantity).toFixed(2)}
                                    </motion.span>
                                </Link>
                                <Link href={`/wishlist?color=${selectedColor}`}>
                                    <motion.span
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-block bg-depth border-2 border-surface/60 hover:border-warmAccent/60 py-4 px-8 rounded-full text-lg font-semibold text-white/90 transition-all duration-300 cursor-pointer"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 inline mr-2 -mt-0.5">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                        </svg>
                                        Wishlist
                                    </motion.span>
                                </Link>
                            </div>

                            {/* Trust badges */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-surface/30">
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto mb-1 text-white/40">
                                        <path d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
                                    </svg>
                                    <span className="text-xs text-white/40">Free Shipping</span>
                                </div>
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto mb-1 text-white/40">
                                        <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-xs text-white/40">1 Year Warranty</span>
                                </div>
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 mx-auto mb-1 text-white/40">
                                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    <span className="text-xs text-white/40">30-Day Returns</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Specs Grid */}
            <section className="py-16 sm:py-24 border-t border-surface/20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 text-gradient"
                    >
                        Technical Specifications
                    </motion.h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {specs.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="bg-depth border border-surface/30 rounded-2xl p-6 text-center group hover:border-warmAccent/40 transition-all duration-500"
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                                    {spec.value}
                                </p>
                                <p className="text-sm text-white/40">{spec.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 sm:py-24 border-t border-surface/20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-6 text-gradient"
                    >
                        Engineered for Everything
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-lg text-white/50 text-center mb-16 max-w-2xl mx-auto"
                    >
                        Every detail designed for your ultimate listening experience.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                                className="bg-depth border border-surface/30 rounded-2xl p-8 group hover:border-warmAccent/40 transition-all duration-500 cursor-default"
                            >
                                <div className="w-12 h-12 rounded-xl bg-surface/40 flex items-center justify-center text-white/60 group-hover:text-white group-hover:bg-warmAccent/20 transition-all duration-500 mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-white/90">{feature.title}</h3>
                                <p className="text-sm text-white/45 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What's in the Box */}
            <section className="py-16 sm:py-24 border-t border-surface/20">
                <div className="max-w-[1400px] mx-auto px-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16 text-gradient"
                    >
                        What&apos;s in the Box
                    </motion.h2>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {[
                            { name: "JBL Tune 770NC", icon: "🎧" },
                            { name: "USB-C Cable", icon: "🔌" },
                            { name: "Audio Cable", icon: "🔊" },
                            { name: "Quick Start Guide", icon: "📖" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="bg-depth border border-surface/30 rounded-2xl p-6 text-center hover:border-surface/60 transition-all duration-300"
                            >
                                <span className="text-3xl mb-3 block">{item.icon}</span>
                                <p className="text-sm text-white/60">{item.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 sm:py-32 border-t border-surface/20 radial-gradient-bg">
                <div className="max-w-[1400px] mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-gradient">
                            Ready to hear the difference?
                        </h2>
                        <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto">
                            Join millions who trust JBL for legendary sound quality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(255,255,255,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="bg-white text-void px-12 py-5 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
                            >
                                Buy Now — $79.95
                            </motion.button>
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
