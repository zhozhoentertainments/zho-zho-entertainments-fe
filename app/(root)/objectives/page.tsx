"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import Cards from "@/components/Cards";

const objectivesData = [
  {
    title: "SPORTS MANAGEMENT",
    desc: "Expert coordination, talent representation, and seamless operation of premier sporting events and athletic programs.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=800&auto=format&fit=crop",
    link: "/objectives/SportsManagement"
  },
  {
    title: "CULTURAL EVENTS",
    desc: "Vibrant organization of traditional and modern cultural festivals that celebrate diverse heritage and community.",
    image: "https://thepatriot.in/wp-content/uploads/2025/04/Dance-6.jpg",
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
    image: "https://www.southernliving.com/thmb/uC9lfdB-vpeXk1XuxT12bII4EQc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1474089369-d2b0855436be4074ae986429058bf15c.jpg",
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
    <div>
    <div className="w-full  bg-gray-50 font-sans flex flex-col">
      
      {/* Hero Section */}
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
      <div className="h-20"></div>
      </div>

      {/* Main Content Section */}
      <main className=" mb-24 mx-auto px-6 md:px-12 py-16 bg-white pl-10 pr-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectivesData.map((card, index) => (
            <Cards
              key={index}
              title={card.title}
              desc={card.desc}
              image={card.image}
              link={card.link}
            />
          ))}
        </div>
        <div className="h-20"></div>
      </main>

    
</div>
    
  );
}