"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/images/frontpage-hero1.png", alt: "Envico Supported Living" },
  { src: "/images/frontpage-hero2.png", alt: "Person-centred care" },
  { src: "/images/frontpage-hero3.png", alt: "Community inclusion" },
  { src: "/images/frontpage-hero4.png", alt: "Bishops House, Hayes" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((index + slides.length) % slides.length);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center text-white">
        <div className="inline-block bg-envico-gold/90 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
          CQC Registered & Regulated
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Supporting Independence,
          <br />
          Enabling Lives
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
          Person-centred supported living and domiciliary care for adults with
          learning disabilities, autism, ADHD and complex needs in Hayes,
          Middlesex
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#referral"
            className="bg-envico-green hover:bg-envico-green-dark text-white font-semibold px-8 py-4 rounded-md transition-colors text-base shadow-lg"
          >
            Make a Referral
          </Link>
          <Link
            href="#services"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-md transition-colors text-base"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* CQC badge */}
      <div className="absolute bottom-8 right-8 z-20">
        <Image
          src="/images/CQC.jpg"
          alt="CQC Registered"
          width={90}
          height={90}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Prev / Next buttons */}
      <button
        onClick={() => goTo(current - 1)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
