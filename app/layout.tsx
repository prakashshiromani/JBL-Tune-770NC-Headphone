import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "JBL Tune 770NC - Pure Sound. Zero Distractions.",
    description: "Wireless over-ear headphones with Adaptive Noise Cancelling and up to 70 hours of battery life. JBL Tune 770NC delivers signature JBL sound with advanced features for nonstop listening.",
    keywords: ["JBL", "Tune 770NC", "Wireless Headphones", "Noise Cancelling", "ANC", "Over Ear Headphones"],
    openGraph: {
        title: "JBL Tune 770NC - Pure Sound. Zero Distractions.",
        description: "Experience signature JBL sound with Adaptive Noise Cancelling and 70 hours of battery life.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            if ('scrollRestoration' in history) {
                                history.scrollRestoration = 'manual';
                            }
                            window.scrollTo(0, 0);
                        `,
                    }}
                />
                {children}
            </body>
        </html>
    );
}
