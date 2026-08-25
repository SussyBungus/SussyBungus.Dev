import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Sussy Bungus.Dev",
    description: "Raymond Lin's personal portfolio.",

    openGraph: {
        title: "Sussy Bungus.Dev",
        description: "Raymond Lin's personal portfolio.",
        url: "https://sussybungusdev.vercel.app",
        siteName: "Sussy Bungus.Dev",
        images: [
            {
                url: "/raymond2.png",
                width: 1200,
                height: 630,
                alt: "Sussy Bungus.Dev — Raymond Lin's personal portfolio",
            },
        ],
        locale: "en_CA",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Sussy Bungus.Dev",
        description: "Raymond Lin's personal portfolio.",
        images: ["/og-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <body>{children}</body>
        </html>
    );
}