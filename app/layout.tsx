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
  title: "Rishit Chawla — Video Editor for Startups & Growing Businesses",
  description:
    "Rishit Chawla is a video editor helping startups and growing businesses turn founder-led and product-focused content into engaging short-form and long-form videos.",
      verification: {
    google: "ArjNaZet8m6lpJN8SRJD3Kl_trqnYhZZLz8Onmgqqsc",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
