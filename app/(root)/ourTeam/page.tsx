"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col overflow-x-hidden">
      {/* Header Wrapper */}
      {/* <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div> */}

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
            alt="Our Team Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 via-white/20 to-black/80 backdrop-blur-md z-10" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full z-0" />
        
        <div className="relative z-20 text-center px-4 mt-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-neutral-950 uppercase">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">TEAM</span>
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-white">Our Team</span>
          </nav>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="flex-1 w-full mx-auto px-6 py-20 flex flex-col items-center text-center justify-center">
  
        <div className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm mb-12 transition-transform hover:-translate-y-1">
          <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
          <span className="text-xs md:text-sm font-bold text-gray-800 tracking-widest uppercase">Our Team</span>
        </div>

      

      </main>
    </div>
  );
}