"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, RotateCw, Mail, Phone, Check, ArrowRight, User, Heart, ShieldAlert, Quote, ArrowUpRight } from 'lucide-react';

const GALLERY_IMAGES = [
  { src: '/oldevent/8S4A5074.jpg', alt: 'Runners at the Start Line' },
  { src: '/oldevent/8S4A5095.jpg', alt: 'Mind Over Miles – Gachibowli Stadium' },
  { src: '/oldevent/8S4A4991.jpg', alt: 'Community Spirit' },
  { src: '/oldevent/8S4A4927.jpg', alt: 'Finishers Celebration' },
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
    barColor: '#f97316',
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
  },
];

export default function MentalHealthMatters() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [lightbox, setLightbox] = useState(null);

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
    <div className="min-h-screen mt-20 bg-white text-slate-800 antialiased">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ minHeight: '580px' }}>
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/oldevent/8S4A5095.jpg')" }}
        />
        {/* Strong overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.60) 55%, rgba(0,0,0,0.45) 100%)' }}
        />

        {/* Content — 2-col on desktop, stacked on mobile */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: headline + description */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span
                  className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                  style={{ color: '#fdba74', borderColor: 'rgba(251,146,60,0.4)', background: 'rgba(251,146,60,0.12)' }}
                >
                  Mind Over Miles · Nov 2025
                </span>
              </div>

              <h1
                className="font-black tracking-tight text-white leading-none mb-6"
                style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
              >
                Mental Health<br />
                <span style={{ color: '#fb923c' }}>Deserves</span> the<br />
                Same Stage.
              </h1>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: 'rgba(255,255,255,0.60)', maxWidth: '42ch' }}
              >
                Hyderabad's flagship mental health awareness run — uniting communities, breaking stigma, and championing holistic well-being.
              </p>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.45)' }}>Registration Closed · Event Completed</span>
              </div>
            </div>

            {/* Right: event info card */}
            <div
              className="rounded-3xl p-7 lg:p-8"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', backdropFilter: 'blur(16px)' }}
            >
              <p className="text-[10px] font-black uppercase tracking-widest mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>Event Details</p>

              <div className="space-y-4 mb-7">
                {[
                  { icon: <Calendar className="w-4 h-4" />, label: 'Date', value: '09 November 2025', sub: 'Sunday' },
                  { icon: <MapPin className="w-4 h-4" />, label: 'Venue', value: 'Gachibowli Stadium', sub: 'Hyderabad, Telangana' },
                  { icon: <Clock className="w-4 h-4" />, label: 'Timings', value: '6:00 AM – 11:00 AM', sub: '5 hour window' },
                  { icon: <RotateCw className="w-4 h-4" />, label: 'Categories', value: '5K · 10K · Fun Run', sub: 'All fitness levels welcome' },
                ].map(({ icon, label, value, sub }) => (
                  <div key={label} className="flex items-start gap-3.5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(249,115,22,0.18)', color: '#fb923c' }}
                    >
                      {icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider block mb-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</span>
                      <span className="text-sm font-bold text-white block leading-tight">{value}</span>
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="pt-5"
                style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
              >
                <p className="text-[10px] font-black uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>Organized by</p>
                <p className="text-sm font-bold text-white">Zho Zho Entertainments</p>
                <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>Powered by Addlife Projects Pvt. Ltd &amp; AD Life Trust</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── WHY WE CARE ──────────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div>
              <span className="text-[10px] font-black uppercase tracking-widest mb-4 block" style={{ color: '#f97316' }}>Our Philosophy</span>
              <h2
                className="font-black tracking-tight text-slate-900 leading-tight mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Why mental health<br />is our{' '}
                <span style={{ color: '#f97316' }}>flagship cause.</span>
              </h2>

              <div className="border-l-2 pl-6 mb-10" style={{ borderColor: '#f97316' }}>
                <Quote className="w-5 h-5 mb-3" style={{ color: 'rgba(249,115,22,0.4)' }} />
                <p className="text-base leading-relaxed italic font-light text-slate-500">
                  Mental health deserves the same attention and celebration as physical wellness. We chose running because movement is medicine — and community is the cure.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Heart className="w-5 h-5 text-rose-500" />, stat: '1 in 4', sub: 'people affected globally by mental illness' },
                  { icon: <ShieldAlert className="w-5 h-5" style={{ color: '#f97316' }} />, stat: 'Millions', sub: 'remain silent due to stigma and lack of access' },
                ].map(({ icon, stat, sub }) => (
                  <div
                    key={stat}
                    className="rounded-2xl p-5"
                    style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
                  >
                    {icon}
                    <span className="block text-3xl font-black text-slate-900 leading-none mt-3 mb-1">{stat}</span>
                    <span className="text-xs text-slate-400 leading-snug block">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="space-y-5 text-base leading-relaxed text-slate-500 mb-10">
                <p>
                  At Zho Zho Entertainments, we build immersive, purpose-driven experiences across India. Rooted in creative passion, we specialize in events that don't just entertain — they move people to act.
                </p>
                <p>
                  According to global studies,{' '}
                  <strong className="font-semibold text-slate-800">1 in 4 people</strong>{' '}
                  will experience mental health issues at some point in their lives. Yet stigma keeps millions from seeking help.
                </p>
              </div>

              <div className="space-y-2">
                {[
                  { n: '01', title: 'Work-Life Imbalance', body: 'Lengthy hours, intense competition, and traffic stress across IT hubs like Hitech City and Gachibowli push many to the brink.' },
                  { n: '02', title: 'Urban Stress Factors', body: 'Noise, congestion, and absence of green spaces elevate anxiety and burnout across the city.' },
                  { n: '03', title: 'Lifestyle & Digital Overload', body: 'Sedentary habits, digital overload, unhealthy eating, and sleep disturbances compound long-term mental health risks.' },
                ].map(({ n, title, body }) => (
                  <div
                    key={n}
                    className="flex gap-4 p-4 rounded-xl transition-all duration-200 cursor-default"
                    style={{ border: '1px solid #f1f5f9' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.background = '#fffbf7'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span className="text-[10px] font-black tracking-widest flex-shrink-0 mt-0.5" style={{ color: '#f97316' }}>{n}</span>
                    <div>
                      <h4 className="font-bold text-sm text-slate-800 mb-1">{title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MENTAL HEALTH DATA ────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: '#f97316' }}>The Data</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Hyderabad's mental<br />health in numbers.
              </h2>
            </div>
            <p className="text-xs text-slate-400 sm:text-right max-w-xs leading-relaxed">
              Source: Mental State of the World Report 2024<br />Hyderabad, India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-100 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {SNAPSHOT_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white p-8 flex flex-col justify-between hover:bg-slate-50/60 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider"
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
                    <span className="text-[60px] font-black text-slate-900 tracking-tight">{item.number}</span>
                    {item.unit && <span className="text-xl font-bold text-slate-400 ml-1">{item.unit}</span>}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">{item.label}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-8">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[10px] text-slate-400">Severity</span>
                    <span className="text-[10px] font-bold" style={{ color: item.barColor }}>{item.barPct}%</span>
                  </div>
                  <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: item.barColor }}
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

      {/* ── DR. SUDHARANI ─────────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Photo Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl overflow-hidden relative" style={{ border: '1px solid #fed7aa' }}>
                <img
                  src="/advisor/dr-sudha.png"
                  alt="Dr. K Sudharani"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                />
                {/* Bottom overlay with name */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)' }}
                >
                  <span className="text-[10px] font-black uppercase tracking-widest block mb-1" style={{ color: '#fb923c' }}>Keynote Speaker</span>
                  <h4 className="text-lg font-black text-white">Dr. K Sudharani</h4>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>Mind Over Miles, Nov 2025</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 lg:pt-2">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: '#f97316' }}>Medical Advisory Board</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-3">Meet Dr. K Sudharani</h2>
              <div className="w-10 h-0.5 mb-5" style={{ background: '#f97316' }} />
              <p className="font-semibold text-sm mb-7" style={{ color: '#f97316' }}>
                Professor and Head, Department of Psychiatry — Osmania Medical College
              </p>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed max-w-2xl mb-8">
                <p>
                  Dr. K. Sudharani is a senior psychiatrist with nearly{' '}
                  <strong className="text-slate-900">35 years of experience</strong>. She holds an MBBS from Kurnool Medical College and an MD in Psychiatry from Osmania Medical College, where she now leads the Department of Psychiatry.
                </p>
                <p>
                  She has published{' '}
                  <strong className="text-slate-900">15 research papers</strong>, guided over 10 postgraduate theses, and actively promotes mental health through community and television awareness programs.
                </p>
                <p
                  className="text-xs italic pl-4 py-2 rounded-r-lg"
                  style={{ borderLeft: '2px solid #fb923c', color: '#92400e', background: '#fff7ed' }}
                >
                  A dedicated academic and clinician, Dr. Sudharani continues to mentor future psychiatrists and advance mental healthcare in India.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['MBBS – Kurnool Medical College', 'MD Psychiatry – Osmania Medical College', '35+ Years Experience', '15 Research Papers'].map((b) => (
                  <span
                    key={b}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200"
                    style={{ background: 'white', border: '1px solid #e2e8f0', color: '#475569' }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RACE CATEGORIES ───────────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: '#f97316' }}>The Event</span>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                Race categories<br />& inclusions.
              </h2>
              <div className="w-10 h-0.5 mb-8" style={{ background: '#f97316' }} />
              <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-sm">
                Two distances for every fitness level — from first-timers to seasoned runners — united by a single purpose.
              </p>
              <div className="space-y-3">
                {[
                  { name: '5K Fun Run / Walk', desc: 'Untimed and all-inclusive. Perfect for families, beginners, and everyone who wants to show up and show support.', badge: 'Untimed' },
                  { name: '10K Timed Run', desc: 'Challenge yourself on the scenic Gachibowli route. Official timing, results posted online post-event.', badge: 'Timed' },
                ].map(({ name, desc, badge }) => (
                  <div
                    key={name}
                    className="flex gap-4 p-5 rounded-2xl transition-all group cursor-default"
                    style={{ border: '1px solid #f1f5f9' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.background = '#fff7ed50'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#f1f5f9'; e.currentTarget.style.background = 'white'; }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-wider h-fit"
                      style={{ background: '#ffedd5', color: '#c2410c' }}
                    >
                      {badge}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base mb-1">{name}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dark card */}
            <div className="rounded-3xl p-8 relative overflow-hidden" style={{ background: '#0c0f14' }}>
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.15), transparent)', transform: 'translate(30%, -30%)' }}
              />
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest block mb-2" style={{ color: '#fb923c' }}>Every Participant Gets</span>
                <h3 className="text-2xl font-black text-white mb-8">What's Included</h3>
                <div className="space-y-4 mb-8">
                  {[
                    { item: 'Official Event T-Shirt', sub: 'Custom designed, limited edition' },
                    { item: "Finisher's Medal", sub: 'Commemorative keepsake' },
                    { item: 'Race Bib + Timing Chip', sub: 'RFID-tracked for timed categories' },
                    { item: 'E-Certificate', sub: 'Digital, shareable completion certificate' },
                    { item: 'Hydration & Refreshments', sub: 'On-course stations + post-race' },
                  ].map(({ item, sub }) => (
                    <div key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}
                      >
                        <Check className="w-3 h-3" style={{ color: '#fb923c' }} strokeWidth={3} />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">{item}</span>
                        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>{sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.35)' }}>
                    A portion of all registration fees was donated to{' '}
                    <strong style={{ color: 'rgba(255,255,255,0.65)' }}>AD Life Trust</strong>{' '}
                    to fund ongoing mental health initiatives across Hyderabad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRAND RELAUNCH STRIP ──────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div
            className="rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden"
            style={{ background: 'white', border: '1px solid #e2e8f0' }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: 'linear-gradient(to bottom, #7c3aed, #4f46e5)' }} />
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left pl-3">
              <span className="text-xl font-black text-slate-400 line-through decoration-slate-300">Orange Hub Events</span>
              <span className="text-slate-300 font-light hidden sm:block">→</span>
              <span className="text-2xl font-black text-slate-900">Zho Zho Entertainments</span>
            </div>
            <span
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider"
              style={{ background: '#ede9fe', color: '#6d28d9', border: '1px solid #ddd6fe' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              Official Rebrand
            </span>
          </div>
        </div>
      </div>

      {/* ── PARTNER WITH US ───────────────────────────────────────────── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            <div className="lg:sticky lg:top-28">
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: '#f97316' }}>Collaborate</span>
              <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-3">
                Partner<br />with us.
              </h2>
              <div className="w-10 h-0.5 mb-7" style={{ background: '#f97316' }} />
              <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-10">
                Whether you're a mental health professional, a corporate entity seeking wellness frameworks, or a community volunteer group — let's amplify the conversation together.
              </p>
              <div className="space-y-3 max-w-sm">
                {[
                  { href: 'mailto:director@zhozhoentertainments.com', icon: <Mail className="w-4 h-4" style={{ color: '#f97316' }} />, label: 'Email', value: 'director@zhozhoentertainments.com' },
                  { href: 'tel:+918019037799', icon: <Phone className="w-4 h-4" style={{ color: '#f97316' }} />, label: 'Phone', value: '+91 80190 37799' },
                ].map(({ href, icon, label, value }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white transition-all group"
                    style={{ border: '1px solid #e2e8f0' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#fed7aa'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(249,115,22,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#fff7ed', border: '1px solid #fed7aa' }}>
                      {icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-300 ml-auto flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 relative overflow-hidden" style={{ border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}>
              {submitted && (
                <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center text-center p-8 z-10">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <Check className="w-6 h-6 text-green-600" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900">Mail Client Opened!</h4>
                  <p className="text-slate-500 text-sm mt-2 max-w-xs leading-relaxed">Your mail app should open with all details pre-filled. Just hit Send!</p>
                </div>
              )}
              <h3 className="text-xl font-black text-slate-900 mb-1">Send a Partnership Request</h3>
              <p className="text-sm text-slate-400 mb-7">We respond within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Rahul Sharma' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'rahul@company.com' },
                ].map(({ label, key, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">{label}</label>
                    <input
                      type={type}
                      required
                      value={formData[key]}
                      onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 text-sm rounded-xl transition-all text-slate-800 placeholder:text-slate-300"
                      style={{ border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }}
                      onFocus={e => { e.target.style.borderColor = '#f97316'; e.target.style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; e.target.style.background = 'white'; }}
                      onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">How would you like to partner?</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your organization or initiative..."
                    className="w-full px-4 py-3 text-sm rounded-xl transition-all text-slate-800 resize-none placeholder:text-slate-300"
                    style={{ border: '1px solid #e2e8f0', background: '#f8fafc', outline: 'none' }}
                    onFocus={e => { e.target.style.borderColor = '#f97316'; e.target.style.boxShadow = '0 0 0 3px rgba(249,115,22,0.1)'; e.target.style.background = 'white'; }}
                    onBlur={e => { e.target.style.borderColor = '#e2e8f0'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 group"
                  style={{ background: '#f97316', boxShadow: '0 8px 24px rgba(249,115,22,0.25)' }}
                  onMouseEnter={e => e.currentTarget.style.background = '#ea6c00'}
                  onMouseLeave={e => e.currentTarget.style.background = '#f97316'}
                >
                  <span>Open Mail with Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-[10px] text-slate-300">Nothing is stored — your details open directly in your mail app.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────── */}
      <section className="py-24" style={{ background: '#0c0f14' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest block mb-3" style={{ color: '#fb923c' }}>From the Ground</span>
              <h2 className="text-4xl font-black text-white tracking-tight">Mind Over Miles</h2>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>9 Nov 2025 · Gachibowli Stadium, Hyderabad</p>
            </div>
            <span className="text-sm font-medium hidden sm:block" style={{ color: 'rgba(255,255,255,0.2)' }}>{GALLERY_IMAGES.length} Photos</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
            <div className="col-span-2 relative overflow-hidden rounded-2xl cursor-pointer group" style={{ aspectRatio: '16/9' }}
              onClick={() => setLightbox(0)}>
              <img src={GALLERY_IMAGES[0].src} alt={GALLERY_IMAGES[0].alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
              <p className="absolute bottom-4 left-4 text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">{GALLERY_IMAGES[0].alt}</p>
            </div>
            {GALLERY_IMAGES.slice(1).map((img, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-square" onClick={() => setLightbox(i + 1)}>
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }} />
                <p className="absolute bottom-3 left-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">{img.alt}</p>
              </div>
            ))}
          </div>
        </div>

        {lightbox !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.96)' }} onClick={() => setLightbox(null)}>
            {[
              { pos: 'top-4 right-4', onClick: () => setLightbox(null), icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /> },
            ].map((_, i) => null)}
            <button className="absolute top-4 right-4 w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.1)' }} onClick={() => setLightbox(null)}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length); }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <img src={GALLERY_IMAGES[lightbox].src} alt={GALLERY_IMAGES[lightbox].alt} className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: 'rgba(255,255,255,0.1)' }}
              onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % GALLERY_IMAGES.length); }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {GALLERY_IMAGES[lightbox].alt} · {lightbox + 1} / {GALLERY_IMAGES.length}
            </p>
          </div>
        )}
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 font-medium">
            &copy; {new Date().getFullYear()} Zho Zho Entertainments. All rights reserved.
          </span>
          <span className="text-xs text-slate-300 font-medium">Powered by Addlife Projects Pvt. Ltd &amp; AD Life Trust</span>
        </div>
      </footer>

    </div>
  );
}