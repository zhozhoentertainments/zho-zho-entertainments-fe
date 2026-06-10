import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  Layers, 
  Smartphone, 
  Tv, 
  Maximize, 
  Globe, 
  Mail,
  Phone,
  ArrowRight 
} from 'lucide-react';

export default function CompleteKhoKhoPartner() {
  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      
      {/* Subtle Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[250px] bg-amber-500/[0.02] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[250px] bg-emerald-500/[0.02] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-20">
        
        {/* ========================================================== */}
        {/* SECTION 1: WHY KHO KHO? (Modern Grid Cards Layout)        */}
        {/* ========================================================== */}
        <div className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="w-fit mx-auto flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20 animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                The Sporting Movement
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-slate-950">
              WHY KHO KHO?{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 pb-1">
                THE REVOLUTION IS HERE
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed pt-2">
              Kho Kho combines speed, agility, strategy, and endurance like no other sport. Deeply rooted in Indian heritage, it is rapidly evolving into a modern spectator sport with nationwide appeal.
            </p>
          </div>

          {/* Grid Layout for Why Kho Kho */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            
            {/* Card 1 */}
            <div className="group bg-white p-5 rounded-xl border border-slate-200/80 hover:border-amber-500/30 hover:shadow-[0_12px_24px_rgba(245,158,11,0.03)] transition-all duration-300 flex flex-col justify-between h-36 border-t-2 border-t-amber-500">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Momentum</span>
                <TrendingUp className="w-4 h-4 text-slate-400 group-hover:text-amber-500 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Massive Momentum</h4>
                <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                  League viewership has already crossed <span className="font-bold text-amber-600 underline decoration-amber-500/20 decoration-2 underline-offset-2">64 million+</span>, proving its mass appeal.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-5 rounded-xl border border-slate-200/80 hover:border-orange-500/30 hover:shadow-[0_12px_24px_rgba(245,158,11,0.03)] transition-all duration-300 flex flex-col justify-between h-36 border-t-2 border-t-orange-500">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Audience</span>
                <Users className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">The Gen-Z Connection</h4>
                <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                  An elite <span className="font-bold text-orange-600 underline decoration-orange-500/20 decoration-2 underline-offset-2">43% of the audience</span> is highly energetic and digital-first.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-5 rounded-xl border border-slate-200/80 hover:border-red-500/30 hover:shadow-[0_12px_24px_rgba(245,158,11,0.03)] transition-all duration-300 flex flex-col justify-between h-36 border-t-2 border-t-red-500">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Equality</span>
                <Layers className="w-4 h-4 text-slate-400 group-hover:text-red-500 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Women’s Engagement Matrix</h4>
                <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                  Boasts one of the highest female engagement ratios at <span className="font-bold text-red-600 underline decoration-red-500/20 decoration-2 underline-offset-2">41%</span>.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group bg-white p-5 rounded-xl border border-slate-200/80 hover:border-slate-500/30 hover:shadow-[0_12px_24px_rgba(0,0,0,0.02)] transition-all duration-300 flex flex-col justify-between h-36 border-t-2 border-t-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Screen</span>
                <Smartphone className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Mobile-First Fans</h4>
                <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                  A massive <span className="font-bold text-slate-800 underline decoration-slate-400/20 decoration-2 underline-offset-2">75% of users</span> seamlessly consume content via mobile.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* SECTION 2: PARTNER WITH US (Stays in Perfect Stack Layout) */}
        {/* ========================================================== */}
        <div className="space-y-8 pt-4">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="w-fit mx-auto bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">
                Commercial Platform
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-slate-950">
              PARTNER WITH{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 pb-1">
                US
                <span className="absolute left-0 bottom-0 w-full h-[4px] bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full" />
              </span>
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed pt-2">
              We offer a 360-degree platform for brands to achieve maximum visibility and a projected{' '}
              <span className="font-bold text-slate-950 underline decoration-emerald-500 decoration-2 underline-offset-2">
                120 million+ total reach
              </span>
              . Join a movement that offers:
            </p>
          </div>

          {/* Partnership - Long Horizontal Stacks */}
          <div className="space-y-3 w-full">
            
            {/* Feature 1 */}
            <div className="group relative bg-white hover:bg-slate-50/50 border border-slate-200/80 p-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[3px] bg-emerald-500" />
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">Digital Dominance</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    <span className="font-bold text-emerald-600 underline decoration-emerald-500/30 decoration-2 underline-offset-2">35M+ Social Reach</span> and 5M+ Digital Views across ecosystems.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>

            {/* Feature 2 */}
            <div className="group relative bg-white hover:bg-slate-50/50 border border-slate-200/80 p-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[3px] bg-cyan-500" />
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">Massive TV Presence</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    <span className="font-bold text-cyan-600 underline decoration-cyan-500/30 decoration-2 underline-offset-2">50M+ Projected TV Viewership</span> milestones.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>

            {/* Feature 3 */}
            <div className="group relative bg-white hover:bg-slate-50/50 border border-slate-200/80 p-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[3px] bg-teal-500" />
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-teal-50 text-teal-600 border border-teal-100 shrink-0">
                  <Maximize className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">On-Ground Impact</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    <span className="font-semibold text-slate-800">60,000 sq. ft.</span> of static branding and{' '}
                    <span className="font-bold text-teal-600 underline decoration-teal-500/30 decoration-2 underline-offset-2">8,000 sq. ft.</span> of digital LED perimeters.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-teal-500 group-hover:translate-x-1 transition-all duration-300" />
            </div>

            {/* Feature 4 */}
            <div className="group relative bg-white hover:bg-slate-50/50 border border-slate-200/80 p-5 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[3px] bg-slate-600" />
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 uppercase tracking-wide">Cultural Connection</h4>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
                    Reach active fans distributed across{' '}
                    <span className="font-bold text-slate-800 underline decoration-slate-400/30 decoration-2 underline-offset-2">50+ cities</span> from major metros to tier towns.
                  </p>
                </div>
              </div>
              <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-slate-700 group-hover:translate-x-1 transition-all duration-300" />
            </div>

          </div>
        </div>

        {/* EMAIL & PHONE CTA BLOCK */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-950 p-6 rounded-2xl shadow-lg border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left mt-6">
          <div className="space-y-0.5">
            <h3 className="text-lg font-bold text-white uppercase tracking-wide">
              Ready to Partner With Us?
            </h3>
            <p className="text-xs text-slate-400 font-medium">
              Get in touch with our commercial sponsorships & partnerships desk directly.
            </p>
          </div>
          
          {/* Contact Action Buttons Group */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto justify-center">
            {/* Phone Button */}
            <a 
              href="tel:+918019037799"
              className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-mono text-xs sm:text-sm font-bold tracking-wider px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 w-full sm:w-auto shrink-0"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              +91 8019037799
            </a>

            {/* Email Button */}
            <a 
              href="mailto:director@zhozhoentertainments.com"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-mono text-xs sm:text-sm font-black tracking-wider uppercase px-4 py-2.5 rounded-xl shadow-md transition-all duration-200 w-full sm:w-auto shrink-0"
            >
              <Mail className="w-4 h-4 text-slate-950" />
              director@zhozhoentertainments.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}