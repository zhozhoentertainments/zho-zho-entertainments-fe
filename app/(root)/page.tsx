"use client";

import Landing from "./Landing/page";
import BackgroundVideo from 'next-video/background-video';
import Header from "@/components/shared/Header";

import Video from 'next-video';
import myVideo from '../../videos/hero1.mp4';



export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-white">
      {/* Header Wrapper */}
      {/* <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div> */}

      <div className="hidden lg:flex relative w-full min-h-screen bg-white text-black flex-col">
        <div className="relative z-10 flex flex-col flex-1 px-8 sm:px-14 md:px-20 lg:px-32 xl:px-44 w-full">
          <main className="flex-1 flex flex-col pt-48 pb-12 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24 items-center">
              {/* Left Side: Content */}
              <div className="flex flex-col gap-6 xl:gap-6">
                <h1 className="text-5xl lg:text-6xl xl:text-[4rem] font-black leading-[1] tracking-tighter uppercase text-neutral-900">
                  Events that <span className="text-purple-600">Speak.</span><br />
                  Moments that <span className="text-purple-600">Stay.</span>
                </h1>

                <p className="text-neutral-500 text-lg xl:text-xl leading-relaxed max-w-xl font-medium">
                  Live It. Feel It. Take your event experiences to the next level with our expert-led programs. From fundamental workshops to grand corporate celebrations.
                </p>

                <div className="flex items-center gap-8 pt-2">
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

              {/* Right Side: Video */}
              <div className="relative aspect-[4/5] xl:aspect-square rounded-[3rem] xl:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] xl:border-[12px] border-neutral-50 group max-h-[70vh]">
                <BackgroundVideo
                  src={myVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Floating Announcement Badge */}
                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 w-[85%] max-w-sm z-20">
                  <div className="bg-white/95 backdrop-blur-xl border border-purple-200 p-4 rounded-2xl shadow-[0_20px_50px_rgba(147,51,234,0.4)] flex items-center gap-4 transform transition-all hover:scale-105 cursor-default group/badge">
                    <div className="relative flex h-4 w-4 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-600"></span>
                    </div>
                    <p className="text-neutral-900 font-bold text-sm leading-tight text-left">
                      <span className="block text-[11px] text-purple-600 font-black tracking-[0.2em] uppercase mb-1">Coming Soon</span>
                      Elite Kho-Kho Championship <br /><span className="text-neutral-500">@ Hyderabad</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Mobile View - Stacked Layout */}
      <div className="lg:hidden flex flex-col w-full bg-white">



        <div className="w-full aspect-video relative ">
          <BackgroundVideo
            src={myVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          {/* Floating Announcement Badge */}
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
      </div>

      <Landing />
    </div>
  );
}

