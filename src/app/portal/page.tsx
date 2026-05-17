"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Shield, AlertCircle } from "lucide-react";

const API_BASE = process.env.NEXT_PUBLIC_CAREOS_API ?? "https://envico-backend.onrender.com";

export default function PortalLoginPage() {
  const [email, setEmail]             = useState("");
  const [password, setPassword]       = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading]         = useState(false);
  const [error, setError]             = useState("");
  const [forgotToast, setForgotToast] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError((data as { message?: string; error?: string }).message ?? (data as { error?: string }).error ?? "Invalid email or password.");
        return;
      }

      const data = await res.json() as { token?: string; role?: string; user?: { name?: string; role?: string } };
      const role = data.user?.role ?? data.role ?? decodeRole(data.token ?? "");

      if (role === "FAMILY") {
        // Store token for family portal and redirect there
        localStorage.setItem("envico_family_token", data.token ?? "");
        localStorage.setItem("envico_family_name", data.user?.name ?? email.split("@")[0]);
        window.location.href = "/portal/family";
        return;
      }

      // Staff / Manager / Admin → CareOS dashboard
      window.location.href = "https://envico-dashboard.vercel.app/login";
    } catch {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function decodeRole(token: string): string {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      return (payload as { role?: string }).role ?? "";
    } catch { return ""; }
  }

  function handleForgot() {
    setForgotToast(true);
    setTimeout(() => setForgotToast(false), 4000);
  }

  return (
    <div className="min-h-screen bg-[#f4f7f4] flex flex-col items-center justify-center px-4 py-12">

      {/* ── Family Portal Card — prominent, full-width ─────────────────────── */}
      <div className="w-full max-w-2xl mb-6 rounded-2xl overflow-hidden shadow-lg border-2" style={{ borderColor: '#3a8a3a', background: '#f0fdf4' }}>
        <div className="px-8 py-7 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="text-5xl flex-shrink-0 mt-1">👨‍👩‍👧</div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#3a8a3a' }}>Family & Loved Ones</p>
            <h2 className="text-2xl font-bold mb-1" style={{ color: '#1a4a1a' }}>Family Portal</h2>
            <p className="text-sm mb-5" style={{ color: '#2d5a2d' }}>
              For relatives and loved ones of Envico residents. View care plans, medications, updates and message the care team — securely and privately.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/portal/family"
                className="flex-1 sm:flex-none text-center font-bold py-3 px-8 rounded-full transition-all text-white text-sm shadow-sm hover:opacity-90"
                style={{ background: '#3a8a3a' }}
              >
                Enter Family Portal →
              </Link>
              <a
                href="tel:02087979974"
                className="flex-1 sm:flex-none text-center font-semibold py-3 px-6 rounded-full border-2 text-sm transition-all hover:bg-green-50"
                style={{ borderColor: '#3a8a3a', color: '#3a8a3a' }}
              >
                📞 Call the Team
              </a>
            </div>
          </div>
        </div>
        <div className="px-8 py-2.5 text-xs flex items-center gap-2" style={{ background: '#dcf0dc', color: '#1a4a1a' }}>
          <Shield size={12} />
          Access is private and individual — you can only see information about your own loved one.
        </div>
      </div>

      {/* ── Staff / Manager login form ─────────────────────────────────────── */}
      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Left: info */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 px-6 py-5 flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Staff & Management</p>
          <h3 className="text-lg font-bold text-gray-900 mb-1">CareOS Portal</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Sign in below to access the Envico CareOS management dashboard. For staff, managers and administrators only.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
            <Shield size={12} />
            Secure JWT authentication
          </div>
        </div>

        {/* Right: login form */}
        <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
          <div className="bg-[#0d1b2a] px-6 py-4 text-center">
            <Image
              src="/images/logo.png"
              alt="Envico Supported Living"
              width={130}
              height={44}
              className="h-9 w-auto object-contain mx-auto brightness-0 invert"
            />
          </div>
          <div className="px-6 py-5">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2 text-xs text-red-700">
                <AlertCircle size={14} className="flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-green"
                  placeholder="you@envicosl.co.uk"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 pr-9 text-sm focus:outline-none focus:ring-2 focus:ring-envico-green"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-envico-green text-white font-semibold py-2.5 rounded-lg hover:bg-envico-green-dark transition-colors disabled:opacity-60 text-sm"
              >
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </form>
            <div className="mt-3 text-center">
              <button onClick={handleForgot} className="text-xs text-gray-400 hover:text-gray-600">
                Forgot password?
              </button>
            </div>
            {forgotToast && (
              <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2.5 text-xs text-yellow-800 text-center">
                Please contact your manager to reset your password.
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-400">
        Making a referral?{" "}
        <Link href="/#referral" className="text-envico-green font-medium hover:underline">
          Submit a referral →
        </Link>
      </p>
    </div>
  );
}
