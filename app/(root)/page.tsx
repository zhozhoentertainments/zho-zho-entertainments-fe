"use client";

import Landing from "./Landing/page";
import BackgroundVideo from 'next-video/background-video';
import Header from "@/components/shared/Header";

import Video from 'next-video';
import myVideo from '../../videos/3rd animation.mp4'; 
 


export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-white">
     
      <div className="hidden lg:flex relative w-full min-h-screen bg-cover bg-center text-black flex-col">
        <BackgroundVideo src={myVideo}>
          <div className="relative z-10 flex flex-col flex-1 px-8 sm:px-14 md:px-20 lg:px-32 xl:px-44 w-full">
            <Header/>
            <main className="flex-1 flex flex-col justify-center pb-12 pt-8 lg:pt-0 lg:pb-0 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">
                {/* Left Side */}
                <div className="flex flex-col gap-6 lg:gap-8 drop-shadow-xl mt-12 lg:mt-0">
                  <div className="inline-flex items-center gap-3 rounded-full border border-black/20 bg-black/10 px-5 py-2.5 backdrop-blur-md w-fit shadow-lg transition-transform hover:-translate-y-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-sm md:text-base font-medium text-black/90 tracking-wide">Welcome to Zho Zho</span>
                  </div>
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-black drop-shadow-lg">
                    Events that speak.<br />Moments that stay.
                  </h1>
                </div>
                {/* Right Side */}
                <div className="flex flex-col gap-8 lg:pl-10">
                  <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-lg font-normal drop-shadow-md">
                    Live It. Feel It. Take your event experiences to the next level with our expert-led programs designed for everyone. From mastering fundamentals to advanced strategies, our professional team delivers.
                  </p>
                  <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 pt-4">
                    <button 
                      onClick={() => {
                        const el = document.getElementById("mission-section");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                      className="bg-black hover:bg-neutral-800 border-2 border-white/20 text-white rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105 h-[64px] min-w-[240px] px-8 flex items-center justify-center whitespace-nowrap cursor-pointer">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </BackgroundVideo>
      </div>

      {/* Mobile View - Stacked Layout */}
      <div className="lg:hidden flex flex-col w-full bg-white">
       
        <div className="relative z-50">
          <Header />
        </div>

       
        <div className="w-full aspect-video relative mt-24">
          <BackgroundVideo src={myVideo} className="w-full h-full object-cover" />
        </div>

       
        <div className="flex flex-col px-6 py-12 gap-6 bg-white">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black  tracking-tight">
            Events that speak.<br />Moments that stay.
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
              className="bg-black text-white rounded-full text-lg font-bold h-[56px] px-10 flex items-center justify-center w-fit cursor-pointer active:scale-95 transition-transform">
              Explore Now
            </button>
          </div>
        </div>
      </div>
      
      <Landing/>
    </div>
  );
}

