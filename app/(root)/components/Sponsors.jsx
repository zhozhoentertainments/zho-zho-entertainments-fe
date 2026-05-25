"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const partnersData = [
  {
    id: 1,
    name: "Sports Authority of Telangana",
    logo: "/partnership/sports-authority-of-telangana.png",
    defaultBorder: "border-amber-400/60 bg-amber-50/40",
    hoverBorder: "group-hover:border-amber-500",
    glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.35)]",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    id: 2,
    name: "Kho Kho Federation of India",
    logo: "/partnership/kkfi.png",
    defaultBorder: "border-blue-400/60 bg-blue-50/40",
    hoverBorder: "group-hover:border-blue-500",
    glow: "group-hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    id: 3,
    name: "Telangana Kho Kho Association",
    logo: "/partnership/kho-kho-telangana.png",
    defaultBorder: "border-violet-400/60 bg-violet-50/40",
    hoverBorder: "group-hover:border-violet-500",
    glow: "group-hover:shadow-[0_0_35px_rgba(124,58,237,0.35)]",
    gradient: "from-violet-400 to-fuchsia-500",
  },
];

export default function Sponsors() {
  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-600">
              Official Endorsements
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600">Partners</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Proudly recognized and structurally supported by leading sports organizations empowering the future of indigenous sports platforms.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {partnersData.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex flex-col items-center bg-white border border-slate-100 rounded-[32px] p-8 text-center transition-all duration-300 hover:bg-slate-50/30"
            >
              <div className="w-full flex flex-col items-center flex-grow">
                
                {/* Compact Circular Container with Defualt Border Colored Accordingly */}
                <div className={`relative w-40 h-40 rounded-full border-2 flex items-center justify-center p-4 transition-all duration-500 group-hover:scale-105 ${partner.defaultBorder} ${partner.hoverBorder} ${partner.glow}`}>
                  
                  {/* Outer Glow Ring on Hover */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${partner.gradient} opacity-0 group-hover:opacity-10 blur-md transition-all duration-500`} />
                  
                  {/* Inner Rotating Dashed Ring */}
                  <div className="absolute inset-1.5 rounded-full border border-dashed border-slate-300/60 group-hover:rotate-90 group-hover:border-slate-400/40 transition-all duration-700 pointer-events-none" />
                  
                  {/* Maximized Large Image / Small Box Ratio */}
                  <div className="relative w-32 h-32 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={128}
                      height={128}
                      className="object-contain filter drop-shadow-sm transition-all duration-300"
                      priority
                    />
                  </div>
                </div>

                {/* Typography Block */}
                <h3 className="mt-8 text-lg font-black text-slate-900 tracking-tight leading-snug transition-colors duration-300 group-hover:text-violet-600 max-w-xs">
                  {partner.name}
                </h3>
              </div>

              {/* Bottom Decorative Finish Line to fill empty feel */}
            <div className="w-full mt-10 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 opacity-50 group-hover:opacity-100 transition-all duration-500">
  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-violet-500 transition-colors duration-300" />
  <span className="w-16 h-[2px] bg-slate-200 group-hover:bg-gradient-to-r group-hover:from-violet-500 group-hover:to-fuchsia-500 group-hover:w-24 transition-all duration-500 ease-out" />
  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-fuchsia-500 transition-colors duration-300" />
</div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}