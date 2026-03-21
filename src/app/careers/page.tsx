import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, CheckCircle, Briefcase, TrendingUp, BookOpen, Shield, Coffee, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "Careers | Envico Supported Living",
  description:
    "Join the Envico team. We are looking for passionate care support workers, team leaders and managers to deliver person-centred care in Hayes, Middlesex.",
};

const roles = [
  {
    title: "Support Worker",
    department: "Supported Living",
    type: "Full-time / Part-time",
    location: "Bishops House, Hayes, UB3 2TE",
    salary: "Competitive + Benefits",
    badge: "Hiring Now",
    badgeColor: "bg-green-100 text-green-700",
    description:
      "Support adults with learning disabilities and autism in their daily lives at our supported living property. You will assist with personal care, community activities, medication and life skills development.",
    requirements: [
      "No experience required — full training provided",
      "Compassionate, patient and reliable",
      "Ability to work shifts including nights and weekends",
      "Enhanced DBS check required (paid by us)",
    ],
  },
  {
    title: "Senior Support Worker",
    department: "Supported Living",
    type: "Full-time",
    location: "Bishops House, Hayes, UB3 2TE",
    salary: "Competitive + Benefits",
    badge: "Hiring Now",
    badgeColor: "bg-green-100 text-green-700",
    description:
      "Lead a shift and provide guidance to junior staff while delivering direct support to residents. Ideal for experienced support workers ready to take the next step.",
    requirements: [
      "Minimum 1 year in a care or support role",
      "NVQ Level 3 in Health & Social Care (desirable)",
      "Strong communication and leadership skills",
      "Enhanced DBS check required",
    ],
  },
  {
    title: "Team Leader",
    department: "Management",
    type: "Full-time",
    location: "Hayes, Middlesex",
    salary: "Competitive + Benefits",
    badge: "1 Position",
    badgeColor: "bg-blue-100 text-blue-700",
    description:
      "Oversee day-to-day operations at one of our services, manage a team of support workers and ensure high-quality, CQC-compliant care is delivered consistently.",
    requirements: [
      "Minimum 2 years in a supervisory care role",
      "NVQ Level 3 or above in Health & Social Care",
      "Experience with care planning and risk assessments",
      "Full UK driving licence desirable",
    ],
  },
  {
    title: "Domiciliary Care Worker",
    department: "Domiciliary Care",
    type: "Part-time / Flexible",
    location: "Greater London",
    salary: "Competitive + Mileage",
    badge: "Flexible Hours",
    badgeColor: "bg-purple-100 text-purple-700",
    description:
      "Deliver person-centred care visits to individuals in their own homes across Greater London. Flexible hours to suit your schedule.",
    requirements: [
      "Previous care experience preferred",
      "Full UK driving licence and own vehicle required",
      "Caring, reliable and punctual",
      "Enhanced DBS check required",
    ],
  },
];

const benefits = [
  { Icon: TrendingUp, label: "Competitive pay rates" },
  { Icon: BookOpen, label: "Full induction & paid training" },
  { Icon: Briefcase, label: "NVQ / QCF funding support" },
  { Icon: Shield, label: "DBS check paid by us" },
  { Icon: Coffee, label: "Employee Assistance Programme" },
  { Icon: Calendar, label: "Flexible shift patterns" },
  { Icon: TrendingUp, label: "Clear career progression" },
  { Icon: CheckCircle, label: "Supportive team culture" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/staffing.png" alt="Envico care staff" fill className="object-cover" />
          <div className="absolute inset-0 bg-envico-navy/85" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-24 text-center text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Build a Career That Matters
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">
            Make a real difference in the lives of adults with learning
            disabilities, autism and complex needs in Hayes and Greater London.
          </p>
          <a
            href="#roles"
            className="inline-block bg-envico-blue text-white font-bold px-8 py-4 rounded-md hover:opacity-90 transition-opacity"
          >
            View Open Roles
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map(({ Icon, label }) => (
              <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-envico-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-envico-green" />
                </div>
                <p className="text-sm font-medium text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies — Indeed/Stepstone style */}
      <section id="roles" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">
            Current Vacancies
          </h2>
          <p className="text-gray-500 text-center mb-10 text-sm">
            All roles include full training. We welcome applications from people new to care.
          </p>
          <div className="space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-white border border-gray-200 border-l-4 border-l-envico-green rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    {/* Title + badge */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${role.badgeColor}`}>
                        {role.badge}
                      </span>
                    </div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                        <Briefcase size={11} /> {role.department}
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                        <MapPin size={11} /> {role.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full font-medium">
                        <Clock size={11} /> {role.type}
                      </span>
                      <span className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2.5 py-1 rounded-full font-semibold">
                        💷 {role.salary}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{role.description}</p>
                    <ul className="space-y-1">
                      {role.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-sm text-gray-500">
                          <CheckCircle size={13} className="text-envico-green flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <a
                      href="#apply"
                      className="inline-block bg-envico-navy text-white text-sm font-bold px-6 py-2.5 rounded-lg hover:bg-envico-blue transition-colors whitespace-nowrap"
                    >
                      Apply for this role
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-step application form */}
      <section id="apply" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Apply Online</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Complete our 5-step application in minutes. Full training is provided — experience is not always essential.
            </p>
          </div>
          <CareerApplicationForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
