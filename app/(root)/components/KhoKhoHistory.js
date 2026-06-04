// components/KhoKhoHistory.js
import React from 'react';
import { 
  History, 
  Milestone, 
  Tv, 
  Sparkles,
  Trophy,
  TrendingUp,
  Zap
} from 'lucide-react';

export default function KhoKhoHistory() {
  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-24 px-4 sm:px-6 lg:px-8 ">
      
      {/* 1. SEAMLESS RIGHT-SIDE WORLD CUP IMAGE SECTION */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 z-0 opacity-20 lg:opacity-100 pointer-events-none">
        <img
          src="/oldevent/troffy.JPG" 
          alt="Kho Kho World Cup Victory Glory"
          className="w-full h-full object-cover object-center scale-105 filter saturate-110 brightness-[1.05]"
        />
        {/* Anti-Border Gradient Overlays: Blends everything smoothly without revealing image cuts */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-[400px] bg-gradient-to-r from-slate-50 via-slate-50/95 to-transparent" />
      </div>

      {/* Solid Backdrop Extension to fully cover the awkward vertical border line */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-slate-50 z-0" />

      {/* Subtle Light Saturated Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-[600px] h-[600px] bg-emerald-500/[0.02] rounded-full blur-[130px] pointer-events-none z-0" />

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COMPARTMENT: HISTORICAL TYPOGRAPHY & CHRONOLOGY */}
        <div className="lg:col-span-7 space-y-10 flex flex-col justify-center">
          
          {/* Active Status Badge */}
          <div className="w-fit flex items-center gap-2.5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/[0.02] to-transparent border-l-2 border-emerald-500 px-4 py-1.5 rounded-r-lg shadow-sm">
            <Trophy className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span className="text-[10px] font-black tracking-[0.2em] text-emerald-700 uppercase">
              Global Supremacy Edition
            </span>
          </div>

          {/* Requested Light Title */}
          <div className="space-y-4">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[0.95] text-slate-950">
              HISTORY OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-extrabold">
                KHO KHO
              </span>
            </h2>
            
            {/* Main Historical Overview Paragraph with Embedded Bold Highlights */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium max-w-2xl bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
              Kho Kho is an <span className="font-extrabold text-slate-950 bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:100%_2px] bg-no-repeat bg-bottom pb-0.5">indigenous Indian sport</span> with roots tracing back thousands of years, originally <span className="font-extrabold text-slate-950">played on chariots</span> before being adapted into its modern tag-based format. Deeply rooted in the nation&apos;s cultural heritage, it has thrived primarily at the <span className="font-extrabold text-emerald-600">grassroots level</span> on school grounds for decades before its massive <span className="font-extrabold text-amber-600">professional leap</span>.
            </p>
          </div>

          {/* HIGH-OCTANE SYSTEM MATRIX GRID */}
          <div className="grid sm:grid-cols-2 gap-4 w-full">
            
            {/* Milestone 1: Deccan Gymkhana */}
            <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-[0_15px_35px_rgba(245,158,11,0.06)] transition-all duration-500 flex flex-col justify-between h-48 transform hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 group-hover:bg-amber-50 group-hover:text-white transition-all duration-300">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">EST. 1914</span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-black text-slate-950 uppercase tracking-wide group-hover:text-amber-600 transition-colors">Deccan Gymkhana</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Official rules were formalized in Pune, building the <span className="font-bold text-slate-900">foundational blueprint</span> required for structured, <span className="font-bold text-slate-900">organized professional championships</span>.
                </p>
              </div>
            </div>

            {/* Milestone 2: Evolution */}
            <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-emerald-500/40 hover:shadow-[0_15px_35px_rgba(16,185,129,0.06)] transition-all duration-500 flex flex-col justify-between h-48 transform hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">Evolution</span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-black text-slate-950 uppercase tracking-wide group-hover:text-emerald-600 transition-colors">The Next Big Leap</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  The ecosystem underwent a historic revolution, unlocking <span className="font-bold text-slate-900">commercial sport business metrics</span> that parallel top-tier international sporting leagues.
                </p>
              </div>
            </div>

            {/* Milestone 3: World Cup Dominance (Requested Premium Upgrades) */}
            <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-orange-500/40 hover:shadow-[0_15px_35px_rgba(249,115,22,0.06)] transition-all duration-500 flex flex-col justify-between h-48 transform hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <Trophy className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">National Pride</span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-black text-slate-950 uppercase tracking-wide group-hover:text-orange-600 transition-colors">World Cup Victory</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Indian men’s and women’s national teams displayed absolute <span className="font-bold text-slate-900">global dominance</span>, clinching the <span className="font-bold text-slate-900">historic world championship titles</span> on home soil.
                </p>
              </div>
            </div>

            {/* Milestone 4: Modern Media Streams */}
            <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-blue-500/40 hover:shadow-[0_15px_35px_rgba(59,130,246,0.06)] transition-all duration-300 flex flex-col justify-between h-48 transform hover:-translate-y-1">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-800 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Tv className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 font-bold uppercase">Media Stream</span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-black text-slate-950 uppercase tracking-wide group-hover:text-blue-600 transition-colors">64M+ Global Screens</p>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Indigenous sport scaled from rural soil to global high-definition screens, securing a massive, <span className="font-bold text-slate-900">digital-first Gen-Z fan base</span>.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT AREA: BUFFER BALANCING AREA (SPANS 5 COLUMNS FOR UNIMPEDED TROPHY SHOWCASE) */}
        <div className="lg:col-span-5 hidden lg:block pointer-events-none" />

      </div>
    </section>
  );
}