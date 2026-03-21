import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, Mail, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Complaints, Compliments & Concerns | Envico Supported Living",
  description:
    "How to make a complaint or share a compliment about Envico Supported Living. Our complaints procedure, timeframes and escalation routes including CQC.",
};

const steps = [
  {
    step: "1",
    title: "Raise it with us directly",
    desc: "Contact our Director by phone, email or in writing. We encourage you to raise any concerns informally first — most issues can be resolved quickly this way.",
  },
  {
    step: "2",
    title: "Formal complaint acknowledged",
    desc: "If you wish to make a formal complaint, submit it in writing (email or letter). We will acknowledge receipt within 3 working days.",
  },
  {
    step: "3",
    title: "Investigation",
    desc: "Our Director will investigate your complaint thoroughly, speaking with relevant staff and reviewing records where appropriate.",
  },
  {
    step: "4",
    title: "Full written response",
    desc: "You will receive a full written response within 28 calendar days of submitting your formal complaint. If more time is needed, we will inform you and agree a revised timescale.",
  },
  {
    step: "5",
    title: "If you are not satisfied",
    desc: "If you remain dissatisfied after receiving our response, you have the right to escalate your complaint to the Care Quality Commission (CQC) or the Local Government Ombudsman.",
  },
];

export default function ComplaintsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-12 bg-envico-navy text-white">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
            Your Rights
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complaints, Compliments &amp; Concerns
          </h1>
          <p className="text-blue-200 max-w-2xl leading-relaxed">
            Envico Supported Living is committed to high-quality care. We take all feedback
            seriously — whether it is a concern, a complaint, or a compliment. This page
            explains how to raise a concern and what to expect from us.
          </p>
        </div>
      </section>

      {/* Compliments */}
      <section className="py-10 bg-envico-green-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-envico-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-1">Sharing a Compliment</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We love hearing positive feedback about our staff and services. If a member of
                the team has gone above and beyond, please let us know — we share compliments
                with the whole team. Contact us at{" "}
                <a href="mailto:info@envicosl.co.uk" className="text-envico-green font-medium hover:underline">
                  info@envicosl.co.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10">
            Our Complaints Procedure
          </h2>
          <div className="space-y-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-5">
                <div className="w-10 h-10 bg-envico-navy rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {s.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeframes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Response Timeframes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <p className="text-3xl font-bold text-envico-blue mb-1">3</p>
              <p className="text-sm font-semibold text-gray-900">Working Days</p>
              <p className="text-xs text-gray-500 mt-1">Acknowledgement of formal complaint</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <p className="text-3xl font-bold text-envico-green mb-1">28</p>
              <p className="text-sm font-semibold text-gray-900">Calendar Days</p>
              <p className="text-xs text-gray-500 mt-1">Full written response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-envico-green mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Email</p>
                <a href="mailto:info@envicosl.co.uk" className="text-envico-blue hover:underline text-sm">
                  info@envicosl.co.uk
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-envico-green mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Phone</p>
                <a href="tel:02087979974" className="text-envico-blue hover:underline text-sm">
                  020 8797 9974
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Escalation &amp; External Bodies
          </h2>
          <div className="space-y-5">
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink size={16} className="text-envico-cqc" />
                <h3 className="font-bold text-gray-900">Care Quality Commission (CQC)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                The CQC is the independent regulator of health and social care in England. You
                can share concerns about a registered service directly with them.
              </p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>Website: cqc.org.uk</li>
                <li>Phone: 03000 616161</li>
                <li>Email: enquiries@cqc.org.uk</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink size={16} className="text-envico-blue" />
                <h3 className="font-bold text-gray-900">Local Government &amp; Social Care Ombudsman</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                If your complaint relates to a local authority commissioned service, the
                Ombudsman can investigate unresolved complaints.
              </p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>Website: lgsco.org.uk</li>
                <li>Phone: 0300 061 0614</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <ExternalLink size={16} className="text-envico-green" />
                <h3 className="font-bold text-gray-900">Independent Advocacy (ICAS / POhWER)</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                If you need support making a complaint, an independent advocate can help you.
                POhWER provides free NHS and social care complaints advocacy across England.
              </p>
              <ul className="text-xs text-gray-500 space-y-0.5">
                <li>Website: pohwer.net</li>
                <li>Phone: 0300 456 2370</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
