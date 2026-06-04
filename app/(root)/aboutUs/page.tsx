"use client";

import React, { useEffect, useState } from 'react';
import { Eye, Target, Star, Users, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

/* ==========================================================================
   FUTURE INDEPENDENT COMPONENTS START HERE
   ========================================================================== */

/**
 * FUTURE CARD COMPONENT
 * Future Path: @/components/AboutCard.tsx
 */
interface AboutCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AboutCard = ({ icon, title, description }: AboutCardProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200 flex flex-col justify-between text-left group">
      <div>
        <div className="w-10 h-10 bg-[#f8f2fe] text-[#a824f2] rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#a824f2] group-hover:text-white">
          {icon}
        </div>
        <h4 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-[#a824f2]">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};


/**
 * 1. HERO BANNER & STATS ROW
 * Future Path: @/components/AboutHero.tsx
 */
const AboutHero = () => {
  return (
    <section className="bg-white pt-24 pb-12 text-center max-w-5xl mx-auto px-6 space-y-6">
      {/* Title with entry animation */}
      <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight animate-[fadeInDown_0.8s_ease-out]">
        More than moments <br />
        We create <span className="text-[#a824f2]">movements</span> ✨
      </h1>
      
      {/* Description text with staggered slide-in */}
      <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-md leading-relaxed font-normal px-4 animate-[fadeIn_1s_ease-out_0.2s_both]">
        Zho Zho Entertainments is a new-generation event management company redefining how events are 
        conceptualized and delivered. We bring together strategic planning and flawless execution to create 
        impactful, memorable experiences.
      </p>

      {/* Buttons with micro-interactions */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
        <a href="#story" className="w-full sm:w-auto bg-[#a824f2] text-white px-8 py-3.5 rounded-full font-medium shadow-md shadow-purple-500/10 hover:bg-[#931ed7] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group text-sm">
          Read Our Story <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
        <a href="/services" className="w-full sm:w-auto border border-[#a824f2] text-[#a824f2] px-8 py-3.5 rounded-full font-medium hover:bg-[#f8f2fe] transition-all duration-300 transform hover:scale-105 active:scale-95 text-center text-sm">
          Our Services
        </a>
      </div>

      {/* Stats Divider Line and Metrics Row */}
      <div className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-100 mt-16 animate-[fadeIn_1.2s_ease-out_0.6s_both]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 text-center">
          {[
            { label: "PAN-India", sub: "15+ Cities" },
            { label: "100K+", sub: "Participants" },
            { label: "50M+", sub: "Digital Reach" },
            { label: "4.8★", sub: "Partner Rating" }
          ].map((stat, i) => (
            <div key={i} className="space-y-0.5 group cursor-default">
              <div className="text-2xl font-black text-[#a824f2] transition-transform duration-300 group-hover:scale-110 inline-block">{stat.label}</div>
              <div className="text-xs text-gray-400 font-medium tracking-wide">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/**
 * 2. WHY PARTNER / CORE GRID
 * Future Path: @/components/AboutCoreGrid.tsx
 */
const AboutCoreGrid = () => {
  return (
    <section id="story" className="bg-[#faf8fc] py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Why Partner With Us?</h2>
          <div className="w-12 h-1 bg-[#a824f2] mx-auto rounded-full transition-all duration-500 hover:w-24" />
        </div>

        {/* Top 2 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200 text-left group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#f8f2fe] text-[#a824f2] rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#a824f2] group-hover:text-white">
                <Star size={20} />
              </div>
              <span className="inline-block bg-[#f8f2fe] text-[#a824f2] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                Growth Vision
              </span>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#a824f2]">PAN-India Scale</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We specialize in curating and executing a diverse range of events—including high-energy sports events, vibrant cultural experiences, and professionally managed corporate engagements across the country.
              </p>
            </div>
            <div className="text-xs font-bold text-[#a824f2] uppercase tracking-wider pt-6 border-t border-gray-50 mt-4">
              300% Growth YoY
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200 text-left group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#f8f2fe] text-[#a824f2] rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#a824f2] group-hover:text-white">
                <Users size={20} />
              </div>
              <span className="inline-block bg-[#f8f2fe] text-[#a824f2] px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
                Audience
              </span>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#a824f2]">Engaged & Diverse</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our approach delivers unmatched engagement, bringing together strategic planning and execution making us a trusted partner for brands looking to make a lasting impression.
              </p>
            </div>
            <div className="text-xs font-bold text-[#a824f2] uppercase tracking-wider pt-6 border-t border-gray-50 mt-4">
              100K+ Strong Community
            </div>
          </div>
        </div>

        {/* Bottom 3 Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Dark Filled Accent Card */}
          <div className="bg-gradient-to-br from-[#4c1d95] to-[#6d28d9] text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-purple-900/30 text-left group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-white/10 text-purple-200 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Sparkles size={20} />
              </div>
              <h3 className="text-xl font-bold">Cause-Driven Visibility</h3>
              <p className="text-purple-100/80 text-sm leading-relaxed">
                With a dynamic approach and a strong focus on innovation, we shape the future of entertainment across culture, gaming, and sports.
              </p>
            </div>
            <div className="text-xs font-bold text-cyan-300 uppercase tracking-wider pt-8">
              IMPACT FIRST
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200 text-left group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#f8f2fe] text-[#a824f2] rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#a824f2] group-hover:text-white">
                <Eye size={20} />
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#a824f2]">High-Value Exposure</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                We ensure premium visibility across physical spaces, creative event collaterals, media coverage, and all integrated digital platforms.
              </p>
            </div>
            <div className="flex gap-2 pt-6">
              {["Logo", "Digital", "Media"].map((tag, i) => (
                <span key={i} className="bg-gray-50 text-gray-500 text-[10px] px-2 py-1 rounded transition-colors duration-300 group-hover:bg-purple-50 group-hover:text-[#a824f2]">{tag}</span>
              ))}
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-purple-200 text-left group">
            <div className="space-y-4">
              <div className="w-10 h-10 bg-[#f8f2fe] text-[#a824f2] rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[#a824f2] group-hover:text-white">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#a824f2]">Proven ROI</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Precision planning combined with data intelligence outputs ensures perfect delivery benchmarks and seamless retention rates.
              </p>
            </div>
            <div className="text-xs font-bold text-[#a824f2] uppercase tracking-wider pt-6 border-t border-gray-50 mt-4">
              4.8★ Partner Rating
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


/**
 * 3. STRATEGIC GOALS / IMPACT BLOCK
 * Future Path: @/components/AboutGoals.tsx
 */
const AboutGoals = () => {
  return (
    <section className="bg-white py-24 px-6 border-b border-gray-100">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        <div className="space-y-3">
          <span className="bg-[#f8f2fe] text-[#a824f2] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">
            Sponsorship Tiers
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">Choose Your Impact Level</h2>
          <p className="text-gray-400 text-sm">Tailored packages for brands of all sizes</p>
        </div>

        {/* Large Curved Banner Block with subtle bounce hover */}
        <div className="bg-gradient-to-br from-[#120324] to-[#240647] p-8 md:p-12 rounded-[2rem] text-left text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden transition-all duration-500 transform hover:scale-[1.01] hover:shadow-purple-900/20 group">
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="inline-block bg-[#a824f2] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider animate-pulse">
              Title Sponsor
            </span>
            <h3 className="text-2xl md:text-3xl font-bold">Maximum Brand Presence</h3>
            <p className="text-purple-200/70 text-sm leading-relaxed">
              Complete brand integration across all platforms — event collaterals, T-shirts, medals, press releases, opening/closing ceremonies, and more.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Logo Priority", "Stage Naming", "VIP Access"].map((feat, i) => (
                <span key={i} className="bg-white/10 text-white text-[11px] px-3 py-1 rounded-full transition-colors duration-300 group-hover:bg-[#a824f2]/30">{feat}</span>
              ))}
            </div>
          </div>
          
          <div className="relative z-10">
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap">
              Inquire Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};


/**
 * 4. FOUR COLUMN CAPABILITIES BLOCK
 * Future Path: @/components/AboutCapabilities.tsx
 */
const AboutCapabilities = () => {
  const tiers = [
    { title: "Our Vision", desc: "To be a leading, diversified entertainment organisation recognised for creative excellence, technological innovation, and social impact across live experiences.", tags: ["Innovation", "Creative"] },
    { title: "Our Mission", desc: "To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional experiences, becoming a ₹100 Cr brand.", tags: ["Enterprise", "Scale"] },
    { title: "Purpose Leadership", desc: "Highly committed core management focused heavily on building interactive events that matter and drive real-world community impact.", tags: ["Strategy", "Impact"] },
    { title: "Support Networks", desc: "A vast integrated network of volunteers, on-ground sports professionals, and deeply dedicated execution partner organizations.", tags: ["On-Ground", "Network"] },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tiers.map((tier, idx) => (
          <AboutCard 
            key={idx}
            icon={<Sparkles size={20} />}
            title={tier.title}
            description={tier.desc}
          />
        ))}
      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN PAGE ROUTE
   ========================================================================== */

const AboutPage = () => {
  return (
    <>
      {/* Inject Injectable Keyframe Animations via global style tag natively */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <main className="min-h-screen mt-21 bg-white text-gray-950 antialiased selection:bg-[#f8f2fe] selection:text-[#a824f2]">
        
        {/* 1. HERO BANNER WITH STATS */}
        <AboutHero />

        {/* 2. CORE CARDS GRID */}
        <AboutCoreGrid />

        {/* 3. STRATEGIC CURVED BANNER */}
        <AboutGoals />

        {/* 4. FOUR COLUMN CAPABILITIES */}
        <AboutCapabilities />

      </main>
    </>
  );
};

export default AboutPage;