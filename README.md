# JBL Tune 770NC - Premium Product Showcase

A high-end, Apple-level "scrollytelling" website for the JBL Tune 770NC headphones, designed for a cinematic and immersive user experience.

## 🚀 Key Features

### 🌟 Immersive Experience
- **Cinematic Scrollytelling**: A scroll-linked image sequence animation that disassembles and reassembles the headphones, reveal internals as the user scrolls.
- **Premium Aesthetics**: A consistent "Void" dark theme featuring glassmorphism, glowing micro-animations, and sophisticated typography.

### 🛒 E-Commerce & Personalization
- **Dynamic Buy Page**: Real-time color selection (Black, Blue, White) with animated product previews and quantity adjustments.
- **Wishlist System**: Save specific color variants to a personalized wishlist with smooth remove-animations and total savings tracking.
- **Premium Checkout**: A modern 3-step checkout process (Shipping → Payment → Review) with a dynamic order summary sidebar.

### 📋 Technical Depth & UI
- **Interactive Specs**: Deep-dive categorization of technical data with a live product preview that reacts to color selection.
- **Mobile Responsive**: Custom-built animated hamburger menu and adaptive layouts for a seamless experience on any device.

## 🛠️ Tech Stack
- **Framework**: [Next.js](https://nextjs.org/) (React)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Optimization**: Priority-based image loading and concurrent batching for the scroll engine.

## 📁 Project Structure
- `/app`: Page-level components for Home, Buy, Specs, Wishlist, and Checkout.
- `/components`: Architecture for the scrollytelling engine and reusable UI sections.
- `/public`: High-resolution asset library for image sequences and product variants.

## 🏁 Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
