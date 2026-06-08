"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Tv, 
  Award,
  CheckCircle2 
} from "lucide-react";

// SCREENSHOT DATA SPECIFICATIONS
const recentEvents = [
  {
    type: "Marathon & Wellness",
    title: "Mind Over Miles",
    tagline: "A Run For Mental Health Wellness",
    quote: "Our journey starts with Mind Over Miles — a pilot run event dedicated to raising awareness around mental health. This isn't just a run; it's a movement.",
    timeline: "09/11/2025",
    venue: "Gachibowli Stadium, Hyderabad",
    isDark: false,
    hasSegments: true,
    segments: [
      { num: "01", label: "5K Fun Run/Walk", sub: "Untimed. For everyone to participate and show support." },
      { num: "02", label: "10K Timed Run", sub: "For those who want to challenge themselves with tracked timing." },
      // { num: "03", label: "Virtual Run", sub: "For those who can't make it but still want to contribute." }
    ]
  },
  {
    type: "UPCOMING- 1st Edition Blueprint  ",
    title: "Elite Kho Kho Championship",
    tagline: "India's Fastest Growing Sport. Built For The Next Gen.",
    quote: "Experience the 'Sport of Our Soil' – Telangana's Pride and India's Next Sporting Movement.",
    timeline: "AUGUST 2026 (4 Days of Action)",
    venue: "Hyderabad",
    isDark: true,
    hasSegments: false,
    stats: [
      { icon: <Trophy className="w-4 h-4 text-amber-400" />, val: "16 Elite Teams", lbl: "8 Men's & 8 Women's" },
      { icon: <Users className="w-4 h-4 text-purple-400" />, val: "288 Athletes", lbl: "India's Top Tier Pros" },
      { icon: <Award className="w-4 h-4 text-orange-400" />, val: "  30.5 L Pool", lbl: "Rewarding Excellence" },
      { icon: <Users className="w-4 h-4 text-cyan-400" />, val: "80,000+ Fans", lbl: "Massive Expected Live" }
    ],
    broadcast: "LIVE BROADCAST STREAM: Daily coverage on leading OTT platforms and top tier digital channels."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardFade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } }
};

export default function RecentActivities() {
  return (
    <section className="py-24 font-sans relative overflow-hidden scope-recent-activities w-full">
      
      {/* SCOPED FONT DEFENSE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900&display=swap');

        .scope-recent-activities,
        .scope-recent-activities div,
        .scope-recent-activities h2,
        .scope-recent-activities h3,
        .scope-recent-activities h4,
        .scope-recent-activities p,
        .scope-recent-activities span {
          font-family: 'DM Sans', sans-serif !important;
        }

        .activity-master-card {
          border-radius: 24px;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s, border-color 0.4s;
        }

        @keyframes draw-curve-line {
          to { stroke-dashoffset: 0; }
        }
        .animate-header-bar {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-curve-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* ─── HEADER INTERFACE ─── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-[#7c3aed] uppercase tracking-[0.25em] block">Live Operations Tracker</span>
            <div className="relative inline-block pb-3">
              <h2 className="text-3xl md:text-5xl font-black text-[#1a1523] tracking-tighter leading-none">
                Our Recent <span className="text-[#7c3aed]">Activities</span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-full h-3 max-w-[220px] md:max-w-[300px]">
                <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="animate-header-bar" />
                </svg>
              </div>
            </div>
          </div>
          
        </div>

        {/* ─── PIXEL PERFECT SYMMETRICAL DO-CARD GRID ─── */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
        >
          {recentEvents.map((event, idx) => (
            <motion.div
              variants={cardFade}
              whileHover={{ y: -5, boxShadow: "0 24px 50px rgba(0,0,0,0.05)" }}
              key={idx}
              className={`activity-master-card p-6 md:p-8 lg:p-10 border flex flex-col justify-between relative overflow-hidden min-h-[580px] ${
                event.isDark 
                  ? "bg-[#090b11] border-gray-900 text-white shadow-xl" 
                  : "bg-white border-gray-200/60 text-[#1a1523] shadow-sm"
              }`}
            >
              {event.isDark && (
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
              )}

              {/* Top Structural Layout Content Wrapper */}
              <div className="space-y-6 flex-grow">
                {/* Meta Row Header */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                    event.isDark 
                      ? "bg-purple-950/40 border-purple-800 text-purple-300" 
                      : "bg-purple-50 border-purple-100 text-[#7c3aed]"
                  }`}>
                    {event.type}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${event.isDark ? "bg-orange-500 animate-pulse" : "bg-emerald-500"}`} />
                </div>

                {/* Event Primary Typography Hierarchy */}
                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none">
                    {event.title}
                  </h3>
                  <p className={`text-xs md:text-sm font-bold tracking-wide ${event.isDark ? "text-orange-400" : "text-[#f07167]"}`}>
                    {event.tagline}
                  </p>
                </div>

                {/* Real Quotes parameters description */}
                <p className={`text-xs md:text-sm leading-relaxed font-normal italic pl-3 border-l-2 ${
                  event.isDark ? "text-gray-400 border-purple-500" : "text-gray-600 border-[#f07167]"
                }`}>
                  "{event.quote}"
                </p>

                {/* Render Segment Modules Frame to balance inner dimensions */}
                {event.hasSegments ? (
                  <div className="space-y-2 pt-2">
                    {event.segments.map((seg, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3.5 p-3 rounded-xl border border-gray-100 bg-[#faf9f7]/60">
                        <span className="font-black text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-md mt-0.5 shrink-0">{seg.num}</span>
                        <div>
                          <h4 className="text-xs font-bold text-gray-800 leading-tight tracking-tight">{seg.label}</h4>
                          <p className="text-[10px] text-gray-400 font-normal leading-normal mt-0.5">{seg.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4 pt-2">
                    <div className="grid grid-cols-2 gap-3">
                      {event.stats.map((st, sIdx) => (
                        <div key={sIdx} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] flex flex-col justify-center min-h-[72px]">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-white/[0.04] flex items-center justify-center shrink-0">
                              {st.icon}
                            </div>
                            <h4 className="text-xs font-bold text-white tracking-tight leading-none">{st.val}</h4>
                          </div>
                          <p className="text-[10px] text-gray-500 font-medium leading-none mt-2 pl-0.5">{st.lbl}</p>
                        </div>
                      ))}
                    </div>
                    {/* Live Broadcast Engine Panel Tracker */}
                    <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-900/30 flex items-center gap-3">
                      <Tv className="w-4 h-4 text-purple-400 shrink-0" />
                      <p className="text-[11px] text-purple-200/90 font-medium leading-normal">{event.broadcast}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Bottom Meta Footer - Both have precise layout coordinates anchor */}
              <div className={`mt-8 pt-5 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 ${
                event.isDark ? "border-white/[0.06]" : "border-gray-100"
              }`}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${event.isDark ? "bg-white/[0.04]" : "bg-[#faf9f7]"}`}>
                    <Calendar className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider block font-bold">Timeline</span>
                    <span className="text-xs font-bold">{event.timeline}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${event.isDark ? "bg-white/[0.04]" : "bg-[#faf9f7]"}`}>
                    <MapPin className="w-4 h-4 text-purple-500" />
                  </div>
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase tracking-wider block font-bold">Venue Location</span>
                    <span className="text-xs font-bold">{event.venue}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}