"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
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

// Filter category definitions
const exteriorFiles = new Set(["front.jpg", "back view with garden,.jpg"]);
const gardenFiles = new Set(["back view with garden,.jpg"]);

const bedroomKeywords = [
  "Bedroom", "Room", "Private", "Cozy", "Modern Residential",
  "Clean and Spacious", "Modern Care", "Comfortable", "Modern Private", "Well Maintained",
];

const communalKeywords = [
  "living", "Corridor", "Hallway", "Kitchen", "dining", "Office", "bathroom",
];

function getCategory(file: string): string[] {
  const cats: string[] = [];
  if (exteriorFiles.has(file)) cats.push("Exterior");
  if (gardenFiles.has(file)) cats.push("Garden");
  if (bedroomKeywords.some((kw) => file.includes(kw))) cats.push("Bedrooms");
  if (communalKeywords.some((kw) => file.toLowerCase().includes(kw.toLowerCase()))) cats.push("Communal");
  return cats;
}

const filterTabs = ["All", "Exterior", "Bedrooms", "Communal", "Garden"] as const;
type FilterTab = (typeof filterTabs)[number];

export default function GalleryClient() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterTab>("All");

  const filteredPhotos =
    activeFilter === "All"
      ? allPhotos
      : allPhotos.filter((p) => getCategory(p.file).includes(activeFilter));

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((p) => (p !== null ? (p - 1 + filteredPhotos.length) % filteredPhotos.length : 0));
  const next = () =>
    setLightbox((p) => (p !== null ? (p + 1) % filteredPhotos.length : 0));

  return (
    <>
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

      {/* Filter tabs + Masonry-style grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeFilter === tab
                    ? "border-b-2 border-[#3a8a3a] text-[#3a8a3a] bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700 bg-white shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {filteredPhotos.map((photo, i) => (
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
            {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? "s" : ""} — Click any image to enlarge
          </p>

          {/* CTA */}
          <div className="text-center mt-12 py-10 bg-envico-green-light rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Want to see Bishops House in person?</h3>
            <p className="text-gray-600 text-sm mb-5 max-w-md mx-auto">
              We welcome visits from prospective residents, families and commissioners. Contact us to arrange a tour.
            </p>
            <div className="flex gap-3 justify-center">
              <a href="tel:02087979974" className="bg-envico-green text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-envico-green-dark transition-colors">
                Call to Book a Visit
              </a>
              <a href="/contact" className="border-2 border-envico-navy text-envico-navy font-semibold px-6 py-3 rounded-md text-sm hover:bg-envico-navy hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
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
              src={filteredPhotos[lightbox].src}
              alt={filteredPhotos[lightbox].caption}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-white text-center text-sm mt-3 font-medium">
              {filteredPhotos[lightbox].caption}
            </p>
            <p className="text-gray-300 text-center text-xs mt-1 max-w-2xl mx-auto">
              {filteredPhotos[lightbox].description}
            </p>
            <p className="text-gray-500 text-center text-xs mt-2">
              {lightbox + 1} / {filteredPhotos.length}
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
    </>
  );
}
