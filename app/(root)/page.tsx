"use client";

import Landing from "./Landing/page";
import BackgroundVideo from 'next-video/background-video';
import Header from "@/components/shared/Header";

import Video from 'next-video';
import myVideo from '../../videos/hero1.mp4';
import Sponsors from "./components/Sponsors";
import EliteChampionship from "./components/EliteChampionship";
import WhyKhoKho from "./components/WhyKhoKho";
import KhoKhoHistory from "./components/KhoKhoHistory";
import PerformedEvents from "./components/PerformedEvents";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhyKhoKhoPartner from "./components/WhyKhoKhoPartner";
import SponsorsLogoCarousel from "./components/SponsorsLogoCarousel.js";




export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-white">

      <EliteChampionship/>
      <WhyKhoKhoPartner/>
      <KhoKhoHistory/>
      <TestimonialsCarousel/>
      <Sponsors />
      {/* <WhyKhoKho/> */}
      <PerformedEvents/>
      <SponsorsLogoCarousel />
      

      {/* Mobile View - Stacked Layout */}
      {/* <div className="lg:hidden flex flex-col w-full bg-white">
        <div className="w-full aspect-video relative ">
          <BackgroundVideo
            src={myVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] z-20">
            <div className="bg-white/95 backdrop-blur-xl border border-purple-200 p-3 rounded-2xl shadow-[0_10px_30px_rgba(147,51,234,0.3)] flex items-center gap-3">
              <div className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-600"></span>
              </div>
              <p className="text-neutral-900 font-bold text-xs leading-tight text-left">
                <span className="block text-[9px] text-purple-600 font-black tracking-[0.2em] uppercase mb-0.5">Coming Soon</span>
               Elite Kho-Kho Championship <br /><span className="text-neutral-500">@ Hyderabad</span>
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col px-6 py-12 gap-6 mt-24 bg-white">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black  tracking-tight uppercase font-extrabold">
            Events that <span className="text-purple-600">speak.</span><br />Moments that <span className="text-purple-600">stay.</span>
          </h1>
          <p className="text-black/70 text-lg leading-relaxed font-medium">
            Zho Zho Entertainments delivers high-impact corporate events. Trusted by top companies.
            Live It. Feel It.
          </p>
          <div className="pt-4">
            <button
              onClick={() => {
                const el = document.getElementById("mission-section");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-bold h-[56px] px-10 flex items-center justify-center w-fit cursor-pointer active:scale-95 transition-transform">
              Explore Now
            </button>
          </div>
        </div>
      </div> */}

      {/* <Landing /> */}
    </div>
  );
}

