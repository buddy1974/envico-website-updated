import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Updates | Envico Supported Living",
  description:
    "Latest news, updates and insights from Envico Supported Living — CQC compliance, staff training, and care quality updates from Hayes, Middlesex.",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-28 pb-16 bg-envico-dark text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-envico-gold mb-4 inline-block">
            Latest Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News &amp; Insights</h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Updates from Envico Supported Living — training, compliance, and what's
            happening at Bishops House.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-envico-blue hover:underline"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
