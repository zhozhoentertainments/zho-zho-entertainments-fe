import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
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
    <footer className="w-full flex justify-center relative z-50 bg-[#F1DCF5]">
     
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

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-4 text-sm font-medium text-black/70 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">Phone:</span>
              <a href="tel:+918019037799" className="hover:text-purple-600 transition-colors">+ 91 80190 37799</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">Email:</span>
              <a href="mailto:info@zhozhoentertainments.com" className="hover:text-purple-600 transition-colors">info@zhozhoentertainments.com</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-600 font-bold">Website:</span>
              <Link href="https://zhozhoentertainments.com" target="_blank" className="hover:text-purple-600 transition-colors">zhozhoentertainments.com</Link>
            </div>
          </div>
          <div className="max-w-md text-center pt-2 text-sm font-medium text-black/70">
            <span className="text-purple-600 font-bold">Address:</span>
            <span className="ml-2">Flat No: 102, Sai Kiran Apartments, Ameerpet, Hyderabad, TS - 500038.</span>
          </div>
        </div>

        {/* Adjusted mt-2 to mt-8 and reduced pt-10 to pt-6 to close the gap with the copyright */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between border-t border-white/10 pt-8 mt-8 z-10 gap-8 lg:gap-0">
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs md:text-sm font-semibold tracking-wider text-black/80 uppercase">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">Our Team</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">About Us</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">Sponsors</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">Volunteers</Link>
              <Link href="/" className="hover:text-purple-400 transition-colors">Services</Link>
              {/* <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white hover:text-red-400 transition-colors border-none p-0 h-auto focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent">
                      <span className="font-semibold">Gallery</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bottom-full top-auto mb-4 min-w-[180px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-1.5 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex flex-col gap-1">
                        <NavigationMenuLink asChild>
                          <Link href="/gallery/images" className="group/item flex items-center justify-between px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Image Gallery</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/gallery/videos" className="group/item flex items-center justify-between px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
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
                    <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white hover:text-red-400 transition-colors border-none p-0 h-auto focus:bg-transparent data-popup-open:bg-transparent data-open:bg-transparent">
                      <span className="font-semibold">Upcoming Events</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bottom-full top-auto mb-4 min-w-[200px] bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-1.5 animate-in fade-in zoom-in-95 duration-200">
                      <div className="flex flex-col gap-1">
                        <NavigationMenuLink asChild>
                          <Link href="/events/sports" className="group/item flex items-center justify-between px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Sports Event</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link href="/events/cultural" className="group/item flex items-center justify-between px-4 py-2.5 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200">
                            <span>Cultural Events</span>
                            <div className="size-1.5 rounded-full bg-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
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