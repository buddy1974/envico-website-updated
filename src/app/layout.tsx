import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Envico Supported Living | CQC Registered Care in Hayes",
  description:
    "Person-centred supported living for adults with learning disabilities, autism and complex needs. CQC registered. Hayes, Middlesex.",
  keywords:
    "supported living, domiciliary care, learning disabilities, autism, ADHD, CQC registered, Hayes, Middlesex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <AccessibilityToolbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
