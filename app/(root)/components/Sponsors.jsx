"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Award, Target, Landmark } from "lucide-react";
import { motion } from "framer-motion";

// Swiper Core and Modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper Styles
import "swiper/css";

const basePartners = [
  {
    id: 1,
    name: "Sports Authority of Telangana",
    logo: "/partnership/sports-authority-of-telangana.png",
    zone: "State Institutional Body",
    bgAccent: "group-hover:bg-amber-500/[0.02]",
    borderGlow: "group-hover:border-amber-500/30",
    dotColor: "bg-amber-400"
  },
  {
    id: 2,
    name: "Kho Kho Federation of India",
    logo: "/partnership/kkfi.png",
    zone: "National Apex Body",
    bgAccent: "group-hover:bg-blue-500/[0.02]",
    borderGlow: "group-hover:border-blue-500/30",
    dotColor: "bg-blue-500"
  },
  {
    id: 3,
    name: "Telangana Kho Kho Association",
    logo: "/partnership/kho-kho-telangana.png",
    zone: "Regional Affiliate Unit",
    bgAccent: "group-hover:bg-violet-500/[0.02]",
    borderGlow: "group-hover:border-violet-500/30",
    dotColor: "bg-violet-500"
  }
];

// Duplicating the array to guarantee Swiper loop mechanics never freeze up with 3 items
const partnersData = [...basePartners, ...basePartners, ...basePartners, ...basePartners];

export default function Sponsors() {
  return (
    <section className="relative bg-[#fafafa] py-12 sm:py-20 overflow-hidden perspective-1000">

      {/* Premium Minimal Tech Grid background overlay */}
      <div className="absolute inset-0 opacity-[0.25] bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Soft Cinematic Dynamic Mesh Glows */}
      <div className="absolute top-12 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/30 to-fuchsia-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-[400px] h-[400px] bg-gradient-to-tr from-amber-100/30 to-pink-100/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-16 z-10">

        {/* TOP INTERACTIVE SPLIT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Big Scale Image with Mobile & Desktop Responsive Framer Motion Tilt */}
          {/* Left Column: Big Scale Image Container */}
          <div className="lg:col-span-7 w-full relative">
            <motion.div
              // 1. Initial state me card -3 degree tilted rahega
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // 2. Hover par saari rotations 0 ho jayengi aur card bilkul seedha ho jayega
              whileHover={{
                rotate: 0,    // Yeh card ka main -3 angle seedha karega
                rotateY: 0,
                rotateX: 0,
                rotateZ: 0,
                scale: 1.04   // Seedha hone ke saath card smoothly bada dikhega
              }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }} // Fast and premium responsive transition
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-[28px] overflow-hidden bg-white shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-slate-200/80 p-3 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent rounded-[24px] pointer-events-none -z-10" />

              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-100 shadow-inner">
                <Image
                  src="/inaugration-image.jpeg"
                  alt="Validating Sports Leadership Portal Meet"
                  fill
                  priority
                  // 3. Yahan se group-hover:scale ko hata diya hai taaki image card ke sath hi match kare aur alag se tilt jitter na kare
                  className="object-cover transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-End Editorial Typography Box */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200/80 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-violet-600 animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.25em] uppercase text-slate-500">
                Premium Partners 
              </span>
            </div>

            <div className="space-y-3">
              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[0.95]">
                Notable by <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 pb-2">
                  Endorsements
                </span>
              </h2>
              <div className="w-16 h-[4px] bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full" />
            </div>

            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-md">
              Building monumental public properties, premium corporate experiences, and high-performance athletic systems backed by undisputed organizational trust.
            </p>
          </div>
        </div>

        {/* MIDDLE RAIL BLOCK: Connected Infinite Large Left-to-Right Loop Marquee Slider */}
        <div className="w-full relative py-8 border-y border-slate-200/60 overflow-visible bg-slate-50/40">

          {/* High-contrast Structural Pipeline Rail tracking passing behind the cards */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-300 pointer-events-none z-0 -translate-y-1/2 shadow-sm" />

          {/* Luxury Soft Side Mask Faders */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-20 pointer-events-none hidden sm:block" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-20 pointer-events-none hidden sm:block" />

          <div className="w-full select-none overflow-hidden z-10 relative py-2">
            <Swiper
              modules={[Autoplay]}
              direction="horizontal"
              loop={true}
              speed={4200} // Continuous uniform smooth linear motion pace
              allowTouchMove={true}
              slidesPerView="auto"
              spaceBetween={32}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true // Drives slide direction smoothly from Left-to-Right
              }}
              className="premium-marquee-swiper !overflow-visible"
            >
              {partnersData.map((partner, index) => (
                <SwiperSlide key={`${partner.id}-${index}`} className="!w-auto">

                  {/* Card wrapper container */}
                  <div className={`group relative flex flex-col items-center justify-center bg-white border border-slate-200/90 rounded-2xl p-6 w-[260px] sm:w-[280px] h-[220px] sm:h-[240px] text-center transition-all duration-300 hover:shadow-[0_20px_45px_rgba(124,58,237,0.06)] hover:-translate-y-1.5 cursor-pointer select-none ${partner.bgAccent} ${partner.borderGlow}`}>

                    {/* Glowing Interactive Active Status Radar Dot */}
                    <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full transition-all duration-300 ${partner.dotColor} opacity-30 group-hover:opacity-100 group-hover:scale-125`} />

                    {/* Ultra-Clean No Box Logo Frame (logos utilize 100% space and stay proper large) */}
                    <div className="relative w-24 h-24 flex items-center justify-center mb-3 z-10 transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={96} // Full asset visibility size allocation
                        height={96}
                        className="object-contain filter contrast-[0.95] group-hover:contrast-100 transition-all duration-300"
                      />
                    </div>

                    {/* Text block positioned cleanly beneath the image logo */}
                    <div className="space-y-1 w-full z-10">
                      <h3 className="text-xs sm:text-sm font-black text-slate-800 tracking-tight line-clamp-2 px-1 transition-colors duration-300 group-hover:text-violet-600">
                        {partner.name}
                      </h3>
                      <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mt-0.5">
                        {partner.zone}
                      </p>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* BASE BLOCK: Highly Organized Structured Documentation Framework (500 Words) */}
        <div className="border-t border-slate-200/50 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left w-full text-slate-600">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <Award className="w-4.5 h-4.5 text-violet-600 flex-shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">Operational Integrity & Regulation</h4>
            </div>
            <p className="text-xs leading-relaxed font-medium text-slate-400">
              The Kho Kho Federation of India (KKFI) operates as the apex statutory authority recognized directly by the Ministry of Youth Affairs and Sports, Government of India. Tasked with overall administrative core standardizations, rule optimizations, and managing systemic multi-tier tournament properties, the federation certifies foundational leagues across territories. By upgrading clay layouts into high-tensile shock-absorbing indoor synthetic mats, KKFI has successfully transformed an ancient Indian indigenous game into a prime-time athletic discipline demanding sudden velocity and tactical tracking.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <Target className="w-4.5 h-4.5 text-fuchsia-600 flex-shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">State Affiliation Networks</h4>
            </div>
            <p className="text-xs leading-relaxed font-medium text-slate-400">
              Through administrative structural layers with authorized units like the Telangana Kho Kho Association, the federation orchestrates uniform telemetry data tracking logs, standardized officiating parameters, and digital scoring registers across events. This integrated selection matrix scouts exceptional talent right from sub-junior brackets up to state selections. These regional boards supply key organizational safety, validating corporate setups, state league expansions, and academic physical system integrations.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-900">
              <Landmark className="w-4.5 h-4.5 text-pink-600 flex-shrink-0" />
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-800">Institutional Scaling & Security</h4>
            </div>
            <p className="text-xs leading-relaxed font-medium text-slate-400">
              The operational model integrates corporate bodies and structural units such as the Sports Authority of Telangana to cultivate robust career safety pipelines for high-performance athletes. This framework helps secure sustainable employment fields and infrastructural funding matrices, converting an ancient playground sport into a commercial property. Consequently, the game attracts major brand asset endorsements, nationwide prime-time satellite broadcast streams, and extensive public viewing setups under validated management.
            </p>
          </div>
        </div>

      </div>

      {/* Global CSS Style tag to enforce pure linear transition speed on Swiper marquee tracking bounds */}
      <style jsx global>{`
        .premium-marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}