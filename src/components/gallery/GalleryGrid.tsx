"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems } from "@/lib/data";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item, index) => (
          <button
            key={item.title}
            onClick={() => setActiveIndex(index)}
            className="group relative overflow-hidden rounded-3xl focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {item.category}
              </p>
              <p className="text-lg font-heading">{item.title}</p>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setActiveIndex(null);
              }
            }}
          >
            <button
              className="absolute right-6 top-6 text-white text-sm"
              onClick={() => setActiveIndex(null)}
            >
              Fermer
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="max-w-4xl"
            >
              <Image
                src={galleryItems[activeIndex].image}
                alt={galleryItems[activeIndex].title}
                width={1200}
                height={800}
                sizes="100vw"
                className="rounded-2xl object-cover"
              />
              <p className="mt-4 text-center text-white">
                {galleryItems[activeIndex].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

