"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LogOut,
  User,
  FileText,
  Pill,
  AlertTriangle,
  MessageCircle,
  Activity,
  Send,
  ArrowLeft,
  RefreshCw,
  ChevronRight,
  Clock,
  ShieldCheck,
} from "lucide-react";

const API = process.env.NEXT_PUBLIC_CAREOS_API;
const TOKEN_KEY = "envico_family_token";
const NAME_KEY = "envico_family_name";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceUser {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  careType?: string;
  status?: string;
  supportNeeds?: string;
}

interface CarePlan {
  id: string;
  title: string;
  reviewDate?: string;
  status?: string;
  goals?: string | string[];
}

interface Medication {
  id: string;
  name: string;
  dosage?: string;
  frequency?: string;
  route?: string;
  prescribedBy?: string;
  status?: string;
}

interface Incident {
  id: string;
  type?: string;
  severity?: string;
  date?: string;
  status?: string;
  description?: string;
}

interface CareUpdate {
  id: string;
  activityType?: string;
  description?: string;
  date?: string;
  createdAt?: string;
  staffName?: string;
}

interface DashboardData {
  serviceUser: ServiceUser | null;
  carePlan: CarePlan | null;
  medications: Medication[];
  incidents: Incident[];
  careUpdates: CareUpdate[];
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtDate(d?: string) {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

function fmtTime(d?: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  } catch {
    return "";
  }
}

function parseGoals(goals?: string | string[]): string[] {
  if (!goals) return [];
  if (Array.isArray(goals)) return goals;
  try {
    const parsed = JSON.parse(goals);
    return Array.isArray(parsed) ? parsed : [String(goals)];
  } catch {
    return [String(goals)];
  }
}

function statusBadge(status?: string) {
  const s = (status ?? "").toUpperCase();
  if (s === "ACTIVE") return "bg-green-100 text-green-700";
  if (s === "PENDING") return "bg-yellow-100 text-yellow-700";
  if (s === "INACTIVE" || s === "CLOSED") return "bg-gray-100 text-gray-500";
  return "bg-blue-100 text-blue-700";
}

function severityBadge(sev?: string) {
  const s = (sev ?? "").toUpperCase();
  if (s === "LOW") return "bg-green-100 text-green-700";
  if (s === "MEDIUM") return "bg-yellow-100 text-yellow-700";
  return "bg-gray-100 text-gray-500";
}

function careTypeLabel(t?: string) {
  if (!t) return "Care";
  if (t === "SUPPORTED_LIVING") return "Supported Living";
  if (t === "DOMICILIARY") return "Domiciliary Care";
  return t;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Card({ title, icon: Icon, iconColor = "text-envico-blue", children }: {
  title: string;
  icon: React.ElementType;
  iconColor?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-gray-50">
        <Icon size={18} className={iconColor} />
        <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

function Skeleton({ rows = 3 }: { rows?: number }) {
  return (
    <div className="animate-pulse space-y-2.5">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-100 rounded" style={{ width: `${70 + (i % 3) * 10}%` }} />
      ))}
    </div>
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: (token: string, name: string) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: "family" }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message ?? "Invalid email or password.");
      }
      const data = await res.json();
      const token = data.token ?? data.accessToken ?? data.access_token ?? "";
      const name =
        data.user?.firstName ??
        data.user?.name ??
        data.name ??
        email.split("@")[0];
      onLogin(token, name);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Envico Supported Living"
              width={160}
              height={54}
              className="h-14 w-auto object-contain mx-auto"
            />
          </Link>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-green-700 font-semibold bg-green-50 border border-green-200 rounded-full px-3 py-1.5 w-fit mx-auto">
            <ShieldCheck size={13} />
            Secure Family Portal
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Family Portal</h1>
          <p className="text-sm text-gray-500 mb-7">
            Sign in to view your loved one&apos;s care updates
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-envico-navy text-white font-bold py-3 rounded-xl hover:bg-envico-blue transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <RefreshCw size={15} className="animate-spin" /> Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-500">
              Need help accessing your account?
            </p>
            <a
              href="tel:02087979974"
              className="text-sm font-semibold text-envico-blue hover:underline"
            >
              Call us: 020 8797 9974
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-5">
          <Link href="/portal" className="hover:text-gray-600 flex items-center justify-center gap-1">
            <ArrowLeft size={12} /> Back to Portal
          </Link>
        </p>
      </div>
    </div>
  );
}

// ─── Message Panel ────────────────────────────────────────────────────────────

function MessagePanel({ token }: { token: string }) {
  const [text, setText] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const sendMessage = async () => {
    if (!text.trim()) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${API}/api/family/message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ message: text.trim() }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
      setText("");
      setTimeout(() => setSent(false), 4000);
    } catch {
      setError("Message failed to send. Please call 020 8797 9974.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="space-y-3">
      <textarea
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message to the care team..."
        className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-envico-blue resize-none"
      />
      {sent && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          ✅ Message sent — the care team will respond within one working day.
        </p>
      )}
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {error}
        </p>
      )}
      <button
        onClick={sendMessage}
        disabled={sending || !text.trim()}
        className="flex items-center gap-2 bg-envico-green text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-envico-green-dark transition-colors disabled:opacity-50"
      >
        <Send size={14} />
        {sending ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

function Dashboard({ token, familyName, onLogout }: {
  token: string;
  familyName: string;
  onLogout: () => void;
}) {
  const [data, setData] = useState<DashboardData>({
    serviceUser: null,
    carePlan: null,
    medications: [],
    incidents: [],
    careUpdates: [],
  });
  const [loadingMain, setLoadingMain] = useState(true);
  const [loadingUpdates, setLoadingUpdates] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const authHeaders = { Authorization: `Bearer ${token}` };

  const fetchMain = useCallback(async () => {
    setLoadingMain(true);
    setFetchError("");
    try {
      const res = await fetch(`${API}/api/family/my-service-user`, {
        headers: authHeaders,
      });
      if (res.status === 401) {
        onLogout();
        return;
      }
      if (!res.ok) throw new Error("Failed to load care data.");
      const json = await res.json();

      // Normalise — API may return nested or flat structure
      const su: ServiceUser =
        json.serviceUser ?? json.data ?? json ?? {};
      const suAny = su as unknown as Record<string, unknown>;
      const cp: CarePlan | null =
        json.carePlan ?? json.activePlan ?? suAny.carePlan ?? null;
      const meds: Medication[] =
        json.medications ?? json.activeMedications ?? suAny.medications ?? [];
      const incidents: Incident[] = (
        json.incidents ?? json.recentIncidents ?? suAny.incidents ?? []
      ).filter(
        (i: Incident) =>
          (i.severity ?? "").toUpperCase() !== "CRITICAL"
      );

      setData((prev) => ({
        ...prev,
        serviceUser: su,
        carePlan: cp,
        medications: Array.isArray(meds) ? meds : [],
        incidents: Array.isArray(incidents) ? incidents.slice(0, 3) : [],
      }));
    } catch (err: unknown) {
      setFetchError(err instanceof Error ? err.message : "Failed to load data.");
    } finally {
      setLoadingMain(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const fetchUpdates = useCallback(async () => {
    setLoadingUpdates(true);
    try {
      const res = await fetch(`${API}/api/family/care-updates`, {
        headers: authHeaders,
      });
      if (res.ok) {
        const json = await res.json();
        const updates: CareUpdate[] =
          json.updates ?? json.data ?? json ?? [];
        setData((prev) => ({
          ...prev,
          careUpdates: Array.isArray(updates) ? updates.slice(0, 5) : [],
        }));
      }
    } catch {
      // Non-critical — just leave empty
    } finally {
      setLoadingUpdates(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    fetchMain();
    fetchUpdates();
  }, [fetchMain, fetchUpdates]);

  const { serviceUser: su, carePlan, medications, incidents, careUpdates } = data;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-envico-navy sticky top-0 z-40 shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Envico"
                width={120}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <span className="hidden sm:block text-xs font-semibold text-blue-300 bg-white/10 px-2.5 py-1 rounded-full">
              Family Portal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-sm text-blue-200 font-medium">
              Welcome, {familyName}
            </span>
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 text-sm text-blue-300 hover:text-white transition-colors"
            >
              <LogOut size={15} /> Sign Out
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-5">
        {/* Global error */}
        {fetchError && (
          <div className="bg-red-50 border border-red-200 rounded-xl px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-800">Could not load care data</p>
              <p className="text-sm text-red-600 mt-0.5">{fetchError}</p>
              <button
                onClick={fetchMain}
                className="text-xs text-red-700 underline mt-1"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {/* CARD 1 — Your Loved One */}
        <Card title="Your Loved One" icon={User} iconColor="text-envico-blue">
          {loadingMain ? (
            <Skeleton rows={4} />
          ) : su ? (
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="w-16 h-16 bg-envico-blue rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                {(su.firstName?.[0] ?? "?").toUpperCase()}
                {(su.lastName?.[0] ?? "").toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900">
                  {su.firstName} {su.lastName}
                </h2>
                {su.dateOfBirth && (
                  <p className="text-sm text-gray-500 mb-2">
                    DOB: {fmtDate(su.dateOfBirth)}
                  </p>
                )}
                <div className="flex flex-wrap gap-2">
                  {su.careType && (
                    <span className="text-xs bg-envico-blue text-white font-semibold px-2.5 py-1 rounded-full">
                      {careTypeLabel(su.careType)}
                    </span>
                  )}
                  {su.status && (
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusBadge(su.status)}`}>
                      {su.status}
                    </span>
                  )}
                </div>
                {su.supportNeeds && (
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    <span className="font-medium text-gray-800">Support needs:</span>{" "}
                    {su.supportNeeds}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No service user data available.</p>
          )}
        </Card>

        {/* CARD 2 — Active Care Plan */}
        <Card title="Active Care Plan" icon={FileText} iconColor="text-purple-600">
          {loadingMain ? (
            <Skeleton rows={4} />
          ) : carePlan ? (
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="font-semibold text-gray-900">{carePlan.title}</h4>
                {carePlan.status && (
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${statusBadge(carePlan.status)}`}>
                    {carePlan.status}
                  </span>
                )}
              </div>
              {carePlan.reviewDate && (
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-4">
                  <Clock size={11} /> Review date: {fmtDate(carePlan.reviewDate)}
                </p>
              )}
              {parseGoals(carePlan.goals).length > 0 && (
                <>
                  <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                    Goals
                  </p>
                  <ul className="space-y-1.5">
                    {parseGoals(carePlan.goals).map((g, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <ChevronRight size={14} className="text-envico-green flex-shrink-0 mt-0.5" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ) : (
            <p className="text-sm text-gray-500">No active care plan on record.</p>
          )}
        </Card>

        {/* CARDS 3 + 4 — side by side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* CARD 3 — Medications */}
          <Card title="Current Medications" icon={Pill} iconColor="text-envico-green">
            {loadingMain ? (
              <Skeleton rows={4} />
            ) : medications.length > 0 ? (
              <ul className="divide-y divide-gray-50 -my-1">
                {medications.map((med) => (
                  <li key={med.id} className="py-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{med.name}</p>
                        {med.dosage && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {med.dosage}
                            {med.route ? ` · ${med.route}` : ""}
                          </p>
                        )}
                        {med.frequency && (
                          <p className="text-xs text-gray-500">{med.frequency}</p>
                        )}
                        {med.prescribedBy && (
                          <p className="text-xs text-gray-400 mt-0.5">
                            Prescribed by: {med.prescribedBy}
                          </p>
                        )}
                      </div>
                      {med.status && (
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusBadge(med.status)}`}>
                          {med.status}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No medications on record.</p>
            )}
          </Card>

          {/* CARD 4 — Recent Incidents */}
          <Card title="Recent Incidents" icon={AlertTriangle} iconColor="text-yellow-500">
            {loadingMain ? (
              <Skeleton rows={4} />
            ) : incidents.length > 0 ? (
              <ul className="divide-y divide-gray-50 -my-1">
                {incidents.map((inc) => (
                  <li key={inc.id} className="py-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm capitalize">
                          {inc.type ?? "Incident"}
                        </p>
                        {inc.date && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {fmtDate(inc.date)}{" "}
                            {fmtTime(inc.date) && `· ${fmtTime(inc.date)}`}
                          </p>
                        )}
                        {inc.description && (
                          <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-2">
                            {inc.description}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        {inc.severity && (
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${severityBadge(inc.severity)}`}>
                            {inc.severity}
                          </span>
                        )}
                        {inc.status && (
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${statusBadge(inc.status)}`}>
                            {inc.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500">No recent incidents to display.</p>
            )}
          </Card>
        </div>

        {/* CARD 5 — Message Care Team */}
        <Card title="Message the Care Team" icon={MessageCircle} iconColor="text-envico-blue">
          <MessagePanel token={token} />
        </Card>

        {/* CARD 6 — Care Updates */}
        <Card title="Care Updates" icon={Activity} iconColor="text-teal-600">
          {loadingUpdates ? (
            <Skeleton rows={5} />
          ) : careUpdates.length > 0 ? (
            <ul className="divide-y divide-gray-50 -my-1">
              {careUpdates.map((update) => (
                <li key={update.id} className="py-3 flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-envico-blue flex-shrink-0 mt-1.5" />
                  <div className="flex-1 min-w-0">
                    {update.activityType && (
                      <span className="text-xs font-bold text-envico-blue uppercase tracking-wide">
                        {update.activityType.replace(/_/g, " ")}
                      </span>
                    )}
                    {update.description && (
                      <p className="text-sm text-gray-700 mt-0.5 leading-relaxed">
                        {update.description}
                      </p>
                    )}
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <Clock size={10} />
                      {fmtDate(update.createdAt ?? update.date)}
                      {update.staffName && ` · ${update.staffName}`}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No care updates available.</p>
          )}
        </Card>

        {/* Footer note */}
        <div className="bg-envico-navy/5 border border-envico-navy/10 rounded-xl p-4 flex items-start gap-3">
          <ShieldCheck size={16} className="text-envico-navy flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-800">Privacy & Security: </span>
            This portal is protected and contains personal health information. Do not share your
            login credentials. For urgent matters call{" "}
            <a href="tel:02087979974" className="text-envico-blue font-semibold hover:underline">
              020 8797 9974
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function FamilyPortalPage() {
  const [token, setToken] = useState<string | null>(null);
  const [familyName, setFamilyName] = useState("Family Member");
  const [hydrated, setHydrated] = useState(false);

  // Restore session from localStorage after hydration
  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY);
    const storedName = localStorage.getItem(NAME_KEY);
    if (storedToken) setToken(storedToken);
    if (storedName) setFamilyName(storedName);
    setHydrated(true);
  }, []);

  const handleLogin = (t: string, name: string) => {
    localStorage.setItem(TOKEN_KEY, t);
    localStorage.setItem(NAME_KEY, name);
    setToken(t);
    setFamilyName(name);
  };

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(NAME_KEY);
    setToken(null);
    setFamilyName("Family Member");
  };

  // Avoid SSR mismatch
  if (!hydrated) return null;

  if (!token) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Dashboard token={token} familyName={familyName} onLogout={handleLogout} />
  );
}
