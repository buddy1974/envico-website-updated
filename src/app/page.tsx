import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  Zap,
  Activity,
  Heart,
  Users,
  CheckCircle,
  Infinity as InfinityIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ReferralForm from "@/components/ReferralForm";

// Top row — cards with images
const imageServices = [
  {
    title: "Learning Disabilities",
    description: "Person-centred support for adults with mild to complex learning disabilities, promoting independence and community inclusion.",
    image: "/images/learning-disability.png",
    href: "/services#learning-disabilities",
  },
  {
    title: "Supported Living",
    description: "Bespoke supported living arrangements at Bishops House and beyond — a real home with 24/7 staffed support.",
    image: "/images/supported-living.png",
    href: "/services",
  },
  {
    title: "Domiciliary Care",
    description: "Flexible in-home care delivered by trained professionals across Greater London.",
    image: "/images/domiciliary-care.png",
    href: "/services#domiciliary-care",
  },
];

// Bottom row — gradient cards (no images)
const gradientServices = [
  {
    Icon: InfinityIcon,
    title: "Autism Support",
    description: "Sensory-aware environments and consistent routines for autistic adults.",
    gradient: "from-blue-500 to-blue-700",
    href: "/services#autism",
  },
  {
    Icon: Zap,
    title: "ADHD",
    description: "Structured support strategies helping adults with ADHD manage daily living.",
    gradient: "from-purple-500 to-purple-700",
    href: "/services#adhd",
  },
  {
    Icon: Activity,
    title: "Acquired Brain Injury",
    description: "Rehabilitation-focused care for adults living with acquired brain injuries.",
    gradient: "from-teal-500 to-teal-700",
    href: "/services#brain-injury",
  },
  {
    Icon: Heart,
    title: "Mental Health",
    description: "Recovery-oriented support for adults with complex mental health needs.",
    gradient: "from-green-500 to-green-700",
    href: "/services#mental-health",
  },
  {
    Icon: Users,
    title: "Outreach & Staffing",
    description: "Community outreach and specialist staffing solutions across the region.",
    gradient: "from-envico-navy to-blue-900",
    href: "/services",
  },
];

const trustItems = [
  { label: "CQC Registered & Regulated" },
  { label: "6 Supported Living Beds at Bishops House" },
  { label: "24/7 Person-Centred Support" },
  { label: "Hayes, Middlesex — Serving Greater London" },
];

const whyChoose = [
  { title: "CQC Registered", desc: "Fully registered and regulated by the Care Quality Commission." },
  { title: "Experienced Leadership", desc: "Led by an Advanced Social Worker, AMHP and Best Interests Assessor." },
  { title: "Person-Centred Care", desc: "Every support plan is built around the individual — their goals, needs and wishes." },
  { title: "24/7 Support", desc: "Round-the-clock staffing at all our supported living properties." },
  { title: "Oliver McGowan Trained", desc: "All staff complete mandatory Oliver McGowan training on learning disabilities and autism." },
  { title: "Right Support Right Care", desc: "Aligned with NHS England's Right Support, Right Care, Right Culture framework." },
];

const bishopsFeatures = [
  "En-suite shower rooms",
  "Double beds in every room",
  "Communal lounge & dining area",
  "Landscaped garden",
  "5-car parking",
  "24/7 staffed support",
];

const galleryImages = [
  "front.jpg",
  "bright, modern living room  dining area with view of garden.jpg",
  "Bright Private Bedroom.jpg",
  "Fully Equipped Care Home Kitchen.jpg",
  "back view with garden,.jpg",
  "Spacious Interior Corridor.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* SECTION 1 — Hero Slider */}
      <HeroSlider />

      {/* SECTION 2 — Trust bar */}
      <section className="bg-envico-navy py-5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <CheckCircle size={16} className="text-envico-blue flex-shrink-0" />
                <span className="text-xs font-medium text-white">{item.label}</span>
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
              Specialist support across a range of needs, delivered by trained and compassionate staff.
            </p>
          </div>

          {/* Top row — image cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {imageServices.map((svc) => (
              <div
                key={svc.title}
                className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{svc.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{svc.description}</p>
                  <Link href={svc.href} className="text-sm font-medium text-envico-blue hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom row — gradient cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {gradientServices.map(({ Icon, title, description, gradient, href }) => (
              <Link
                key={title}
                href={href}
                className={`bg-gradient-to-br ${gradient} rounded-xl p-5 text-white group hover:shadow-lg hover:-translate-y-1 transition-all`}
              >
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-base mb-2">{title}</h3>
                <p className="text-white/80 text-xs leading-relaxed mb-3">{description}</p>
                <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CQC prominent banner (FIX 2) */}
      <section className="py-16 bg-envico-cqc">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/images/CQC.jpg"
            alt="CQC Registered"
            width={200}
            height={200}
            className="mx-auto rounded-xl shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            CQC Registered &amp; Regulated
          </h2>
          <p className="text-purple-100 max-w-2xl mx-auto text-lg mb-6 leading-relaxed">
            Envico Supported Living is registered and regulated by the Care Quality Commission.
            Our services meet the Fundamental Standards of quality and safety.
          </p>
          <a
            href="https://www.cqc.org.uk/provider/1-101648558"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-envico-cqc font-bold px-8 py-3 rounded-md hover:bg-purple-50 transition-colors"
          >
            View our CQC registration →
          </a>
        </div>
      </section>

      {/* SECTION 5 — Bishops House */}
      <section id="bishops-house" className="py-20 bg-envico-green-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[420px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery/front.jpg"
                alt="Bishops House, Hayes"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-envico-gold bg-yellow-50 px-3 py-1 rounded-full mb-4 inline-block">
                Our Property
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Bishops House, Hayes
              </h2>
              <p className="text-envico-green font-medium mb-4">
                45 Bishops Road, Hayes, Middlesex, UB3 2TE
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our purpose-adapted supported living property offering six individual en-suite
                bedrooms for adults with learning disabilities, autism and complex needs. Warm,
                homely and staffed around the clock.
              </p>
              <ul className="space-y-2 mb-8">
                {bishopsFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-envico-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/bishops-house"
                className="inline-block bg-envico-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-envico-blue transition-colors"
              >
                View Property Details
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — Why Choose Envico */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Envico
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Committed to delivering high-quality, regulated care that puts the individual at the centre.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-envico-navy rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-envico-blue" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Referral Form */}
      <section id="referral" className="py-20 bg-envico-navy">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Make a Referral or Enquiry
            </h2>
            <p className="text-blue-200">
              Complete the form below and our team will respond within 24 hours.
              For urgent referrals call{" "}
              <a href="tel:02087979974" className="text-envico-gold font-semibold">
                020 8797 9974
              </a>
              .
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <ReferralForm />
          </div>
        </div>
      </section>

      {/* SECTION 8 — Gallery strip */}
      <section id="gallery" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Inside Bishops House
          </h2>
          <p className="text-gray-500 text-center text-sm mb-8">
            45 Bishops Road, Hayes, UB3 2TE
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {galleryImages.map((img) => (
              <div key={img} className="relative flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={`/images/gallery/${img}`}
                  alt="Bishops House interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-block bg-envico-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-envico-blue transition-colors text-sm"
            >
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
