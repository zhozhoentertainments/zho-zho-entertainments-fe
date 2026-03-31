"use client";

import Landing from "./Landing/page";
import BackgroundVideo from 'next-video/background-video';
import Header from "@/components/shared/Header";
import SplineScene from "@/components/shared/SplineScene";

import myVideo from '../../videos/final.mp4'; 

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-white overflow-x-hidden">
      {/* Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div>
     
      <div className="hidden lg:flex relative w-full min-h-screen bg-white text-black flex-col overflow-hidden">
        {/* Full Cover Background for Desktop */}
        <div className="absolute inset-0 z-0 pointer-events-auto flex items-center justify-center">
          <SplineScene 
            scene="https://prod.spline.design/FZZB9B3IaVdzX-mH/scene.splinecode" 
            className="w-full h-full"
          />
          {/* Gradient overlay to ensure text on the left remains readable without affecting crystals on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col flex-1 px-8 sm:px-14 md:px-20 lg:px-32 xl:px-44 w-full pointer-events-none">
          <main className="flex-1 flex flex-col pt-48 pb-12 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
              {/* Left Side: Content */}
              <div className="flex flex-col gap-6 xl:gap-6 z-10 pointer-events-auto">
                <h1 className="text-5xl lg:text-6xl xl:text-[4.5rem] font-black leading-[1.1] tracking-tighter uppercase text-neutral-900 drop-shadow-sm">
                  Events that <span className="text-purple-600">Speak.</span><br />
                  Moments that <span className="text-purple-600">Stay.</span>
                </h1>

                <p className="text-neutral-600 text-lg xl:text-xl leading-relaxed max-w-xl font-medium drop-shadow-sm">
                  Live It. Feel It. Take your event experiences to the next level with our expert-led programs. From fundamental workshops to grand corporate celebrations.
                </p>

                <div className="flex items-center gap-8 pt-4 pointer-events-auto">
                  <button 
                    onClick={() => {
                      const el = document.getElementById("mission-section");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xl font-black h-[64px] px-14 flex items-center justify-center w-fit shadow-[0_20px_50px_rgba(147,51,234,0.3)] transition-all hover:scale-105 active:scale-95 uppercase tracking-tighter"
                  >
                    Explore Now
                  </button>
                </div>
              </div>

              {/* Right Side: Empty Space (Crystals show here from background) */}
              <div className="hidden lg:block pointer-events-none"></div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile View - Stacked Layout */}
      <div className="lg:hidden flex flex-col w-full bg-white relative z-10 pointer-events-auto">
        <div className="w-full aspect-video relative mt-24">
          <BackgroundVideo src={myVideo} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col px-6 py-12 gap-6 bg-white pointer-events-auto">
          <h1 className="text-4xl sm:text-5xl font-black leading-[1.1] text-neutral-900 tracking-tight uppercase">
            Events that <span className="text-purple-600">speak.</span><br />
            Moments that <span className="text-purple-600">stay.</span>
          </h1>
          <p className="text-neutral-600 text-lg leading-relaxed font-medium">
            Zho Zho Entertainments delivers high-impact corporate events. Trusted by top companies. 
            Live It. Feel It.
          </p>
          <div className="pt-4 pointer-events-auto">
            <button 
              onClick={() => {
                const el = document.getElementById("mission-section");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-black h-[56px] px-10 flex items-center justify-center w-fit cursor-pointer active:scale-95 transition-transform uppercase tracking-tighter shadow-[0_10px_30px_rgba(147,51,234,0.3)]"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
      
      <div className="relative z-20 bg-white">
        <Landing/>
      </div>
    </div>
  );
}
