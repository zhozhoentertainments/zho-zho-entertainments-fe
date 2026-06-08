"use client";

import React, { useState } from 'react';

export default function MentalHealthMatters() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen mt-20 bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.04] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-100 uppercase tracking-wider">
            Flagship Cause
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl max-w-4xl mx-auto leading-tight">
            Mental Health Deserves the Same Attention & Celebration as <span className="text-orange-600">Physical Wellness</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            In today's fast-paced world, mental well-being is often neglected or misunderstood—but it's at the heart of how we live, work, connect, and grow. According to global studies, <strong>1 in 4 people</strong> will experience mental health issues at some point in their lives. We choose this cause to start conversations, break barriers, and create safe spaces.
          </p>
        </div>
      </section>

      {/* Statistics Section (Hyderabad Mental Health Snapshot) */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Hyderabad's Mental Health Snapshot
            </h2>
            <p className="text-sm text-slate-500 mt-2">Data metrics sourced from the global "Mental State of the World Report"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">58.3</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Mental Health Quotient (MHQ)</p>
              <p className="text-sm text-slate-600 leading-normal">
                Hyderabad scores significantly below the global average of 63. Among major Indian metros, only Delhi fares worse.
              </p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">32%</div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Distressed or Struggling</p>
              <p className="text-sm text-slate-600 leading-normal">
                Nearly one-third of Hyderabadis exhibit severe emotional struggles, strained relationships, and reduced performance capacities.
              </p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-orange-600 mb-2">27 <span className="text-lg font-medium text-slate-400">Points</span></div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Young Adults Avg (18-24)</p>
              <p className="text-sm text-slate-600 leading-normal">
                Placing them squarely in the "enduring" stress category, with nearly half reporting debilitating psychological distress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental & Pressure Context Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Grid */}
          <div>
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Regional Stress Factors</span>
            <h2 className="text-3xl font-black text-slate-950 mt-2 mb-6 tracking-tight">
              Why This Matters Here
            </h2>
            <p className="text-slate-600 mb-8 text-sm sm:text-base leading-relaxed">
              Hyderabad's rapid socio-economic expansion and tech evolution bring progressive milestones, but they simultaneously introduce profound systemic pressures on citizens.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Work and Life Imbalance</h4>
                  <p className="text-slate-600 text-sm mt-1">Lengthy office hours, intense corporate competition, and extreme traffic stress—especially across active IT hubs like Hitech City and Gachibowli.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Urban Stress Factors</h4>
                  <p className="text-slate-600 text-sm mt-1">Sustained environmental noise, high congestion metrics, urban pollution levels, and a noticeable absence of quiet, green spaces directly elevate anxiety thresholds.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Lifestyle Issues</h4>
                  <p className="text-slate-600 text-sm mt-1">Tech-driven sedentary routines, digital overload, unhealthy eating protocols, and severe sleep cycle disruptions all compound directly into long-term mental health risks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimalist Graphic Design Box */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center min-h-[350px] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-full filter blur-3xl opacity-50 -mr-10 -mt-10" />
            <div className="w-24 h-24 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 border border-orange-100">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-center max-w-xs">
              <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">Community Action</span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Mind Over Miles 10K</h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-normal">
                Our collaborative community health runs serve as safe spaces designed specifically to break stagnation patterns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Expert Panel Profile Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Media Placeholder Block */}
            <div className="lg:col-span-4 bg-slate-800 rounded-2xl h-80 lg:h-96 flex items-center justify-center border border-slate-700 relative overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="text-center z-10 p-4">
                <p className="text-xs uppercase font-black tracking-widest text-orange-400 mb-1">Keynote Speaker</p>
                <h4 className="text-lg font-bold">Dr. K Sudharani</h4>
                <p className="text-xs text-slate-400">At Mind Over Miles Event</p>
              </div>
            </div>

            {/* Profile Documentation */}
            <div className="lg:col-span-8">
              <span className="text-orange-500 font-extrabold text-xs uppercase tracking-widest">Medical Advisory Board</span>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl mt-2 mb-1 text-white">
                Meet Dr. K Sudharani
              </h2>
              <p className="text-orange-400 font-medium text-sm sm:text-base mb-6">
                Professor and Head, Department of Psychiatry — Osmania Medical College
              </p>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p>
                  Dr. K. Sudharani is a senior psychiatrist with nearly <strong>35 years of clinical and academic experience</strong> in the medical field. She holds an MBBS from Kurnool Medical College and an MD in Psychiatry from Osmania Medical College, where she now leads the entire department.
                </p>
                <p>
                  She has published <strong>15 comprehensive research papers</strong>, successfully guided over 10 postgraduate theses, and actively champions public mental health through structured community interventions and television awareness programs.
                </p>
                <p className="text-xs text-slate-400 border-l-2 border-orange-500 pl-3 italic">
                  As a dedicated academic and frontline clinician, Dr. Sudharani continues to mentor future generations of psychiatrists while advancing national mental healthcare protocols.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Partner With Us & Contact Section */}
      <section className="bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
            
            {/* Context Left Panel */}
            <div className="flex flex-col justify-center">
              <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">Collaborate</span>
              <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl tracking-tight">
                Partner With Orange Hub
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are a mental health professional, a corporate entity seeking wellness frameworks, or an active community volunteer group—let's amplify the conversation together.
              </p>

              {/* Explicit Phone & Email Info */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 border border-slate-100 max-w-sm">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Email Direct</p>
                    <a href="mailto:director@zhozhoentertainments.com" className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">
                      director@zhozhoentertainments.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 border border-slate-100 max-w-sm">
                  <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Helpline Contact</p>
                    <a href="tel:+919876543210" className="text-sm font-bold text-slate-800 hover:text-orange-600 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Right Panel */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 sm:p-10 shadow-sm relative">
              {submitted ? (
                <div className="absolute inset-0 bg-white/95 rounded-2xl flex flex-col items-center justify-center text-center p-6 z-10 transition-all">
                  <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Sent Successfully!</h4>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 max-w-xs">
                    Thank you for reaching out. The Orange Hub relations wing will contact you shortly.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    How would you like to partner?
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your organization or initiative..."
                    className="w-full px-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-800 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Submit Partnership Request
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Transition Footer Indicator */}
      <div className="w-full max-w-5xl mx-auto py-10 px-6 bg-white border-y border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left select-none mb-12">
        <div className="font-sans tracking-tight">
          <span className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Orangehub
          </span>
          <span className="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mx-2">
            is now
          </span>
          <span className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Zho-Zho Entertainments
          </span>
        </div>

        <div className="flex-shrink-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 border border-purple-100">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            Official
          </span>
        </div>
      </div>

    </div>
  );
}