import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.036z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-12 pb-10 pt-4 flex justify-center bg-transparent relative z-50">
      <div className="w-full max-w-[1600px] bg-[#0a0a0a] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center shadow-2xl ring-1 ring-white/10 text-white relative overflow-hidden">
        
        {/* Subtle grid pattern background simulation */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

        {/* Center Logo & Description */}
        <div className="flex flex-col items-center text-center max-w-2xl z-10 space-y-8 pt-6 pb-16">
          <Link href="/" className="hover:scale-105 transition-transform">
             <Image
               src="/logo.png"
               alt="Zho Zho Entertainments"
               width={200}
               height={70}
               className="object-contain h-14 w-auto brightness-0 invert drop-shadow-2xl"
             />
          </Link>
          <p className="text-white/60 text-lg leading-relaxed font-medium">
            To build a world-class entertainment enterprise enriching lives through the power of storytelling and culture.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-10 mt-2 z-10 gap-8 lg:gap-0">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm md:text-base font-semibold tracking-wider text-white/80 uppercase">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link href="/mission" className="hover:text-red-500 transition-colors">Mission</Link>
            <Link href="/vision" className="hover:text-red-500 transition-colors">Vision</Link>
            <Link href="/purpose" className="hover:text-red-500 transition-colors">Purpose</Link>
            <Link href="/objectives" className="hover:text-red-500 transition-colors">Objectives</Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-sm md:text-base font-medium text-white/80 mr-3">Follow Us On Socials:</span>
            
            <a href="https://www.facebook.com/profile.php?id=61580795231859" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent transition-all group">
              <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
            
            <a href="https://x.com/ZhoZhoEnt" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:border-black transition-all group">
              <XIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
            </a>
            
            <a href="https://www.instagram.com/zhozho_entertainments" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all group">
              <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>

            <a href="https://www.youtube.com/@ZhoZhoEntertainments" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-transparent transition-all group">
              <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="w-full text-center mt-12 z-10">
          <p className="text-white/40 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Zho Zho Entertainments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;