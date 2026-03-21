"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allPhotos = [
  { file: "JR_EngelbertForbia_002-scaled.jpg", caption: "Bishops House — Exterior" },
  { file: "JR_EngelbertForbia_007-scaled.jpg", caption: "Bishops House — Garden" },
  { file: "JR_EngelbertForbia_017-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_020-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_021-scaled.jpg", caption: "Bishops House — En-suite" },
  { file: "JR_EngelbertForbia_025-1-scaled.jpg", caption: "Bishops House — Communal Lounge" },
  { file: "JR_EngelbertForbia_027-scaled.jpg", caption: "Bishops House — Dining Area" },
  { file: "JR_EngelbertForbia_028-scaled.jpg", caption: "Bishops House — Kitchen" },
  { file: "JR_EngelbertForbia_030-scaled.jpg", caption: "Bishops House — Hallway" },
  { file: "JR_EngelbertForbia_033-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_035-scaled.jpg", caption: "Bishops House — Lounge" },
  { file: "JR_EngelbertForbia_037-scaled.jpg", caption: "Bishops House — Garden" },
  { file: "JR_EngelbertForbia_039-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_040-scaled.jpg", caption: "Bishops House — En-suite" },
  { file: "JR_EngelbertForbia_042-scaled.jpg", caption: "Bishops House — Exterior" },
  { file: "JR_EngelbertForbia_043-scaled.jpg", caption: "Bishops House — Living Area" },
  { file: "JR_EngelbertForbia_044-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_047-scaled.jpg", caption: "Bishops House — Communal Space" },
  { file: "JR_EngelbertForbia_051-scaled.jpg", caption: "Bishops House — Dining" },
  { file: "JR_EngelbertForbia_052-scaled.jpg", caption: "Bishops House — Garden" },
  { file: "JR_EngelbertForbia_053-scaled.jpg", caption: "Bishops House — Lounge" },
  { file: "JR_EngelbertForbia_054-scaled.jpg", caption: "Bishops House — Bedroom" },
  { file: "JR_EngelbertForbia_056-scaled.jpg", caption: "Bishops House — Exterior" },
  { file: "JR_EngelbertForbia_057-scaled.jpg", caption: "Bishops House — Garden" },
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((p) => (p !== null ? (p - 1 + allPhotos.length) % allPhotos.length : 0));
  const next = () => setLightbox((p) => (p !== null ? (p + 1) % allPhotos.length : 0));

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
                    src={`/images/gallery/${photo.file}`}
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
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/70 transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/gallery/${allPhotos[lightbox].file}`}
              alt={allPhotos[lightbox].caption}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center text-sm mt-3 font-medium">
              {allPhotos[lightbox].caption} — {lightbox + 1} / {allPhotos.length}
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
