"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
    { label: "Overview", scrollPercent: 0 },
    { label: "Technology", scrollPercent: 0.26 },
    { label: "Noise Cancelling", scrollPercent: 0.45 },
    { label: "Sound", scrollPercent: 0.63 },
    { label: "Specs", scrollPercent: 0.97 },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [menuOpen, setMenuOpen] = useState(false);

    // Fade in navbar after scrolling 100px
    const opacity = useTransform(scrollY, [0, 100], [0.3, 1]);
    const backdropOpacity = useTransform(scrollY, [0, 100], [0.4, 0.8]);

    const scrollToSection = (percent: number) => {
        window.scrollTo({
            top: (document.documentElement.scrollHeight - window.innerHeight) * percent,
            behavior: 'smooth'
        });
        setMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                style={{ opacity }}
                className="fixed top-0 left-0 right-0 z-50 border-b border-surface/30"
            >
                <motion.div
                    style={{ opacity: backdropOpacity }}
                    className="absolute inset-0 bg-void glass-blur"
                />

                <div className="relative max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Left - Logo */}
                    <button
                        onClick={() => scrollToSection(0)}
                        className="text-lg font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
                    >
                        JBL Tune 770NC
                    </button>

                    {/* Center - Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.scrollPercent)}
                                className="text-base text-white hover:text-white/80 transition-colors duration-200"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Right - CTA Button */}
                        <Link href="/buy">
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-depth border border-muted/50 hover:border-warmAccent px-6 py-2 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all duration-300 cursor-pointer inline-block"
                            >
                                Buy Now
                            </motion.span>
                        </Link>

                        {/* Hamburger Menu - Mobile Only */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-depth border border-surface/40 hover:border-warmAccent/50 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                                className="w-4.5 h-[1.5px] bg-white/80 block mb-1"
                                style={{ width: "18px" }}
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-4.5 h-[1.5px] bg-white/80 block mb-1"
                                style={{ width: "18px" }}
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="w-4.5 h-[1.5px] bg-white/80 block"
                                style={{ width: "18px" }}
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Backdrop */}
                        <div
                            className="absolute inset-0 bg-void/90 glass-blur"
                            onClick={() => setMenuOpen(false)}
                        />

                        {/* Menu Items */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="relative pt-24 px-8 flex flex-col items-center gap-2"
                        >
                            {navLinks.map((link, i) => (
                                <motion.button
                                    key={link.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.05 * i + 0.15 }}
                                    onClick={() => scrollToSection(link.scrollPercent)}
                                    className="w-full text-center py-4 text-xl font-medium text-white/80 hover:text-white border-b border-surface/20 transition-colors duration-200"
                                >
                                    {link.label}
                                </motion.button>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.4 }}
                                className="mt-6"
                            >
                                <Link href="/buy" onClick={() => setMenuOpen(false)}>
                                    <span className="inline-block bg-white text-void px-10 py-3.5 rounded-full text-base font-semibold shadow-2xl">
                                        Buy Now
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
