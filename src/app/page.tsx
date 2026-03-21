import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ReferralForm from "@/components/ReferralForm";

const galleryImages = [
  "JR_EngelbertForbia_002-scaled.jpg",
  "JR_EngelbertForbia_007-scaled.jpg",
  "JR_EngelbertForbia_017-scaled.jpg",
  "JR_EngelbertForbia_020-scaled.jpg",
  "JR_EngelbertForbia_021-scaled.jpg",
  "JR_EngelbertForbia_025-1-scaled.jpg",
];

const services = [
  {
    icon: "🧠",
    title: "Learning Disabilities",
    description:
      "Tailored support for adults with mild to complex learning disabilities, promoting independence and community inclusion.",
    image: "/images/learning-disability.png",
  },
  {
    icon: "♾️",
    title: "Autism Support",
    description:
      "Structured, sensory-aware environments and consistent routines for autistic adults and those with ASD.",
    image: null,
  },
  {
    icon: "⚡",
    title: "ADHD",
    description:
      "Focused support strategies for adults living with ADHD, helping manage daily living and build life skills.",
    image: null,
  },
  {
    icon: "🏥",
    title: "Acquired Brain Injury",
    description:
      "Specialist rehabilitation-focused care for adults recovering from or living with acquired brain injuries.",
    image: null,
  },
  {
    icon: "💚",
    title: "Mental Health",
    description:
      "Compassionate, recovery-oriented support for adults with complex mental health needs.",
    image: null,
  },
  {
    icon: "🏠",
    title: "Domiciliary Care",
    description:
      "Flexible in-home care and support services delivered by trained professionals across Greater London.",
    image: "/images/domiciliary-care.png",
  },
];

const trustItems = [
  { icon: "✓", label: "CQC Registered & Regulated" },
  { icon: "✓", label: "6 Supported Living Beds at Bishops House" },
  { icon: "✓", label: "24/7 Person-Centred Support" },
  { icon: "✓", label: "Hayes, Middlesex — Serving Greater London" },
];

const whyChoose = [
  {
    title: "CQC Registered",
    desc: "Fully registered and regulated by the Care Quality Commission.",
  },
  {
    title: "Experienced Leadership",
    desc: "Led by professionals with decades of health and social care expertise.",
  },
  {
    title: "Person-Centred Care",
    desc: "Every support plan is built around the individual — their goals, needs and wishes.",
  },
  {
    title: "24/7 Support",
    desc: "Round-the-clock staffing at all our supported living properties.",
  },
  {
    title: "Oliver McGowan Trained",
    desc: "All staff complete mandatory Oliver McGowan training on learning disabilities and autism.",
  },
  {
    title: "Right Support Right Care",
    desc: "Aligned with NHS England's Right Support, Right Care, Right Culture framework.",
  },
];

const bishopsFeatures = [
  "En-suite shower rooms",
  "Double beds in every room",
  "Communal lounge & dining area",
  "Landscaped garden",
  "5-car parking",
  "24/7 staffed support",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* SECTION 1 — Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/images/frontpage-hero1.png"
          alt="Envico Supported Living"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Supporting Independence,
            <br />
            Enabling Lives
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            CQC-registered supported living and domiciliary care for adults with
            learning disabilities, autism, ADHD and complex needs in Hayes,
            Middlesex
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#referral"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-md transition-colors text-base"
            >
              Make a Referral
            </Link>
            <Link
              href="#services"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-md transition-colors text-base"
            >
              Our Services
            </Link>
          </div>
        </div>
        {/* CQC badge */}
        <div className="absolute bottom-8 right-8 z-10">
          <Image
            src="/images/CQC.jpg"
            alt="CQC Registered"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* SECTION 2 — Trust bar */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg mt-0.5">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Care Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We provide specialist support across a range of needs, delivered
              by trained and compassionate staff.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {service.image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href="/services"
                    className="text-sm font-medium text-green-700 hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Bishops House */}
      <section id="bishops-house" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/JR_EngelbertForbia_002-scaled.jpg"
                alt="Bishops House, Hayes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Bishops House, Hayes
              </h2>
              <p className="text-green-700 font-medium mb-4">
                45 Bishops Road, Hayes, Middlesex, UB3 2TE
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bishops House is our purpose-adapted supported living property
                offering six individual en-suite bedrooms for adults with
                learning disabilities, autism and complex needs. The property
                features spacious communal areas, a landscaped garden and secure
                on-site parking — all within a warm, homely environment staffed
                around the clock.
              </p>
              <ul className="space-y-2 mb-8">
                {bishopsFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="#referral"
                className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-800 transition-colors"
              >
                Request a Viewing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Why Choose Envico */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Envico
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              We are committed to delivering high-quality, regulated care that
              puts the individual at the centre of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-green-700 font-bold text-lg">✓</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Referral Form */}
      <section id="referral" className="py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make a Referral or Enquiry
            </h2>
            <p className="text-gray-600">
              Complete the form below and our team will respond within 24 hours.
              For urgent referrals please call{" "}
              <a
                href="tel:02087979974"
                className="text-green-700 font-semibold"
              >
                020 8797 9974
              </a>
              .
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* SECTION 7 — Gallery strip */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Inside Bishops House
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-300">
            {galleryImages.map((img) => (
              <div
                key={img}
                className="relative flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-sm"
              >
                <Image
                  src={`/images/gallery/${img}`}
                  alt="Bishops House"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="text-sm font-medium text-green-700 hover:underline"
            >
              View full gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — Footer */}
      <footer className="bg-[#1a1a2e] text-gray-300 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Envico Supported Living"
                width={160}
                height={54}
                className="h-14 w-auto object-contain mb-4 brightness-0 invert"
              />
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                CQC-registered supported living and domiciliary care for adults
                with learning disabilities, autism and complex needs.
              </p>
              <Image
                src="/images/CQC.jpg"
                alt="CQC Registered"
                width={70}
                height={70}
                className="rounded-md"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-green-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-white font-medium">Head Office</p>
                  <p className="text-gray-400">
                    59 Commonwealth Avenue, Hayes, UB3 2PN
                  </p>
                  <a
                    href="tel:02087979974"
                    className="text-green-400 hover:underline"
                  >
                    020 8797 9974
                  </a>
                </div>
                <div>
                  <p className="text-white font-medium">Bishops House</p>
                  <p className="text-gray-400">
                    45 Bishops Road, Hayes, UB3 2TE
                  </p>
                  <a
                    href="tel:02087973601"
                    className="text-green-400 hover:underline"
                  >
                    020 8797 3601
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
            © 2026 Envico Supported Living LTD. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link href="/cookies" className="hover:text-gray-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

// navLinks re-used in footer — define outside component
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bishops House", href: "/bishops-house" },
  { label: "Funding", href: "/funding" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];
