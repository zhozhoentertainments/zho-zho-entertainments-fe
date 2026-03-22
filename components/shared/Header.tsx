"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="w-full mb-10 flex items-center justify-between py-6 md:py-10">
      <Link href="/" className="transition-transform hover:scale-105">
        <Image
          src="/logo.png"
          alt="Zho Zho Entertainments"
          width={180}
          height={60}
          className="object-contain h-10 md:h-12 w-auto"
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8 lg:gap-12 text-xs lg:text-sm font-bold tracking-[0.15em] uppercase text-white/90">
        {["Mission", "Vision", "Purpose", "Objectives"].map((item) => (
          <Link 
            key={item} 
            href={`/${item.toLowerCase()}`} 
            className="hover:text-red-500 transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        {/* ... Sheet code remains the same ... */}
      </div>
    </header>
  );
}