"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import galleryDescriptions from "@/data/gallery-descriptions.json";

const descs = galleryDescriptions as Record<string, { title: string; description: string }>;

// Preferred display order: exterior → living → kitchen → hallways → bedrooms → facilities
const preferredOrder = [
  "front.jpg",
  "back view with garden,.jpg",
  "communal living  dining area.jpg",
  "bright, modern living room  dining area.jpg",
  "bright, modern living room  dining area with view of garden.jpg",
  "Fully Equipped Care Home Kitchen.jpg",
  "Spacious Independent Living Kitchen.jpg",
  "Bright and Clean Corridor.jpg",
  "Spacious Interior Corridor.jpg",
  "Bright Interior Hallway.jpg",
  "Bright Private Bedroom.jpg",
  "Modern Supported Living Bedroom.jpg",
  "Comfortable Private Bedroom.jpg",
  "Modern Care Home Bedroom.jpg",
  "Clean and Spacious Bedroom.jpg",
  "Modern Private Room.jpg",
  "Well Maintained Bedroom.jpg",
  "Cozy Supported Living Bedroom.jpg",
  "Bright and Clean Resident Room.jpg",
  "Modern Residential Care Bedroom.jpg",
  "Cozy Resident Bedroom.jpg",
  "Clean Private Room.jpg",
  "fully accessible bathroom.jpg",
  "Professional Support Office.jpg",
];

// Build from JSON keys, respecting preferred order, then append any extras
const allKeys = Object.keys(descs);
const orderedFiles = [
  ...preferredOrder.filter((f) => allKeys.includes(f)),
  ...allKeys.filter((f) => !preferredOrder.includes(f)),
];

const allPhotos = orderedFiles.map((file) => ({
  file,
  caption: descs[file]?.title ?? file,
  description: descs[file]?.description ?? "",
  src: `/images/gallery/${file}`,
}));

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((p) => (p !== null ? (p - 1 + allPhotos.length) % allPhotos.length : 0));
  const next = () =>
    setLightbox((p) => (p !== null ? (p + 1) % allPhotos.length : 0));

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-envico-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Take a look inside Bishops House — our supported living property at
            45 Bishops Road, Hayes, Middlesex, UB3 2TE.
          </p>
        </div>
      </section>

      {/* Masonry-style grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {allPhotos.map((photo, i) => (
              <div
                key={photo.file}
                className="break-inside-avoid cursor-pointer group rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                onClick={() => openLightbox(i)}
              >
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                    <p className="text-white text-xs font-medium px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 w-full">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            {allPhotos.length} photos — Click any image to enlarge
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allPhotos[lightbox].src}
              alt={allPhotos[lightbox].caption}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white text-center text-sm mt-3 font-medium">
              {allPhotos[lightbox].caption}
            </p>
            <p className="text-gray-300 text-center text-xs mt-1 max-w-2xl mx-auto">
              {allPhotos[lightbox].description}
            </p>
            <p className="text-gray-500 text-center text-xs mt-2">
              {lightbox + 1} / {allPhotos.length}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-12 bg-envico-green text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-xl font-bold mb-3">
            Interested in a Place at Bishops House?
          </h2>
          <p className="text-green-100 text-sm mb-6">
            Contact us to arrange a viewing or submit a referral.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/#referral"
              className="bg-white text-envico-green font-semibold px-6 py-3 rounded-md hover:bg-green-50 transition-colors text-sm"
            >
              Make a Referral
            </Link>
            <Link
              href="/bishops-house"
              className="border-2 border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white hover:text-envico-green transition-colors text-sm"
            >
              Property Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
