import type { Metadata } from "next";
import Link from "next/link";
import { Users, UserCog, LayoutDashboard, ArrowRight, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portal Login | Envico Supported Living",
  description:
    "Access the Envico portal. Family portal for care updates, staff portal for rotas and training, manager portal for full system overview.",
};

const portals = [
  {
    Icon: Users,
    title: "Family Portal",
    tagline: "Stay connected with your loved one's care",
    description:
      "View care updates, daily notes, health records and messages from the care team — all in one secure place.",
    features: [
      "Daily care notes and updates",
      "Appointments and health records",
      "Direct messaging with the team",
      "Document sharing",
    ],
    buttonLabel: "Family Login",
    href: "/portal/family",
    external: false,
    note: null,
    color: "bg-envico-green",
    borderColor: "border-envico-green",
    textColor: "text-envico-green",
  },
  {
    Icon: UserCog,
    title: "Staff Portal",
    tagline: "Your rota, training and care documentation",
    description:
      "Access your work schedule, complete e-learning modules, view care plans and submit daily notes on your shift.",
    features: [
      "Rota and shift management",
      "E-learning and training records",
      "Care plan access",
      "Daily notes and handover",
    ],
    buttonLabel: "Staff Login",
    href: "https://envico-dashboard.vercel.app",
    external: true,
    note: "Your access level is determined by your account role",
    color: "bg-envico-blue",
    borderColor: "border-envico-blue",
    textColor: "text-envico-blue",
  },
  {
    Icon: LayoutDashboard,
    title: "Manager Portal",
    tagline: "Full operational and compliance overview",
    description:
      "Complete oversight of all services — staffing, compliance, incident reports, audits and CQC-ready documentation.",
    features: [
      "Staffing and compliance dashboard",
      "Incident and accident reporting",
      "Audit and inspection tools",
      "CQC evidence management",
    ],
    buttonLabel: "Manager Login",
    href: "https://envico-dashboard.vercel.app",
    external: true,
    note: "Your access level is determined by your account role",
    color: "bg-envico-dark",
    borderColor: "border-gray-800",
    textColor: "text-gray-800",
  },
];

export default function PortalPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-envico-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield size={28} className="text-envico-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Envico Portal Login
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto text-lg">
            Secure access for families, care staff and managers. Select your
            portal below to continue.
          </p>
        </div>
      </section>

      {/* Portal cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portals.map(({ Icon, title, tagline, description, features, buttonLabel, href, external, note, color, borderColor, textColor }) => (
              <div
                key={title}
                className={`bg-white rounded-2xl shadow-md border-t-4 ${borderColor} overflow-hidden hover:shadow-xl transition-shadow flex flex-col`}
              >
                <div className="p-6 flex-1">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-1">
                    {title}
                  </h2>
                  <p className={`text-sm font-medium ${textColor} mb-3`}>
                    {tagline}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {description}
                  </p>
                  <ul className="space-y-2">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                        <ArrowRight size={13} className={`${textColor} mt-0.5 flex-shrink-0`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {note && (
                    <p className="text-xs text-gray-400 mt-4 italic">{note}</p>
                  )}
                </div>
                <div className="p-6 pt-0">
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`block w-full text-center ${color} text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity`}
                  >
                    {buttonLabel} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security notice */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield size={18} className="text-envico-green" />
            <span className="font-semibold text-gray-800">
              Secure &amp; Encrypted
            </span>
          </div>
          <p className="text-sm text-gray-500">
            All portal access is protected by SSL encryption and two-factor
            authentication. If you are having trouble logging in, contact your
            manager or call{" "}
            <a
              href="tel:02087979974"
              className="text-envico-green font-medium hover:underline"
            >
              020 8797 9974
            </a>
            .
          </p>
        </div>
      </section>

      {/* Not registered */}
      <section className="py-12 bg-envico-green-light">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="font-bold text-gray-900 mb-2">
            Don&apos;t have portal access yet?
          </h3>
          <p className="text-gray-600 text-sm mb-5">
            Family members can request portal access by contacting the care
            team. Staff access is set up by your manager on joining.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-envico-green text-white font-semibold px-6 py-3 rounded-md hover:bg-envico-green-dark transition-colors text-sm"
          >
            Contact Us to Request Access
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
