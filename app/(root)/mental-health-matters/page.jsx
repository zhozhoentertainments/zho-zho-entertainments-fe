"use client";

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar, MapPin, Clock, RotateCw, Mail, Phone, Check,
  ArrowRight, Heart, ShieldAlert, Quote, ArrowUpRight, X,
  Sparkles, Trophy, Users, Leaf, Star, Award, TrendingUp, Zap
} from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/oldevent/8S4A5074.JPG', alt: 'Runners at the Start Line' },
  { src: '/oldevent/8S4A5095.JPG', alt: 'Mind Over Miles – Gachibowli Stadium' },
  { src: '/oldevent/8S4A4991.JPG', alt: 'Community Spirit' },
  { src: '/oldevent/8S4A4927.JPG', alt: 'Finishers Celebration' },
  { src: '/oldevent/8S4A5206.JPG', alt: 'Orange Hub Community' },
];

const SNAPSHOT_DATA = [
  {
    badge: 'Below Average',
    number: '58.3',
    unit: '',
    label: 'MHQ Score',
    context: 'Global avg: 63',
    desc: "Hyderabad's Mental Health Quotient falls below the global average of 63. Among major Indian metros, only Delhi scores lower.",
    barPct: 58.3,
    barColor: '#f59e0b',
    gradient: 'from-amber-500 via-orange-500 to-orange-600',
    icon: TrendingUp,
  },
  {
    badge: 'Critical',
    number: '32',
    unit: '%',
    label: 'Distressed or Struggling',
    context: '1 in 3 people',
    desc: 'Nearly 1 in 3 Hyderabadis show signs of severe emotional struggle, strained relationships, and reduced daily functioning.',
    barPct: 32,
    barColor: '#ef4444',
    gradient: 'from-red-500 via-rose-500 to-rose-600',
    icon: ShieldAlert,
  },
  {
    badge: 'Youth Crisis',
    number: '27',
    unit: 'pts',
    label: 'Young Adults (18–24)',
    context: '"Enduring" stress tier',
    desc: 'Youth MHQ places them in the "enduring" stress category — nearly half report debilitating distress levels.',
    barPct: 27,
    barColor: '#3b82f6',
    gradient: 'from-blue-500 via-indigo-500 to-indigo-600',
    icon: Zap,
  },
];

export default function MentalHealthMatters() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Partnership Request from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:director@zhozhoentertainments.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50/30 font-['DM_Sans',system-ui,-apple-system,sans-serif] antialiased">

      <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse-glow {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
            100% { opacity: 0.4; }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .gradient-border {
            position: relative;
            background: linear-gradient(rgba(30, 41, 59, 0.85), rgba(15, 23, 42, 0.9)) padding-box,
                        linear-gradient(135deg, #f97316, #8b5cf6, #06b6d4) border-box;
            border: 2px solid transparent;
          }
          .premium-heading {
            position: relative;
            display: inline-block;
          }
          .premium-heading::after {
            content: '';
            position: absolute;
            bottom: -12px;
            left: 0;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #f97316, #8b5cf6, #06b6d4, #f97316);
            background-size: 200% 100%;
            border-radius: 4px;
            animation: gradientShift 3s ease infinite;
          }
          .premium-heading-center::after {
            left: 50%;
            transform: translateX(-50%);
          }
          @media (max-width: 768px) {
            .premium-heading::after {
              width: 60px;
              height: 3px;
              bottom: -8px;
            }
          }
          .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
          }
        `}</style>

      {/* ── HERO SECTION (FIXED BACKGROUND IMAGE VISIBILITY) ─────────────────── */}
      <section className="relative overflow-hidden pt-20 bg-slate-950 flex items-center" style={{ minHeight: '580px' }}>

        {/* Step 1: Base skeleton glow color if the network is extremely slow */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-0"
          style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
        />

        {/* Step 2: Main Event Background Image (High quality visibility opacity) */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 z-10"
          style={{ backgroundImage: "url('/oldevent/8S4A5065.JPG')" }}
        />

        {/* Step 3: Fixed Left-to-Right Transparent Vignette Overlay */}
        {/* Ab left side solid black nahi hai (0.75 opacity), jisse text bhi read hoga aur piche ki image/runners bhi transparently saaf dikhenge */}
        <div
          className="absolute inset-0 z-20"
          style={{
            background: 'linear-gradient(to right, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.65) 30%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.1) 100%)'
          }}
        />

        {/* Pure banner ko ek dynamic cinematic feel dene ke liye subtle radial lens overlay */}
        <div
          className="absolute inset-0 z-25 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 20% 50%, transparent 20%, rgba(2,6,23,0.4) 80%)' }}
        />

        {/* Animated ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 animate-pulse"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 3 + 2 + 's',
              }}
            />
          ))}
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-2.5 mb-5 sm:mb-7">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/10 text-orange-400 block max-w-full truncate">
                  Mind Over Miles · Nov 2025
                </span>
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse flex-shrink-0" />
              </div>

              <h1
                className="font-black tracking-tight text-white leading-[1.1] mb-5 sm:mb-6"
                style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
              >
                Mental Health<br />
                <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Deserves
                </span>{' '}
                the<br />
                Same Stage.
              </h1>

              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 text-slate-200 max-w-lg">
                Hyderabad's flagship mental health awareness run — uniting communities, breaking stigma, and championing holistic well-being.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <span className="text-xs font-semibold text-white/80">Registration Closed · Event Completed</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-8 gradient-border shadow-2xl backdrop-blur-md"
            >
              <p className="text-[10px] font-black uppercase tracking-widest mb-4 sm:mb-5 text-gray-300">Event Details</p>

              <div className="space-y-4 mb-6 sm:mb-7">
                {[
                  { icon: <Calendar className="w-4 h-4 text-orange-400" />, label: 'Date', value: '09 November 2025', sub: 'Sunday' },
                  { icon: <MapPin className="w-4 h-4 text-purple-400" />, label: 'Venue', value: 'Gachibowli Stadium', sub: 'Hyderabad, Telangana' },
                  { icon: <Clock className="w-4 h-4 text-cyan-400" />, label: 'Timings', value: '6:00 AM – 11:00 AM', sub: '5 hour window' },
                  { icon: <RotateCw className="w-4 h-4 text-amber-400" />, label: 'Categories', value: '5K · 10K · Fun Run', sub: 'All fitness levels welcome' },
                ].map(({ icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-3 sm:gap-3.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/10 border border-white/5">
                      {icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider block mb-0.5 text-gray-400">{label}</span>
                      <span className="text-sm font-bold text-white block leading-tight">{value}</span>
                      <span className="text-xs text-gray-400">{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-5 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-wider mb-2 sm:mb-3 text-gray-400">Organized by</p>
                <p className="text-sm font-bold text-white">Zho Zho Entertainments</p>
                <p className="text-xs mt-0.5 text-gray-400">Powered by Addlife Projects Pvt. Ltd &amp; AD Life Trust</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY WE CARE ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-transparent to-purple-50/30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Our Philosophy</span>
                <Star className="w-3 h-3 text-orange-400 fill-orange-400" />
              </div>
              <div className="mb-6 sm:mb-8">
                <h2 className="premium-heading font-black tracking-tight text-slate-900 leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)' }}>
                  Why mental health<br />is our flagship cause.
                </h2>
              </div>

              <div className="border-l-2 pl-5 sm:pl-6 mb-8 sm:mb-10 border-orange-400">
                <Quote className="w-5 h-5 mb-3 text-orange-300" />
                <p className="text-sm sm:text-base leading-relaxed italic font-light text-slate-600">
                  Mental health deserves the same attention and celebration as physical wellness. We chose running because movement is medicine — and community is the cure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl sm:rounded-2xl p-5 bg-gradient-to-br from-rose-50 via-white to-pink-50/40 border border-rose-200 shadow-sm">
                  <Heart className="w-5 h-5 text-rose-500 mb-2 fill-rose-100" />
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900 leading-none mt-2 mb-1">1 in 4</span>
                  <span className="text-xs text-slate-600 leading-snug block">people affected globally by mental illness</span>
                </div>
                <div className="rounded-xl sm:rounded-2xl p-5 bg-gradient-to-br from-orange-50 via-white to-amber-50/40 border border-orange-200 shadow-sm">
                  <Users className="w-5 h-5 text-orange-500 mb-2" />
                  <span className="block text-2xl sm:text-3xl font-black text-slate-900 leading-none mt-2 mb-1">70%</span>
                  <span className="text-xs text-slate-600 leading-snug block">don't seek help due to stigma</span>
                </div>
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-slate-600 mb-8 sm:mb-10">
                <p>
                  At Zho Zho Entertainments, we build immersive, purpose-driven experiences across India. Rooted in creative passion, we specialize in events that don't just entertain — they move people to act.
                </p>
                <p>
                  According to global studies,{' '}
                  <strong className="font-semibold text-slate-800 bg-gradient-to-r from-orange-100 to-amber-100 px-1">1 in 4 people</strong>{' '}
                  will experience mental health issues at some point in their lives. Yet stigma keeps millions from seeking help.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { n: '01', title: 'Work-Life Imbalance', body: 'Lengthy hours, intense competition, and traffic stress across IT hubs like Hitech City and Gachibowli push many to the brink.', color: 'from-orange-50 via-white to-amber-50/30', border: 'border-orange-100' },
                  { n: '02', title: 'Urban Stress Factors', body: 'Noise, congestion, and absence of green spaces elevate anxiety and burnout across the city.', color: 'from-purple-50 via-white to-pink-50/30', border: 'border-purple-100' },
                  { n: '03', title: 'Lifestyle & Digital Overload', body: 'Sedentary habits, digital overload, unhealthy eating, and sleep disturbances compound long-term mental health risks.', color: 'from-cyan-50 via-white to-blue-50/30', border: 'border-cyan-100' },
                ].map(({ n, title, body, color, border }) => (
                  <motion.div
                    key={n}
                    whileHover={{ x: 5 }}
                    className={`flex gap-3 sm:gap-4 p-4 rounded-xl transition-all duration-200 cursor-default bg-gradient-to-r ${color} border ${border} shadow-sm`}
                  >
                    <span className="text-[10px] font-black tracking-widest flex-shrink-0 mt-0.5 text-orange-500">{n}</span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 mb-1">{title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTAL HEALTH DATA ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">The Data</span>
                <TrendingUp className="w-3 h-3 text-orange-500" />
              </div>
              <div>
                <h2 className="premium-heading font-black text-slate-900 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                  Hyderabad's mental<br className="hidden sm:block" /> health in numbers.
                </h2>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 sm:text-right max-w-xs leading-relaxed bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm inline-block w-fit">
              Source: Mental State of the World Report 2024<br />Hyderabad, India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SNAPSHOT_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="card-hover rounded-2xl overflow-hidden bg-white border border-slate-200/60 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className={`h-1.5 bg-gradient-to-r ${item.gradient}`} />
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                      <span
                        className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                        style={{
                          background: item.barColor + '15',
                          color: item.barColor,
                          border: `1px solid ${item.barColor}30`,
                        }}
                      >
                        {item.badge}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">{item.context}</span>
                    </div>
                    <div className="mb-2 leading-none">
                      <span className="text-5xl sm:text-[60px] font-black text-slate-900 tracking-tight">{item.number}</span>
                      {item.unit && <span className="text-lg sm:text-xl font-bold text-slate-400 ml-1">{item.unit}</span>}
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">{item.label}</p>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 mt-auto">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[10px] text-slate-400">Severity Index</span>
                    <span className="text-[10px] font-bold" style={{ color: item.barColor }}>{item.barPct}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.barPct}%` }}
                      transition={{ duration: 1.4, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DR. SUDHARANI ─────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="lg:col-span-4 max-w-sm mx-auto lg:max-w-none w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-2xl border border-slate-700/50 bg-slate-800 aspect-[3/4]">
                <img
                  src="/advisor/dr-sudha.png"
                  alt="Dr. K Sudharani"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-955/80 to-transparent">
                  <span className="text-[10px] font-black uppercase tracking-widest block mb-1 text-orange-400">Keynote Speaker</span>
                  <h4 className="text-base sm:text-lg font-black text-white">Dr. K Sudharani</h4>
                  <p className="text-xs mt-0.5 text-gray-300">Mind Over Miles, Nov 2025</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">Medical Advisory Board</span>
                <Award className="w-3 h-3 text-orange-400" />
              </div>
              <div className="mb-4">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  Meet Dr. K Sudharani
                </h2>
              </div>
              <p className="font-semibold text-xs sm:text-sm mb-5 text-orange-400 uppercase tracking-wider">
                Professor and Head, Department of Psychiatry — Osmania Medical College
              </p>
              <div className="space-y-3.5 text-gray-300 text-sm leading-relaxed max-w-2xl mb-6 border-l border-slate-700 pl-4">
                <p>
                  Dr. K. Sudharani is a senior psychiatrist with nearly{' '}
                  <strong className="text-white font-bold">35 years of experience</strong>. She holds an MBBS from Kurnool Medical College and an MD in Psychiatry from Osmania Medical College, where she now leads the Department of Psychiatry.
                </p>
                <p>
                  She has published{' '}
                  <strong className="text-white font-bold">15 research papers</strong>, guided over 10 postgraduate theses, and actively promotes mental health through community and television awareness programs.
                </p>
                <p className="text-xs italic pl-4 py-2 rounded-r-lg bg-orange-500/10 border-l-2 border-orange-400 text-orange-200 mt-4">
                  A dedicated academic and clinician, Dr. Sudharani continues to mentor future psychiatrists and advance mental healthcare in India.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MBBS – Kurnool Medical College', 'MD Psychiatry – Osmania Medical College', '35+ Years Experience', '15 Research Papers'].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-gray-200"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RACE CATEGORIES ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">The Event</span>
                <Trophy className="w-3 h-3 text-orange-500" />
              </div>
              <div className="mb-6 sm:mb-8">
                <h2 className="premium-heading font-black text-slate-900 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                  Race categories<br />& inclusions.
                </h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-sm">
                Two distances for every fitness level — from first-timers to seasoned runners — united by a single purpose.
              </p>
              <div className="space-y-3">
                {[
                  { name: '5K Fun Run / Walk', desc: 'Untimed and all-inclusive. Perfect for families, beginners, and everyone who wants to show up and show support.', badge: 'Untimed', gradient: 'from-green-50 via-white to-emerald-50/20', border: 'border-green-100', badgeBg: 'bg-green-500' },
                  { name: '10K Timed Run', desc: 'Challenge yourself on the scenic Gachibowli route. Official timing, results posted online post-event.', badge: 'Timed', gradient: 'from-blue-50 via-white to-cyan-50/20', border: 'border-blue-100', badgeBg: 'bg-blue-500' },
                ].map(({ name, desc, badge, gradient, border, badgeBg }) => (
                  <motion.div
                    key={name}
                    whileHover={{ x: 6 }}
                    className={`flex gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 bg-gradient-to-r ${gradient} border ${border} cursor-pointer shadow-sm`}
                  >
                    <span className={`flex-shrink-0 mt-0.5 px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-wider h-fit text-white ${badgeBg}`}>
                      {badge}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{name}</h4>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl bg-slate-950 text-white"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-gradient-to-br from-orange-500/10 to-purple-500/10 blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest block mb-2 text-orange-400">Every Participant Gets</span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-5 sm:mb-8">What's Included</h3>
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    { item: 'Official Event T-Shirt', sub: 'Custom designed, limited edition' },
                    { item: "Finisher's Medal", sub: 'Commemorative keepsake' },
                    { item: 'Race Bib + Timing Chip', sub: 'RFID-tracked for timed categories' },
                    { item: 'E-Certificate', sub: 'Digital, shareable completion certificate' },
                    { item: 'Hydration & Refreshments', sub: 'On-course stations + post-race' },
                  ].map(({ item, sub }) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-orange-500">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">{item}</span>
                        <span className="text-xs text-gray-400 mt-0.5 block">{sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-5 sm:pt-6 border-t border-slate-800">
                  <p className="text-xs leading-relaxed text-gray-400">
                    A portion of all registration fees was donated to{' '}
                    <strong className="text-white">AD Life Trust</strong>{' '}
                    to fund ongoing mental health initiatives across Hyderabad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND RELAUNCH STRIP ──────────────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-xs sm:text-sm font-semibold text-white/80 line-through">Orange Hub Events</span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">is now</span>
              <span className="text-base sm:text-xl font-black text-white tracking-tight">Zho Zho Entertainments</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 border border-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white">Rebranded for excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PARTNER WITH US ──────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-start">
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-500">Collaborate</span>
                <Users className="w-3 h-3 text-orange-500" />
              </div>
              <div className="mb-5 sm:mb-7">
                <h2 className="premium-heading font-black text-slate-900 tracking-tight leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                  Partner<br />with us.
                </h2>
              </div>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-sm mb-8">
                Whether you're a mental health professional, a corporate entity seeking wellness frameworks, or a community volunteer group — let's amplify the conversation together.
              </p>
              <div className="space-y-3 max-w-sm">
                {[
                  { href: 'mailto:director@zhozhoentertainments.com', icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'director@zhozhoentertainments.com', gradient: 'from-orange-500 to-amber-500' },
                  { href: 'tel:+918019037799', icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '+91 80190 37799', gradient: 'from-purple-500 to-pink-500' },
                ].map(({ href, icon, label, value, gradient }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-3 sm:gap-4 p-4 rounded-xl transition-all duration-300 bg-gradient-to-r ${gradient} text-white shadow-md hover:shadow-lg`}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/20">
                      {icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-white/70 font-black uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-xs sm:text-sm font-bold truncate">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/70 flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-purple-100 rounded-full blur-2xl opacity-40 pointer-events-none" />
              {submitted && (
                <div className="absolute inset-0 bg-white/95 rounded-2xl flex flex-col items-center justify-center text-center p-6 z-10 shadow-xl">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-green-400 to-emerald-500 text-white shadow-lg shadow-green-100">
                    <Check className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900">Mail Client Opened!</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xs leading-relaxed">Your mail app should open with all details pre-filled. Just hit Send!</p>
                </div>
              )}
              <h3 className="text-lg font-black text-slate-900 mb-1">Send a Partnership Request</h3>
              <p className="text-xs text-slate-400 mb-6">We respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Rahul Sharma' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'rahul@company.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">{label}</label>
                    <input
                      type={type}
                      required
                      value={formData[key]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">How would you like to partner?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your organization or initiative..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 resize-none focus:outline-none focus:border-orange-400 focus:bg-white transition-all"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 group bg-gradient-to-r from-orange-500 via-orange-500 to-orange-600 shadow-xl shadow-orange-100 hover:from-orange-600 hover:to-orange-700 transition-all"
                >
                  <span>Open Mail with Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <p className="text-center text-[10px] text-slate-300 mt-2">Nothing is stored — your details open directly in your mail app.</p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-slate-950 text-slate-100 transform-gpu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-3 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-orange-400">From the Ground</span>
                <Leaf className="w-3 h-3 text-orange-400" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Mind Over Miles</h2>
              <p className="text-xs mt-1 text-gray-400">9 Nov 2025 · Gachibowli Stadium, Hyderabad</p>
            </div>
            <span className="text-xs text-gray-500 font-medium whitespace-nowrap">{GALLERY_IMAGES.length} Photos</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 group/grid">
            {/* Feature Image (16:9 Aspect) */}
            <div
              className="col-span-2 relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-slate-900 border border-slate-900 aspect-[16/9] transform-gpu will-change-transform"
              onClick={() => setLightbox(0)}
            >
              <img
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102 transform-gpu"
                style={{ backfaceVisibility: 'hidden' }}
                loading="lazy"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
              <p className="absolute bottom-3 left-3 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">{GALLERY_IMAGES[0].alt}</p>
            </div>

            {/* Grid Thumbnail Images */}
            {GALLERY_IMAGES.slice(1).map((img, i) => (
              <div
                key={img.src || i}
                className="relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer bg-slate-900 border border-slate-900 aspect-square transform-gpu will-change-transform"
                onClick={() => setLightbox(i + 1)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-102 transform-gpu"
                  style={{ backfaceVisibility: 'hidden' }}
                  loading="lazy"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                <p className="absolute bottom-2 left-2 text-white text-[10px] sm:text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 line-clamp-1 pointer-events-none">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Context Modal */}
        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-sm" onClick={() => setLightbox(null)}>
            <button className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition border border-white/10 z-55" onClick={() => setLightbox(null)}>
              <X className="w-4 h-4" />
            </button>

            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition border border-white/10 z-55"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>

            <div className="relative max-h-[80vh] max-w-[90vw] flex items-center justify-center pointer-events-auto">
              <img
                src={GALLERY_IMAGES[lightbox].src}
                alt={GALLERY_IMAGES[lightbox].alt}
                className="max-h-[80vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-slate-800 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-xl flex items-center justify-center text-white bg-white/10 hover:bg-white/20 transition border border-white/10 z-55"
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length); }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        )}
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-200 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] sm:text-xs text-slate-400 font-medium text-center sm:text-left">
            © {new Date().getFullYear()} Zho Zho Entertainments. All rights reserved.
          </span>
          <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-sm">
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-orange-400 to-purple-400" />
            <span className="text-[11px] sm:text-xs text-slate-400 font-medium text-center">Powered by Addlife Projects Pvt. Ltd &amp; AD Life Trust</span>
          </div>
        </div>
      </footer>
    </div>
  );
}