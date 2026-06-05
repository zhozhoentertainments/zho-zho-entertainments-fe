"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Heart, Users, Globe, Eye, Sparkles,
  Gift, Microscope, Megaphone, Droplets, Crown,
  Mail, Phone, ArrowRight, Rocket, Target
} from "lucide-react";
import SponsorsLogoCarousel from "../components/SponsorsLogoCarousel.js";

const PURPLE = "#961FDE";
const DARK = "#120323";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const HeadingWithUnderline = ({ children, center = false }) => (
  <div className={center ? "text-center mb-4" : "mb-4"}>
    <h2 className={`
      text-[clamp(28px,3.5vw,38px)] font-bold leading-tight mb-0
      ${center ? 'inline-block text-center' : 'inline-block'}
      relative text-[#120323] tracking-[-0.02em]
    `}>
      {children}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '40%' }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-1.5 left-0 h-0.5 bg-[#961FDE] rounded-full"
        style={center ? { left: '30%' } : { left: 0 }}
      />
    </h2>
  </div>
);

export default function SponsorsPage() {
  const titlePackage = PACKAGES.find(p => p.featured);
  const secondaryPackages = PACKAGES.filter(p => !p.featured);

  return (
    <div className="bg-[#faf8ff] text-[#120323] pb-16 font-sans ">

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mt-30 max-w-[1100px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 py-20 lg:py-20"
      >
        <motion.div variants={fadeInUp} className="flex flex-col items-start">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-1.5 bg-[rgba(150,31,222,0.08)] rounded-full px-3 py-1.5 mb-4"
          >
            <Sparkles size={12} color={PURPLE} />
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#961FDE] uppercase">
              Partners for Change
            </span>
          </motion.div>

          <h1 className="text-[clamp(28px,3.5vw,38px)] font-bold leading-tight mb-4 text-[#120323] tracking-[-0.02em]">
            Partner with a movement<br />
            that actually <span className="text-[#961FDE] relative">
              moves people.
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute -bottom-1 left-0 h-0.5 bg-[#961FDE] rounded-full"
              />
            </span>
          </h1>

          <motion.p variants={fadeInUp} className="text-sm text-[rgba(18,3,35,0.55)] leading-relaxed mb-7">
            We believe real impact happens when passionate people and visionary
            brands come together. Our sponsors are not just supporters — they are
            changemakers who share our commitment to wellness and community.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'mailto:info@zhozhoentertainments.com?subject=Sponsorship Deck Request&body=Hi Team,%0D%0A%0D%0AI\'m interested in sponsorship opportunities. Please share the sponsorship deck.%0D%0A%0D%0ARegards,%0D%0A[Your Name]%0D%0A[Company Name]'}
              className="inline-flex items-center gap-2 bg-[#961FDE] text-white border-none rounded-lg px-6 py-3 text-[13px] font-semibold cursor-pointer"
            >
              <Mail size={14} /> Get Sponsorship Deck
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'tel:+918019037799'}
              className="inline-flex items-center gap-2 bg-white text-[#120323] border border-[rgba(18,3,35,0.12)] rounded-lg px-6 py-3 text-[13px] font-semibold cursor-pointer"
            >
              <Phone size={14} /> Schedule a Call
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4">
          {HERO_STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeInUp}
              whileHover={{ y: -3 }}
              className="bg-white rounded-2xl border border-[rgba(18,3,35,0.06)] p-6 shadow-[0_2px_20px_rgba(18,3,35,0.02)]"
            >
              <div className="text-[28px] font-bold text-[#961FDE] mb-1">{s.val}</div>
              <div className="text-sm font-semibold text-[#120323] mb-0.5">{s.label}</div>
              <div className="text-[11px] text-[rgba(18,3,35,0.45)]">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Why Sponsor Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="max-w-[1100px] mx-auto px-6 py-16"
      >
        <div className="text-center mb-10">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-1.5 bg-[rgba(150,31,222,0.08)] rounded-full px-3 py-1.5 mb-4 justify-center"
          >
            <Target size={12} color={PURPLE} />
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#961FDE] uppercase">
              Why Sponsor Us?
            </span>
          </motion.div>

          <HeadingWithUnderline center={true}>
            Four reasons brands choose us
          </HeadingWithUnderline>

          <motion.p variants={fadeInUp} className="text-sm text-[rgba(18,3,35,0.55)] m-0">
            Built on purpose, powered by community, proven by impact
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_REASONS.map((r, i) => (
            <motion.div
              key={r.title}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-[rgba(18,3,35,0.06)] p-6 shadow-[0_2px_20px_rgba(18,3,35,0.02)] flex flex-col items-start"
            >
              <div className="flex justify-between w-full items-center mb-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className="w-10 h-10 rounded-lg bg-[rgba(150,31,222,0.08)] flex items-center justify-center"
                >
                  <r.icon size={18} color={PURPLE} />
                </motion.div>
                <span className="text-[11px] font-semibold text-[rgba(18,3,35,0.25)]">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#120323] mb-2">{r.title}</h3>
              <p className="text-[13px] text-[rgba(18,3,35,0.5)] m-0 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Trusted Brands */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="bg-white "
      >
        <div className="max-w-[1100px] mx-auto text-center">

          <div className="flex justify-center items-center flex-wrap gap-10">
            <SponsorsLogoCarousel />
          </div>
        </div>
      </motion.section>

      {/* Sponsorship Packages */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-[1100px] mx-auto px-6 py-16"
      >
        <div className="text-center mb-10">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-1.5 bg-[rgba(150,31,222,0.08)] rounded-full px-3 py-1.5 mb-4 justify-center"
          >
            <Crown size={12} color={PURPLE} />
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#961FDE] uppercase">
              Sponsorship Opportunities
            </span>
          </motion.div>

          <h2 className="text-[clamp(20px,2.5vw,26px)] font-semibold text-center mb-3 text-[#120323]">
            Choose your impact level
          </h2>

          <motion.p variants={fadeInUp} className="text-sm text-[rgba(18,3,35,0.55)] max-w-[480px] mx-auto">
            Tailored packages for brands of all sizes
          </motion.p>
        </div>

        {/* Title Sponsor */}
        {titlePackage && (
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            className="bg-white border border-[#961FDE] rounded-2xl p-7 mb-5 flex gap-6 items-center flex-wrap"
          >
            <div className="flex-1 min-w-[300px]">
              <div className="inline-flex items-center gap-1.5 bg-[#961FDE] rounded-full px-2.5 py-0.5 mb-3">
                <Crown size={11} color="#fff" />
                <span className="text-[10px] font-semibold text-white tracking-[0.05em] uppercase">
                  Title Sponsor
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#120323] mb-2">{titlePackage.tier}</h3>
              <p className="text-[13.5px] text-[rgba(18,3,35,0.6)] mb-5 leading-relaxed">{titlePackage.desc}</p>
              <div className="flex flex-wrap gap-2">
                {titlePackage.benefits.map((benefit) => (
                  <span key={benefit} className="text-[11px] font-medium text-[#961FDE] bg-[rgba(150,31,222,0.08)] rounded-md px-2.5 py-1">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 bg-[#961FDE] text-white rounded-lg px-6 py-3 text-[13px] font-semibold cursor-pointer border-none"
              >
                Enquire Now <ArrowRight size={13} />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Other Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
          {secondaryPackages.map((pkg) => (
            <motion.div
              key={pkg.tier}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-[rgba(18,3,35,0.06)] p-6 flex flex-col"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.4 }}
                className="w-10 h-10 rounded-lg bg-[rgba(150,31,222,0.08)] flex items-center justify-center mb-4"
              >
                <pkg.icon size={18} color={PURPLE} />
              </motion.div>
              <h3 className="text-base font-bold text-[#120323] mb-2">{pkg.tier}</h3>
              <p className="text-[12.5px] text-[rgba(18,3,35,0.6)] mb-4 flex-1 leading-relaxed">{pkg.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {pkg.benefits.map((benefit) => (
                  <span key={benefit} className="text-[10px] font-medium text-[rgba(18,3,35,0.6)] bg-[#faf8ff] rounded px-2 py-0.5 border border-[rgba(18,3,35,0.06)]">
                    {benefit}
                  </span>
                ))}
              </div>
              <motion.button
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#961FDE] bg-none border-none cursor-pointer p-0 w-fit"
              >
                Learn more <ArrowRight size={12} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-[1100px] mx-auto mb-10 px-6"
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -4 }}
          className="bg-[#120323] rounded-2xl py-12 px-8 text-center"
        >
          <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.1)] rounded-full px-3 py-1 mb-5">
            <Rocket size={11} color="#e0aaff" />
            <span className="text-[10px] font-semibold tracking-[0.08em] text-[#e0aaff] uppercase">
              Limited slots available
            </span>
          </div>

          <h2 className="text-[clamp(28px,3.5vw,38px)] font-bold leading-tight mb-4 text-white">
            Ready to make real impact?
          </h2>

          <motion.p variants={fadeInUp} className="text-sm text-white/60 max-w-[500px] mx-auto mb-8 leading-relaxed">
            Let's collaborate and build something meaningful together.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex justify-center gap-3 mb-8 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'mailto:info@zhozhoentertainments.com'}
              className="inline-flex items-center gap-2 bg-[#961FDE] text-white rounded-lg px-6 py-3 text-[13px] font-semibold cursor-pointer border-none"
            >
              <Mail size={14} /> Get Sponsorship Deck
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = 'tel:+918019037799'}
              className="inline-flex items-center gap-2 bg-white/10 text-white rounded-lg px-6 py-3 text-[13px] font-semibold cursor-pointer border border-white/20"
            >
              <Phone size={14} /> Schedule a Call
            </motion.button>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <span>info@zhozhoentertainments.com</span>
            <span>•</span>
            <span>+91 8019037799</span>
            <span>•</span>
            <span>Response within 24h</span>
          </div>
        </motion.div>
      </motion.section>

    </div>
  );
}

const HERO_STATS = [
  { val: "15+", label: "Cities", sub: "PAN-India presence" },
  { val: "50M+", label: "Digital Reach", sub: "Across platforms" },
  { val: "100K+", label: "Community", sub: "Active participants" },
  { val: "3.2×", label: "Avg ROI", sub: "Proven returns" },
];

const WHY_REASONS = [
  {
    icon: Heart,
    title: "Cause-Driven Visibility",
    desc: "Align your brand with a powerful social impact movement focused on mental health and community wellness.",
  },
  {
    icon: Globe,
    title: "PAN-India Growth",
    desc: "Be part of a bold journey to scale across cities and create large-format experiences.",
  },
  {
    icon: Users,
    title: "Engaged Audience",
    desc: "Connect with health-conscious individuals, youth, corporates, families, and changemakers.",
  },
  {
    icon: Eye,
    title: "High-Value Exposure",
    desc: "Logo placements, stage mentions, digital branding, media coverage, and influencer tie-ins.",
  },
];

const PACKAGES = [
  {
    icon: Crown,
    tier: "Title Sponsor",
    featured: true,
    desc: "Maximum brand presence across all platforms, event collaterals, T-shirts, medals, press releases, and ceremonies.",
    benefits: ["All Platforms", "Event Collateral", "T-shirts & Medals", "Press Releases"],
  },
  {
    icon: Gift,
    tier: "Merchandise Partner",
    featured: false,
    desc: "Sponsor event kits, T-shirts, medals, or giveaways that go directly to participants.",
    benefits: ["Brand on Kits", "Giveaways", "Volunteer Packs"],
  },
  {
    icon: Microscope,
    tier: "Wellness Partner",
    featured: false,
    desc: "Support pre-event talk sessions, wellness zones, or expert speaker panels.",
    benefits: ["Wellness Zones", "Speaker Panels", "Stage Time"],
  },
  {
    icon: Megaphone,
    tier: "Digital Partner",
    featured: false,
    desc: "Join us in spreading awareness through co-branded digital campaigns.",
    benefits: ["Digital Campaigns", "Influencer Tags", "Social Features"],
  },
  {
    icon: Droplets,
    tier: "Hydration Partner",
    featured: false,
    desc: "Feature your brand across hydration points and nutrition zones.",
    benefits: ["Hydration Points", "Nutrition Zones", "Refreshments"],
  },
];

const TRUSTED_BRANDS = ["Tata", "Reliance", "Adani", "Mahindra", "Godrej"];