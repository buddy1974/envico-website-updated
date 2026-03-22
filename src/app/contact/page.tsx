import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Envico Supported Living",
  description:
    "Get in touch with Envico Supported Living. Head office in Hayes, Middlesex. Call 020 8797 9974 or send us a message.",
};

const offices = [
  {
    name: "Head Office",
    address: "59 Commonwealth Avenue, Hayes, UB3 2PN",
    phone: "020 8797 9974",
    tel: "02087979974",
    color: "bg-envico-blue",
  },
  {
    name: "Bishops House",
    address: "45 Bishops Road, Hayes, UB3 2TE",
    phone: "020 8797 3601",
    tel: "02087973601",
    color: "bg-envico-green",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00am – 5:30pm" },
  { day: "Saturday", time: "10:00am – 2:00pm" },
  { day: "Sunday", time: "Closed (emergency line active)" },
  { day: "Emergency / Out of Hours", time: "020 8797 9974" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-20 bg-envico-blue text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Contact Us</h1>
          <p className="text-blue-100 max-w-xl mx-auto text-lg">
            Our team is here to help. Whether you are making a referral,
            enquiring about a placement or need general information — get in
            touch.
          </p>
        </div>
      </section>

      {/* Office cards */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offices.map((o) => (
              <div
                key={o.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className={`${o.color} px-6 py-4`}>
                  <h3 className="text-white font-bold text-lg">{o.name}</h3>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start gap-3 text-sm text-gray-700">
                    <MapPin size={16} className="text-envico-green mt-0.5 flex-shrink-0" />
                    <span>{o.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone size={16} className="text-envico-green flex-shrink-0" />
                    <a
                      href={`tel:${o.tel}`}
                      className="text-envico-green font-semibold hover:underline"
                    >
                      {o.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Mail size={16} className="text-envico-green flex-shrink-0" />
                    <a
                      href="mailto:ops@envicosl.co.uk"
                      className="text-envico-green hover:underline"
                    >
                      ops@envicosl.co.uk
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + hours */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Side info */}
            <div className="space-y-8">
              {/* Hours */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-envico-green" />
                  <h3 className="font-semibold text-gray-900">Office Hours</h3>
                </div>
                <ul className="space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between text-sm">
                      <span className="text-gray-600">{h.day}</span>
                      <span className="font-medium text-gray-800">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Referral CTA */}
              <div className="bg-envico-green-light border border-green-200 rounded-xl p-5">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Making a Referral?
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  Use our dedicated referral form for care placements and
                  packages — our team responds within 24 hours.
                </p>
                <Link
                  href="/#referral"
                  className="block text-center bg-envico-green text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-envico-green-dark transition-colors"
                >
                  Go to Referral Form
                </Link>
              </div>

              {/* Portal */}
              <div className="bg-envico-blue rounded-xl p-5 text-white">
                <h4 className="font-semibold mb-2">Staff &amp; Family Portal</h4>
                <p className="text-blue-200 text-sm mb-4">
                  Access care updates, rotas and documentation through our
                  online portal.
                </p>
                <Link
                  href="/portal"
                  className="block text-center bg-white text-envico-blue text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Portal Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Find Us</h2>
          <div className="rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=59+Commonwealth+Avenue+Hayes+Middlesex+UB3+2PN&output=embed"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Envico location — Hayes, Middlesex"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
