"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  ChevronDown,
  X,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Linkedin,
  Youtube,
  Twitter
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const teamLinks = [
  { name: "Advisory Board", href: "/our-team/advisory-board" },
  { name: "Board of Directors", href: "/our-team/board-of-directors" },
];

const galleryLinks = [
  { name: "Image Gallery", href: "/gallery/images" },
  { name: "Video Gallery", href: "/gallery/videos" },
];

export default function NewHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [isSportsOpen, setIsSportsOpen] = useState(false);

  const toggleMobileSubmenu = (menu: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === menu ? null : menu);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-[100] flex flex-col font-sans">

        {/* 1. PREMIUM TOP STRIP */}
        <div className="w-full bg-[#120324] text-white/90 text-[11px] font-medium tracking-wide border-b border-[#A822F5]/20 pt-3 pb-7 xl:pb-8">
          {/* Top Bar constraints aligned perfectly with the floating menu structure */}
          <div className="w-full max-w-[92%] xl:max-w-[85%] mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5 hover:text-[#A822F5] transition-colors cursor-default">
                <MapPin size={13} className="text-[#A822F5] hidden sm:inline" />
                <span className="hidden sm:inline">Flat No: 102, Sai Kiran Apartments, Ameerpet , Hyderabad, TS - 500038

                </span>
              </span>
              <a href="mailto:info@Snowly.com" className="flex items-center gap-1.5 hover:text-[#A822F5] transition-colors">
                <Mail size={13} className="text-[#A822F5]" />
                <span>info@zhozhoentertainments.com</span>
              </a>
            </div>

            {/* Social Media Circular Branded Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="text-white/60 text-[10px] uppercase tracking-widest hidden md:inline">Follow Us:</span>
              <div className="flex items-center gap-2 text-white/90">
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#A822F5] hover:text-white flex items-center justify-center transition-all">
                  <Facebook size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#A822F5] hover:text-white flex items-center justify-center transition-all">
                  <Linkedin size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#A822F5] hover:text-white flex items-center justify-center transition-all">
                  <Youtube size={12} />
                </a>
                <a href="#" className="w-6 h-6 rounded-full bg-white/10 hover:bg-[#A822F5] hover:text-white flex items-center justify-center transition-all">
                  <Twitter size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. MODERN CONNECTED MAIN NAVIGATION */}
        {/* Adjusted width configurations globally to prevent squeeze breakages */}
        <div className="w-full px-4 -mt-4">
          <div className="w-full max-w-[94%] xl:max-w-[85%] mx-auto h-16 xl:h-20 bg-[#FDFBF7] border border-[#A822F5]/20 rounded-[22px] shadow-[0_12px_40px_rgba(18,3,36,0.15)] flex items-center justify-between px-4 sm:px-6 xl:px-10 relative transition-all">

            {/* Logo Wrapper */}
            <div className="flex items-center shrink-0">
              <Link href="/" className="transition-transform duration-200 hover:scale-[1.02] flex items-center">
                <Image
                  src="/logo.png"
                  alt="Zho Zho Entertainments"
                  width={150}
                  height={55}
                  className="object-contain h-9 sm:h-10 xl:h-14 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation - Hidden below 'xl' ($1280px) to force Hamburger menu on tablet and $1024px laptops */}
            <nav className="hidden xl:flex items-center xl:pl-8 gap-5 lg:gap-6 xl:gap-8 text-[13px] font-black uppercase tracking-[0.12em] text-neutral-800">

              <Link href="/" className="relative py-1.5 hover:text-[#A822F5] transition-colors duration-200 group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#A822F5] transition-all duration-200 group-hover:w-full shadow-[0_2px_8px_rgba(168,34,245,0.4)]" />
              </Link>

              {/* Our Team Dropdown */}
              <div
                className="relative py-1.5 cursor-pointer"
                onMouseEnter={() => setDesktopDropdown("team")}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <span className={`flex items-center gap-1 transition-colors duration-200 hover:text-[#A822F5] ${desktopDropdown === "team" ? "text-[#A822F5]" : ""}`}>
                  Our Team <ChevronDown size={12} className="text-[#A822F5] opacity-80" />
                </span>
                <AnimatePresence>
                  {desktopDropdown === "team" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#FDFBF7] border border-[#A822F5]/20 p-1.5 rounded-xl shadow-lg z-[110]"
                    >
                      {teamLinks.map((item) => (
                        <Link key={item.name} href={item.href} className="block px-4 py-2.5 text-[12px] font-bold text-neutral-600 hover:text-white hover:bg-[#A822F5] rounded-lg transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/aboutUs" className="relative py-1.5 hover:text-[#A822F5] transition-colors duration-200 group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#A822F5] transition-all duration-200 group-hover:w-full" />
              </Link>

              <Link href="/sponsors" className="relative py-1.5 hover:text-[#A822F5] transition-colors duration-200 group">
                Sponsors
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#A822F5] transition-all duration-200 group-hover:w-full" />
              </Link>

              <Link href="/volunteers" className="relative py-1.5 hover:text-[#A822F5] transition-colors duration-200 group">
                Volunteers
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#A822F5] transition-all duration-200 group-hover:w-full" />
              </Link>

              <Link href="/servicess" className="relative py-1.5 hover:text-[#A822F5] transition-colors duration-200 group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-[2.5px] bg-[#A822F5] transition-all duration-200 group-hover:w-full" />
              </Link>

              {/* Gallery Dropdown */}
              <div
                className="relative py-1.5 cursor-pointer"
                onMouseEnter={() => setDesktopDropdown("gallery")}
                onMouseLeave={() => setDesktopDropdown(null)}
              >
                <span className={`flex items-center gap-1 transition-colors duration-200 hover:text-[#A822F5] ${desktopDropdown === "gallery" ? "text-[#A822F5]" : ""}`}>
                  Gallery <ChevronDown size={12} className="text-[#A822F5] opacity-80" />
                </span>
                <AnimatePresence>
                  {desktopDropdown === "gallery" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#FDFBF7] border border-[#A822F5]/20 p-1.5 rounded-xl shadow-lg z-[110]"
                    >
                      {galleryLinks.map((item) => (
                        <Link key={item.name} href={item.href} className="block px-4 py-2.5 text-[12px] font-bold text-neutral-600 hover:text-white hover:bg-[#A822F5] rounded-lg transition-colors">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Upcoming Events Dropdown */}
              {/* <div 
                className="relative py-1.5 cursor-pointer"
                onMouseEnter={() => setDesktopDropdown("events")}
                onMouseLeave={() => {
                  setDesktopDropdown(null);
                  setIsSportsOpen(false);
                }}
              >
                <span className={`flex items-center gap-1 transition-colors duration-200 hover:text-[#A822F5] ${desktopDropdown === "events" ? "text-[#A822F5]" : ""}`}>
                  Upcoming Events <ChevronDown size={12} className="text-[#A822F5] opacity-80" />
                </span>
                <AnimatePresence>
                  {desktopDropdown === "events" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-[#FDFBF7] border border-[#A822F5]/20 p-1.5 rounded-xl shadow-lg z-[110]"
                    >
                      <button 
                        onClick={() => setIsSportsOpen(!isSportsOpen)}
                        className="flex items-center justify-between w-full px-4 py-2 text-[12px] font-bold text-neutral-600 hover:text-[#A822F5] hover:bg-neutral-100 rounded-lg text-left uppercase tracking-wider"
                      >
                        <span>Sports Events</span>
                        <ChevronDown size={12} className={`transition-transform duration-200 ${isSportsOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      {isSportsOpen && (
                        <div className="bg-neutral-50 border border-neutral-200/60 rounded-lg mx-1 flex flex-col overflow-hidden">
                          <Link href="/events/sports/kho-kho" className="px-4 py-2 text-[11px] font-bold text-neutral-500 hover:text-[#A822F5]">Kho Kho</Link>
                          <Link href="/events/sports/rifle-shooting" className="px-4 py-2 text-[11px] font-bold text-neutral-500 hover:text-[#A822F5]">Rifle Shooting</Link>
                        </div>
                      )}

                      <Link href="/events/cultural" className="block px-4 py-2 text-[12px] font-bold text-neutral-600 hover:text-[#A822F5] hover:bg-neutral-100 rounded-lg">
                        Cultural Events
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div> */}

              {/* Upcoming Events Dropdown */}
              <div
                className="relative py-1.5 cursor-pointer group"
                onMouseEnter={() => setDesktopDropdown("events")}
                onMouseLeave={() => {
                  setDesktopDropdown(null);
                  setIsSportsOpen(false); // बाहर निकलते ही सब-मेन्यू भी स्मूथली रीसेट हो जाए
                }}
              >
                <span className={`flex items-center gap-1 transition-colors duration-200 group-hover:text-[#A822F5] ${desktopDropdown === "events" ? "text-[#A822F5]" : "text-neutral-800"}`}>
                  Upcoming Events <ChevronDown size={12} className="text-[#A822F5] opacity-80" />
                </span>
                <AnimatePresence>
                  {desktopDropdown === "events" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#FDFBF7] border border-[#A822F5]/20 p-1.5 rounded-xl shadow-lg z-[110] flex flex-col"
                    >
                      {/* Main Dropdown Item: Sports Events */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsSportsOpen(!isSportsOpen);
                        }}
                        className={`flex items-center justify-between w-full px-4 py-2.5 text-[12px] font-black uppercase tracking-wider rounded-lg text-left transition-all duration-150 ${isSportsOpen
                          ? "bg-[#A822F5] text-white"
                          : "text-neutral-600 hover:text-white hover:bg-[#A822F5]"
                          }`}
                      >
                        <span>Sports Events</span>
                        <ChevronDown size={12} className={`transition-transform duration-200 ${isSportsOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Professional Nested Inner Dropdown */}
                      <AnimatePresence>
                        {isSportsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-neutral-50/80 border border-neutral-200/50 rounded-lg mx-1 my-1 flex flex-col overflow-hidden"
                          >
                            <Link
                              href="/objectives/SportsManagement"
                              className="px-5 py-2 text-[11px] font-bold text-neutral-500 hover:text-[#A822F5] hover:bg-[#A822F5]/10 transition-all duration-150 tracking-wide"
                            >
                              • Kho Kho
                            </Link>
                            <Link
                              href="/events/sports/rifle-shooting"
                              className="px-5 py-2 text-[11px] font-bold text-neutral-500 hover:text-[#A822F5] hover:bg-[#A822F5]/10 transition-all duration-150 tracking-wide"
                            >
                              • Rifle Shooting
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Main Dropdown Item: Cultural Events */}
                      <Link
                        href="/events/cultural"
                        className="block px-4 py-2.5 text-[12px] font-black uppercase tracking-wider text-neutral-600 hover:text-white hover:bg-[#A822F5] rounded-lg transition-all duration-150 mt-0.5"
                      >
                        Cultural Events
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* CTA Unit Component */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:7857126532"
                className="flex items-center gap-2.5 bg-gradient-to-r from-[#2D0B5A] to-[#A822F5] text-white px-4 xl:px-5 py-2.5 xl:py-3 rounded-xl shadow-[0_6px_20_rgba(168,34,245,0.35)] hover:scale-[1.02] transition-all group shrink-0"
              >
                <div className="w-6 h-6 xl:w-7 xl:h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone size={13} className="text-white fill-white/20" />
                </div>
                <div className="flex flex-col text-left leading-tight justify-center">
                  <span className="text-[8px] xl:text-[9px] text-white/70 uppercase tracking-widest font-black mb-0.5">Call Now</span>
                  <span className="text-[11px] xl:text-[13px] font-black tracking-wide whitespace-nowrap">(785) 712-6532</span>
                </div>
              </a>

              {/* Hamburger Trigger visible on Mobile, Tablet, and up to Laptop $1280px */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2.5 text-neutral-700 hover:text-[#A822F5] border border-neutral-200 rounded-xl transition-all"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* FULL SCREEN RESPONSIVE MOBILE/TABLET ACCORDION DRAWER OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 w-full h-screen bg-[#FDFBF7] z-[150] pt-6 px-6 pb-8 flex flex-col items-center justify-start overflow-y-auto"
          >
            {/* Perfectly Positioned Cross Button Area */}
            <div className="w-full flex justify-end items-center mb-6 sticky top-0 bg-[#FDFBF7] py-2 z-10">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 hover:text-[#A822F5] transition-colors"
              >
                <X size={20} className="stroke-[2.5]" />
              </button>
            </div>

            {/* Mobile Menu Nav Links */}
            <div className="w-full max-w-xs flex flex-col items-center gap-1 text-center text-[13px] font-black uppercase tracking-[0.14em] text-neutral-700">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A822F5] hover:bg-[#A822F5]/5 w-full py-3.5 rounded-xl">Home</Link>

              {/* Mobile Team Dropdown */}
              <div className="w-full flex flex-col items-center">
                <button onClick={() => toggleMobileSubmenu("team")} className="flex items-center justify-center gap-1 py-3.5 w-full hover:text-[#A822F5]">
                  <span>Our Team</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 text-[#A822F5] ${activeMobileSubmenu === "team" ? "rotate-180" : ""}`} />
                </button>
                {activeMobileSubmenu === "team" && (
                  <div className="flex flex-col items-center bg-neutral-100 w-11/12 rounded-xl py-1 mt-0.5">
                    {teamLinks.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-neutral-500 py-2.5 w-full text-center normal-case">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A822F5] w-full py-3.5">About Us</Link>
              <Link href="/sponsors" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A822F5] w-full py-3.5">Sponsors</Link>
              <Link href="/volunteers" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A822F5] w-full py-3.5">Volunteers</Link>
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#A822F5] w-full py-3.5">Services</Link>

              <div className="w-12 h-[1.5px] bg-neutral-200 my-3" />

              {/* Mobile Gallery Dropdown */}
              <div className="w-full flex flex-col items-center">
                <button onClick={() => toggleMobileSubmenu("gallery")} className="flex items-center justify-center gap-1 py-3.5 w-full hover:text-[#A822F5]">
                  <span>Gallery</span>
                  <ChevronDown size={14} className={`transition-transform text-[#A822F5] ${activeMobileSubmenu === "gallery" ? "rotate-180" : ""}`} />
                </button>
                {activeMobileSubmenu === "gallery" && (
                  <div className="flex flex-col items-center bg-neutral-100 w-11/12 rounded-xl py-1">
                    {galleryLinks.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-neutral-500 py-2.5 w-full text-center normal-case">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Upcoming Events Dropdown */}
              <div className="w-full flex flex-col items-center">
                <button onClick={() => toggleMobileSubmenu("sports")} className="flex items-center justify-center gap-1 py-3.5 w-full hover:text-[#A822F5]">
                  <span>Upcoming Events</span>
                  <ChevronDown size={14} className={`transition-transform text-[#A822F5] ${activeMobileSubmenu === "sports" ? "rotate-180" : ""}`} />
                </button>
                {activeMobileSubmenu === "sports" && (
                  <div className="flex flex-col items-center bg-neutral-100 w-11/12 rounded-xl p-3 mt-0.5">
                    <span className="text-[10px] font-black text-[#A822F5] mb-1">Sports Events</span>
                    <Link href="/events/sports/kho-kho" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-neutral-400 py-1 w-full text-center normal-case">Kho Kho</Link>
                    <Link href="/events/sports/rifle-shooting" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-neutral-400 py-1 w-full text-center normal-case">Rifle Shooting</Link>
                    <div className="w-1/3 h-[1px] bg-neutral-200 my-2" />
                    <Link href="/events/cultural" onClick={() => setIsMobileMenuOpen(false)} className="text-[11px] font-bold text-neutral-400 py-1 w-full text-center">Cultural Events</Link>
                  </div>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}