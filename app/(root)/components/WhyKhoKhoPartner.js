import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  Smartphone, 
  Users, 
  Tv, 
  Globe, 
  Maximize, 
  Layers 
} from 'lucide-react';

export default function WhyKhoKhoPartner() {
  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-12 items-stretch w-full">
          
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-fit flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                  The Sporting Movement
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase leading-none">
                WHY KHO KHO?<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 font-extrabold">
                  THE REVOLUTION IS HERE
                </span>
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                Kho Kho combines speed, agility, strategy, and endurance like no other sport. Deeply rooted in Indian heritage, it is rapidly evolving into a modern spectator sport with nationwide appeal.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-4 w-full">
              
              <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-500 flex flex-col justify-between h-36 transform hover:-translate-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Momentum</span>
                  <TrendingUp className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide transition-colors duration-300 group-hover:text-amber-600">Massive Momentum</h4>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    League viewership has already crossed <span className="font-extrabold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">64 million+</span>, proving its mass appeal worldwide.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-500 flex flex-col justify-between h-36 transform hover:-translate-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Audience</span>
                  <Users className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide transition-colors duration-300 group-hover:text-amber-600">The Gen-Z Connection</h4>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    An elite <span className="font-extrabold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">43% of the audience</span> is highly energetic, young, and digital-first.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-500 flex flex-col justify-between h-36 transform hover:-translate-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Equality</span>
                  <Layers className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide transition-colors duration-300 group-hover:text-amber-600">Inclusivity Metrics</h4>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    Boasts one of the highest female engagement ratios among emerging sports at <span className="font-extrabold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">41%</span>.
                  </p>
                </div>
              </div>

              <div className="group bg-white p-5 rounded-2xl border border-slate-200/80 hover:border-amber-500/40 hover:shadow-[0_20px_40px_rgba(245,158,11,0.06)] transition-all duration-500 flex flex-col justify-between h-36 transform hover:-translate-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-slate-400 tracking-wider uppercase">Screen</span>
                  <Smartphone className="w-4 h-4 text-slate-400 group-hover:text-amber-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <h4 className="text-base font-black text-slate-950 uppercase tracking-wide transition-colors duration-300 group-hover:text-amber-600">Mobile-First Fans</h4>
                  <p className="text-xs text-slate-500 font-medium leading-tight mt-1">
                    A massive <span className="font-extrabold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-500 bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">75% of users</span> seamlessly consume content via mobile platforms.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-[0_20px_40px_rgba(0,0,0,0.01)] hover:border-emerald-500/30 hover:shadow-[0_25px_50px_rgba(16,185,129,0.06)] transition-all duration-500 transform hover:-translate-y-1 relative">
            <div className="space-y-4">
              <div className="w-fit flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl">
                <span className="text-[10px] font-black tracking-[0.2em] text-emerald-600 uppercase">
                  Commercial Platform
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 uppercase leading-none">
                PARTNER WITH US
              </h2>
              <p className="text-xs font-mono tracking-widest text-emerald-600 uppercase font-black">
                Align Your Brand with Speed, Strategy, and Tradition.
              </p>
              <p className="text-slate-600 text-sm font-medium leading-relaxed">
                We offer a 360-degree platform for brands to achieve maximum visibility and a projected <span className="font-extrabold text-slate-950 bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:100%_1px] bg-no-repeat bg-bottom pb-0.5">120 million+ total reach</span>. Join a movement that offers:
              </p>
            </div>

            <div className="space-y-3.5 pt-4 w-full">
              
              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:bg-slate-100/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-emerald-600 group-hover:border-emerald-500/30 group-hover:rotate-6 transition-all duration-300">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950 uppercase tracking-wide">Digital Dominance</p>
                  <p className="text-xs text-slate-500 font-medium"><span className="font-bold text-emerald-600">35M+ Social Reach</span> and 5M+ Digital Views across ecosystems.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:bg-slate-100/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-emerald-600 group-hover:border-emerald-500/30 group-hover:rotate-6 transition-all duration-300">
                  <Tv className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950 uppercase tracking-wide">Massive TV Presence</p>
                  <p className="text-xs text-slate-500 font-medium"><span className="font-bold text-emerald-600">50M+ Projected TV Viewership</span> milestones.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:bg-slate-100/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-emerald-600 group-hover:border-emerald-500/30 group-hover:rotate-6 transition-all duration-300">
                  <Maximize className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950 uppercase tracking-wide">On-Ground Impact</p>
                  <p className="text-xs text-slate-500 font-medium"><span className="font-bold text-slate-900">60,000 sq. ft.</span> of static branding and <span className="font-bold text-emerald-600">8,000 sq. ft.</span> of digital LED perimeters.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-50 border border-slate-100 p-4 rounded-xl group hover:bg-slate-100/50 transition-all duration-300">
                <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 group-hover:text-emerald-600 group-hover:border-emerald-500/30 group-hover:rotate-6 transition-all duration-300">
                  <Globe className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-950 uppercase tracking-wide">Cultural Connection</p>
                  <p className="text-xs text-slate-500 font-medium">Reach active fans distributed across <span className="font-bold text-slate-900">50+ cities</span> from major metros to tier towns.</p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}