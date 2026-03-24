"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "mission",
    badge: "01. Our Mission",
    title: "Enriching Lives Through Storytelling & Culture.",
    description:
      "To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional creative experiences across all platforms.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
    link: "/mission",
    reverse: false,
  },
  {
    id: "vision",
    badge: "02. Our Vision",
    title: "Becoming a ₹100 Cr Global Entertainment Brand.",
    description:
      "We constantly push the boundaries of creativity and technology to redefine luxury entertainment and cinematic experiences.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    link: "/vision",
    reverse: true,
  },
  {
    id: "purpose",
    badge: "03. Our Purpose",
    title: "Creating Unforgettable High-Impact Experiences.",
    description:
      "From corporate retreats to massive festivals, we build moments that people never forget.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    link: "/purpose",
    reverse: false,
  },
  {
    id: "objectives",
    badge: "04. Core Objectives",
    title: "Mastering Nine Verticals of Entertainment.",
    description:
      "Sports, film, digital, events — seamless execution across every domain.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "/objectives",
    reverse: true,
  },
];

export default function Landing() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-500/10 blur-[160px]" />

      <div className="mx-auto px-6 md:px-12 flex flex-col gap-32">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            id={i === 0 ? "mission-section" : undefined} 
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`flex flex-col ${
              section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 lg:gap-28`}
          >

            
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${section.image})` }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 1 }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-red-500/10 transition duration-500" />
            </motion.div>

            {/* TEXT */}
            <div className="w-full lg:w-1/2 flex flex-col text-black">

              {/* BADGE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full border border-black/20 bg-black/5 px-5 py-2 backdrop-blur-md mb-8 w-fit"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span className="text-xs uppercase tracking-[0.25em] text-black/90 font-semibold">
                  {section.badge}
                </span>
              </motion.div>

              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              >
                {section.title}
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-black/60 text-lg leading-relaxed mb-10 max-w-xl"
              >
                {section.description}
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href={section.link}
                  className="group flex items-center gap-5"
                >
                  <span className="text-black uppercase tracking-[0.2em] text-sm font-semibold group-hover:text-purple-400 transition">
                    Explore {section.id}
                  </span>

                  <div className="w-14 h-14 rounded-full bg-black/5 border border-black/20 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-transparent group-hover:shadow-[0 0 30px rgba(128,0,128,0.6)] transition-all duration-300">
                    <ArrowUpRight className="w-6 h-6 group-hover:scale-110 transition" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}