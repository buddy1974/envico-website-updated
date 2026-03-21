"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const API = process.env.NEXT_PUBLIC_CAREOS_API;

export default function CQCRating() {
  const [rating, setRating] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API}/api/cqc/rating`)
      .then((r) => r.json())
      .then((d) => setRating(d.rating ?? d.overallRating ?? null))
      .catch(() => {});
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Image
        src="/images/CQC.jpg"
        alt="CQC Registered"
        width={28}
        height={28}
        className="rounded flex-shrink-0"
      />
      <div>
        <p className="text-xs font-bold text-white leading-none">CQC Registered</p>
        {rating && (
          <p className="text-xs text-envico-blue mt-0.5 leading-none">{rating}</p>
        )}
      </div>
    </div>
  );
}
