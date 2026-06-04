"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight,
  Lightbulb,
  Sliders,
  Palette,
  Megaphone,
  Mic2,
  Users,
  CheckCircle2,
  Sparkles,
  Layers
} from "lucide-react";

// REAL SCREENSHOT DATA 1: OUR SIGNATURE EVENTS
const signatureEvents = [
  "High Energy Sports Events",
  "Concerts & Cultural Extravaganzas",
  "Digital & Social Media Campaigns.",
  "Corporate Programs & Activations",
  "Community Outreach & Social Impact Initiatives"
];

// REAL SCREENSHOT DATA 2: TYPES OF EVENTS WE ORGANIZE
const organizedEvents = [
  "Cause-Driven Runs & Marathons",
  "Wellness Retreats & Immersive Experiences",
  "Mental Health Awareness Campaigns & Workshops",
  "Corporate Wellness Programs & Activations",
  "Community Outreach & Social Impact Initiatives"
];

// REAL SCREENSHOT DATA 3: EXPERTISE IN EVERY DETAIL
const expertiseData = [
  {
    title: "Concept & Theme Development",
    desc: "We specialize in curating meaningful event themes rooted in purpose — from mental health awareness to social impact — ensuring every event connects deeply with the audience.",
    icon: <Lightbulb className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "End-to-End Event Planning",
    desc: "From idea to execution, we manage every aspect of your event including venue coordination, vendor management, logistics, scheduling, and on-ground supervision.",
    icon: <Sliders className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "Creative Design & Branding",
    desc: "We design complete visual identities for your event — including logos, stage design, banners, digital creatives, participant kits, and all brand communication materials.",
    icon: <Palette className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "Marketing & Promotions",
    desc: "Our team handles strategic promotions across digital platforms, offline outreach, influencer engagement, and PR to maximize reach and participation.",
    icon: <Megaphone className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "Content & Speaker Curation",
    desc: "We bring subject matter experts, thought leaders, and wellness advocates to deliver value-driven sessions and talks that align with your event's theme.",
    icon: <Mic2 className="w-5 h-5 text-[#7c3aed]" />
  },
  {
    title: "Volunteer & Staffing Solutions",
    desc: "From trained volunteers to professional support teams, we ensure smooth flow and support at every point of your event — from registration desks to post-run hospitality.",
    icon: <Users className="w-5 h-5 text-[#7c3aed]" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] }
  }
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#faf9f7] text-[#1a1523] overflow-x-hidden font-sans scope-zhozho-awesome-portal">
      
      {/* ─── SCOPED FONT & MATRIX PATTERN DEFENSE ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900&display=swap');

        .scope-zhozho-awesome-portal, 
        .scope-zhozho-awesome-portal div, 
        .scope-zhozho-awesome-portal h2, 
        .scope-zhozho-awesome-portal h3, 
        .scope-zhozho-awesome-portal p, 
        .scope-zhozho-awesome-portal span, 
        .scope-zhozho-awesome-portal a {
          font-family: 'DM Sans', sans-serif !important;
        }

        @keyframes draw-underline-curve {
          to { stroke-dashoffset: 0; }
        }
        .animate-curve-bar {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-underline-curve 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .clean-stack-row {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 12px;
          transition: all 0.25s ease;
        }
        .clean-stack-row:hover {
          border-color: rgba(124, 58, 237, 0.25);
          transform: translateX(4px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.03);
        }

        .premium-layout-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.05);
          border-radius: 24px;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s, border-color 0.4s;
        }
        .premium-layout-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.2);
          box-shadow: 0 20px 40px rgba(124, 58, 237, 0.05);
        }
      `}</style>

      {/* ─── SECTION 1: OUR SIGNATURE EVENTS (IMAGE LEFT, CONTENT RIGHT) ─── */}
      <section className="mt-40 py-24 bg-white border-b border-gray-100 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          <div className="space-y-4 mb-16 text-center md:text-left">
            <span className="text-[11px] font-bold text-[#7c3aed] uppercase tracking-[0.25em] block">Properties Directory</span>
            <div className="relative inline-block pb-3">
              <h2 className="text-3xl md:text-5xl font-black text-[#1a1523] tracking-tighter leading-none">
                Our Signature <span className="text-[#7c3aed]">Events</span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-full h-3 max-w-[260px] md:max-w-[340px]">
                <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="animate-curve-bar" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl font-normal leading-relaxed pt-2">
              From Hyderabad to cities across India — we aim to create meaningful experiences that inspire communities to move, connect, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">
            
            {/* Image Placeholder on LEFT */}
            <div className="w-full aspect-[4/3.5] rounded-3xl bg-[#f3f1ee] border border-gray-200/60 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-purple-100 rounded-full blur-[70px] opacity-60" />
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/50 flex items-center justify-center shadow-sm">
                <Sparkles className="w-4 h-4 text-[#7c3aed]" />
              </div>
              <div className="space-y-2 relative z-10 max-w-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Media Space Placeholder</span>
                <p className="text-xs font-semibold text-gray-400">Bind your production portfolio images directly into this canvas dimension box wrapper.</p>
              </div>
            </div>

            {/* List Stack on RIGHT */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3 w-full"
            >
              {signatureEvents.map((text, idx) => (
                <motion.div 
                  variants={fadeUp}
                  key={idx} 
                  className="clean-stack-row p-4.5 flex items-center gap-4 cursor-default"
                >
                  <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100/40 font-bold text-xs shrink-0 shadow-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 tracking-tight">{text}</span>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: TYPES OF EVENTS WE ORGANIZE (CONTENT LEFT, IMAGE RIGHT - ASYMMETRIC FLIP) ─── */}
      <section className="py-24 bg-[#faf9f7] border-b border-gray-200/40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Header Layout Block */}
          <div className="space-y-4 mb-16 text-center md:text-left">
            <span className="text-[11px] font-bold text-[#f07167] uppercase tracking-[0.25em] block">Portfolio Matrix</span>
            <div className="relative inline-block pb-3">
              <h2 className="text-3xl md:text-5xl font-black text-[#1a1523] tracking-tighter leading-none">
                Types of Events <span className="text-[#f07167]">We Organize</span>
              </h2>
              <div className="absolute -bottom-1 left-0 w-full h-3 max-w-[260px] md:max-w-[340px]">
                <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#7c3aed" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="2.5" strokeLinecap="round" className="animate-curve-bar" />
                </svg>
              </div>
            </div>
            <p className="text-gray-500 text-sm md:text-base max-w-2xl font-normal leading-relaxed pt-2">
              From Hyderabad to cities across India — we aim to create meaningful experiences that inspire communities to move, connect, and grow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
            
            {/* List Stack on LEFT */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-3 w-full order-2 lg:order-1"
            >
              {organizedEvents.map((text, idx) => (
                <motion.div 
                  variants={fadeUp}
                  key={idx} 
                  className="clean-stack-row p-4.5 flex items-center gap-4 cursor-default"
                >
                  <div className="w-7 h-7 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100/40 shadow-sm shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-800 tracking-tight">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Image Placeholder on RIGHT */}
            <div className="w-full aspect-[4/3.5] rounded-3xl bg-[#f3f1ee] border border-gray-200/60 p-8 flex flex-col justify-between relative overflow-hidden shadow-sm order-1 lg:order-2">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-100 rounded-full blur-[70px] opacity-60" />
              <div className="w-9 h-9 rounded-xl bg-white border border-gray-200/50 flex items-center justify-center shadow-sm">
                <Layers className="w-4 h-4 text-[#f07167]" />
              </div>
              <div className="space-y-2 relative z-10 max-w-xs">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Media Space Placeholder</span>
                <p className="text-xs font-semibold text-gray-400">Bind your production portfolio images directly into this canvas dimension box wrapper.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 3: EXPERTISE IN EVERY DETAIL (CLEAN CAPSULE GRID) ─── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          
          <div className="mb-16 space-y-2 text-center md:text-left">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.25em] block">Execution Architecture</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1523] tracking-tighter uppercase">
              Expertise In <span className="text-[#7c3aed]">Every Detail</span>
            </h2>
            <div className="w-16 h-[3px] bg-[#7c3aed] rounded-full mt-3 hidden md:block" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {expertiseData.map((item, index) => (
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -5, scale: 1.01, borderColor: "rgba(124, 58, 237, 0.22)", boxShadow: "0 16px 40px rgba(124, 58, 237, 0.05)" }}
                key={index}
                className="premium-layout-card p-6 md:p-8 flex flex-col justify-start min-h-[190px] transition-all duration-300 cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#faf9f7] border border-gray-200/60 flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base md:text-lg font-bold text-[#1a1523] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ─── SYSTEM CTA CONSOLE ─── */}
      <section className="py-24 bg-[#faf9f7] border-t border-gray-200/50 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl md:text-4xl font-black text-[#1a1523] tracking-tighter">
            Ready to Partner With Us?
          </h2>
          <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed font-normal">
            Get in touch with our event execution core cell to seamlessly scale your next activation blueprint.
          </p>
          <div className="pt-2">
            <a 
              href="mailto:info@zhozhoentertainments.com" 
              className="inline-flex items-center gap-2 bg-[#1a1523] text-white px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase shadow-md hover:bg-[#7c3aed] transition-all duration-200"
            >
              Consult Our Team
              <ArrowRight className="w-4 h-4 text-[#f07167]" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── BASEMENT FOOTER ─── */}
      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-gray-400">
          Zho Zho Properties · Production Frameworks · Operational Standards
        </p>
      </footer>

    </div>
  );
}