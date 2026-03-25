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
      
    </div>
  );
}