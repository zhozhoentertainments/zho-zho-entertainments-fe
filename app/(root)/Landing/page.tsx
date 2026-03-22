"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const sections = [
  {
    id: "mission",
    badge: "01. Our Mission",
    title: "Enriching Lives Through Storytelling & Culture.",
    description: "To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional creative experiences across all platforms, inspiring action and connection nationwide.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop", 
    link: "/mission",
    reverse: false
  },
  {
    id: "vision",
    badge: "02. Our Vision",
    title: "Becoming a ₹100 Cr Global Entertainment Brand.",
    description: "We constantly push the boundaries of creativity and technology to redefine luxury entertainment, sports management, and immersive cinematic experiences for the modern era.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop", 
    link: "/vision",
    reverse: true
  },
  {
    id: "purpose",
    badge: "03. Our Purpose",
    title: "Creating Unforgettable High-Impact Experiences.",
    description: "From corporate retreats to massive cultural festivals, our purpose is to bridge gaps, build enduring memories, and create opportunities that elevate communities on a global scale.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop", 
    link: "/purpose",
    reverse: false
  },
  {
    id: "objectives",
    badge: "04. Core Objectives",
    title: "Mastering Nine Verticals of Entertainment.",
    description: "Expert coordination across sports management, live entertainment, digital media, and film distribution to ensure flawless execution and maximum audience engagement.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop", 
    link: "/objectives",
    reverse: true
  }
];

export default function Landing() {
  return (
    <div className="w-full flex justify-center py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1400px] px-6 md:px-12 xl:px-0 flex flex-col gap-24 md:gap-40">
        {sections.map((section) => (
          <div 
            key={section.id} 
            id={`${section.id}-section`}
            className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24 group`}
          >
            {/* Image Container */}
            <div className="w-full lg:w-1/2 relative rounded-[2.5rem] overflow-hidden aspect-[4/3] lg:aspect-square shadow-2xl ring-1 ring-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${section.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2.5 backdrop-blur-sm mb-8 transition-transform hover:-translate-y-1">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs md:text-sm font-bold text-white/90 tracking-[0.15em] uppercase">{section.badge}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-md">
                {section.title}
              </h2>
              
              <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium mb-12 max-w-xl">
                {section.description}
              </p>
              
              <Link href={section.link} className="group/btn flex items-center gap-5">
                <span className="text-white text-lg font-bold tracking-widest uppercase group-hover/btn:text-red-400 transition-colors">
                  Explore {section.id}
                </span>
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/20 flex items-center justify-center group-hover/btn:bg-red-600 group-hover/btn:border-transparent transition-all">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform stroke-[2.5]" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
