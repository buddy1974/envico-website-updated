"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Calendar, Pill, MessageCircle, LogOut, CheckCircle, Clock, ArrowLeft,
} from "lucide-react";

interface LoginState {
  email: string;
  password: string;
}

const mockDashboard = {
  serviceUser: "James Thompson",
  keyWorker: "Sarah M.",
  todayNotes: [
    { time: "08:00", note: "Morning routine completed. James had breakfast and took morning medication." },
    { time: "10:30", note: "Attended community centre activity — enjoyed art session." },
    { time: "13:00", note: "Lunch prepared. Good appetite today." },
    { time: "15:00", note: "Rest period. Watched TV in communal lounge." },
  ],
  appointments: [
    { date: "Tue 25 Mar", time: "10:00am", type: "GP Review", location: "Hayes Medical Centre" },
    { date: "Thu 27 Mar", time: "2:00pm", type: "Support Plan Review", location: "Bishops House" },
    { date: "Mon 31 Mar", time: "9:30am", type: "Occupational Therapy", location: "Hillingdon Hospital" },
  ],
  medications: [
    { name: "Sertraline 50mg", frequency: "Once daily — morning", status: "Given" },
    { name: "Loratadine 10mg", frequency: "Once daily — evening", status: "Due tonight" },
    { name: "Vitamin D 1000IU", frequency: "Once daily — morning", status: "Given" },
  ],
};

export default function FamilyPortalPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [form, setForm] = useState<LoginState>({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CAREOS_API}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password, role: "family" }),
        }
      );
      if (!res.ok) throw new Error("Invalid credentials");
      setLoggedIn(true);
    } catch {
      // For demo: allow login with demo@envico.co.uk / demo1234
      if (form.email === "demo@envico.co.uk" && form.password === "demo1234") {
        setLoggedIn(true);
      } else {
        setError("Invalid email or password. Contact the care team if you need help accessing your account.");
      }
    } finally {
      setLoading(false);
    }
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Image src="/images/logo.png" alt="Envico" width={160} height={54} className="h-14 w-auto object-contain mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-envico-navy">Family Portal</h1>
            <p className="text-gray-500 text-sm mt-1">Stay connected with your loved one&apos;s care</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  required
                  value={form.password}
                  onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue"
                  placeholder="••••••••"
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-envico-navy text-white font-semibold py-3 rounded-lg hover:bg-envico-blue transition-colors disabled:opacity-60"
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-5">
              Need access?{" "}
              <Link href="/contact" className="text-envico-blue hover:underline">
                Contact the care team
              </Link>
              {" "}| Demo: demo@envico.co.uk / demo1234
            </p>
          </div>
          <div className="text-center mt-4">
            <Link href="/portal" className="text-sm text-gray-500 hover:text-gray-700 flex items-center justify-center gap-1">
              <ArrowLeft size={14} /> Back to Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-envico-navy text-white px-6 py-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <Image src="/images/logo.png" alt="Envico" width={120} height={40} className="h-9 w-auto object-contain brightness-0 invert" />
          <span className="text-sm font-medium text-blue-200 hidden sm:block">Family Portal</span>
        </div>
        <button
          onClick={() => setLoggedIn(false)}
          className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors"
        >
          <LogOut size={16} /> Sign Out
        </button>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Service user banner */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center gap-5">
          <div className="w-16 h-16 bg-envico-blue rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
            {mockDashboard.serviceUser.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{mockDashboard.serviceUser}</h2>
            <p className="text-sm text-gray-500">Bishops House, Hayes · Key Worker: {mockDashboard.keyWorker}</p>
          </div>
          <div className="ml-auto hidden sm:flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-200">
            <CheckCircle size={12} /> Active Placement
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Today's care notes */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-envico-navy px-5 py-3 flex items-center gap-2">
              <Heart size={16} className="text-envico-gold" />
              <h3 className="text-white font-semibold text-sm">Today&apos;s Care Notes</h3>
            </div>
            <div className="p-5 space-y-4">
              {mockDashboard.todayNotes.map((note) => (
                <div key={note.time} className="flex gap-3 text-sm">
                  <div className="flex items-center gap-1 text-envico-blue font-semibold w-16 flex-shrink-0">
                    <Clock size={12} /> {note.time}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{note.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Medication */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-envico-green px-5 py-3 flex items-center gap-2">
                <Pill size={16} className="text-white" />
                <h3 className="text-white font-semibold text-sm">Medication Today</h3>
              </div>
              <div className="p-4 space-y-3">
                {mockDashboard.medications.map((med) => (
                  <div key={med.name} className="text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-800">{med.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        med.status === "Given" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {med.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{med.frequency}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Message team */}
            <div className="bg-envico-blue rounded-2xl p-5 text-white text-center">
              <MessageCircle size={28} className="mx-auto mb-2 opacity-80" />
              <p className="font-semibold text-sm mb-3">Message the Care Team</p>
              <a
                href="mailto:info@envicosl.co.uk"
                className="block bg-white text-envico-blue text-xs font-bold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Send Message
              </a>
            </div>
          </div>
        </div>

        {/* Upcoming appointments */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-5 py-3 border-b border-gray-50 flex items-center gap-2">
            <Calendar size={16} className="text-envico-blue" />
            <h3 className="font-semibold text-gray-900 text-sm">Upcoming Appointments</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {mockDashboard.appointments.map((appt) => (
              <div key={`${appt.date}-${appt.type}`} className="px-5 py-3 flex items-center gap-4 text-sm">
                <div className="text-envico-blue font-semibold w-24 flex-shrink-0">{appt.date}</div>
                <div className="text-gray-500 w-16 flex-shrink-0">{appt.time}</div>
                <div className="font-medium text-gray-800 flex-1">{appt.type}</div>
                <div className="text-gray-400 hidden sm:block">{appt.location}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
