"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Settings,
  PenTool,
  Megaphone,
  Mic2,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Concept & Theme Development",
    description: "We specialize in curating meaningful event themes rooted in purpose — from mental health awareness to social impact — ensuring every event connects deeply with the audience.",
    icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
    image: "/services/concept.jpg"
  },
  {
    title: "End-to-End Event Planning",
    description: "From idea to execution, we manage every aspect of your event including venue coordination, vendor management, logistics, scheduling, and on-ground supervision.",
    icon: <Settings className="w-8 h-8 text-purple-600" />,
    image: "/services/planning.png"
  },
  {
    title: "Creative Design & Branding",
    description: "We design complete visual identities for your event — including logos, stage design, banners, digital creatives, participant kits, and all brand communication materials.",
    icon: <PenTool className="w-8 h-8 text-purple-600" />,
    image: "/services/design.png"
  },
  {
    title: "Marketing & Promotions",
    description: "Our team handles strategic promotions across digital platforms, offline outreach, influencer engagement, and PR to maximize reach and participation.",
    icon: <Megaphone className="w-8 h-8 text-purple-600" />,
    image: "/services/marketing.jpg"
  },
  {
    title: "Content & Speaker Curation",
    description: "We bring subject matter experts, thought leaders, and wellness advocates to deliver value-driven sessions and talks that align with your event’s theme.",
    icon: <Mic2 className="w-8 h-8 text-purple-600" />,
    image: "/services/content.png"
  },
  {
    title: "Volunteer & Staffing Solutions",
    description: "From trained volunteers to professional support teams, we ensure smooth flow and support at every point of your event — from registration desks to post-run hospitality.",
    icon: <Users className="w-8 h-8 text-purple-600" />,
    image: "/services/staffing.png"
  }
];

const eventTypes = [
  "High Energy Sports Events",
  "Concerts & Cultural Extravaganzas",
  "Digital & Social Media Campaigns.",
  "Corporate Programs & Activations",
  "Community Outreach & Social Impact Initiatives"
];

export default function ServicesPage() {
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
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600&auto=format&fit=crop"
            alt="Services Hero"
            fill
            className="object-cover "
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Services</span>
            </h1>
            <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.2em]">
              <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-white/30" />
              <span className="text-white">Our Services</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Introductory Context */}
      <section className="py-24 px-6 md:px-12 lg:px-24 container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            What We Do
          </div>
          <p className="text-2xl md:text-3xl text-neutral-600 leading-relaxed font-medium italic">
            "We specialize in sports, cultural, corporate and many such events that leave a lasting impact. Each event is thoughtfully designed to promote social change and connection."
          </p>
        </motion.div>
      </section>

      {/* Signature Events Section */}
      <section className="py-24 bg-[#FCEBFC] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 mb-8 tracking-tight italic">
                Our Signature Events
              </h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                From Hyderabad to cities across India — we aim to create meaningful experiences that inspire communities to move, connect, and grow.
              </p>

              <div className="space-y-4">
                {eventTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-neutral-100 transition-all hover:shadow-md hover:border-purple-200 group">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 group-hover:bg-purple-600 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 group-hover:text-white" />
                    </div>
                    <span className="text-lg font-semibold text-neutral-800">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-fuchsia-200 rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-neutral-200 shadow-2xl">
                <Image
                  src="/services/signature.png"
                  alt="Signature Events"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-neutral-900 uppercase tracking-tighter mb-6">
              Expertise In <span className="text-purple-600">Every Detail</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-fuchsia-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-[2.5rem] p-8 border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-8 group-hover:bg-purple-600 transition-colors duration-500">
                    <div className="group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-neutral-500 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                    />
                  </div>

                  <Link href="/" className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-4 transition-all uppercase tracking-tighter">
                    Explore More <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    

      {/* Footer CTA */}
      {/* <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-neutral-950 uppercase tracking-tighter mb-10">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">Elevate Your Event?</span>
          </h2>
          <Link
            href="/volunteers"
            className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xl font-bold h-[72px] px-16 shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter gap-3"
          >
            Connect With Us <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section> */}
    </div>
  );
}