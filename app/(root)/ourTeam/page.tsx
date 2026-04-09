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
      <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div>

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

      

        {/* Advisory Board Section */}
        <section className="w-full max-w-7xl  px-4 flex flex-col items-center">
          <div className="text-center ">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter">
              Advisory <span className="text-purple-600">Board</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full">
            {/* Mondira Jaisimha Card */}
            <div className="bg-white rounded-[2.5rem] p-6 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col text-left hover:-translate-y-2">
              <div className="relative h-96 w-full rounded-[2rem] overflow-hidden bg-neutral-100 mb-6">
                <Image 
                  src="/monindra.jpeg" 
                  alt="Mondira Jaisimha" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col gap-4 flex-1 px-2">
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 tracking-tighter uppercase mb-1 drop-shadow-sm group-hover:text-purple-600 transition-colors">
                    Mondira Jaisimha
                  </h3>
                  <p className="text-purple-600 font-bold text-xs tracking-[0.2em] uppercase">Advisory Board</p>
                </div>
                <div className="space-y-3">
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    Former Senior Advocacy Director at Heroes Project with deep background in HIV awareness, education, and entertainment. Co-runs Cura Servitium, an eldercare company.
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    A passionate advocate closely involved with stray animals welfare, singing (Hyderabad Voices), and theatre.
                  </p>
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">Social Impact</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">Eldercare</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">Theatre</span>
                </div>
              </div>
            </div>

            {/* Dr. Venkateshwarlu N Card */}
            <div className="bg-white rounded-[2.5rem] p-6 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 border border-neutral-100 flex flex-col text-left hover:-translate-y-2">
              <div className="relative h-96 w-full rounded-[2rem] overflow-hidden bg-neutral-100 mb-6 flex items-center justify-center">                
                <Image 
                  src="/dr-venkat.jpg" 
                  alt="Prof. (Dr.) Venkateshwarlu N" 
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                /> 
               
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="flex flex-col gap-4 flex-1 px-2">
                <div>
                  <h3 className="text-2xl font-black text-neutral-900 tracking-tighter uppercase mb-1 drop-shadow-sm group-hover:text-purple-600 transition-colors">
                    Prof. (Dr.) Venkateshwarlu N
                  </h3>
                  <p className="text-purple-600 font-bold text-[11px] tracking-[0.2em] uppercase">Advisory Board</p>
                </div>
                <div className="space-y-3">
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    Professor of Law and Dean Faculty of Law, Satavahana University. Former Jt. Secretary, Legal Bureau, UGC New Delhi.
                  </p>
                  <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                    Expertise in Corporate and Securities Laws, ADR, ODR, IT Law, IPR, and Human Rights with extensive academic and administrative experience.
                  </p>
                  <div className="flex flex-col gap-1 mt-2 text-xs text-neutral-500 font-medium">
                    <a href="mailto:drvenkatlaw@gmail.com" className="hover:text-purple-600 transition-colors">
                       ✉️ drvenkatlaw@gmail.com
                    </a>
                    <a href="tel:09441460100" className="hover:text-purple-600 transition-colors">
                       📞 +91 94414 60100 / +91 81068 94644
                    </a>
                  </div>
                </div>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">Law & IPR</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">Human Rights</span>
                  <span className="text-[10px] font-bold px-3 py-1.5 bg-purple-50 border border-purple-100 text-purple-700 rounded-lg uppercase tracking-wider">ADR/ODR</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}