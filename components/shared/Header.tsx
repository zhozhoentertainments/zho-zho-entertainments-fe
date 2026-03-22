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

export default function Header() {
  const navItems = ["Mission", "Vision", "Purpose", "Objectives"];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="wrapper flex-between py-4 md:py-6">
        
       
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/logo.png"
            alt="Zho Zho Entertainments"
            width={180}
            height={60}
            className="object-contain h-10 md:h-12 w-auto"
          />
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-xs lg:text-sm font-semibold tracking-[0.12em] uppercase text-white/80">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative group transition-all duration-300 hover:text-red-500"
            >
              {item}

     
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>

    
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-md bg-red-500/20 transition"></span>
            </Link>
          ))}
        </nav>

       
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition">
                <Menu className="w-5 h-5 text-white" />
              </button>
            </SheetTrigger>

            <SheetContent className="bg-black/95 border-l border-white/10 text-white">
              <SheetHeader>
                <SheetTitle className="text-white text-lg tracking-wider">
                  Menu
                </SheetTitle>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6 text-lg font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="hover:text-red-500 transition"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}