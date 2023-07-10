import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import Header from "@/app/signup/components/standard/Header";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className={inter.className}>
                <div className="main-container">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}
