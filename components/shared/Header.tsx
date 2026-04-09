"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Header() {
  const navItems = ["Mission", "Vision", "Purpose", "Objectives"];
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isSportsMobileOpen, setIsSportsMobileOpen] = useState(false);
  const [isOurTeamMobileOpen, setIsOurTeamMobileOpen] = useState(false);

  return (
    <div className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl z-[100]">
      <header className="w-full flex items-center justify-between px-6 md:px-10 py-3 md:py-4 backdrop-blur-xl bg-neutral-950/40 border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
        
        {/* Logo Section */}
        <Link href="/" className="relative z-10 transition-transform hover:scale-105 shrink-0">
          <Image
            src="/logo.png"
            alt="Zho Zho Entertainments"
            width={180}
            height={70}
            className="object-contain h-10 md:h-14 w-auto drop-shadow-2xl"
          />
        </Link>

       
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm md:text-base font-semibold tracking-wide">
          <Link href="/" className="text-white font-extrabold hover:text-purple-400 transition-colors">Home</Link>
          <NavigationMenu viewport={false} className="z-[110]">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-white hover:text-purple-400 transition-all duration-300 border-none p-0 h-auto focus:bg-transparent shadow-none [&>svg]:ml-2">
                  <span className="font-extrabold tracking-wide text-[1rem]">Our Team</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2 min-w-[200px] bg-neutral-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                  <div className="flex flex-col gap-1.5">
                    <NavigationMenuLink asChild>
                      <Link href="/ourTeam/advisoryBoard" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                        <span>Advisory Board</span>
                        <div className="size-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/ourTeam/boardOfDirectors" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                        <span>Board of Directors</span>
                        <div className="size-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/aboutUs" className="text-white font-extrabold hover:text-purple-400 transition-colors">About Us</Link>
          <Link href="/sponsors" className="text-white font-extrabold hover:text-purple-400 transition-colors">Sponsors</Link>
          <Link href="/volunteers" className="text-white font-extrabold hover:text-purple-400 transition-colors">Volunteers</Link>
          <Link href="/servicess" className="text-white font-extrabold hover:text-purple-400 transition-colors">Services</Link>
          
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10 text-white hover:text-purple-400 transition-all duration-300 border-none px-4 py-2 rounded-xl h-auto focus:bg-transparent shadow-none">
                  <span className="font-extrabold tracking-wide text-[1rem]">Gallery</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2 min-w-[200px] bg-neutral-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                  <div className="flex flex-col gap-1.5">
                    <NavigationMenuLink asChild>
                      <Link href="/" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                        <span>Image Gallery</span>
                        <div className="size-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="/" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                        <span>Video Gallery</span>
                        <div className="size-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10 text-white hover:text-purple-400 transition-all duration-300 border-none px-4 py-2 rounded-xl h-auto focus:bg-transparent shadow-none">
                  <span className="font-extrabold tracking-wide text-[1rem]">Upcoming Events</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-2 min-w-[220px] bg-neutral-950/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                  <div className="flex flex-col gap-1.5 min-w-[200px]">
                    <div className="flex flex-col">
                      <button 
                        onClick={() => setIsSportsOpen(!isSportsOpen)}
                        className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 cursor-pointer w-full text-left"
                      >
                       <div className="flex items-center gap-2">
                        <span>Sports Event</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isSportsOpen ? 'rotate-180' : ''}`} />
                       </div>
                        <div className="size-1.5 rounded-full bg-purple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </button>
                      
                      <AnimatePresence>
                        {isSportsOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="flex flex-col gap-1 pl-6 overflow-hidden"
                          >
                             <Link href="/objectives/SportsManagement" className="px-4 py-2 text-xs font-semibold text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                              Kho Kho
                            </Link>
                            <Link href="/" className="px-4 py-2 text-xs font-semibold text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                              Rifle Shooting
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <NavigationMenuLink asChild>
                      <Link href="/" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                        <span>Cultural Events</span>
                        <div className="size-1.5 rounded-full bg-pruple-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2.5 text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer border border-white/10">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-neutral-950/95 backdrop-blur-xl border-white/10 text-white w-72">
              <SheetHeader>
                <SheetTitle className="text-left text-white text-xl font-bold pt-4">
                  <Image
                    src="/logo.png"
                    alt="Zho Zho Entertainments"
                    width={180}
                    height={60}
                    className="object-contain h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 mt-12 overflow-y-auto max-h-[calc(100vh-120px)] pb-10">
                <Link href="/" className="text-lg font-medium hover:text-red-400 transition-colors px-2">Home</Link>
                <div className="flex flex-col">
                  <button 
                    onClick={() => setIsOurTeamMobileOpen(!isOurTeamMobileOpen)}
                    className="flex items-center justify-between text-lg font-medium hover:text-red-400 transition-colors px-2 w-full text-left"
                  >
                    <span>Our Team</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${isOurTeamMobileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOurTeamMobileOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col gap-3 pl-6 overflow-hidden mt-3"
                      >
                        <Link href="/ourTeam/advisoryBoard" className="text-base font-medium text-white/70 hover:text-white transition-colors">
                          Advisory Board
                        </Link>
                        <Link href="/ourTeam/boardOfDirectors" className="text-base font-medium text-white/70 hover:text-white transition-colors">
                          Board of Directors
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <Link href="/aboutUs" className="text-lg font-medium hover:text-red-400 transition-colors px-2">About Us</Link>
                <Link href="/sponsors" className="text-lg font-medium hover:text-red-400 transition-colors px-2">Sponsors</Link>
                <Link href="/volunteers" className="text-lg font-medium hover:text-red-400 transition-colors px-2">Volunteers</Link>
                <Link href="/servicess" className="text-lg font-medium hover:text-red-400 transition-colors px-2">Services</Link>
                
                <div className="h-px bg-white/10 my-2 mx-2" />
                
                <div className="flex flex-col gap-4">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] px-2">Gallery</div>
                  <Link href="/" className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all">Image Gallery</Link>
                  <Link href="/" className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all">Video Gallery</Link>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] px-2">Upcoming Events</div>
                  <div className="flex flex-col">
                    <button 
                      onClick={() => setIsSportsMobileOpen(!isSportsMobileOpen)}
                      className="flex items-center justify-between text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all cursor-pointer w-full text-left"
                    >
                      <div className="flex items-center gap-2">
                        <span>Sports Events</span>
                        <ChevronDown size={14} className={`transition-transform duration-300 ${isSportsMobileOpen ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isSportsMobileOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-1 pl-6 overflow-hidden mt-1"
                        >
                          <Link href="/objectives/SportsManagement" className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            Kho Kho
                          </Link>
                          <Link href="/" className="px-4 py-2 text-sm font-medium text-white/50 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                            Rifle Shooting
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <Link href="/" className="text-base font-medium text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all">Cultural Events</Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}