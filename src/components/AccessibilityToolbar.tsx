"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FONT_KEY = "envico_font_size";
const CONTRAST_KEY = "envico_high_contrast";

export default function AccessibilityToolbar() {
  const [fontIndex, setFontIndex] = useState(0); // 0=normal, 1=large, 2=larger
  const [highContrast, setHighContrast] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedFont = localStorage.getItem(FONT_KEY);
    const savedContrast = localStorage.getItem(CONTRAST_KEY);
    if (savedFont) setFontIndex(parseInt(savedFont, 10));
    if (savedContrast === "1") setHighContrast(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.remove("font-large", "font-larger");
    if (fontIndex === 1) document.documentElement.classList.add("font-large");
    if (fontIndex === 2) document.documentElement.classList.add("font-larger");
    localStorage.setItem(FONT_KEY, String(fontIndex));
  }, [fontIndex, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.body.classList.toggle("high-contrast", highContrast);
    localStorage.setItem(CONTRAST_KEY, highContrast ? "1" : "0");
  }, [highContrast, mounted]);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[#1a1a2e] text-white text-xs h-8 flex items-center px-4">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-4">
        {/* Left: accessibility controls */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-gray-300 font-medium hidden sm:inline">Accessibility:</span>
          <button
            onClick={() => setFontIndex((i) => Math.min(i + 1, 2))}
            className="bg-white/10 hover:bg-white/25 px-1.5 py-0.5 rounded font-bold leading-none"
            aria-label="Increase font size"
          >
            A+
          </button>
          <button
            onClick={() => setFontIndex((i) => Math.max(i - 1, 0))}
            className="bg-white/10 hover:bg-white/25 px-1.5 py-0.5 rounded font-bold leading-none"
            aria-label="Decrease font size"
          >
            A-
          </button>
          <button
            onClick={() => setHighContrast((c) => !c)}
            aria-pressed={highContrast}
            className={`px-1.5 py-0.5 rounded font-medium leading-none transition-colors ${
              highContrast ? "bg-yellow-400 text-black" : "bg-white/10 hover:bg-white/25"
            }`}
          >
            High Contrast
          </button>
          <Link href="/easy-read" className="bg-white/10 hover:bg-white/25 px-1.5 py-0.5 rounded leading-none">
            Easy Read
          </Link>
          <div className="relative">
            <button
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="bg-white/10 hover:bg-white/25 px-1.5 py-0.5 rounded leading-none"
              aria-label="Screen reader information"
            >
              ♿ Screen Reader
            </button>
            {showTooltip && (
              <div className="absolute top-7 left-0 bg-white text-gray-800 p-3 rounded shadow-xl w-56 z-10 text-xs leading-relaxed">
                This site is compatible with NVDA, JAWS and VoiceOver screen readers.
              </div>
            )}
          </div>
        </div>

        {/* Right: language selector */}
        <div className="hidden md:flex items-center gap-2 text-gray-300 flex-shrink-0">
          <span className="font-medium">Lang:</span>
          <span className="text-white font-semibold">EN</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white cursor-pointer" title="Urdu">اردو</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white cursor-pointer" title="Polish">PL</span>
          <span className="text-gray-600">|</span>
          <span className="hover:text-white cursor-pointer" title="French">FR</span>
        </div>
      </div>
    </div>
  );
}
