"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Shield, AlertCircle } from "lucide-react";

export default function PortalLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [familyMessage, setFamilyMessage] = useState(false);
  const [forgotToast, setForgotToast] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setFamilyMessage(false);
    setLoading(true);

    try {
      const res = await fetch(
        "https://envico-backend.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(
          (data as { message?: string }).message ||
            "Invalid email or password. Please try again."
        );
        return;
      }

      const data = await res.json() as { token?: string; role?: string };
      const role = data.role ?? decodeRole(data.token ?? "");

      if (role === "FAMILY") {
        setFamilyMessage(true);
        return;
      }

      window.location.href = "https://envico-dashboard.vercel.app";
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
    } catch {
      return "";
    }
  }

  function handleForgot() {
    setForgotToast(true);
    setTimeout(() => setForgotToast(false), 4000);
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center justify-center px-4 py-16">
      {/* Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Top bar */}
        <div className="bg-[#0d1b2a] px-8 py-6 text-center">
          <Image
            src="/images/logo.png"
            alt="Envico Supported Living"
            width={160}
            height={54}
            className="h-12 w-auto object-contain mx-auto brightness-0 invert"
          />
        </div>

        <div className="px-8 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Shield size={18} className="text-envico-green" />
            <h1 className="text-lg font-bold text-gray-900">Portal Sign In</h1>
          </div>

          {familyMessage && (
            <div className="mb-5 bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
              <p className="font-semibold mb-1">Family portal coming soon</p>
              <p>
                The family portal is currently under development. Please contact
                the care team directly at{" "}
                <a href="tel:02087979974" className="font-medium hover:underline">
                  020 8797 9974
                </a>{" "}
                for updates about your loved one.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-5 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 text-sm text-red-700">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-envico-green focus:border-transparent"
                placeholder="you@envicosl.co.uk"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-11 text-sm focus:outline-none focus:ring-2 focus:ring-envico-green focus:border-transparent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-envico-green text-white font-semibold py-3 rounded-lg hover:bg-envico-green-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={handleForgot}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {forgotToast && (
            <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800 text-center">
              Please contact your manager to reset your password.
            </div>
          )}
        </div>
      </div>

      {/* Below card */}
      <p className="mt-6 text-sm text-gray-500">
        Are you a professional making a referral?{" "}
        <Link href="/#referral" className="text-envico-green font-medium hover:underline">
          Submit a referral →
        </Link>
      </p>
    </div>
  );
}
