"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Youtube,
  Instagram
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. ALL LINKS DATA IN ONE PLACE
const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Mental Health Matters", href: "/mental-health-matters" },
  { name: "About Us", href: "/about-us" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Volunteers", href: "/volunteers" },
  { name: "Services", href: "/services" },
  { name: "Our Gallery", href: "/our-gallery" },
];

const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/zhozho_entertainments", icon: Instagram, hover: "hover:bg-gradient-to-r hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white" },
  { href: "https://www.facebook.com/share/1CxFmj3d56/", icon: Facebook, hover: "hover:bg-[#1877F2] hover:text-white" },
  { href: "https://www.linkedin.com/company/zho-zho-entertainments/", icon: Linkedin, hover: "hover:bg-[#0A66C2] hover:text-white" },
  { href: "https://x.com/zhozhoent", icon: X, hover: "hover:bg-black hover:text-blue-600" },
  { href: "https://youtube.com/@zhozhoentertainments", icon: Youtube, hover: "hover:bg-[#FF0000] hover:text-white" },
];

// 2. HOVER AND COLOR SETTINGS IN ONE PLACE
const THEME = {
  activeText: "text-[#A822F5] font-black",
  inactiveText: "text-neutral-800 font-medium hover:text-neutral-800",
  activeBg: "text-[#A822F5] bg-[#A822F5]/5",
  hoverBg: "hover:text-[#A822F5] hover:bg-[#A822F5]/5",
};

export default function NewHeader() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[100] flex flex-col font-sans">
        
        {/* 1. PREMIUM TOP STRIP */}
        <div className="w-full bg-[#120324] text-white/90 text-[11px] font-medium tracking-wide border-b border-[#A822F5]/20 pt-3 pb-7 xl:pb-8">
          {/* Note: max-w-[95%] and px-2 adds safety padding on ultra-small screens */}
          <div className="w-full max-w-[95%] xl:max-w-[85%] mx-auto px-2 sm:px-4 flex justify-between items-center gap-1">
            
            <div className="flex items-center min-w-0 shrink">
              <a href="mailto:info@zhozhoentertainments.com" className="flex items-center gap-1 sm:gap-1.5 hover:text-[#A822F5] transition-colors min-w-0">
                <Mail size={14} className="text-[#A822F5] shrink-0 sm:w-4 sm:h-4" />
                {/* text-[10px] for small devices, text-md scale on larger screens */}
                <span className="text-[10px] xs:text-xs sm:text-md truncate">info@zhozhoentertainments.com</span>
              </a>
            </div>

            {/* Social Icons Container with Ultra-Responsive Spacing */}
            <div className="flex items-center gap-1.5 xs:gap-3 sm:gap-4 shrink-0">
              <span className="text-white/60 text-[10px] uppercase tracking-widest hidden md:inline">
                Follow Us:
              </span>
              {/* gap-1 for micro-screens, gap-2 for 433px+ */}
              <div className="flex items-center gap-1 xs:gap-2 text-white/90">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.hover}`}
                  >
                    <social.icon size={11} className="xs:size-[13px] sm:w-4 sm:h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 2. MODERN CONNECTED MAIN NAVIGATION */}
        <div className="w-full px-4 -mt-4">
          <div className="w-full max-w-[94%] xl:max-w-[85%] mx-auto h-16 xl:h-20 bg-[#FDFBF7] border border-[#A822F5]/20 rounded-[22px] shadow-[0_12px_40px_rgba(18,3,36,0.15)] flex items-center justify-between px-3 sm:px-6 xl:px-10 relative">
            
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="transition-transform duration-200 hover:scale-[1.02] flex items-center">
                <Image
                  src="/logo.png"
                  alt="Zho Zho Entertainments"
                  width={150}
                  height={55}
                  className="object-contain h-8 xs:h-9 sm:h-10 xl:h-14 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav Loop */}
            <nav className="hidden xl:flex items-center xl:pl-8 gap-5 lg:gap-6 xl:gap-8 text-[13px] uppercase tracking-[0.12em]">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1.5 transition-colors duration-200 group ${isActive(link.href) ? THEME.activeText : THEME.inactiveText}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[2.5px] transition-all duration-200 ${isActive(link.href) ? "w-full bg-[#A822F5] shadow-[0_2px_8px_rgba(168,34,245,0.4)]" : "w-0 bg-neutral-800 group-hover:w-full"}`} />
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-1.5 xs:gap-3 shrink-0">
              <a
                href="tel:918019037799"
                className="flex items-center gap-1.5 xs:gap-2.5 bg-gradient-to-r from-[#2D0B5A] to-[#A822F5] text-white px-2.5 xs:px-4 xl:px-5 py-2 xl:py-3 rounded-xl shadow-[0_6px_20px_rgba(168,34,245,0.35)] hover:scale-[1.02] transition-all group"
              >
                <div className="w-5 h-5 xs:w-6 xs:h-6 xl:w-7 xl:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                  <Phone size={11} className="text-white fill-white/20 xs:size-[13px]" />
                </div>
                <div className="flex flex-col text-left leading-tight justify-center">
                  <span className="text-[7px] xs:text-[8px] xl:text-[9px] text-white/70 uppercase tracking-widest font-black mb-0.5">Call Now</span>
                  <span className="text-[10px] xs:text-[11px] xl:text-[13px] font-black tracking-wide whitespace-nowrap">+91 8019037799</span>
                </div>
              </a>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 xs:p-2.5 text-neutral-700 hover:text-[#A822F5] border border-neutral-200 rounded-xl transition-all"
              >
                <Menu className="w-4 h-4 xs:w-5 xs:h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL SCREEN RESPONSIVE MOBILE ACCORDION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-[#FDFBF7] z-[150] pt-6 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            {/* Mobile Top: Logo and Close Button */}
            <div className="w-full flex justify-between items-center mb-6 sticky top-0 bg-[#FDFBF7] py-2 z-10 border-b border-neutral-100 pb-4">
              <Image src="/logo.png" alt="Zho Zho Entertainments" width={130} height={48} className="object-contain h-8 sm:h-9 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-[#A822F5] transition-colors"
              >
                <X size={20} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Nav Links Loop */}
            <div className="w-full max-w-xs mx-auto flex flex-col items-center gap-1 text-center text-[13px] font-black uppercase tracking-[0.14em] text-neutral-700 my-auto py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full py-3.5 rounded-xl transition-colors ${isActive(link.href) ? THEME.activeBg : THEME.hoverBg}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Footer: Properly Aligned Email and Socials */}
            <div className="w-full border-t border-neutral-200 pt-6 flex flex-col items-center gap-4 mt-auto">
              <a href="mailto:info@zhozhoentertainments.com" className="flex items-center gap-1.5 hover:text-[#A822F5] transition-colors text-neutral-600 font-medium">
                <Mail size={16} className="text-[#A822F5]" />
                <span className="text-[13px]">info@zhozhoentertainments.com</span>
              </a>

              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-7 h-7 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center transition-all duration-300 text-neutral-700 ${social.hover}`}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}