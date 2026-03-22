"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const objectivesData = [
  {
    title: "SPORTS MANAGEMENT",
    desc: "Expert coordination, talent representation, and seamless operation of premier sporting events and athletic programs.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CULTURAL EVENTS",
    desc: "Vibrant organization of traditional and modern cultural festivals that celebrate diverse heritage and community.",
    image: "https://images.unsplash.com/photo-1533174000255-12b485de41bc?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CORPORATE EVENTS",
    desc: "Professional planning and flawless execution of conferences, seminars, and high-impact corporate retreats.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "LIVE ENTERTAINMENT",
    desc: "Breathtaking live concerts, theatrical performances, and stage shows delivering unforgettable audience experiences.",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "GAMING & INTERACTIVE MEDIA",
    desc: "Immersive esports tournaments and interactive media campaigns driving next-generation digital engagement.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "TRAVEL & ENTERTAINMENT TRIPS",
    desc: "Curated luxury travel packages and entertainment-focused destination experiences around the globe.",
    image: "https://images.unsplash.com/photo-1436450412740-6bba4e2e650c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "PRODUCE, DIRECT AND DISTRIBUTE FILMS AND DOCUMENTARIES",
    desc: "End-to-end cinematic production, directing, and global distribution of compelling films and documentaries.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "DIGITAL & SOCIAL MEDIA MANAGEMENT",
    desc: "Strategic brand building, viral content creation, and comprehensive digital media ecosystem management.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "TECHNOLOGY & ANCILLARY ACTIVITIES",
    desc: "Innovative technological solutions, AR/VR experiences, and advanced supporting infrastructure for events.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
  }
];

export default function ObjectivesPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 font-sans flex flex-col">
      <div className="relative w-full h-[60vh] min-h-[400px] md:h-[500px] rounded-b-[2.5rem] bg-[url('/bg.avif')] bg-cover bg-center overflow-hidden text-white shadow-2xl">
    
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 lg:bg-gradient-to-t from-black/80 via-black/40 to-black/80 z-0"></div>

        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 w-full max-w-[1280px] mx-auto">
          <Header />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg tracking-tight mb-4">
            Objectives
          </h1>
          <div className="text-sm md:text-base font-medium text-white/80 tracking-[0.2em] uppercase flex items-center gap-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <span className="text-white/30 text-xs">/</span> 
            <span className="text-white cursor-default">Objectives</span>
          </div>
        </div>
      </div>

      {/* main content section */}
      <main className="">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 w-full">
          {objectivesData.map((obj, idx) => (
            <div key={idx} className="relative rounded-[3rem] w-full aspect-[4/5] overflow-hidden group shadow-lg ring-1 ring-black/5">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${obj.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  
                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug drop-shadow-md">
                    {obj.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm font-medium leading-relaxed">
                    {obj.desc}
                  </p>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out mt-6">
                    <div className="w-full h-[4px] bg-white/20 mb-4"></div>
                    <button className="flex items-center gap-3 self-start group/btn">
                      <span className="text-white font-bold tracking-wide text-sm">Read More</span>
                      <div className="w-6 h-6 rounded-full bg-red-900/80 flex items-center justify-center border border-white/20 group-hover/btn:bg-red-600 transition-colors">
                        <ArrowUpRight className="w-3 h-3 text-white" />
                      </div>
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}