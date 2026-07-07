'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  MapPin,
  Calendar,
  Sparkles,
  ShoppingBag,
  Tv,
  Trophy,
  Users,
  Star,
  ArrowUpRight
} from 'lucide-react';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// कॉन्फ़िगरेशन वेरिएबल (true = म्यूटेड स्टार्ट, false = आवाज़ के साथ स्टार्ट)
const AUTOPLAY_VIDEO_MUTE = true;

const VIDEO_SRC = '/video/elite.mp4';
const BG_IMAGE = '/oldevent/6F8A7271.JPG';
// const BG_IMAGE = '/oldevent/champs.JPG';
const PHOTOS = [
  {
    src: '/oldevent/india.JPG',
    label: 'kho kho world cup 2025',
    position: 'center',
  },
  {
    src: '/oldevent/MDI00909.JPG',
    label: 'kho kho world cup 2025',
    position: 'center',
  },
  {
    src: '/oldevent/SNK02451.JPG',
    label: 'kho kho world cup 2025',
    position: 'right',
  },
  {
    src: '/oldevent/2SNK8537.JPG',
    label: 'kho kho world cup 2025',
    position: 'center',
  },
];

const FEATURES = [
  {
    icon: Sparkles,
    label: 'Creator Zone',
    desc: " Engage directly with top digital creators in our dedicated Creator Zone.",
    accent: '#ff4757',
    glow: 'rgba(255, 71, 87, 0.15)',
    bg: 'linear-gradient(135deg, rgba(255, 71, 87, 0.08) 0%, rgba(255, 71, 87, 0.02) 100%)',
    border: 'rgba(255, 71, 87, 0.2)',
  },
  {
    icon: ShoppingBag,
    label: 'Fan Village',
    desc: '50+ Stalls · Startup  · Daily Live Entertainment • Enjoy  ',
    accent: '#2ed573',
    glow: 'rgba(46, 213, 115, 0.15)',
    bg: 'linear-gradient(135deg, rgba(46, 213, 115, 0.08) 0%, rgba(46, 213, 115, 0.02) 100%)',
    border: 'rgba(46, 213, 115, 0.2)',
  },
  {
    icon: Tv,
    label: 'Live Broadcast Streaming',
    desc: 'Daily coverage on leading OTT & digital channels.',
    accent: '#1e90ff',
    glow: 'rgba(30, 144, 255, 0.15)',
    bg: 'linear-gradient(135deg, rgba(30, 144, 255, 0.08) 0%, rgba(30, 144, 255, 0.02) 100%)',
    border: 'rgba(30, 144, 255, 0.2)',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function EliteLeagueLanding() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(AUTOPLAY_VIDEO_MUTE);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = muted;
      videoRef.current.play().catch(() => {
        if (!AUTOPLAY_VIDEO_MUTE) {
          videoRef.current.muted = true;
          setMuted(true);
          videoRef.current.play().catch(() => { });
        }
      });
    }

    const safetyTimeout = setTimeout(() => {
      setIsVideoLoading(false);
    }, 2500);

    return () => clearTimeout(safetyTimeout);
  }, []);

  const handleVideoLoaded = () => {
    setIsVideoLoading(false);
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (isVideoLoading || !videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <div className={`${dmSans.variable} min-h-screen bg-[#03060f] text-slate-100 font-sans antialiased overflow-x-hidden selection:bg-yellow-500 selection:text-black`}>

      {/* ===================================================================
          1. HERO SECTION (DARK THEME)
          =================================================================== */}
      <section className="relative min-h-screen flex flex-col pt-30 justify-center">

        {/* Background Image & Gradient Masks */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#03060f]">
          {/* मुख्य बैकग्राउंड इमेज */}
          <img
            src={BG_IMAGE}
            alt="Kho Kho Action Background"
            className="w-full h-full object-cover object-center opacity-35 mix-blend-screen"
          />

          {/* Left overlay: लेफ्ट साइड (जहाँ टेक्स्ट है) को थोड़ा ज्यादा डार्क रखने के लिए */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#03060f]/90 via-[#03060f]/40 to-transparent" />

          {/* Vignette effect: चारों कोनों (margins) को डार्क करने के लिए ताकि फोकस बीच में रहे */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#03060f_90%)] opacity-10" />

          {/* ग्लोइंग नियॉन सर्कल्स */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
        </div>

        {/* Hero Content Area */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-12 flex items-center flex-1">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col gap-8"
            >

              {/* Eyebrow Live Badge */}
              <motion.div variants={fadeInUp} className="mt-20  inline-flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                </span>
                <p className="text-xs font-bold tracking-[0.3em] text-yellow-400 uppercase font-mono">
                  Upcoming Event · 1st Edition
                </p>
              </motion.div>

              {/* Huge Bold Title */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <h1 className="text-[clamp(2.2rem,6.5vw,5rem)] font-black leading-[0.95] uppercase tracking-tighter text-white">
                  ELITE KHO KHO
                  <br />
                  <motion.span
                    initial={{ opacity: 0, scale: 0.6, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#F9C300] to-[#FA5A00]"
                  >
                    CHAMPIONSHIP
                  </motion.span>
                </h1>

                <p className="text-slate-300 text-base md:text-lg max-w-xl leading-relaxed font-normal">
                  Experience the <span className="text-yellow-400 font-semibold">"Sport of Our Soil"</span> — India’s Pride and India's Next Big Sporting Movement.
                </p>
              </motion.div>

              {/* Date & Venue Cards */}
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 max-w-xl">
                <div className="rounded-2xl bg-[#0d1226]/60 backdrop-blur-md px-5 py-5 border border-white/[0.08] date-border-anim shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Schedule</span>
                  </div>
                  <p className="text-2xl font-black text-white uppercase tracking-wide">August 2026</p>
                  <p className="text-xs text-emerald-400 font-medium mt-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    4 Days of Non-Stop Action
                  </p>
                </div>

                <div className="rounded-2xl bg-[#0d1226]/60 backdrop-blur-md px-5 py-5 border border-white/[0.08] venue-border-anim shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-emerald-400/10 flex items-center justify-center border border-emerald-400/20">
                      <MapPin className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">venue</span>
                  </div>
                  <p className="text-2xl font-black text-white uppercase tracking-wide truncate">Hyderabad</p>
                  <p className="text-xs text-slate-300 mt-1.5"> Telangana</p>
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/[0.08] max-w-xl">
                {[
                  { val: '16', label: 'Elite Teams', sub: '8 Men & 8 Women', color: 'from-yellow-400 to-orange-400', icon: Trophy },
                  { val: '288', label: 'Athletes', sub: 'Top Tier Pros', color: 'from-emerald-400 to-teal-400', icon: Users },
                  { val: '₹30.5L', label: 'Prize Pool', sub: 'Total Rewards', color: 'from-amber-300 to-yellow-500', icon: Star },
                  { val: '80K+', label: 'Live Fans', sub: 'Expected Arena', color: 'from-blue-400 to-indigo-400', icon: ArrowUpRight },
                ].map(({ val, label, sub, color, icon: Icon }) => (
                  <div key={label} className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4 flex flex-col justify-between hover:bg-white/[0.06] transition-colors group">
                    <div className="flex justify-between items-start">
                      <p className={`text-2xl font-black bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{val}</p>
                      <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                    </div>
                    <div className="mt-4">
                      <p className="text-white font-bold text-xs leading-tight">{label}</p>
                      <p className="text-slate-500 text-[10px] mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Event Key Features */}
              <motion.div variants={fadeInUp} className="grid grid-cols-1 gap-3 max-w-xl">
                {FEATURES.map(({ icon: Icon, label, desc, accent, glow, bg, border }) => (
                  <div
                    key={label}
                    className="group flex items-center gap-4 rounded-xl px-5 py-4 transition-all duration-300 border backdrop-blur-sm"
                    style={{ background: bg, borderColor: border }}
                    onMouseEnter={e => {
                      e.currentTarget.style.boxShadow = `0 10px 30px ${glow}`;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border" style={{ background: 'rgba(250,250,250,0.02)', borderColor: border }}>
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm uppercase tracking-wide mb-0.5" style={{ color: accent }}>
                        {label}
                      </p>
                      <p className="text-slate-400 text-xs font-normal">{desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

            </motion.div>

            {/* ── RIGHT COLUMN: VIDEO DISPLAY ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="lg:col-span-5 flex justify-center lg:justify-end items-center"
            >
              <motion.div
                whileHover={!isVideoLoading ? { scale: 1.05 } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                onClick={toggleMute}
                className={`relative w-full max-w-[340px] flex flex-col items-center group select-none ${isVideoLoading ? 'cursor-wait' : 'cursor-pointer'}`}
              >
                {/* Glow Behind Video Frame */}
                <div className="absolute -inset-4 bg-gradient-to-b from-orange-500/10 to-transparent rounded-[2.5rem] blur-2xl opacity-80 pointer-events-none" />

                {/* Vertical 9:16 Frame */}
                <div className="relative w-full rounded-[2rem] overflow-hidden border border-white/[0.12] bg-[#070a14] shadow-[0_30px_80px_rgba(0,0,0,0.9)]">

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-yellow-500/30 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                    <span className="text-[9px] font-black tracking-[0.15em] text-yellow-300 uppercase font-mono">Ambassador</span>
                  </div>

                  {/* Floating Audio Status Icon */}
                  {!isVideoLoading && (
                    <button
                      onClick={toggleMute}
                      className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white hover:bg-black/90 transition-all"
                      aria-label={muted ? 'Unmute' : 'Mute'}
                    >
                      {muted ? <VolumeX className="w-4 h-4 text-slate-300" /> : <Volume2 className="w-4 h-4 text-yellow-400" />}
                    </button>
                  )}

                  {/* HTML Video Box Container */}
                  <div className="relative w-full bg-[#070a14]" style={{ paddingBottom: '177.78%' }}>

                    {/* जब तक वीडियो लोड/प्ले नहीं होता */}
                    {isVideoLoading && (
                      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#070a14] px-6 text-center pointer-events-none">
                        <div className="w-10 h-10 border-4 border-t-yellow-400 border-white/10 rounded-full animate-spin mb-4" />
                        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase font-mono animate-pulse">
                          brand ambesdor video loaidng...
                        </p>
                      </div>
                    )}

                    <video
                      ref={videoRef}
                      src={VIDEO_SRC}
                      autoPlay
                      loop
                      playsInline
                      preload="auto"
                      muted={muted}
                      onLoadedData={handleVideoLoaded}
                      onCanPlay={handleVideoLoaded}
                      onPlay={handleVideoLoaded}
                      onPlaying={handleVideoLoaded}
                      // ब्लैक स्क्रीन बग फ़िक्स: 'block' ज़बरदस्ती लागू किया गया है ताकि ब्राउज़र लेयर रेंडरिंग मिस न करे
                      className="absolute inset-0 w-full h-full object-cover block bg-transparent"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none" />
                  </div>
                </div>

                {/* Center Lower Branding */}
                <div className="mt-6 flex flex-col items-center gap-2 w-full text-center">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-md px-5 py-2.5 rounded-full border border-white/[0.1] shadow-xl">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-black tracking-widest text-white uppercase">Elite Kho Kho 2026</span>
                  </div>
                  <p className="text-[10px] font-mono tracking-[0.3em] text-slate-400 uppercase font-bold">ZHO ZHO Entertainments</p>
                </div>

              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ===================================================================
          2. KHO KHO IN ACTION (PHOTOS/GALLERY SECTION)
          =================================================================== */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="flex items-end justify-between mb-10 border-b border-white/[0.05] pb-6">
          <div>
            <p className="text-xs font-mono tracking-[0.25em] text-slate-500 uppercase mb-1">Visual</p>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Kho Kho <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Actions</span>
            </h2>
          </div>
          <Link href="/our-gallery" className="text-xs font-bold text-slate-400 hover:text-yellow-400 uppercase tracking-widest transition-colors hidden sm:flex items-center gap-1 group">
            View Gallery <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        {/* Action Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {PHOTOS.map(({ src, label, position }, i) => (
            <div key={i} className="group relative rounded-2xl overflow-hidden border border-white/[0.05] bg-slate-900 shadow-md" style={{ aspectRatio: '3/4' }}>
              <img
                src={src}
                alt={label}
                className={`w-full h-full object-cover brightness-[0.75] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out ${position === 'right'
                  ? 'object-right'
                  : position === 'left'
                    ? 'object-left'
                    : 'object-center'
                  }`}
              />              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 text-xs font-bold text-white uppercase tracking-wider">{label}</p>
              <span className="absolute top-4 right-4 text-[10px] font-bold text-white/30 font-mono bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md border border-white/5">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="max-w-7xl mx-auto px-6 lg:px-12 py-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">"Sport of Our Soil" — Telangana's Pride</p>
        <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest font-mono">© 2026 ZHO ZHO Entertainments</p>
      </footer>

      {/* CSS Variables & Global Typography Rules */}
      <style jsx global>{`
        :root {
          --font-dm-sans: 'DM Sans', sans-serif;
        }
        .font-sans { 
          font-family: var(--font-dm-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important; 
        }
        
        @keyframes datePulse {
          0%, 100% { border-color: rgba(234, 179, 8, 0.15); box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
          50% { border-color: rgba(234, 179, 8, 0.6); box-shadow: 0 0 15px rgba(234, 179, 8, 0.15); }
        }
        @keyframes venuePulse {
          0%, 100% { border-color: rgba(16, 185, 129, 0.15); box-shadow: 0 4px 20px rgba(0,0,0,0.2); }
          50% { border-color: rgba(16, 185, 129, 0.6); box-shadow: 0 0 15px rgba(16, 185, 129, 0.15); }
        }
        .date-border-anim { animation: datePulse 3s ease-in-out infinite; }
        .venue-border-anim { animation: venuePulse 3s ease-in-out infinite; animation-delay: 0.75s; }
        .dropping-shadow { filter: drop-shadow(0 4px 12px rgba(234,179,8,0.25)); }
      `}</style>

    </div>
  );
}