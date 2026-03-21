import Image from "next/image";
import Link from "next/link";
import { Brain, Infinity as InfinityIcon, Zap, Activity, Heart, Home as HomeIcon, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import ReferralForm from "@/components/ReferralForm";

const services = [
  {
    Icon: Brain,
    title: "Learning Disabilities",
    description:
      "Tailored support for adults with mild to complex learning disabilities, promoting independence and community inclusion.",
    image: "/images/learning-disability.png",
    color: "bg-envico-green",
  },
  {
    Icon: InfinityIcon,
    title: "Autism Support",
    description:
      "Structured, sensory-aware environments and consistent routines for autistic adults and those with ASD.",
    image: "/images/supported-living.png",
    color: "bg-envico-blue",
  },
  {
    Icon: Zap,
    title: "ADHD",
    description:
      "Focused support strategies for adults living with ADHD, helping manage daily living and build life skills.",
    image: null,
    color: "bg-envico-gold",
  },
  {
    Icon: Activity,
    title: "Acquired Brain Injury",
    description:
      "Specialist rehabilitation-focused care for adults recovering from or living with acquired brain injuries.",
    image: null,
    color: "bg-red-600",
  },
  {
    Icon: Heart,
    title: "Mental Health",
    description:
      "Compassionate, recovery-oriented support for adults with complex mental health needs.",
    image: null,
    color: "bg-purple-600",
  },
  {
    Icon: HomeIcon,
    title: "Domiciliary Care",
    description:
      "Flexible in-home care and support services delivered by trained professionals across Greater London.",
    image: "/images/domiciliary-care.png",
    color: "bg-envico-green",
  },
];

const trustItems = [
  { label: "CQC Registered & Regulated" },
  { label: "6 Supported Living Beds at Bishops House" },
  { label: "24/7 Person-Centred Support" },
  { label: "Hayes, Middlesex — Serving Greater London" },
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

const galleryImages = [
  "JR_EngelbertForbia_002-scaled.jpg",
  "JR_EngelbertForbia_007-scaled.jpg",
  "JR_EngelbertForbia_017-scaled.jpg",
  "JR_EngelbertForbia_020-scaled.jpg",
  "JR_EngelbertForbia_021-scaled.jpg",
  "JR_EngelbertForbia_025-1-scaled.jpg",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* SECTION 1 — Hero Slider */}
      <HeroSlider />

      {/* SECTION 2 — Trust bar */}
      <section className="bg-envico-blue py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustItems.map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <CheckCircle size={18} className="text-envico-gold flex-shrink-0" />
                <span className="text-sm font-medium text-white">{item.label}</span>
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
              Specialist support across a range of needs, delivered by trained
              and compassionate staff.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ Icon, title, description, image, color }) => (
              <div
                key={title}
                className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-48 w-full bg-gray-100">
                  {image ? (
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <Icon size={48} className="text-gray-300" />
                    </div>
                  )}
                  {/* Icon badge */}
                  <div
                    className={`absolute bottom-3 left-3 w-10 h-10 ${color} rounded-lg flex items-center justify-center shadow-md`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{description}</p>
                  <Link
                    href="/services"
                    className="text-sm font-medium text-envico-green hover:underline"
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
      <section id="bishops-house" className="py-20 bg-envico-green-light">
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
                Bishops House is our purpose-adapted supported living property
                offering six individual en-suite bedrooms for adults with
                learning disabilities, autism and complex needs. The property
                features spacious communal areas, a landscaped garden and secure
                on-site parking — all within a warm, homely environment staffed
                around the clock.
              </p>
              <ul className="space-y-2 mb-8">
                {bishopsFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <CheckCircle size={16} className="text-envico-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/bishops-house"
                className="inline-block bg-envico-green text-white font-semibold px-6 py-3 rounded-md hover:bg-envico-green-dark transition-colors"
              >
                View Property Details
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
              Committed to delivering high-quality, regulated care that puts
              the individual at the centre of everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-envico-green-light rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 bg-envico-green rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Referral Form */}
      <section id="referral" className="py-20 bg-envico-blue">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Make a Referral or Enquiry
            </h2>
            <p className="text-blue-200">
              Complete the form below and our team will respond within 24 hours.
              For urgent referrals please call{" "}
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

      {/* SECTION 7 — Gallery strip */}
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
              <div
                key={img}
                className="relative flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-sm"
              >
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
              className="inline-block bg-envico-green text-white font-semibold px-6 py-3 rounded-md hover:bg-envico-green-dark transition-colors text-sm"
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
