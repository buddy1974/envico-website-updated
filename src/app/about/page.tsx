import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Award, Users, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Envico Supported Living",
  description:
    "Learn about Envico Supported Living — our story, leadership team, mission and CQC-registered services in Hayes, Middlesex.",
};

const values = [
  {
    Icon: Heart,
    title: "Person-Centred",
    desc: "Every individual is unique. We build support around their personal goals, strengths and aspirations.",
  },
  {
    Icon: Award,
    title: "Quality Assured",
    desc: "CQC-registered and regulated, delivering care that meets the highest national standards.",
  },
  {
    Icon: Users,
    title: "Community Focused",
    desc: "We actively support individuals to engage with their communities and live fulfilling lives.",
  },
  {
    Icon: CheckCircle,
    title: "Safe & Empowering",
    desc: "Creating environments that are personalised, positive, safe and empowering for all.",
  },
];

const milestones = [
  { year: "2018", event: "Envico Supported Living founded in Hayes, Middlesex" },
  { year: "2019", event: "CQC registration achieved" },
  { year: "2020", event: "Bishops House opened — 6 supported living bedrooms" },
  { year: "2022", event: "Domiciliary care division launched across Greater London" },
  { year: "2024", event: "Oliver McGowan mandatory training rolled out across all staff" },
  { year: "2026", event: "Expanding services and capacity across West London" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 relative bg-envico-blue text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
                Who We Are
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                About Envico Supported Living
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Envico Supported Living is a CQC-registered provider of
                supported living and domiciliary care for adults with learning
                disabilities, autism, ADHD and complex needs, based in Hayes,
                Middlesex.
              </p>
              <p className="text-blue-100 leading-relaxed">
                Founded on the belief that every person deserves to lead an
                independent life in an environment that is personalised,
                positive, safe and empowering — we work alongside individuals,
                families and local authorities to make that vision a reality.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/staffing.png"
                alt="Envico care team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision statement */}
      <section className="py-14 bg-envico-green">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed italic">
            &ldquo;People leading independent lives in an environment which is
            personalised, positive, safe and empowering.&rdquo;
          </p>
          <p className="text-green-200 mt-4 font-medium">— Envico Mission Statement</p>
        </div>
      </section>

      {/* Our values */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="text-center p-6 rounded-xl bg-envico-green-light border border-green-100 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-envico-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Our Leadership Team
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
            Envico is led by experienced health and social care professionals
            committed to the highest standards of person-centred care.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Director */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-envico-blue rounded-full flex items-center justify-center mb-5">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Director</h3>
              <p className="text-envico-green font-medium text-sm mb-4">
                Advanced Social Worker · AMHP · Best Interests Assessor
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Director brings extensive experience in statutory and
                independent social care, holding qualifications as an Approved
                Mental Health Professional (AMHP) and Best Interests Assessor
                (BIA). With deep expertise in the Mental Capacity Act, Care Act
                and safeguarding, they provide strategic and clinical leadership
                across all Envico services.
              </p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  Approved Mental Health Professional (AMHP)
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  Best Interests Assessor (BIA)
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  Advanced Social Work Practitioner
                </div>
              </div>
            </div>

            {/* Deputy Manager */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-envico-green rounded-full flex items-center justify-center mb-5">
                <span className="text-white text-2xl font-bold">D</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                Deputy Manager
              </h3>
              <p className="text-envico-green font-medium text-sm mb-4">
                Registered Manager · NVQ Level 5 Health &amp; Social Care
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our Deputy Manager oversees day-to-day operations at Bishops
                House and our domiciliary care services, ensuring consistent,
                high-quality support delivery. With significant frontline
                experience and management qualifications, they lead staff
                development and ensure CQC compliance across all services.
              </p>
              <div className="mt-4 space-y-1">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  NVQ Level 5 in Health &amp; Social Care Management
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  Oliver McGowan Trained
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <CheckCircle size={13} className="text-envico-green" />
                  Safeguarding Adults Lead
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h2>
          <div className="relative border-l-2 border-envico-green ml-4">
            {milestones.map((m) => (
              <div key={m.year} className="mb-8 pl-8 relative">
                <div className="absolute -left-3 top-1 w-5 h-5 bg-envico-green rounded-full border-2 border-white shadow" />
                <span className="text-xs font-bold text-envico-gold bg-yellow-50 px-2.5 py-1 rounded-full">
                  {m.year}
                </span>
                <p className="text-gray-700 mt-2">{m.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CQC section */}
      <section className="py-16 bg-envico-green-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/images/CQC.jpg"
              alt="CQC Registered"
              width={120}
              height={120}
              className="rounded-xl shadow-md flex-shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                CQC Registered &amp; Regulated
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Envico Supported Living is registered with the Care Quality
                Commission (CQC) — the independent regulator of health and
                social care in England. Our registration ensures we meet
                national standards for safe, effective, caring, responsive and
                well-led services.
              </p>
              <a
                href="https://www.cqc.org.uk/provider/1-101648558"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-envico-green hover:underline"
              >
                View our CQC registration →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-envico-blue text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Find Out More?
          </h2>
          <p className="text-blue-200 mb-8">
            Contact our team today for a no-obligation conversation about how
            we can support you or your loved one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-envico-gold text-white font-semibold px-8 py-4 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Make a Referral
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-envico-blue transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
