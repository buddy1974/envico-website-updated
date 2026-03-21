import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://envico.maxpromo.digital"),
  title: "Envico Supported Living | CQC Registered Care in Hayes",
  description:
    "Person-centred supported living for adults with learning disabilities, autism and complex needs. CQC registered. Hayes, Middlesex.",
  keywords:
    "supported living, domiciliary care, learning disabilities, autism, ADHD, CQC registered, Hayes, Middlesex",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0a2a5e",
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
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Envico Supported Living",
              "description": "CQC-registered supported living and domiciliary care for adults with learning disabilities, autism and complex needs",
              "url": "https://envico.maxpromo.digital",
              "telephone": "+442087979974",
              "email": "info@envicosl.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "59 Commonwealth Avenue",
                "addressLocality": "Hayes",
                "addressRegion": "Middlesex",
                "postalCode": "UB3 2PN",
                "addressCountry": "GB",
              },
              "openingHours": "Mo-Su 00:00-24:00",
              "priceRange": "££",
              "medicalSpecialty": "Learning Disabilities, Autism, Mental Health",
            }),
          }}
        />
        {children}
        <ChatWidget />
        <WhatsAppButton />
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker' in navigator){window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{});})}`,
          }}
        />
      </body>
    </html>
  );
}
