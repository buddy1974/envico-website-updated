"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Clock, Phone } from "lucide-react";

// ─── Family Portal — Temporarily Offline ────────────────────────────────────
// Disabled until backend data layer is confirmed stable.
// Re-enable by restoring the full portal component from git history.

export default function FamilyPortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Envico Supported Living"
            width={160}
            height={54}
            className="h-14 w-auto object-contain mx-auto mb-8"
          />
        </Link>

        {/* Status card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <Clock size={32} className="text-amber-600" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Portal Temporarily Unavailable
          </h1>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            The family portal is undergoing maintenance to improve reliability.
            We expect to be back online shortly.
          </p>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3 text-left mb-6">
            <ShieldCheck size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 leading-relaxed">
              Your loved one&apos;s care continues uninterrupted. This notice only
              affects the online portal — staff are present and on shift.
            </p>
          </div>

          <a
            href="tel:02087979974"
            className="flex items-center justify-center gap-2 w-full bg-[#001f5b] text-white font-bold py-3.5 rounded-xl hover:bg-[#00B6FF] transition-colors"
          >
            <Phone size={16} />
            Call us: 020 8797 9974
          </a>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          <Link href="/" className="hover:text-gray-600">
            ← Back to Envico Supported Living
          </Link>
        </p>
      </div>
    </div>
  );
}
