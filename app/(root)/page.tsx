"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Landing from "./Landing/page";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col">
      <div className="relative w-full min-h-screen bg-[url('/bg.avif')] bg-cover bg-center text-white flex flex-col">


        <div className="relative z-10 flex flex-col flex-1 px-8 sm:px-14 md:px-20 lg:px-32 xl:px-44 w-full">
         
         <Header/>

       
          <main className="flex-1 flex flex-col justify-center pb-12 pt-8 lg:pt-0 lg:pb-0 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center h-full">

              {/* Left Side */}
              <div className="flex flex-col gap-6 lg:gap-8 drop-shadow-xl mt-12 lg:mt-0">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-md w-fit shadow-lg transition-transform hover:-translate-y-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                  <span className="text-sm md:text-base font-medium text-white/90 tracking-wide">Welcome to Zho Zho</span>
                </div>

                {/* Heading */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
                  Events that speak.<br />Moments that stay.
                </h1>
              </div>

              {/* Right Side */}
              <div className="flex flex-col gap-8 lg:pl-10">
                {/* Members Stat */}
                <div className="flex items-center gap-6 drop-shadow-lg">
               
                </div>

                {/* Description */}
                <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg font-normal drop-shadow-md">
                  Live It. Feel It. Zho Zho. Take your event experiences to the next level with our expert-led programs designed for everyone. From mastering fundamentals to advanced strategies, our professional team delivers.
                </p>

               {/* Action Buttons */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 pt-4">
          <button 
             onClick={() => {
                const el = document.getElementById("mission-section");
                if (el) {
                  el.scrollIntoView({ 
                    behavior: "smooth", 
                    block: "start" 
                  });
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
      </div>
      <Landing/>
    </div>
  );
}
