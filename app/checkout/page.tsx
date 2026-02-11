"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const colorImages: { [key: string]: { image: string; name: string } } = {
    "0": { image: "/image/black.webp", name: "Black" },
    "1": { image: "/image/blue.png", name: "Blue" },
    "2": { image: "/image/white.png", name: "White" },
};

const fadeUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function CheckoutPage() {
    const searchParams = useSearchParams();
    const colorIndex = searchParams.get("color") || "0";
    const selectedProduct = colorImages[colorIndex] || colorImages["0"];

    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [paymentMethod, setPaymentMethod] = useState<"card" | "upi" | "cod">("card");
    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        cardName: "",
        upiId: "",
    });
    const [orderPlaced, setOrderPlaced] = useState(false);

    const quantity = 1;
    const price = 79.95;
    const subtotal = price * quantity;
    const shipping = 0;
    const tax = +(subtotal * 0.08).toFixed(2);
    const total = +(subtotal + shipping + tax).toFixed(2);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = () => {
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <main className="min-h-screen bg-void text-white/92 flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-lg"
                >
                    {/* Success checkmark */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-24 h-24 rounded-full bg-warmAccent/20 border-2 border-warmAccent flex items-center justify-center mx-auto mb-8"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-12 h-12 text-warmAccent">
                            <path d="M5 13l4 4L19 7" />
                        </svg>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gradient"
                    >
                        Order Confirmed!
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg text-white/50 mb-3"
                    >
                        Thank you for your purchase.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-sm text-white/35 mb-10"
                    >
                        Order #JBL-{Math.random().toString(36).substring(2, 8).toUpperCase()} · Confirmation sent to your email
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-depth border border-surface/30 rounded-2xl p-6 mb-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-xl bg-surface/30 overflow-hidden relative flex-shrink-0">
                                <Image src={selectedProduct.image} alt="JBL Tune 770NC" fill className="object-contain p-1" />
                            </div>
                            <div className="text-left flex-1">
                                <p className="font-semibold text-white/90">JBL Tune 770NC</p>
                                <p className="text-sm text-white/40">Qty: {quantity}</p>
                            </div>
                            <p className="font-bold text-white/90">${total}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/">
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-white text-void px-10 py-4 rounded-full text-lg font-semibold shadow-2xl cursor-pointer transition-all duration-300"
                            >
                                Back to Home
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-void text-white/92">
            {/* Top Navigation */}
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
                        Back to Product
                    </Link>
                    <div className="flex items-center gap-2 text-white/50 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure Checkout
                    </div>
                </div>
            </nav>

            <div className="pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="max-w-[1200px] mx-auto px-6">
                    {/* Progress Steps */}
                    <motion.div {...fadeUp} className="flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
                        {[
                            { num: 1, label: "Shipping" },
                            { num: 2, label: "Payment" },
                            { num: 3, label: "Review" },
                        ].map((s, i) => (
                            <div key={s.num} className="flex items-center gap-2 sm:gap-4">
                                <button
                                    onClick={() => s.num <= step ? setStep(s.num as 1 | 2 | 3) : null}
                                    className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${step >= s.num ? "text-white" : "text-white/30"
                                        }`}
                                >
                                    <span
                                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${step > s.num
                                            ? "bg-warmAccent text-white"
                                            : step === s.num
                                                ? "bg-white text-void"
                                                : "bg-surface/40 text-white/40"
                                            }`}
                                    >
                                        {step > s.num ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            s.num
                                        )}
                                    </span>
                                    <span className="hidden sm:inline text-sm font-medium">{s.label}</span>
                                </button>
                                {i < 2 && (
                                    <div className={`w-8 sm:w-16 h-px transition-colors duration-300 ${step > s.num ? "bg-warmAccent" : "bg-surface/40"}`} />
                                )}
                            </div>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Side - Forms */}
                        <div className="lg:col-span-3">
                            {/* Step 1: Shipping */}
                            {step === 1 && (
                                <motion.div
                                    key="shipping"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-gradient">Shipping Information</h2>

                                    <div className="space-y-5">
                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Email Address</label>
                                            <input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInput}
                                                placeholder="you@example.com"
                                                className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">First Name</label>
                                                <input
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInput}
                                                    placeholder="John"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">Last Name</label>
                                                <input
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInput}
                                                    placeholder="Doe"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Street Address</label>
                                            <input
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInput}
                                                placeholder="123 Main Street, Apt 4"
                                                className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                            />
                                        </div>

                                        <div className="grid grid-cols-3 gap-4">
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">City</label>
                                                <input
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={handleInput}
                                                    placeholder="Mumbai"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">State</label>
                                                <input
                                                    name="state"
                                                    value={formData.state}
                                                    onChange={handleInput}
                                                    placeholder="MH"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">ZIP Code</label>
                                                <input
                                                    name="zip"
                                                    value={formData.zip}
                                                    onChange={handleInput}
                                                    placeholder="400001"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-white/50 mb-2">Phone Number</label>
                                            <input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInput}
                                                placeholder="+91 98765 43210"
                                                className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                            />
                                        </div>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setStep(2)}
                                        className="mt-8 w-full bg-white text-void py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
                                    >
                                        Continue to Payment →
                                    </motion.button>
                                </motion.div>
                            )}

                            {/* Step 2: Payment */}
                            {step === 2 && (
                                <motion.div
                                    key="payment"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-gradient">Payment Method</h2>

                                    {/* Payment Method Selector */}
                                    <div className="grid grid-cols-3 gap-3 mb-8">
                                        {[
                                            {
                                                id: "card" as const, label: "Credit Card", icon: (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                id: "upi" as const, label: "UPI", icon: (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                                    </svg>
                                                )
                                            },
                                            {
                                                id: "cod" as const, label: "Cash on Delivery", icon: (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                                                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                )
                                            },
                                        ].map((method) => (
                                            <motion.button
                                                key={method.id}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => setPaymentMethod(method.id)}
                                                className={`p-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${paymentMethod === method.id
                                                    ? "bg-warmAccent/10 border-warmAccent/50 text-white"
                                                    : "bg-depth border-surface/40 text-white/50 hover:border-surface/60"
                                                    }`}
                                            >
                                                <div className="flex flex-col items-center gap-2">
                                                    {method.icon}
                                                    <span className="text-xs sm:text-sm font-medium">{method.label}</span>
                                                </div>
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Card Form */}
                                    {paymentMethod === "card" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-5"
                                        >
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">Name on Card</label>
                                                <input
                                                    name="cardName"
                                                    value={formData.cardName}
                                                    onChange={handleInput}
                                                    placeholder="John Doe"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">Card Number</label>
                                                <input
                                                    name="cardNumber"
                                                    value={formData.cardNumber}
                                                    onChange={handleInput}
                                                    placeholder="4242 4242 4242 4242"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300 tracking-widest"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm text-white/50 mb-2">Expiry Date</label>
                                                    <input
                                                        name="cardExpiry"
                                                        value={formData.cardExpiry}
                                                        onChange={handleInput}
                                                        placeholder="MM / YY"
                                                        className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm text-white/50 mb-2">CVC</label>
                                                    <input
                                                        name="cardCvc"
                                                        value={formData.cardCvc}
                                                        onChange={handleInput}
                                                        placeholder="123"
                                                        className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* UPI Form */}
                                    {paymentMethod === "upi" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-5"
                                        >
                                            <div>
                                                <label className="block text-sm text-white/50 mb-2">UPI ID</label>
                                                <input
                                                    name="upiId"
                                                    value={formData.upiId}
                                                    onChange={handleInput}
                                                    placeholder="yourname@upi"
                                                    className="w-full bg-depth border border-surface/40 rounded-xl px-5 py-3.5 text-white/90 placeholder:text-white/25 focus:border-warmAccent/60 focus:outline-none transition-colors duration-300"
                                                />
                                            </div>
                                            <div className="bg-depth border border-surface/30 rounded-xl p-5 text-center">
                                                <p className="text-sm text-white/40">You&apos;ll receive a payment request on your UPI app after placing the order.</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* COD Info */}
                                    {paymentMethod === "cod" && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                        >
                                            <div className="bg-depth border border-surface/30 rounded-xl p-6 text-center">
                                                <div className="w-12 h-12 rounded-full bg-warmAccent/10 flex items-center justify-center mx-auto mb-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-warmAccent">
                                                        <path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                </div>
                                                <p className="text-white/70 font-medium mb-2">Pay when you receive</p>
                                                <p className="text-sm text-white/40">Cash or card payment at your doorstep. No advance payment required.</p>
                                            </div>
                                        </motion.div>
                                    )}

                                    <div className="flex gap-4 mt-8">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(1)}
                                            className="bg-depth border border-surface/50 hover:border-warmAccent/40 py-4 px-8 rounded-full font-semibold text-white/80 transition-all duration-300 cursor-pointer"
                                        >
                                            ← Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,255,255,0.1)" }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(3)}
                                            className="flex-1 bg-white text-void py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
                                        >
                                            Review Order →
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Review */}
                            {step === 3 && (
                                <motion.div
                                    key="review"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-gradient">Review Your Order</h2>

                                    {/* Shipping Summary */}
                                    <div className="bg-depth border border-surface/30 rounded-2xl p-6 mb-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-white/80 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-warmAccent">
                                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Shipping To
                                            </h3>
                                            <button onClick={() => setStep(1)} className="text-sm text-warmAccent hover:text-warmAccent/80 transition-colors cursor-pointer">Edit</button>
                                        </div>
                                        <p className="text-white/70 text-sm">{formData.firstName || "—"} {formData.lastName}</p>
                                        <p className="text-white/40 text-sm">{formData.address || "—"}</p>
                                        <p className="text-white/40 text-sm">{formData.city}{formData.state && `, ${formData.state}`} {formData.zip}</p>
                                        <p className="text-white/40 text-sm">{formData.email || "—"}</p>
                                    </div>

                                    {/* Payment Summary */}
                                    <div className="bg-depth border border-surface/30 rounded-2xl p-6 mb-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="font-semibold text-white/80 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-warmAccent">
                                                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
                                                </svg>
                                                Payment
                                            </h3>
                                            <button onClick={() => setStep(2)} className="text-sm text-warmAccent hover:text-warmAccent/80 transition-colors cursor-pointer">Edit</button>
                                        </div>
                                        <p className="text-white/70 text-sm capitalize">{paymentMethod === "card" ? `Credit Card ending in ${formData.cardNumber.slice(-4) || "••••"}` : paymentMethod === "upi" ? `UPI — ${formData.upiId || "—"}` : "Cash on Delivery"}</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(2)}
                                            className="bg-depth border border-surface/50 hover:border-warmAccent/40 py-4 px-8 rounded-full font-semibold text-white/80 transition-all duration-300 cursor-pointer"
                                        >
                                            ← Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02, boxShadow: "0 0 60px rgba(255,255,255,0.15)" }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handlePlaceOrder}
                                            className="flex-1 bg-white text-void py-4 rounded-full text-lg font-semibold shadow-2xl transition-all duration-300 cursor-pointer"
                                        >
                                            Place Order — ${total}
                                        </motion.button>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Right Side - Order Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="lg:col-span-2"
                        >
                            <div className="bg-depth border border-surface/30 rounded-2xl p-6 sm:p-8 sticky top-28">
                                <h3 className="text-lg font-semibold mb-6 text-white/90">Order Summary</h3>

                                {/* Product */}
                                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-surface/20">
                                    <div className="w-20 h-20 rounded-xl bg-surface/20 overflow-hidden relative flex-shrink-0 border border-surface/30">
                                        <Image src={selectedProduct.image} alt="JBL Tune 770NC" fill className="object-contain p-2" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-white/90 truncate">JBL Tune 770NC</p>
                                        <p className="text-sm text-white/40">Wireless Over-Ear</p>
                                        <p className="text-sm text-white/50 mt-1">Qty: {quantity}</p>
                                    </div>
                                    <p className="font-bold text-white/90">${subtotal.toFixed(2)}</p>
                                </div>

                                {/* Pricing */}
                                <div className="space-y-3 mb-6 pb-6 border-b border-surface/20">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/45">Subtotal</span>
                                        <span className="text-white/80">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/45">Shipping</span>
                                        <span className="text-warmAccent font-medium">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/45">Estimated Tax</span>
                                        <span className="text-white/80">${tax.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-lg font-semibold text-white/90">Total</span>
                                    <span className="text-2xl font-bold text-white">${total.toFixed(2)}</span>
                                </div>

                                {/* Trust */}
                                <div className="space-y-3 pt-4 border-t border-surface/20">
                                    <div className="flex items-center gap-2 text-white/35 text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                            <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        256-bit SSL Encrypted
                                    </div>
                                    <div className="flex items-center gap-2 text-white/35 text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                            <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        Buyer Protection Guarantee
                                    </div>
                                    <div className="flex items-center gap-2 text-white/35 text-xs">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                                            <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        30-Day Easy Returns
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
