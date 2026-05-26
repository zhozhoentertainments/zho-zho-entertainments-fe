"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowUpRight, ShieldCheck } from "lucide-react";

const partnersData = [
  {
    id: 1,
    name: "Sports Authority of Telangana",
    logo: "/partnership/sports-authority-of-telangana.png",
    defaultBorder: "border-amber-400/40 bg-amber-50/30",
    hoverBorder: "group-hover:border-amber-500",
    glow: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.25)]",
    gradient: "from-amber-400 to-orange-500",
    desc: "Official institutional event endorsement"
  },
  {
    id: 2,
    name: "Kho Kho Federation of India",
    logo: "/partnership/kkfi.png",
    defaultBorder: "border-blue-400/40 bg-blue-50/30",
    hoverBorder: "group-hover:border-blue-500",
    glow: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]",
    gradient: "from-blue-400 to-indigo-500",
    desc: "National scale championship federation alliance"
  },
  {
    id: 3,
    name: "Telangana Kho Kho Association",
    logo: "/partnership/kho-kho-telangana.png",
    defaultBorder: "border-violet-400/40 bg-violet-50/30",
    hoverBorder: "group-hover:border-violet-500",
    glow: "group-hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]",
    gradient: "from-violet-400 to-fuchsia-500",
    desc: "Regional sports execution network alignment"
  },
];

export default function Sponsors() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-slate-50 py-24 lg:py-32 overflow-hidden perspective-1000">
      {/* Premium Minimalist Background Grid */}
      <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      
      {/* Clean Smooth Ambient Vector Glows */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/40 to-fuchsia-200/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/40 to-pink-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-left max-w-3xl mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500">
              Institutional Network
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none">
            Validated by <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 pb-2">
              Leadership
              {/* Premium absolute underline */}
              <span className="absolute bottom-0 left-0 w-full h-[4px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 rounded-full" />
            </span>
          </h2>
          <p className="text-slate-500 text-base max-w-xl leading-relaxed font-medium mt-2">
            Building premium experiences, elite brand partnerships, and monumental corporate entertainment setups backed by solid organizational trust.
          </p>
        </div>

        {/* Master Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Highly Animated, Rotated Photo Component (7-Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div 
              className="relative w-full cursor-pointer select-none transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered 
                  ? "rotate(0deg) scale(1.02) translateY(-8px)" 
                  : "rotate(-2deg) scale(1) translateY(0px)",
                transformStyle: "preserve-3d"
              }}
            >
              {/* Backside Shadow Decking Effect */}
              <div className="absolute inset-0 bg-slate-900/5 rounded-[32px] translate-x-3 translate-y-3 blur-md -z-10 transition-transform duration-700 ease-out" />
              
              {/* Main Premium Picture Border Container */}
              <div className="relative rounded-[32px] overflow-hidden bg-white border border-slate-200/80 p-3 shadow-xl transition-all duration-500">
                
                {/* Image Element */}
                <div className="relative overflow-hidden rounded-[22px] aspect-[4/3] bg-slate-100">
                  <Image 
                    src="/inaugration-image.jpeg" 
                    alt="Zho Zho Entertainments Recognition Meet" 
                    fill
                    className="object-cover transition-transform duration-[1000ms] ease-out scale-100 group-hover:scale-105"
                    priority
                  />
                  {/* Glassmorphism Dynamic Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`} />
                </div>
                
                {/* Floating Modern Information Tag */}
                <div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl bg-white/90 border border-white/40 p-5 rounded-2xl shadow-xl transform transition-transform duration-700 ease-out">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Strategic Alliance</span>
                      </div>
                      <h4 className="text-md font-black text-slate-900">A proud moment for Indian Kho Kho</h4>
                    </div>
                    {/* <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md">
                      <ArrowUpRight className="w-5 h-5" />
                    </div> */}
                  </div>
                </div>

              </div>
            </div>

            {/* Custom Business-Aligned Description underneath image */}
            <div className={`mt-8 flex items-start gap-3 transition-all duration-700 ease-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-50 -translate-y-2'}`}>
              <ShieldCheck className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                Our collaborative framework helps scale premium corporate properties, large-scale public entertainment events, and elite athletic championships with precision management and verified execution standards.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Sponsor List (Aligned from the exact top) (5-Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-start space-y-5">
            <div className="pb-2 border-b border-slate-200/60">
              <span className="text-xs font-black uppercase tracking-[0.15em] text-violet-600">
                Our Trusted Premium Sponsors
              </span>
            </div>
            
            {partnersData.map((partner) => (
              <div
                key={partner.id}
                className="group relative flex items-center bg-white border border-slate-200/70 rounded-2xl p-5 transition-all duration-300 hover:bg-slate-50/50 hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Bigger Premium Circular Logo Component (Increased from w-20 h-20 to w-28 h-28) */}
                <div className={`relative w-28 h-28 rounded-full border-2 flex items-center justify-center p-3 transition-all duration-500 group-hover:scale-105 flex-shrink-0 ${partner.defaultBorder} ${partner.hoverBorder} ${partner.glow}`}>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${partner.gradient} opacity-0 group-hover:opacity-10 blur-md transition-all duration-500`} />
                  <div className="absolute inset-1 rounded-full border border-dashed border-slate-300/60 group-hover:rotate-90 group-hover:border-slate-400/40 transition-all duration-700 pointer-events-none" />
                  
                  {/* Upgraded internal container sizing */}
                  <div className="relative w-18 h-18 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={72}
                      height={72}
                      className="object-contain filter drop-shadow-sm transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Typography Metadata Block */}
                <div className="ml-5 flex-grow space-y-0.5">
                  <h3 className="text-base font-black text-slate-900 tracking-tight leading-snug transition-colors duration-300 group-hover:text-violet-600">
                    {partner.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium tracking-wide">
                    {partner.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}