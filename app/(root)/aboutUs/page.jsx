"use client";

import React from 'react';
import Image from 'next/image';
import { FaEye, FaBullseye, FaStar, FaUsers, FaBriefcase, FaArrowRight } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <section className="relative bg-white mt-11 text-slate-800 pt-32 pb-20 px-6 sm:px-12 md:px-20 min-h-screen overflow-hidden">
                   
      {/* Soft, Fluid Light Background Shapes & Lines */}
      <div className="absolute top-[5%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-200/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-amber-100/30 blur-[110px] pointer-events-none z-0" />
      
      <div className="relative max-w-7xl mx-auto z-10 space-y-32">
        
        {/* SECTION 1: HERO / OUR STORY (With Organic Asymmetric Image Frame restored) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6 lg:pr-6">
            <span className="text-xs font-bold tracking-widest text-[#8A39E1] uppercase bg-purple-100/60 border border-purple-200/40 px-4 py-2 rounded-full inline-block">
              Our Story
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0214] tracking-tight leading-tight">
              More Than Moments.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#130928] to-[#8A39E1]">
                We Create Movements.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-2">
              Zho Zho Entertainments is a new-generation event management company redefining how events are 
              conceptualized and delivered. With a dynamic approach and a strong focus on innovation, we 
              specialize in curating and executing a diverse range of events—including high-energy sports 
              events, vibrant cultural experiences, and professionally managed government and corporate engagements.
            </p>
          </div>
          
          {/* IMAGE DESIGN: Restored Asymmetric Fluid Border Mask Frame with Neon Gradient Effect */}
          <div className="lg:col-span-5 relative h-[450px] w-full p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A39E1]/20 via-purple-500/10 to-[#E2A855]/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[pulse_8s_infinite_alternate]" />
            <div className="relative w-full h-full rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%] overflow-hidden border border-purple-200/40 shadow-xl shadow-purple-950/5">
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800" 
                alt="Movements Production Concept" 
                fill 
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: VISION & MISSION (Unified, Clean Rectangular Cards remaining untouched) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <div className="relative bg-white/70 border border-purple-100/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left space-y-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/90">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#8A39E1]">
              <FaEye size={20} />
            </div>
            <h2 className="text-2xl font-black text-[#0B0214]">Our Vision</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be a leading, diversified entertainment organisation recognised for creative excellence, 
              technological innovation, and social impact — shaping the future of entertainment across sports, 
              music, culture, gaming, travel, and live experiences.
            </p>
          </div>

          {/* Mission Card */}
          <div className="relative bg-white/70 border border-purple-100/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left space-y-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/90">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#E2A855]">
              <FaBullseye size={20} />
            </div>
            <h2 className="text-2xl font-black text-[#0B0214]">Our Mission</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To build a world-class entertainment enterprise that produces, promotes, and delivers 
              exceptional creative experiences. We envision of becoming a <span className="font-bold text-[#8A39E1]">₹100 Cr</span> brand 
              that inspires action and connection nationwide.
            </p>
          </div>
        </div>

        {/* SECTION 3: WHY CHOOSE US (Unified Rectangular Layout blocks) */}
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0214]">Why Choose Us?</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              We deliver excellence through a combination of leadership, community, and creative execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaStar size={18} />, title: "Why Let's Star", desc: 'Highly committed leadership focused on creating events that matter and drive real-world impact.' },
              { icon: <FaUsers size={18} />, title: 'Why Our Users', desc: 'A vast network of volunteers, sports professionals, and dedicated partner organizations.' },
              { icon: <FaBriefcase size={18} />, title: 'Why Choose Us?', desc: 'Seamless planning, creative execution, and outstanding event experiences from concept to reality.' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/70 border border-slate-200/60 rounded-2xl p-8 text-left space-y-4 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#8A39E1]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B0214] tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: CALL TO ACTION BANNER */}
       <div className="relative rounded-2xl p-12 text-center  bg-gradient-to-br from-[#961FDE] to-[#120323] text-white overflow-hidden shadow-xl shadow-purple-500/10 max-w-5xl mx-auto group">
          {/* Flowing background ambient overlay loops */}
          <div className="absolute top-[-50%] right-[-20%] w-80 h-80 rounded-full bg-amber-300/20 blur-[50px] group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
          <div className="absolute bottom-[-30%] left-[-10%] w-60 h-60 rounded-full bg-white/10 blur-[40px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-2xl mx-auto leading-tight">
              Ready to create something extraordinary?
            </h2>
            <div className="pt-2">
              <button className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-[#8A39E1] bg-white hover:bg-[#0B0214] hover:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 group/btn">
                Our Services <FaArrowRight size={10} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}