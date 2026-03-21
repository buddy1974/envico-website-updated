"use client";
import { useEffect, useState } from "react";

const API = process.env.NEXT_PUBLIC_CAREOS_API;

interface Review {
  id?: string;
  rating?: number;
  comment?: string;
  reviewer?: string;
  name?: string;
  date?: string;
}

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/reviews`)
      .then((r) => r.json())
      .then((d) => {
        const list: Review[] = Array.isArray(d) ? d : d.reviews ?? d.data ?? [];
        setReviews(list.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm animate-pulse h-40" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!reviews.length) return null;

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Verified Family Reviews</h2>
          <p className="text-gray-500 text-sm">Based on verified family reviews submitted through our care portal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.id ?? i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex gap-0.5 mb-3">
                {[...Array(r.rating ?? 5)].map((_, j) => (
                  <span key={j} className="text-envico-gold text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                &ldquo;{r.comment ?? "Great service."}&rdquo;
              </p>
              <p className="text-xs font-semibold text-gray-500">
                — {r.reviewer ?? r.name ?? "Anonymous"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
