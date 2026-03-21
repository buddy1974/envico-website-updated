import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Zap, Activity, Heart, Users, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Care Services | Envico Supported Living",
  description:
    "Envico provides specialist supported living and domiciliary care for adults with learning disabilities, autism, ADHD, acquired brain injury, mental health needs and more.",
};

const imageCards = [
  {
    title: "Learning Disabilities",
    image: "/images/learning-disability.png",
    color: "bg-envico-green",
    bullets: [
      "Person-centred support plans tailored to each individual",
      "Community access, social activities and life skills",
      "24/7 staffed support at Bishops House, Hayes",
    ],
    href: "/#referral",
  },
  {
    title: "Autism Support",
    image: "/images/autism-suppport.png",
    color: "bg-envico-blue",
    bullets: [
      "Sensory-aware, low-arousal environments",
      "Consistent routines and visual communication support",
      "Staff trained in autism-specific approaches",
    ],
    href: "/#referral",
  },
  {
    title: "Domiciliary Care",
    image: "/images/domiciliary-care.png",
    color: "bg-envico-navy",
    bullets: [
      "Flexible care visits in the individual's own home",
      "Personal care, medication, meals and domestic support",
      "Serving Greater London — consistent, familiar carers",
    ],
    href: "/#referral",
  },
  {
    title: "Supported Living",
    image: "/images/supported-living.png",
    color: "bg-purple-700",
    bullets: [
      "6 en-suite bedrooms at Bishops House, Hayes",
      "Real home environment — not a residential care setting",
      "Individual tenancy with bespoke support package",
    ],
    href: "/bishops-house",
  },
];

const gradientBoxes = [
  {
    Icon: Zap,
    title: "ADHD Support",
    gradient: "from-purple-600 to-purple-900",
    bullets: [
      "Structured daily routines and prompting strategies",
      "Medication management and appointment support",
      "Goal-setting, motivation coaching and employment support",
    ],
  },
  {
    Icon: Activity,
    title: "Acquired Brain Injury Care",
    gradient: "from-teal-600 to-teal-900",
    bullets: [
      "Rehabilitation goal planning with NHS teams",
      "Cognitive, memory and daily living support",
      "Community reintegration and family liaison",
    ],
  },
  {
    Icon: Heart,
    title: "Mental Health Support",
    gradient: "from-green-700 to-green-900",
    bullets: [
      "Recovery-oriented, person-centred support plans",
      "Crisis prevention, relapse planning and medication support",
      "Peer support, social inclusion and employment pathways",
    ],
  },
  {
    Icon: Users,
    title: "Outreach & Staffing Services",
    gradient: "from-envico-navy to-gray-900",
    bullets: [
      "Community outreach support for individuals at home",
      "Specialist staffing solutions for care providers",
      "Experienced, DBS-checked and Oliver McGowan trained staff",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Referral & Assessment",
    desc: "Submit a referral via our online form, by phone or through a local authority. We carry out an initial assessment to understand the individual's needs, goals and circumstances.",
  },
  {
    number: "02",
    title: "Care Plan Development",
    desc: "Working alongside the individual, their family, social workers and other professionals, we develop a bespoke support plan that puts their wishes and aspirations at the centre.",
  },
  {
    number: "03",
    title: "Ongoing Support & Review",
    desc: "Support begins and is regularly reviewed. We adapt plans as needs change, maintaining open communication with families and commissioners throughout.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-gradient-to-br from-envico-navy to-envico-dark text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
            What We Do
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Care Services
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Specialist, person-centred care and support for adults with learning
            disabilities, autism, mental health needs and complex conditions —
            delivered by trained, compassionate professionals.
          </p>
        </div>
      </section>

      {/* Section 1 — Specialist Care Services: 2x2 image cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Specialist Care Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our core services — each delivered with a regulated, CQC-compliant
              approach centred on the individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imageCards.map(({ title, image, color, bullets, href }) => (
              <div
                key={title}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col"
              >
                {/* Image top */}
                <div className="relative h-56 w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className={`absolute top-4 left-4 ${color} text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full`}>
                    {title}
                  </div>
                </div>

                {/* Colored bottom */}
                <div className={`${color} flex-1 p-6 text-white`}>
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <ul className="space-y-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-white/90">
                        <CheckCircle size={14} className="flex-shrink-0 mt-0.5 text-white/70" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-block bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors border border-white/30"
                  >
                    Make a Referral →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Additional Support Services: 2x2 gradient boxes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Additional Support Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Specialist support for a range of complex needs, delivered by
              experienced and trained professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gradientBoxes.map(({ Icon, title, gradient, bullets }) => (
              <div
                key={title}
                className={`bg-gradient-to-br ${gradient} rounded-2xl p-8 text-white shadow-md hover:shadow-xl transition-shadow`}
              >
                <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-5">{title}</h3>
                <ul className="space-y-3 mb-6">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-white/90">
                      <CheckCircle size={15} className="flex-shrink-0 mt-0.5 text-white/60" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#referral"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors border border-white/25"
                >
                  Make a Referral →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How We Work: 3-step process */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How We Work
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              From first contact to ongoing support — a simple, transparent
              process designed around the individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map(({ number, title, desc }) => (
              <div key={number} className="relative">
                <div className="text-6xl font-black text-gray-100 mb-2 leading-none">{number}</div>
                <div className="absolute top-4 left-0 w-10 h-10 bg-envico-navy rounded-xl flex items-center justify-center">
                  <span className="text-envico-gold font-bold text-sm">{number}</span>
                </div>
                <div className="mt-2 pl-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — CTA banner */}
      <section className="py-16 bg-envico-green text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make a Referral?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Our team responds within 24 hours. For urgent placements call us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-white text-envico-green font-bold px-8 py-4 rounded-md hover:bg-green-50 transition-colors"
            >
              Make a Referral
            </Link>
            <a
              href="tel:02087979974"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-envico-green transition-colors"
            >
              Call 020 8797 9974
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
