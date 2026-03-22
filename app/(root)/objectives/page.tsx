"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


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
      <main className="flex-1 w-full mx-auto px-8 md:px-16 lg:px-24 my-24 lg:my-32 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4 w-full">
          {objectivesData.map((obj, idx) => (
            <Card key={idx} className="relative w-[85%] md:w-[80%] lg:w-[70%] mx-auto aspect-[4/5] pt-0 overflow-hidden group shadow-2xl rounded-[2.5rem] border-0 bg-transparent">
              
              {/* Image Background */}
              <div className="absolute inset-0 z-10 transition-transform duration-700 ease-out group-hover:scale-110">
                <img src={obj.image} alt={obj.title} className="w-full h-full object-cover" />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
              
              {/* Content layered above image via z-30 */}
              <div className="relative z-30 h-full p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col">
                  
                  <CardHeader className="p-0 mb-4 z-40">
                    <CardTitle className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-xl">
                      {obj.title}
                    </CardTitle>
                    <CardDescription className="text-white/80 text-sm font-medium leading-relaxed mt-2 opacity-95">
                      {obj.desc}
                    </CardDescription>
                  </CardHeader>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out mt-4 z-40">
                    <div className="w-full h-[2px] bg-white/20 mb-6"></div>
                    <CardFooter className="p-0">
                      <Link href={obj.link || "#"} className="flex items-center gap-4 group/btn">
                        <span className="text-white font-bold tracking-widest uppercase text-sm">Read More</span>
                        <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center transition-colors group-hover/btn:bg-red-500">
                          <ArrowUpRight className="w-5 h-5 text-white transition-transform group-hover/btn:scale-110" />
                        </div>
                      </Link>
                    </CardFooter>
                  </div>
                  
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}