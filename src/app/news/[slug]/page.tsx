import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { articles, getArticle } from "@/data/news";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Envico Supported Living`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Navbar />

      <section className="pt-28 pb-12 bg-envico-navy text-white">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-blue-300 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Back to News
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-blue-300 mb-4">
            <Calendar size={12} />
            <span>{article.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">{article.title}</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed border-l-4 border-envico-green pl-4">
            {article.excerpt}
          </p>
          <div className="space-y-6">
            {article.content.map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-envico-blue hover:underline"
            >
              <ArrowLeft size={14} /> All Articles
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-envico-navy text-white text-sm font-semibold px-6 py-2.5 rounded-md hover:bg-envico-blue transition-colors"
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
