"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#050505] p-3 md:p-6 lg:p-8 font-sans flex flex-col">
      <div className="relative flex-1 w-full rounded-[2rem] md:rounded-[2.5rem] bg-[url('/bg.avif')] bg-cover bg-center overflow-hidden text-white flex flex-col shadow-2xl ring-1 ring-white/10">

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/50 lg:bg-gradient-to-r from-black/90 via-black/50 to-black/70 z-0"></div>

        {/* Content strictly over the overlay */}
        <div className="relative z-10 flex flex-col flex-1 px-10 md:px-20 lg:px-32 xl:px-44 w-full">
          {/* Navigation */}
          <header className="w-full flex items-center justify-between py-6 lg:py-8">
            <Link href="/" className="relative z-10 transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Zho Zho Entertainments"
                width={180}
                height={60}
                className="object-contain h-10 md:h-14 w-auto drop-shadow-2xl "
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-sm md:text-base font-semibold tracking-wide">
              <Link href="/mission" className="hover:text-red-400 transition-colors">Mission</Link>
              <Link href="/vision" className="hover:text-red-400 transition-colors">Vision</Link>
              <Link href="/purpose" className="hover:text-red-400 transition-colors">Purpose</Link>
              <Link href="/objectives" className="hover:text-red-400 transition-colors">Objectives</Link>
            </nav>

            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <button className="p-2 bg-black/20 rounded-lg backdrop-blur-sm cursor-pointer border border-white/10 hover:bg-black/40 transition-colors">
                    <Menu className="w-7 h-7 text-white" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-neutral-950 border-white/10 text-white w-64">
                  <SheetHeader>
                    <SheetTitle className="text-left text-white text-xl font-bold">
                      <Image
                src="/logo.png"
                alt="Zho Zho Entertainments"
                width={180}
                height={60}
                className="object-contain h-10 md:h-14 w-auto drop-shadow-2xl "
              />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 mt-10">
                    <Link href="/mission" className="text-lg font-semibold hover:text-red-400 transition-colors">Mission</Link>
                    <Link href="/vision" className="text-lg font-semibold hover:text-red-400 transition-colors">Vision</Link>
                    <Link href="/purpose" className="text-lg font-semibold hover:text-red-400 transition-colors">Purpose</Link>
                    <Link href="/objectives" className="text-lg font-semibold hover:text-red-400 transition-colors">Objectives</Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>

          {/* Main Hero Content */}
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
                  <button className="bg-black hover:bg-neutral-800 border-2 border-white/20 text-white rounded-full text-lg font-bold shadow-2xl transition-all hover:scale-105 h-[64px] min-w-[240px] px-8 flex items-center justify-center whitespace-nowrap cursor-pointer">
                    Explore Now
                  </button>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
