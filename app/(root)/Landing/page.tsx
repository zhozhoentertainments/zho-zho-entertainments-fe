"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, MessageSquare, Settings, PartyPopper, Quote, ChevronLeft, ChevronRight, MapPin, Star, Music, Mic, Users, Trophy } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    id: "mission",
    badge: "01. Our Mission",
    title: "Enriching Lives Through Storytelling & Culture.",
    description:
      "To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional creative experiences across all platforms.",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop",
    link: "/aboutUs#mission",
    reverse: false,
  },
  {
    id: "vision",
    badge: "02. Our Vision",
    title: "Becoming a ₹100 Cr Global Entertainment Brand.",
    description:
      "We constantly push the boundaries of creativity and technology to redefine luxury entertainment and cinematic experiences.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    link: "/aboutUs#vision",
    reverse: true,
  },
  {
    id: "purpose",
    badge: "03. Our Purpose",
    title: "Creating Unforgettable High-Impact Experiences.",
    description:
      "From corporate retreats to massive festivals, we build moments that people never forget.",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
    link: "/",
    reverse: false,
  },
  {
    id: "objectives",
    badge: "04. Core Objectives",
    title: "Mastering Nine Verticals of Entertainment.",
    description:
      "Sports, film, digital, events — seamless execution across every domain.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    link: "/",
    reverse: true,
  },
];

const destinations = [
 
  { name: "Bengaluru", image: "/bangalore.jpg" },
  { name: "Delhi", image: "/Delhi.jpg" },
  { name: "Chennai", image: "/chennai.jpg" },
  { name: "Pune", image: "/Pune.jpg" },
  { name: "Hyderabad", image: "/hyderabad.jpg" },
  { name: "Vijayawada", image: "/vijayawada.jpg" },
  { name: "Visakhapatnam", image: "/vishakhapatnam.jpg" },
  { name: "Odisha", image: "/odisha.jpg" },
  { name: "Tirupati", image: "/tirupati.jpg" },

  
];

const activities = [

  { 
    title: "Corporate Events", 
    desc: "The perfect mix of fun, bonding, and strategy.", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    icon: <Trophy className="text-purple-500" />
  },
  { 
    title: "Live Entertainment", 
    desc: "Zho Zho's greatest engagement successes.", 
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
    icon: <Users className="text-blue-500" />
  },
   { 
    title: "Sports Events", 
    desc: "Zho Zho's sporting events are full of energy.", 
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    icon: <Users className="text-blue-500" />
  },
   { 
    title: "Cultural Events", 
    desc: "Vibrant organization of traditional and modern cultural festivals.", 
    image: "/Dance-6.jpg",
    icon: <Users className="text-blue-500" />
  },
  { 
    title: "Technology & Ancillary Activities", 
    desc: "Engage with cutting-edge tech experiences.", 
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    icon: <Settings className="text-cyan-500" />
  },
];

const artistCategories = [
  { name: "Music Bands", icon: Music, count: "" },
  { name: "Comedians", icon: Mic, count: "" },
  { name: "Celebrities", icon: Star, count: "" },
  { name: "Speakers", icon: Users, count: "" },
];

const processSteps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover & Select",
    desc: "Explore 100+ curated activities and 20+ stunning destinations tailored to your needs.",
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Consult & Customize",
    desc: "Work with our experts to craft a tailor-made experience that aligns with your culture.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Seamless Execution",
    desc: "Benefit from 10+ years of expertise and a global network for a flawless event flow.",
  },
  {
    icon: <PartyPopper className="w-8 h-8" />,
    title: "Engage & Celebrate",
    desc: "Deliver high-impact results that boost morale and create lasting connections.",
  },
];

const HorizontalCarousel = ({ items, renderItem, title, subtitle }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-neutral-900 uppercase">
            {title}
          </h2>
          {subtitle && <p className="text-lg text-neutral-500">{subtitle}</p>}
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-purple-600 bg-purple-400 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border  border-purple-600 bg-purple-400 flex items-center justify-center hover:bg-purple-800 hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item: any, i: number) => (
          <div key={i} className="snap-start shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Landing() {
  return (
    <div className="flex flex-col bg-[#FCEBFC]">
      {/* Services Grid Section */}
      <section className="relative w-full py-32 overflow-hidden">
        <div className="mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl">
          {sections.map((section, i) => (
            <motion.div
              key={section.id}
              id={i === 0 ? "mission-section" : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white/40 backdrop-blur-md border border-white/20 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_80px_rgba(147,51,234,0.1)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                   <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md"
                   >
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                    <span className="text-xs uppercase tracking-[0.25em] text-white font-semibold">
                      {section.badge}
                    </span>
                  </motion.div>
                </div>
              </div>

              <div className="p-10 flex flex-col flex-grow">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                  className="text-3xl md:text-4xl font-bold leading-[1.2] mb-6 tracking-tighter text-black"
                >
                  {section.title}
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  className="text-black/60 text-lg leading-relaxed mb-8 font-medium line-clamp-3"
                >
                  {section.description}
                </motion.p>

                <div className="mt-auto">
                  <Link href={section.link} className="group/link flex items-center gap-4">
                    <span className="text-black uppercase tracking-[0.2em] text-xs font-bold group-hover/link:text-purple-600 transition">
                      Explore {section.id}
                    </span>
                    <div className="w-12 h-12 rounded-full bg-black/45 border border-black/20 flex items-center justify-center group-hover/link:bg-purple-600 group-hover/link:border-transparent group-hover/link:shadow-[0_10px_30px_rgba(147,51,234,0.3)] transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 group-hover/link:scale-110 group-hover/link:text-white transition" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Destinations Carousel */}
      <section className="py-32 px-6 md:px-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <HorizontalCarousel 
            title={<>Trending <span className="text-purple-600">Destinations</span></>}
            subtitle="Explore breathtaking locations for your next offsite."
            items={destinations}
            renderItem={(item: any) => (
              <motion.div 
                whileHover={{ y: -10 }}
                className="w-[280px] md:w-[350px] aspect-[10/12] rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl"
              >
                <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={18} className="text-purple-400 font-bold" />
                    <span className="text-xs uppercase tracking-widest font-bold opacity-80">Collection</span>
                  </div>
                  <h3 className="text-3xl font-bold uppercase tracking-tighter">{item.name}</h3>
                </div>
              </motion.div>
            )}
          />
        </div>
      </section>

      {/* Activities Carousel */}
      <section className="py-32 px-6 md:px-12 bg-neutral-950 text-white">
        <div className="max-w-7xl mx-auto">
          <HorizontalCarousel 
            title={<><span className="text-purple-200">Featured</span> <span className="text-purple-400">Activities</span></>}
            subtitle="Innovative experiences that drive engagement and ROI."
            items={activities}
            renderItem={(item: any) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="w-[300px] md:w-[400px] rounded-[2.5rem] bg-neutral-900 border border-white/5 overflow-hidden group"
              >
                <div className="relative h-64">
                  <Image src={item.image} alt={item.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 mb-6">{item.desc}</p>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-purple-400 group-hover:text-purple-300 transition-colors">
                    View Activities <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          />
        </div>
      </section>

      {/* Artist Booking Categories */}
      <section className="py-32 px-6 md:px-12 bg-[#FCEBFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900 uppercase">
              Artist <span className="text-purple-600">Categories</span>
            </h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">
              Book world-class verified artists for an unforgettable experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artistCategories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[3rem] bg-purple-200 border border-purple-100 flex flex-col items-center text-center shadow-lg group hover:bg-purple-600 hover:text-white transition-all duration-500"
              >
                <div className="w-20 h-20 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  <cat.icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-black uppercase tracking-tighter">{cat.name}</h3>
                <p className="text-neutral-500 text-sm font-bold tracking-widest uppercase group-hover:text-white/80 transition-colors">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      {/* <section className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-neutral-900 uppercase">
            Our <span className="text-purple-600">Process</span>
          </h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-medium">
            Creating connections that matter, one seamless event at a time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-[#FCEBFC]/50 border border-purple-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-purple-100 flex items-center justify-center text-purple-600 mb-8 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-neutral-900 uppercase tracking-tighter">{step.title}</h3>
              <p className="text-neutral-600 leading-relaxed font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

      
    </div>
  );
}