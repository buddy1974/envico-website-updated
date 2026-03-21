"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bishops House", href: "/bishops-house" },
  { label: "Funding", href: "/funding" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Envico Supported Living"
              width={180}
              height={60}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="text-sm font-medium border border-green-700 text-green-700 px-4 py-2 rounded-md hover:bg-green-50 transition-colors"
            >
              Portal Login
            </Link>
            <Link
              href="#referral"
              className="text-sm font-medium bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors"
            >
              Make a Referral
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
              <Link
                href="/portal"
                className="text-sm font-medium text-center border border-green-700 text-green-700 px-4 py-2 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                Portal Login
              </Link>
              <Link
                href="#referral"
                className="text-sm font-medium text-center bg-green-700 text-white px-4 py-2 rounded-md"
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
