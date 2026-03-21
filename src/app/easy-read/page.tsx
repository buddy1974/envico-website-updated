import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Easy Read | Envico Supported Living",
  description: "Easy read version of the Envico Supported Living website — simple language about our care services in Hayes, Middlesex.",
};

export default function EasyReadPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-10 bg-envico-green text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-5xl mb-4">📖</p>
          <h1 className="text-4xl font-bold mb-3">Easy Read</h1>
          <p className="text-2xl text-green-100">Simple information about Envico</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-2xl mx-auto px-6 space-y-12">

          {/* Who are we */}
          <div className="bg-blue-50 rounded-2xl p-8">
            <p className="text-4xl mb-4">🏠</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who are we?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-3">
              We are <strong>Envico Supported Living</strong>.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-3">
              We help adults with learning disabilities and autism.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed">
              We are registered with the government. This means we are safe and checked.
            </p>
          </div>

          {/* Where are we */}
          <div className="bg-green-50 rounded-2xl p-8">
            <p className="text-4xl mb-4">📍</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where are we?</h2>
            <p className="text-2xl text-gray-700 leading-relaxed mb-3">
              We are in <strong>Hayes, Middlesex</strong>.
            </p>
            <p className="text-2xl text-gray-700 leading-relaxed mb-3">
              Our house is called <strong>Bishops House</strong>.
            </p>
            <div className="bg-white rounded-xl p-5 mt-4 text-xl text-gray-700">
              <p>📬 45 Bishops Road</p>
              <p>Hayes, Middlesex</p>
              <p>UB3 2TE</p>
            </div>
          </div>

          {/* What do we do */}
          <div className="bg-yellow-50 rounded-2xl p-8">
            <p className="text-4xl mb-4">✨</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What do we do?</h2>
            <ul className="space-y-4">
              {[
                "🛏️  We give people their own bedroom",
                "🧑‍🤝‍🧑  We help people make friends",
                "🏘️  We help people go out in their community",
                "💊  We help with medicines",
                "🍳  We help with cooking and daily tasks",
                "🌙  Staff are there every day and night",
              ].map((item) => (
                <li key={item} className="text-2xl text-gray-700 leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who do we help */}
          <div className="bg-purple-50 rounded-2xl p-8">
            <p className="text-4xl mb-4">🤝</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who do we help?</h2>
            <ul className="space-y-3">
              {[
                "Adults with learning disabilities",
                "Adults with autism",
                "Adults with ADHD",
                "Adults with mental health needs",
              ].map((item) => (
                <li key={item} className="text-2xl text-gray-700 flex items-center gap-3">
                  <span className="text-purple-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact us */}
          <div className="bg-envico-navy rounded-2xl p-8 text-white text-center">
            <p className="text-4xl mb-4">📞</p>
            <h2 className="text-3xl font-bold mb-4">Talk to us</h2>
            <p className="text-2xl text-blue-200 mb-6">
              We are happy to help. You can call or email us.
            </p>
            <a
              href="tel:02087979974"
              className="block bg-envico-gold text-white text-2xl font-bold px-8 py-5 rounded-xl mb-4 hover:opacity-90 transition-opacity"
            >
              📞 020 8797 9974
            </a>
            <a
              href="mailto:info@envicosl.co.uk"
              className="block bg-white/10 text-white text-xl px-8 py-4 rounded-xl hover:bg-white/20 transition-colors"
            >
              ✉️ info@envicosl.co.uk
            </a>
          </div>

          {/* Back to main site */}
          <div className="text-center">
            <Link
              href="/"
              className="text-lg text-envico-blue hover:underline"
            >
              ← Back to main website
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
