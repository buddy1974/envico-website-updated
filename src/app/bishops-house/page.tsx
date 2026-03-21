import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, MapPin, Phone, BedDouble, Car, TreePine, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import galleryDescs from "@/data/gallery-descriptions.json";

const gd = galleryDescs as Record<string, { title: string; description: string }>;

export const metadata: Metadata = {
  title: "Bishops House, Hayes | Envico Supported Living",
  description:
    "Bishops House is Envico's supported living property in Hayes, Middlesex. 6 en-suite bedrooms, communal lounge, garden and 24/7 staffed support for adults with learning disabilities and autism.",
};

const makePhoto = (file: string) => ({
  file,
  alt: gd[file]?.title ?? file,
  caption: gd[file]?.description ?? "",
});

const gallerySections = [
  {
    heading: "Welcome to Bishops House",
    cta: "A warm, homely environment staffed 24/7",
    photos: [
      makePhoto("front.jpg"),
      makePhoto("back view with garden,.jpg"),
    ],
  },
  {
    heading: "Spacious En-Suite Bedrooms",
    cta: "Each resident has their own private, fully furnished bedroom",
    photos: [
      makePhoto("Bright Private Bedroom.jpg"),
      makePhoto("Modern Supported Living Bedroom.jpg"),
      makePhoto("Comfortable Private Bedroom.jpg"),
    ],
  },
  {
    heading: "Comfortable Communal Living",
    cta: "Spacious areas to relax, socialise and feel at home",
    photos: [
      makePhoto("communal living  dining area.jpg"),
      makePhoto("bright, modern living room  dining area.jpg"),
      makePhoto("bright, modern living room  dining area with view of garden.jpg"),
    ],
  },
  {
    heading: "Shared Dining & Kitchen",
    cta: "Fully equipped kitchen with a welcoming dining space",
    photos: [
      makePhoto("Fully Equipped Care Home Kitchen.jpg"),
      makePhoto("Spacious Independent Living Kitchen.jpg"),
    ],
  },
  {
    heading: "Personal, Homely Spaces",
    cta: "Rooms personalised to each resident's taste and needs",
    photos: [
      makePhoto("Modern Care Home Bedroom.jpg"),
      makePhoto("Clean and Spacious Bedroom.jpg"),
      makePhoto("Modern Private Room.jpg"),
    ],
  },
  {
    heading: "Bright Hallways & Common Spaces",
    cta: "Light, accessible and welcoming throughout",
    photos: [
      makePhoto("Bright and Clean Corridor.jpg"),
      makePhoto("Spacious Interior Corridor.jpg"),
      makePhoto("Bright Interior Hallway.jpg"),
    ],
  },
  {
    heading: "Further Resident Rooms",
    cta: "Every room furnished and decorated to a high standard",
    photos: [
      makePhoto("Well Maintained Bedroom.jpg"),
      makePhoto("Cozy Supported Living Bedroom.jpg"),
      makePhoto("Bright and Clean Resident Room.jpg"),
    ],
  },
  {
    heading: "More Private Bedrooms",
    cta: "Move in ready — everything provided",
    photos: [
      makePhoto("Modern Residential Care Bedroom.jpg"),
      makePhoto("Cozy Resident Bedroom.jpg"),
      makePhoto("Clean Private Room.jpg"),
    ],
  },
  {
    heading: "Facilities",
    cta: "Fully accessible bathroom and dedicated staff office on site",
    photos: [
      makePhoto("fully accessible bathroom.jpg"),
      makePhoto("Professional Support Office.jpg"),
    ],
  },
];

const facilities = [
  { Icon: BedDouble, label: "6 en-suite double bedrooms" },
  { Icon: Users, label: "Spacious communal lounge & dining area" },
  { Icon: TreePine, label: "Landscaped garden" },
  { Icon: Car, label: "5-car on-site parking" },
  { Icon: CheckCircle, label: "24/7 staffed support" },
  { Icon: CheckCircle, label: "Level access throughout" },
  { Icon: CheckCircle, label: "Fully furnished & decorated" },
  { Icon: CheckCircle, label: "High-speed broadband" },
];

export default function BishopsHousePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/front.jpg"
            alt="Bishops House exterior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-14 text-white">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-3 inline-block">
            Our Property
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Bishops House
          </h1>
          <div className="flex items-center gap-2 text-gray-200">
            <MapPin size={16} />
            <span>45 Bishops Road, Hayes, Middlesex, UB3 2TE</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About the Property
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Bishops House is Envico&apos;s flagship supported living
                property, purpose-adapted to provide a safe, comfortable and
                empowering home for up to six adults with learning disabilities,
                autism and complex needs.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in a residential area of Hayes, Middlesex, the property
                offers a homely, non-institutional environment with individual
                en-suite shower rooms, a downstairs bathroom, spacious communal
                areas, a utility room and a landscaped garden. The property is
                furnished, decorated and maintained to a remarkably high standard.
                Residents are supported 24 hours a day, 7 days a week by a
                consistent team of trained support workers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Residents and their families are warmly encouraged to bring
                personal items to make their bedroom feel truly like home.
                There is onsite parking for up to 5 cars plus ample off-street
                parking available nearby.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each resident has their own individual support plan developed
                with them, their family and their local authority — covering
                personal care, community access, health management, life skills
                and social goals.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-envico-green-light rounded-xl p-5 border border-green-100">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Quick Facts
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    6 individual en-suite bedrooms
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    Downstairs bathroom &amp; utility room
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    5-car onsite parking + off-street
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    CQC registered service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    24/7 on-site support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-envico-green" />
                    Hayes, UB3 — West London
                  </li>
                </ul>
              </div>
              <div className="bg-envico-blue rounded-xl p-5 text-white">
                <h4 className="font-semibold mb-2">Enquire About a Place</h4>
                <p className="text-blue-200 text-sm mb-3">
                  Contact our team to discuss availability and arrange a
                  viewing.
                </p>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <Phone size={14} />
                  <a href="tel:02087973601" className="hover:underline">
                    020 8797 3601
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Facilities &amp; Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {facilities.map(({ Icon, label }) => (
              <div
                key={label}
                className="bg-white rounded-xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-envico-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon size={20} className="text-envico-green" />
                </div>
                <p className="text-sm font-medium text-gray-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — grouped by section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Photo Gallery
          </h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            A full tour of Bishops House, Hayes
          </p>
          <div className="space-y-12">
            {gallerySections.map((section) => (
              <div key={section.heading}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{section.heading}</h3>
                    <p className="text-sm text-envico-green">{section.cta}</p>
                  </div>
                </div>
                <div className={`grid gap-3 ${section.photos.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}>
                  {section.photos.map((photo) => (
                    <div
                      key={photo.file}
                      className="relative aspect-video rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Image
                        src={`/images/gallery/${photo.file}`}
                        alt={photo.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                        <p className="text-white text-xs font-semibold leading-snug">{photo.alt}</p>
                        {photo.caption && (
                          <p className="text-gray-300 text-[10px] mt-0.5 leading-snug line-clamp-2">{photo.caption}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="text-sm font-medium text-envico-green hover:underline"
            >
              View all 24 photos →
            </Link>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Location
          </h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.7!2d-0.41!3d51.508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s45+Bishops+Road%2C+Hayes%2C+UB3+2TE!5e0!3m2!1sen!2suk!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bishops House location map"
            />
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-6 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-envico-green mt-0.5 flex-shrink-0" />
              <span>45 Bishops Road, Hayes, Middlesex, UB3 2TE</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone size={16} className="text-envico-green mt-0.5 flex-shrink-0" />
              <a href="tel:02087973601" className="hover:underline text-envico-green">
                020 8797 3601
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Request viewing CTA */}
      <section className="py-16 bg-envico-blue text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Request a Viewing</h2>
          <p className="text-blue-200 mb-8">
            We welcome visits from prospective residents, families and local
            authority commissioners. Contact us to arrange a convenient time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#referral"
              className="bg-envico-gold text-white font-semibold px-8 py-4 rounded-md hover:bg-yellow-600 transition-colors"
            >
              Submit a Referral
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
