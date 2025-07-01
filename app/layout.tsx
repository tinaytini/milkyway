'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Inner component to access language context
function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const { currentLanguage, isHydrated } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use the current language or default to 'ru' during SSR
  const lang = mounted && isHydrated ? currentLanguage : 'ru';

  useEffect(() => {
    if (mounted && isHydrated) {
      document.documentElement.lang = currentLanguage;
    }
  }, [currentLanguage, mounted, isHydrated]);

  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <title>MilkyWay - Путешествия по ОАЭ</title>
        <meta name="description" content="Путешествия по всем 7 эмиратам ОАЭ с MilkyWay" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </LanguageProvider>
      </body>
    </html>
  );
}
