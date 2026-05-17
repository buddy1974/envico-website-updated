"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home",          href: "/" },
  { label: "About",         href: "/about" },
  { label: "Team",          href: "/team" },
  { label: "Services",      href: "/services" },
  { label: "Bishops House", href: "/bishops-house" },
  { label: "Funding",       href: "/funding" },
  { label: "Gallery",       href: "/gallery" },
  { label: "Careers",       href: "/careers" },
  { label: "News",          href: "/news" },
  { label: "Resources",     href: "/resources" },
  { label: "Contact",       href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  // Scroll shadow
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-8 left-0 right-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
              <Image
                src="/images/logo.png"
                alt="Envico Supported Living"
                width={160}
                height={54}
                className="h-10 sm:h-[52px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-envico-green font-semibold"
                      : "text-envico-navy hover:text-envico-blue"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden xl:flex items-center gap-3">
              <Link
                href="/portal/family"
                className="text-sm font-semibold border-2 px-[22px] py-[10px] rounded-full transition-all duration-200"
                style={{ borderColor: '#3a8a3a', color: '#3a8a3a', backgroundColor: 'white' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor='#3a8a3a'; el.style.color='white'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor='white'; el.style.color='#3a8a3a'; }}
              >
                👨‍👩‍👧 Family Portal
              </Link>
              <Link
                href="/portal"
                className="text-sm font-semibold border-2 border-envico-navy text-envico-navy px-4 py-2 rounded-lg hover:bg-envico-navy hover:text-white transition-all duration-200"
              >
                Portal Login
              </Link>
              <Link
                href="/#referral"
                className="text-sm font-bold bg-envico-green text-white px-5 py-2 rounded-lg hover:bg-envico-green-dark transition-all duration-200 shadow-sm"
              >
                Make a Referral
              </Link>
            </div>

            {/* Mobile: CTA + hamburger */}
            <div className="flex xl:hidden items-center gap-2">
              <Link
                href="/portal/family"
                className="text-xs font-semibold border-2 px-3 py-1.5 rounded-full transition-colors"
                style={{ borderColor: '#3a8a3a', color: '#3a8a3a', backgroundColor: 'white' }}
                onClick={() => setMobileOpen(false)}
              >
                👨‍👩‍👧 Family
              </Link>
              <Link
                href="/#referral"
                className="text-xs font-bold bg-envico-green text-white px-3 py-1.5 rounded-lg hover:bg-envico-green-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Referral
              </Link>
              <button
                className="p-2 rounded-lg text-envico-navy hover:bg-gray-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        className={`xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed top-8 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 sm:h-20 border-b border-gray-100">
          <Image
            src="/images/logo.png"
            alt="Envico"
            width={120}
            height={40}
            className="h-9 w-auto object-contain"
          />
          <button
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                pathname === link.href
                  ? "bg-envico-green-light text-envico-green font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-envico-navy"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer CTAs */}
        <div className="p-4 border-t border-gray-100 flex flex-col gap-2.5">
          <Link
            href="/portal/family"
            className="text-sm font-semibold text-center border-2 px-4 py-3 rounded-full transition-all"
            style={{ borderColor: '#3a8a3a', color: '#3a8a3a' }}
            onClick={() => setMobileOpen(false)}
          >
            👨‍👩‍👧 Family Portal
          </Link>
          <Link
            href="/portal"
            className="text-sm font-semibold text-center border-2 border-envico-navy text-envico-navy px-4 py-3 rounded-xl hover:bg-envico-navy hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Staff Portal Login
          </Link>
          <Link
            href="/#referral"
            className="text-sm font-bold text-center bg-envico-green text-white px-4 py-3 rounded-xl hover:bg-envico-green-dark transition-all shadow-sm"
            onClick={() => setMobileOpen(false)}
          >
            Make a Referral →
          </Link>
        </div>
      </div>
    </>
  );
}
