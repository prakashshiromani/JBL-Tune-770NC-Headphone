"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const allProducts: { [key: string]: { name: string; category: string; price: number; originalPrice: number; image: string; color: string; rating: number } } = {
    "0": { name: "JBL Tune 770NC", category: "Wireless Over-Ear Headphones", price: 79.95, originalPrice: 99.95, image: "/image/black.webp", color: "Black", rating: 4.5 },
    "1": { name: "JBL Tune 770NC", category: "Wireless Over-Ear Headphones", price: 79.95, originalPrice: 99.95, image: "/image/blue.png", color: "Blue", rating: 4.5 },
    "2": { name: "JBL Tune 770NC", category: "Wireless Over-Ear Headphones", price: 79.95, originalPrice: 99.95, image: "/image/white.png", color: "White", rating: 4.5 },
};

export default function WishlistPage() {
    const searchParams = useSearchParams();
    const colorIndex = searchParams.get("color") || "0";
    const product = allProducts[colorIndex] || allProducts["0"];

    const [removed, setRemoved] = useState(false);

    const handleRemove = () => {
        setRemoved(true);
    };

    return (
        <main className="min-h-screen bg-void text-white/92">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-surface/30">
                <div className="absolute inset-0 bg-void/80 glass-blur" />
                <div className="relative max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
                    <Link
                        href="/buy"
                        className="text-lg font-semibold tracking-tight text-white/90 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back to Shop
                    </Link>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-warmAccent">
                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                        </svg>
                        {removed ? "0 items" : "1 item"}
                    </div>
                </div>
            </nav>

            <div className="pt-28 pb-16 sm:pt-36 sm:pb-24">
                <div className="max-w-[1000px] mx-auto px-6">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12 sm:mb-16"
                    >
                        <div className="w-16 h-16 rounded-full bg-warmAccent/10 border border-warmAccent/30 flex items-center justify-center mx-auto mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-warmAccent">
                                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gradient">
                            My Wishlist
                        </h1>
                        <p className="text-white/40 text-lg">
                            {removed ? "Your wishlist is empty" : "Your saved items are waiting for you"}
                        </p>
                    </motion.div>

                    {/* Wishlist Item */}
                    <AnimatePresence>
                        {!removed && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: 100, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="bg-depth border border-surface/30 rounded-2xl p-5 sm:p-6 hover:border-surface/50 transition-all duration-300"
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                                    {/* Product Image */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="w-full sm:w-28 h-32 sm:h-28 rounded-xl bg-surface/20 overflow-hidden relative border border-surface/30 flex-shrink-0"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-3"
                                        />
                                    </motion.div>

                                    {/* Product Details */}
                                    <div className="flex-1 min-w-0 w-full">
                                        <div className="flex items-start justify-between gap-4">
                                            <div>
                                                <h3 className="text-lg font-semibold text-white/90 mb-1">{product.name}</h3>
                                                <p className="text-sm text-white/40 mb-2">{product.category}</p>
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-xs px-2.5 py-1 rounded-full bg-surface/30 text-white/60 border border-surface/40">
                                                        {product.color}
                                                    </span>
                                                    <span className="text-xs text-warmAccent/80 flex items-center gap-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-warmAccent/60" />
                                                        In Stock
                                                    </span>
                                                </div>
                                                {/* Rating */}
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-0.5">
                                                        {[1, 2, 3, 4, 5].map((star) => (
                                                            <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={star <= Math.floor(product.rating) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={`w-3.5 h-3.5 ${star <= Math.floor(product.rating) ? "text-warmAccent/80" : "text-white/20"}`}>
                                                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-white/30">{product.rating}</span>
                                                </div>
                                            </div>

                                            {/* Price & Remove */}
                                            <div className="text-right flex-shrink-0">
                                                <p className="text-2xl font-bold text-white/90">${product.price}</p>
                                                <p className="text-sm text-white/30 line-through mb-4">${product.originalPrice}</p>
                                                <button
                                                    onClick={handleRemove}
                                                    className="text-xs text-white/30 hover:text-red-400/70 transition-colors cursor-pointer flex items-center gap-1 ml-auto"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                                                        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 mt-4 pt-4 border-t border-surface/20">
                                            <Link href={`/checkout?color=${colorIndex}`} className="flex-1">
                                                <motion.span
                                                    whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.1)" }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="block w-full text-center bg-white text-void py-3 rounded-full text-sm font-semibold shadow-xl cursor-pointer transition-all duration-300"
                                                >
                                                    Buy Now — ${product.price}
                                                </motion.span>
                                            </Link>
                                            <Link href="/buy">
                                                <motion.span
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="inline-block bg-depth border border-surface/50 hover:border-warmAccent/40 py-3 px-6 rounded-full text-sm font-medium text-white/70 transition-all duration-300 cursor-pointer"
                                                >
                                                    View Product
                                                </motion.span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Empty State */}
                    {removed && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center py-20"
                        >
                            <div className="w-24 h-24 rounded-full bg-surface/20 border border-surface/30 flex items-center justify-center mx-auto mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-10 h-10 text-white/20">
                                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-white/60 mb-3">No items yet</h2>
                            <p className="text-white/30 mb-8 max-w-sm mx-auto">
                                Browse our products and add your favorites to your wishlist
                            </p>
                            <Link href="/buy">
                                <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-block bg-white text-void px-10 py-4 rounded-full text-lg font-semibold shadow-2xl cursor-pointer transition-all duration-300"
                                >
                                    Start Shopping
                                </motion.span>
                            </Link>
                        </motion.div>
                    )}

                    {/* Summary Bar */}
                    {!removed && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-10 bg-depth border border-surface/30 rounded-2xl p-6 sm:p-8"
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                                <div>
                                    <p className="text-white/50 text-sm mb-1">Wishlist Total (1 item)</p>
                                    <p className="text-3xl font-bold text-white">${product.price}</p>
                                    <p className="text-sm text-warmAccent/70 mt-1">
                                        You save ${(product.originalPrice - product.price).toFixed(2)}
                                    </p>
                                </div>
                                <Link href={`/checkout?color=${colorIndex}`}>
                                    <motion.span
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.15)" }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-block bg-white text-void px-10 py-4 rounded-full text-lg font-semibold shadow-2xl cursor-pointer transition-all duration-300"
                                    >
                                        Buy Now
                                    </motion.span>
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </main>
    );
}
