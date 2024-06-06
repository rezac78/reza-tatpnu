import React from "react";
import "./globals.css";
import localFont from "next/font/local";
import MainLayout from "@/components/mainLayout";
import { GoogleTagManager } from '@next/third-parties/google'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const anjoman = localFont({
    src: [
        {path: '../public/font/anjoman/Anjoman-Regular[@mimvid].ttf', weight: "400"},
        {path: '../public/font/anjoman/Anjoman-Medium[@mimvid].ttf', weight: "500"},
        {path: '../public/font/anjoman/Anjoman-SemiBold[@mimvid].ttf', weight: "600"},
        {path: '../public/font/anjoman/Anjoman-Bold[@mimvid].ttf', weight: "700"},
    ],
    variable: "--font-anjoman",
});
const tanha = localFont({
    src: [
        {path: "../public/font/tanha/Tanha-FD.ttf", weight: "400"},
    ],
    variable: '--font-digit'
})

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="fa" dir="rtl">
        <GoogleTagManager gtmId="GTM-NMFC2J7Z" />
        <body className={`${anjoman.variable} ${tanha.variable} font-anjoman text-md  text-txtColor select-none`}>
        <MainLayout>
            {children}
        </MainLayout>
        </body>
        </html>
    );
}
