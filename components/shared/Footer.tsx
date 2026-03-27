import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, Globe, MapPin } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.036z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full flex justify-center relative z-50 bg-[#edc4f5]">
     
      <div className="w-full px-6 md:px-12 pt-12 pb-8 md:pt-16 md:pb-8 flex flex-col items-center text-black relative">  
      
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

       
        <div className="flex flex-col items-center text-center z-10 space-y-4 pt-4">
          <Link href="/" className="hover:scale-105 transition-transform">
             <Image
               src="/logo.png"
               alt="Zho Zho Entertainments"
               width={180} 
               height={60}
               className="object-contain h-12 w-auto drop-shadow-2xl"
             />
          </Link>
          <p className="text-black/60 text-base md:text-lg leading-relaxed font-medium max-w-2xl">
            To build a world-class entertainment enterprise enriching lives through the power of storytelling and culture.
          </p>

          <div className="flex flex-col items-center gap-8 pt-6 text-sm font-medium text-black/70 w-full max-w-4xl">
            {/* Contact Details Row */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-start md:items-center gap-x-12 gap-y-5 px-4 w-fit mx-auto">
              <a href="tel:+918019037799" className="flex items-center gap-3 hover:text-purple-600 transition-all group min-w-[240px] md:min-w-0">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Phone size={16} />
                </div>
                <span className="whitespace-nowrap font-semibold">+91 80190 37799</span>
              </a>
              
              <a href="mailto:info@zhozhoentertainments.com" className="flex items-center gap-3 hover:text-purple-600 transition-all group min-w-[240px] md:min-w-0">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Mail size={16} />
                </div>
                <span className="whitespace-nowrap font-semibold">info@zhozhoentertainments.com</span>
              </a>

              <Link href="https://zhozhoentertainments.com" target="_blank" className="flex items-center gap-3 hover:text-purple-600 transition-all group min-w-[240px] md:min-w-0">
                <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors shrink-0">
                  <Globe size={16} />
                </div>
                <span className="whitespace-nowrap font-semibold">zhozhoentertainments.com</span>
              </Link>
            </div>

            {/* Address Section */}
            <div className="flex items-start gap-4 bg-white/40 backdrop-blur-md border border-white/30 px-6 py-5 rounded-[2rem] max-w-2xl w-full transition-all hover:bg-white/60 hover:shadow-xl group/address">
              <div className="shrink-0 w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 group-hover/address:bg-purple-600 group-hover/address:text-white transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <span className="text-purple-600 font-bold uppercase tracking-wider text-xs">Our Location</span>
                <p className="text-sm leading-relaxed font-medium">
                  Flat No: 102, Sai Kiran Apartments, Ameerpet, Hyderabad, TS - 500038.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Adjusted mt-2 to mt-8 and reduced pt-10 to pt-6 to close the gap with the copyright */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-8 mt-8 z-10 gap-8 lg:gap-0">
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs md:text-sm font-semibold tracking-wider text-black/80 uppercase">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">Our Team</Link>
              <Link href="/aboutUs" className="hover:text-purple-400 transition-colors">About Us</Link>
              <Link href="/sponsors" className="hover:text-purple-400 transition-colors">Sponsors</Link>
              <Link href="/volunteers" className="hover:text-purple-400 transition-colors">Volunteers</Link>
              <Link href="/servicess" className="hover:text-purple-400 transition-colors">Services</Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs md:text-sm font-medium text-black/60 mr-1">Follow Us:</span>
            
            <a href="https://www.facebook.com/profile.php?id=61580795231859" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-transparent transition-all group">
              <Facebook className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </a>
            
            <a href="https://x.com/ZhoZhoEnt" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-black hover:border-black transition-all group">
              <XIcon className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
            </a>
            
            <a href="https://www.instagram.com/zhozho_entertainments" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent transition-all group">
              <Instagram className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </a>

            <a href="https://www.youtube.com/@ZhoZhoEntertainments" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-transparent transition-all group">
              <Youtube className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="w-full text-center z-10 mt-6">
          <p className="text-black/30 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Zho Zho Entertainments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;