"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bishops House", href: "/bishops-house" },
  { label: "Funding", href: "/funding" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-8 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Envico Supported Living"
              width={180}
              height={60}
              className="h-[56px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-envico-navy hover:text-envico-blue transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-medium border-2 border-envico-navy text-envico-navy px-4 py-2 rounded-md hover:bg-envico-navy hover:text-white transition-colors"
            >
              Portal Login
            </Link>
            <Link
              href="/#referral"
              className="text-sm font-bold bg-envico-blue text-white px-5 py-2 rounded-md hover:opacity-90 transition-opacity shadow-sm"
            >
              Make a Referral
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 text-envico-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pb-5 shadow-lg">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-envico-navy hover:text-envico-blue py-2.5 border-b border-gray-50"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-3">
              <Link
                href="/portal"
                className="text-sm font-medium text-center border-2 border-envico-navy text-envico-navy px-4 py-2.5 rounded-md hover:bg-envico-navy hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Portal Login
              </Link>
              <Link
                href="/#referral"
                className="text-sm font-bold text-center bg-envico-blue text-white px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Make a Referral
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
