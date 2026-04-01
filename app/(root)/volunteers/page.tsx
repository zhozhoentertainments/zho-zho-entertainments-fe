"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Users, 
  Heart, 
  Award, 
  Network, 
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Zap,
  ChevronRight
} from "lucide-react";

const roles = [
  "Assist in event setup, registration, and participant coordination.",
  "Support hydration and medical stations during the event.",
  "Help manage crowd flow, safety protocols, and guidance points.",
  "Promote event campaigns and pre-event sessions.",
  "Act as an on-ground ambassador for Zho Zho Entertainments.",
  "Provide post-event support and distribute refreshments, medals, and guidebooks."
];

const benefits = [
  {
    title: "Official Certification",
    desc: "Volunteer Certificate from Zho Zho Entertainments for your contribution.",
    icon: <Award className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Letter of Appreciation",
    desc: "Personalized letter acknowledging your active role in our impact projects.",
    icon: <ClipboardCheck className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Priority Access",
    desc: "Get first-row seats or early access to future events and workshops.",
    icon: <Zap className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Networking",
    desc: "Connect with mental health professionals, event managers, and industry leaders.",
    icon: <Network className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Driven Community",
    desc: "Be part of a cause-driven collective aimed at social good and well-being.",
    icon: <Users className="w-6 h-6 text-purple-600" />
  },
  {
    title: "Personal Impact",
    desc: "Gain the satisfaction of contributing directly to community wellness.",
    icon: <Heart className="w-6 h-6 text-purple-600" />
  }
];

const eligibility = [
  "Must be 18 years or older.",
  "Passionate about event excellence, community impact, and diverse cultural experiences.",
  "Available on event days and pre-event briefing sessions.",
  "Must demonstrate punctuality, commitment, and a positive attitude.",
  "Prior volunteer experience is a plus, but not mandatory."
];

export default function VolunteersPage() {
  return (
    <div className="w-full min-h-screen bg-white font-sans flex flex-col overflow-x-hidden">
      {/* Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div>

      {/* Standardized Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/volunteers/hero.png"
            alt="Volunteers Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 via-white/20 to-black/80 backdrop-blur-md z-10" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full z-0" />
        
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-neutral-950 uppercase">
              Volunteer <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">With Us</span>
            </h1>
            <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.2em]">
              <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="text-white cursor-default">Volunteers</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Introduction/Quote */}
      <section className="py-24 px-6 md:px-12 lg:px-24 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-10 text-left"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-bold tracking-[0.2em] uppercase">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse shrink-0" />
            Be the Heart – Behind the Movement
          </div>
          
          <p className="text-2xl md:text-4xl text-neutral-800 leading-tight font-bold italic tracking-tight">
            "Join us in the field to build your network, gain expertise, and shape unforgettable experiences."
          </p>
          
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed font-medium">
            At Zho Zho Entertainments, our volunteers are the driving force that brings our events to life. Join us to make a difference, build connections, and contribute to meaningful causes.
          </p>
        </motion.div>
      </section>

      {/* Role of Volunteers Section */}
      <section className="py-24 bg-[#FCEBFC] border-y border-neutral-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-10"
            >
              <h2 className="text-4xl md:text-5xl font-black text-neutral-950 uppercase tracking-tighter">
                Role of <span className="text-purple-600">Volunteers</span>
              </h2>
              
              <div className="space-y-6">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 group-hover:text-white" />
                    </div>
                    <p className="text-lg text-neutral-700 font-medium">{role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-neutral-200 aspect-square"
            >
              <Image 
                src="/volunteers/role.png" 
                alt="Volunteers in action" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits for Volunteers Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase tracking-tighter">
              Benefits for <span className="text-purple-600">Volunteers</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 hover:border-purple-400 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:border-purple-600 group-hover:border-2 group-hover:text-white transition-all duration-500">
                  <div className="group-hover:text-white transition-colors">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4 uppercase tracking-tighter">
                  {benefit.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed font-medium">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 right-0 w-[40%] h-full bg-purple-600/10 skew-x-[-20deg] translate-x-[20%]" />
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] order-2 lg:order-1"
            >
              <Image 
                src="/volunteers/eligibility.png" 
                alt="Eligibility concept" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12 order-1 lg:order-2"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                  Eligibility <span className="text-purple-500">Criteria</span>
                </h2>
                <div className="w-20 h-1 bg-purple-600 rounded-full" />
              </div>

              <div className="space-y-6">
                {eligibility.map((item, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-transparent transition-all duration-500 shrink-0 mt-1">
                      <span className="text-purple-500 group-hover:text-white font-black">{index + 1}</span>
                    </div>
                    <p className="text-lg text-white/80 font-medium group-hover:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase tracking-tighter mb-10">
            Apply to be a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Volunteer</span>
          </h2>
          <Link 
            href="mailto:info@zhozhoentertainments.com"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xl font-bold h-[72px] px-16 shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter gap-3"
          >
            Send Us Your Resume <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}