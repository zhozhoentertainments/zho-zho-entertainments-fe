"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
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

  return (
     <header className="w-full flex items-center justify-between py-6 lg:py-8">
            <Link href="/" className="relative z-10 transition-transform hover:scale-105">
              <Image
                src="/logo.png"
                alt="Zho Zho Entertainments"
                width={300}
                height={120}
                className="object-contain h-[60px] md:h-[84px] w-auto drop-shadow-2xl "
              />
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-sm md:text-base font-semibold tracking-wide">
              <Link href="/" className="hover:text-red-400 transition-colors">Home</Link>
              <Link href="/ourTeam" className="hover:text-red-400 transition-colors">Our Team</Link>
              <Link href="/aboutUs" className="hover:text-red-400 transition-colors">About Us</Link>
              <Link href="/sponsors" className="hover:text-red-400 transition-colors">Sponsors</Link>
              <Link href="/volunteers" className="hover:text-red-400 transition-colors">Volunteers</Link>
              <Link href="/servicess" className="hover:text-red-400 transition-colors">Services</Link>
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10 text-white hover:text-red-400 transition-all duration-300 border-none px-4 py-2 rounded-xl h-auto focus:bg-transparent shadow-none">
                      <span className="font-semibold tracking-wide">Gallery</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-2 min-w-[200px] bg-neutral-950/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                      <div className="flex flex-col gap-1.5">
                        <NavigationMenuLink asChild>
                          <Link href="/gallery/images" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Image Gallery</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/gallery/videos" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Video Gallery</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
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
                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10 text-white hover:text-red-400 transition-all duration-300 border-none px-4 py-2 rounded-xl h-auto focus:bg-transparent shadow-none">
                      <span className="font-semibold tracking-wide">Upcoming Events</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="mt-2 min-w-[220px] bg-neutral-950/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-2 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-300">
                      <div className="flex flex-col gap-1.5">
                        <NavigationMenuLink asChild>
                          <Link href="/events/sports" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Sports Event</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/events/cultural" className="group/item flex items-center justify-between px-4 py-3 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Cultural Events</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

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
                width={300}
                height={120}
                className="object-contain h-[60px] md:h-[84px] w-auto drop-shadow-2xl "
              />
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 mt-10">
                      <Link href="/" className="hover:text-red-400 transition-colors pl-4.5 mb-2">Home</Link>
              <Link href="/ourTeam" className="hover:text-red-400 transition-colors pl-4.5 mb-2">Our Team</Link>
              <Link href="/aboutUs" className="hover:text-red-400 transition-colors pl-4.5 mb-2">About Us</Link>
              <Link href="/sponsors" className="hover:text-red-400 transition-colors pl-4.5 mb-2">Sponsors</Link>
              <Link href="/volunteers" className="hover:text-red-400 transition-colors pl-4.5 mb-2">Volunteers</Link>
              <Link href="/servicess" className="hover:text-red-400 transition-colors pl-4.5 ">Services</Link>
              <div className="flex flex-col gap-2 mt-2">
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest px-4.5 py-2">Gallery</div>
                <Link href="/gallery/images" className="hover:text-red-400 transition-colors pl-8 py-2 text-white/80 border-l border-white/10 font-medium">Image Gallery</Link>
                <Link href="/gallery/videos" className="hover:text-red-400 transition-colors pl-8 py-2 text-white/80 border-l border-white/10 font-medium">Video Gallery</Link>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="text-sm font-semibold text-white/40 uppercase tracking-widest px-4.5 py-2">Upcoming Events</div>
                <Link href="/events/sports" className="hover:text-red-400 transition-colors pl-8 py-2 text-white/80 border-l border-white/10 font-medium">Sports Event</Link>
                <Link href="/events/cultural" className="hover:text-red-400 transition-colors pl-8 py-2 text-white/80 border-l border-white/10 font-medium">Cultural Events</Link>
              </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </header>
  );
}