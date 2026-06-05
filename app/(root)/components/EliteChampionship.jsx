// app/page.js or components/EliteChampionship.js
import React from 'react';
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  Coins, 
  Tv, 
  Flame,
  Zap,
  Clock,
  ArrowRight,
  ShoppingBag,
  Sparkles
} from 'lucide-react';

export default function EliteChampionship() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-white font-sans overflow-hidden antialiased selection:bg-yellow-400 selection:text-black flex flex-col justify-between">

      {/* 1. SEAMLESS BACKGROUND IMAGE WITH GRADIENT MASKING */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/oldevent/introduction-to-kho-kho.JPG"
          alt="Elite Kho Kho Championship Arena"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.65] contrast-[1.1] saturate-[1.05]" 
        />
        {/* Anti-Border Dark Vignette Layers */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/40 to-[#020617]" />
        
        {/* Kinetic Neon Radial Highlights */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-yellow-500/10 rounded-full blur-[200px] pointer-events-none" />
      </div>

      {/* 2. ULTRALIGHT FIXED/FLOATING GLASS HEADER */}
      <header className="relative z-50 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex justify-between items-center bg-slate-900/30 backdrop-blur-xl px-5 py-3.5 rounded-2xl border border-white/[0.05] shadow-[0_16px_36px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center font-black text-slate-950 text-sm tracking-tighter shadow-[0_4px_12px_rgba(234,179,8,0.3)]">
              ZZ
            </div>
            <div>
              <div className="font-black text-xs tracking-[0.2em] text-white">ZHO ZHO</div>
              <div className="text-[8px] text-yellow-400 font-bold tracking-widest uppercase">Entertainments</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[9px] font-black tracking-widest text-emerald-400 uppercase">August 2026</span>
          </div>
        </div>
      </header>

      {/* 3. SYMMETRIC HERO LAYOUT (PERFECTLY ALIGNED GRID) */}
      <main className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0 my-auto flex items-center justify-center min-h-[calc(100vh-140px)]">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full">
          
          {/* LEFT PANEL: TYPOGRAPHY & SYMMETRIC TIMELINE */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            
            {/* Minimalist Tech Edition Tag */}
            <div className="w-fit flex items-center gap-2 bg-slate-900/80 border border-white/10 px-4 py-2 rounded-xl shadow-md">
              <Zap className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.25em] text-yellow-400 uppercase">
                1st Edition Blueprint
              </span>
            </div>

            {/* Premium Cinematic Title */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[0.9] uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
                ELITE KHO KHO <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 font-extrabold">
                  CHAMPIONSHIP
                </span>
              </h1>
              <p className="text-emerald-400 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" /> India's Fastest Growing Sport. Built for the Next Gen.
              </p>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl font-medium leading-relaxed">
                Experience the "Sport of Our Soil" – Telangana's Pride and India's Next Sporting Movement.
              </p>
            </div>

            {/* UNIFIED DESIGN FOR TIMELINE & VENUE */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl w-full">
              {/* Timeline Card - ANIMATED BORDER GLOW */}
              <div className="group bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border-2 border-yellow-500/40 shadow-[0_0_20px_rgba(234,179,8,0.25)] animate-border-pulse flex flex-col justify-between h-28">
                <div className="flex justify-between items-center">
                  <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-yellow-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">upcoming event</span>
                </div>
                <div>
                  <p className="text-lg font-black text-white tracking-wide uppercase">AUGUST 2026</p>
                  <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-emerald-400" /> 4 Days of Action
                  </p>
                </div>
              </div>

              {/* Arena Card */}
              <div className="group bg-slate-900/40 backdrop-blur-md p-5 rounded-2xl border border-white/[0.06] hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between h-28">
                <div className="flex justify-between items-center">
                  <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">Location</span>
                </div>
                <div>
                  <p className="text-lg font-black text-white tracking-wide truncate uppercase">YOUSUFGUDA STADIUM</p>
                  <p className="text-[11px] text-slate-400 font-medium mt-0.5">KVBR Indoor Arena, Hyd</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: BALANCED METRIC MATRIX WITH HOVER GLOWS */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4 w-full h-fit my-auto self-center">
            
            {/* Matrix Card 1 */}
            <div className="group bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-white/[0.05] hover:border-yellow-500/50 hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 flex flex-col justify-between h-28 sm:h-32 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-yellow-400 group-hover:scale-110 transition-transform">
                  <Trophy className="w-4 h-4" />
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-white tracking-tight">16 Elite Teams</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">8 Men's & 8 Women's</p>
              </div>
            </div>

            {/* Matrix Card 2 */}
            <div className="group bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-white/[0.05] hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 flex flex-col justify-between h-28 sm:h-32 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-emerald-400 group-hover:scale-110 transition-transform">
                  <Users className="w-4 h-4" />
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-white tracking-tight">288 Athletes</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">India's Top Tier Pros</p>
              </div>
            </div>

            {/* Matrix Card 3 */}
            <div className="group bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-white/[0.05] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)] transition-all duration-300 flex flex-col justify-between h-28 sm:h-32 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-orange-400 group-hover:scale-110 transition-transform">
                  <Coins className="w-4 h-4" />
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-yellow-400 tracking-tight">₹30.5 L Pool</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Rewarding Excellence</p>
              </div>
            </div>

            {/* Matrix Card 4 */}
            <div className="group bg-slate-900/50 backdrop-blur-md p-5 rounded-2xl border border-white/[0.05] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300 flex flex-col justify-between h-28 sm:h-32 transform hover:-translate-y-1">
              <div className="flex justify-between items-start">
                <div className="p-2 rounded-xl bg-slate-950 border border-white/5 text-blue-400 group-hover:scale-110 transition-transform">
                  <Flame className="w-4 h-4" />
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </div>
              <div>
                <p className="text-base sm:text-xl font-black text-emerald-400 tracking-tight">80,000+ Fans</p>
                <p className="text-[10px] sm:text-xs text-slate-400 font-medium">Massive Expected Live</p>
              </div>
            </div>

            {/* BOX 1: THE CREATOR ZONE (Vibrant Rose/Pink Creator Aura) */}
            <div className="col-span-2 bg-gradient-to-r from-rose-950/40 via-slate-950/80 to-slate-950 p-4 rounded-2xl border border-rose-500/20 flex items-center gap-3 shadow-lg hover:border-rose-500/50 transition-all duration-300">
              <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 flex-shrink-0 border border-rose-500/10">
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-rose-200 leading-normal">
                <span className="font-black text-white uppercase tracking-wider mr-1">The Creator Zone:</span> Engage directly with top digital creators in our dedicated Creator Zone.
              </p>
            </div>

            {/* BOX 2: EAT, SHOP, AND DISCOVER (Vibrant Emerald Lifestyle Aura) */}
            <div className="col-span-2 bg-gradient-to-r from-emerald-950/30 via-slate-950/80 to-slate-950 p-4 rounded-2xl border border-emerald-500/20 flex items-center gap-3 shadow-lg hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 flex-shrink-0 border border-emerald-500/10">
                <ShoppingBag className="w-4 h-4 animate-pulse" />
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-emerald-200 leading-normal">
                <span className="font-black text-white uppercase tracking-wider mr-1">Eat, Shop, and Discover:</span> Fuel up at our curated dining area, offering a diverse variety of food and drink options to keep you energized throughout the four-day event.
              </p>
            </div>

            {/* BOX 3: LIVE BROADCAST STREAM (Original Deep Purple Aura) */}
            <div className="col-span-2 bg-gradient-to-r from-purple-950/40 via-slate-950/80 to-slate-950 p-4 rounded-2xl border border-purple-500/20 flex items-center gap-3 shadow-lg hover:border-purple-500/50 transition-all duration-300">
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 flex-shrink-0 border border-purple-500/10">
                <Tv className="w-4 h-4 animate-pulse" />
              </div>
              <p className="text-[11px] sm:text-xs font-medium text-purple-200 leading-normal">
                <span className="font-black text-white uppercase tracking-wider mr-1">Live Broadcast Stream:</span> Daily coverage on leading OTT platforms and top tier digital channels.
              </p>
            </div>

          </div>

        </div>
      </main>

      {/* 4. FUTURISTIC MINIMAL FOOTER */}
      <footer className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-6 pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
          "Sport of Our Soil" — Telangana's Pride
        </p>
        <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">
          Organized by ZHO ZHO Entertainments
        </p>
      </footer>

      {/* Add this style tag for the animation - ONLY TAILWCSS UTILITIES */}
      <style jsx global>{`
        @keyframes borderGlow {
          0% {
            border-color: rgba(234, 179, 8, 0.2);
            box-shadow: 0 0 8px rgba(234, 179, 8, 0.1);
          }
          50% {
            border-color: rgba(234, 179, 8, 0.8);
            box-shadow: 0 0 28px rgba(234, 179, 8, 0.45);
          }
          100% {
            border-color: rgba(234, 179, 8, 0.2);
            box-shadow: 0 0 8px rgba(234, 179, 8, 0.1);
          }
        }
        
        .animate-border-pulse {
          animation: borderGlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}