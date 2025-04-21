"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-white text-center overflow-hidden rounded-xl shadow mb-8">
      <Image
        src="/office-hero.jpg"
        alt="Modern empty office"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />

      <motion.div
        className="relative z-20 px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          NGT Projects
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl font-medium mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Transforming Your Concept Into Reality
        </motion.h2>

        <motion.a
          href="/projects"
          className="inline-block bg-[var(--color-orange)] text-white px-6 py-3 rounded font-medium hover:opacity-90 transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
        >
          View Our Work
        </motion.a>
      </motion.div>
    </section>
  );
}
