"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Eye, Star, Users, Briefcase, ChevronRight } from "lucide-react";
import Header from "@/components/shared/Header";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">
      {/* Header Wrapper */}
      {/* <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div> */}

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 via-white/20 to-black/80 backdrop-blur-md z-10" />
        </div>
        
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full z-0" />
        
        <div className="relative z-20 text-center px-4 mt-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-neutral-950">
            ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">US</span>
          </h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-white">About Us</span>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-950">
              More Than Moments — <br />
              <span className="text-purple-600">We Create Movements</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              Zho Zho Entertainments is a new-generation event management company redefining how events are conceptualized and delivered. With a dynamic approach and a strong focus on innovation, we specialize in curating and executing a diverse range of events—including high-energy sports events, vibrant cultural experiences, and professionally managed government and corporate engagements.
            </p>
            <p className="text-lg text-neutral-500">
              Driven by creativity, precision, and a deep understanding of audience engagement, Zho Zho Entertainments brings together strategic planning and flawless execution to create impactful, memorable experiences. Our team is committed to delivering excellence at every stage, making us a trusted partner for brands, institutions, and organizations looking to make a lasting impression. 
            </p>
          </div>
          <div className="relative group animate-in fade-in slide-in-from-right-8 duration-1000">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-fuchsia-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-purple-50">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                alt="Our Story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-[#FCEBFC] relative border-y border-purple-100">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div id="vision" className="group relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-purple-100 hover:border-purple-400 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 blur-3xl group-hover:bg-purple-200 transition-all" />
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-500">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-bold text-neutral-950">Our Vision</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To be a leading, diversified entertainment organisation recognised for creative excellence, technological innovation, and social impact — shaping the future of entertainment across sports, music, culture, gaming, travel, and live experiences </p>
            </div>
          </div>

          {/* Mission Card */}
          <div id="mission" className="group relative p-8 md:p-12 rounded-[2.5rem] bg-white border border-purple-100 hover:border-purple-400 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-100 blur-3xl group-hover:bg-fuchsia-200 transition-all" />
            <div className="relative z-10 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 group-hover:scale-110 transition-transform duration-500">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-bold text-neutral-950">Our Mission</h3>
              <p className="text-neutral-600 text-lg leading-relaxed">
                To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional creative experiences. We envision of becoming a <span className="text-purple-600 font-bold">₹100 Cr</span> brand that inspires action and connection nationwide. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950">Why Choose Us?</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We deliver excellence through a combination of leadership, community, and creative execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              icon: <Star className="text-yellow-600" />,
              title: "Purpose-Driven Leadership",
              desc: "Highly committed leadership focused on creating events that matter and drive real-world impact."
            },
            {
              icon: <Users className="text-purple-600" />,
              title: "Strong Support Network",
              desc: "A vast network of volunteers, sports professionals, and dedicated partner organizations."
            },
            {
              icon: <Briefcase className="text-fuchsia-600" />,
              title: "Flawless Execution",
              desc: "Seamless planning, creative execution, and outstanding event experiences from concept to reality."
            }
          ].map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white border border-neutral-100 hover:bg-neutral-50 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-neutral-900">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-purple-600 to-fuchsia-700 p-12 md:p-20 text-center shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Ready to create something <br /> extraordinary?
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link  href="/">
               <button className="px-8 py-4 bg-white text-purple-700 rounded-full font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-xl ">
                Our Services <ArrowRight size={20} />
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;