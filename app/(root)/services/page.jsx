"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Tv, 
  ShieldAlert, 
  Users, 
  TrendingUp 
} from "lucide-react";

// ─── SERVICES PARAMETERS DATA ───
const servicesList = [
  {
    id: "01",
    title: "Sports League Management",
    tagline: "End-to-End Tournament Infrastructure",
    desc: "We conceptualize, architect, and execute high-octane professional sports leagues. From team franchising layouts, player drafts, and stadium branding execution to comprehensive on-ground match day operations management.",
    icon: <Activity className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/league-mgmt.png",
    perks: ["Franchise Management", "Player Auction Operations", "Stadium Operations"]
  },
  {
    id: "02",
    title: "Broadcast & Media Production",
    tagline: "Premium Live Sports Streaming Solutions",
    desc: "Delivering multi-camera live broadcast setups, premium commentary feeds, real-time analytics graphics overlay, and social media digital highlights integration. We bring stadium energy straight to millions of screens globally.",
    icon: <Tv className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/broadcast.png",
    perks: ["HD Live Streaming", "Real-Time Statistics Engine", "Highlight Packages"]
  },
  {
    id: "03",
    title: "Corporate & Elite Sports Events",
    tagline: "Bespoke Experiential Engagements",
    desc: "Tailored sporting properties built for global corporate networks, premium brand campaigns, and community activation modules. We handle venue logistics, professional officiating, hospitality, and custom PR distributions.",
    icon: <Sparkles className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/corporate.png",
    perks: ["Brand Activations", "Corporate Wellness Cups", "PR & Media Outreach"]
  },
  {
    id: "04",
    title: "Talent & Athlete Management",
    tagline: "Nurturing Next-Gen Indigenous Champions",
    desc: "Our representation vertical shapes corporate commercial endorsements, personalized career roadmaps, media training modules, and strategic placement structures for professional sports athletes across top leagues.",
    icon: <Users className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/talent.png",
    perks: ["Brand Endorsements", "PR & Image Consulting", "Performance Analytics"]
  },
  {
    id: "05",
    title: "Sports Marketing & Sponsorships",
    tagline: "Maximizing Commercial Yield Frameworks",
    desc: "Connecting premium consumer brands with highly loyal indigenous sports audiences. We build ROI-focused dynamic sponsorship integrations, stadium digital inventory placements, and experiential client zones.",
    icon: <TrendingUp className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/marketing.png",
    perks: ["ROI Sponsorship Frameworks", "Digital Stadium Inventory", "Experiential Zones"]
  },
  {
    id: "06",
    title: "Security & Hospitality Logistics",
    tagline: "Seamless VIP & Spectator Operations",
    desc: "Deploying bulletproof facility security protocols, automated entry ticketing validation loops, VIP seating tier operations, and massive crew coordination networks to ensure crowd flow optimization.",
    icon: <ShieldAlert className="w-6 h-6 text-[#7c3aed]" />,
    image: "/services/security.png",
    perks: ["Crowd Optimization Loop", "VIP Tier Management", "Crew Coordination Systems"]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ServicesPage() {
  return (
    <div className="w-full min-h-screen bg-[#faf9f7] text-[#1a1523] selection:bg-purple-100 overflow-x-hidden font-sans scope-zhozho-services">
      
      {/* ─── SCOPED FONT DEFENSE ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap');

        :root {
          --coral: #f07167;
          --plum: #7c3aed;
          --bg-2: #f3f1ee;
          --border-soft: rgba(0,0,0,0.07);
        }

        .scope-zhozho-services, 
        .scope-zhozho-services div, 
        .scope-zhozho-services h1, 
        .scope-zhozho-services h2, 
        .scope-zhozho-services h3, 
        .scope-zhozho-services p, 
        .scope-zhozho-services span, 
        .scope-zhozho-services a {
          font-family: 'DM Sans', sans-serif !important;
        }

        .service-card-remodel {
          background: #ffffff;
          border: 1px solid var(--border-soft);
          border-radius: 24px;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s, border-color 0.4s;
        }
        .service-card-remodel:hover {
          transform: translateY(-5px);
          border-color: rgba(124,58,237,0.18);
          box-shadow: 0 20px 48px rgba(124,58,237,0.06);
        }
      `}</style>

      {/* ─── HERO SECTION ─── */}
      <section className="relative flex items-end min-h-[75vh] overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/services/hero.png" 
            alt="Zho Zho Services Operations Layout"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f7]/20 to-[#faf9f7] z-10" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-purple-300/20 blur-[100px] z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 pt-32">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/60 text-[11px] font-bold uppercase tracking-wider text-[#7c3aed]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              What We Deliver
            </div>
            <h1
              className="font-black leading-[1.02] text-[#1a1523] tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 8vw, 5.5rem)" }}
            >
              Our Operational<br />
              <span className="text-[#7c3aed]">Capabilities.</span>
            </h1>
            <p className="text-[#7e7898] text-lg font-normal max-w-lg leading-relaxed">
              We engineer sports entertainment formats from zero to global broadcast tiers, blending logistics execution with raw mass engagement.
            </p>
            <nav className="flex items-center gap-2 text-xs font-bold text-[#7e7898] uppercase tracking-widest pt-1">
              <Link href="/" className="hover:text-[#7c3aed] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#3d3752]">Services</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ─── ALTERNATING / GRID MATRIX BLOCK ─── */}
      <section className="py-24 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          
          {/* Introductory Parameters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div className="space-y-2">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#7e7898] uppercase block">Capabilities Blueprint</span>
              <h2 className="font-black text-3xl md:text-5xl text-[#1a1523] tracking-tight">
                Production & <span className="text-[#7c3aed]">Management Verticals</span>
              </h2>
            </div>
            <p className="text-[#7e7898] text-sm md:text-base max-w-md leading-relaxed">
              A comprehensive system framework custom engineered for stadium activations, media acquisition channels, and absolute corporate scalability.
            </p>
          </div>

          {/* Cards Dynamic System Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={index}
                className="service-card-remodel p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Thin Top Indicator Accent on Card Hover */}
                <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#f07167] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Section Layout */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    {/* Left Icon Block */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-50 text-[#7c3aed] border border-purple-100/30 shrink-0">
                      {service.icon}
                    </div>
                    {/* High Visibility Numeric Tracker */}
                    <span className="text-xs font-black text-purple-600/90 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100">
                      {service.id}
                    </span>
                  </div>

                  {/* Text Header Parameters */}
                  <div className="space-y-1">
                    <h3 className="font-black text-lg md:text-xl text-[#1a1523] tracking-tight group-hover:text-[#7c3aed] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-[#f07167] text-xs font-bold tracking-wide">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Core Description Body Copy */}
                  <p className="text-[#7e7898] text-sm leading-relaxed font-normal pt-1">
                    {service.desc}
                  </p>
                </div>

                {/* Sub-Feature Internal Attribute Chips */}
                <div className="pt-6 mt-6 border-t border-gray-100/80 space-y-2">
                  <div className="flex flex-wrap gap-1.5">
                    {service.perks.map((perk, pIndex) => (
                      <span key={pIndex} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#f3f1ee] border border-gray-200/40 text-[11px] font-bold text-[#3d3752]">
                        <span className="w-1 h-1 rounded-full bg-[#7c3aed]" />
                        {perk}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── INTERACTIVE CTAs AND VALUE PROPOSITION ─── */}
      <section className="py-28 relative overflow-hidden text-center" style={{ background: "var(--plum-pale2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 75%)" }} />
        
        <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 text-[11px] font-bold uppercase tracking-wider text-[#7c3aed]">
            Let's Collaborate
          </div>
          <h2 className="font-black text-4xl md:text-5xl text-[#1a1523] leading-tight tracking-tight">
            Ready to Launch Your <span className="text-[#7c3aed]">Sports Property?</span>
          </h2>
          <p className="text-[#7e7898] max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Connect with our core sports advisory panel to draft your tailored franchising framework, live production workflow, or campaign mapping modules.
          </p>
          <div className="pt-2">
            <Link 
              href="mailto:info@zhozhoentertainments.com" 
              className="inline-flex items-center gap-3 bg-[#7c3aed] text-white px-10 py-4.5 rounded-full font-bold text-base shadow-xl shadow-purple-600/20 hover:bg-[#6d28d9] hover:-translate-y-0.5 transition-all duration-200"
            >
              Consult Our Core Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STRUCTURAL COMPONENT FOOTER ─── */}
      <footer className="py-10 bg-[#faf9f7] border-t border-gray-200 text-center">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#7e7898]">
          Strategy Operations · Broadcast Production Architecture · Commercial Scale
        </p>
      </footer>
    </div>
  );
}