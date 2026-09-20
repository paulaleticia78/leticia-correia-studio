"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { galleryFilters, galleryItems, type GalleryItem } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryItem["category"] | "todos">("todos");

  const filtered = useMemo(
    () => (active === "todos" ? galleryItems : galleryItems.filter((i) => i.category === active)),
    [active]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {galleryFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-200 ${
              active === f.id
                ? "bg-ink-900 text-cream-50"
                : "bg-ink-900/5 text-ink-800 hover:bg-ink-900/10"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <div key={item.id} className="group relative aspect-square overflow-hidden rounded-2xl bg-ink-900/5">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 768px) 30vw, 46vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
