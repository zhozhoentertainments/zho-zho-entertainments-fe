"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";

export default function volunteersPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans flex flex-col">
      <div className="relative w-full h-[60vh] min-h-[400px] md:h-[500px] rounded-b-[2.5rem] bg-[url('/bg.avif')] bg-cover bg-center overflow-hidden text-white shadow-2xl">
    
      <div className="absolute inset-0 bg-black/60 md:bg-black/50 lg:bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-0"></div>

        <div className="absolute top-0 left-0 right-0 z-50 px-10 md:px-20 lg:px-32 xl:px-44 w-full mx-auto max-w-[1600px]">
          <Header />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg tracking-tight mb-4">
            Volunteers
          </h1>
          <div className="text-sm md:text-base font-medium text-white/80 tracking-[0.2em] uppercase flex items-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="text-white/30 text-xs">/</span> 
            <span className="text-white cursor-default">Volunteers</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <main className="flex-1 w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
  
        <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm mb-12 transition-transform hover:-translate-y-1">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <span className="text-xs md:text-sm font-bold text-gray-800 tracking-widest uppercase">Volunteers</span>
        </div>

        <div className="flex flex-col gap-12  text-gray-800">
          <p className="text-xl md:text-2xl lg:text-[28px] leading-relaxed lg:leading-[1.8] font-medium text-gray-600 italic">
            "To be a leading, diversified entertainment organisation recognised for creative excellence, technological innovation, and social impact — shaping the future of entertainment across sports, music, culture, gaming, travel, and live experiences."
          </p>
          
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>
      </main>
    </div>
  );
}