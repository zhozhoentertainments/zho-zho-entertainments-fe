"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Spline from '@splinetool/react-spline';


import { 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Users, 
  Zap, 
  Crown, 
  Gift, 
  Phone,
  ChevronRight,
  Mic2,
  Monitor,
  Droplets,
  Mail,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/shared/Header";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.036z" />
  </svg>
);

const SponsorsPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const orbitScale = useTransform(scrollYProgress, [0.1, 0.35, 0.65, 0.9], [0, 1, 1, 0]);
  const iconOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0, 1, 1, 0]);

  const whySponsor = [
    {
      icon: <ShieldCheck className="text-purple-600" />,
      title: "Cause-Driven Visibility",
      desc: "Align your brand with a powerful social impact movement focused on mental health and community wellness."
    },
    {
      icon: <Globe className="text-fuchsia-600" />,
      title: "PAN-India Growth Vision",
      desc: "Be part of a bold journey to scale across cities and create large-format experiences."
    },
    {
      icon: <Users className="text-purple-600" />,
      title: "Engaged & Diverse Audience",
      desc: "Connect with health-conscious individuals, youth, corporates, families, and changemakers across India."
    },
    {
      icon: <Zap className="text-fuchsia-600" />,
      title: "High-Value Brand Exposure",
      desc: "Logo placements, stage mentions, digital branding, media coverage, influencer tie-ins, and more."
    }
  ];

  const opportunities = [
    {
      icon: <Crown className="text-yellow-500" />,
      title: "Title Sponsor",
      desc: "Get maximum brand presence across all platforms, event collaterals, T-shirts, medals, press releases, and ceremonies."
    },
    {
      icon: <Gift className="text-purple-500" />,
      title: "Merchandise Partner",
      desc: "Sponsor event kits, T-shirts, medals, or giveaways that go directly to participants and volunteers."
    },
    {
      icon: <Mic2 className="text-fuchsia-500" />,
      title: "Sports & Cultural Sessions",
      desc: "Support pre-event talk sessions, cultural zones, or expert speaker panels aligned with your brand values."
    },
    {
      icon: <Monitor className="text-blue-500" />,
      title: "Digital & Promotion Partner",
      desc: "Join us in spreading awareness through co-branded digital campaigns and influencer outreach."
    },
    {
      icon: <Droplets className="text-cyan-500" />,
      title: "Hydration & Nutrition Partner",
      desc: "Feature your brand across hydration points, nutrition zones, or post-run refreshment counters."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans overflow-x-hidden">
      {/* Header Wrapper */}
      <div className="fixed top-0 left-0 right-0 z-[110] w-full">
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600&auto=format&fit=crop"
            alt="Sponsors Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-purple-100/60 via-white/20 to-black/80 backdrop-blur-md z-10" />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full z-0" />
        
        <div className="relative z-20 text-center px-4 mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-neutral-950 uppercase"
          >
            Sponsors <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">& Partners</span>
          </motion.h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/70 uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/30" />
            <span className="text-white">Sponsors</span>
          </nav>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              Collaboration
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-950">
              Passionate People & <br />
              <span className="text-purple-600">Visionary Brands</span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              At Zho Zho Entertainments, we believe that real impact is made when passionate people and visionary brands come together. 
              Our sponsors and partners are not just supporters — they are <span className="text-purple-600 font-bold">changemakers</span> who share our commitment to wellness, community, and meaningful engagement.
            </p>
            <p className="text-lg text-neutral-500">
              Whether it’s a city run for mental health, a wellness retreat, or an awareness campaign, your sponsorship helps us reach more people, create deeper experiences, and build a healthier, more connected world.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-200 to-fuchsia-200 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-neutral-200 shadow-xl bg-purple-50">
              <Image
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&w=1200&auto=format&fit=crop"
                alt="Partnership"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Us Section */}
      <section className="py-24 bg-[#FCEBFC] relative border-y border-purple-100">
        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-950 uppercase tracking-tighter">Why <span className="text-purple-600">Sponsor</span> Us?</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Align your brand with impact and reach a wider, more engaged audience.
            </p>
          </div>
          <div 
            ref={containerRef}
            className="relative mx-auto w-[300px] h-[300px] md:w-[450px] md:h-[450px] mb-24 flex items-center justify-center"
          >

            {/* Orbiting ring and spokes */}
            <motion.div 
              style={{ scale: orbitScale, opacity: iconOpacity }}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-purple-200/50 z-0 pointer-events-none"
            >
              {[
                { icon: <Facebook className="w-8 h-8 md:w-10 md:h-10 text-[#1877F2] group-hover:text-white transition-colors" />, href: "https://www.facebook.com/profile.php?id=61580795231859", hover: "hover:bg-[#1877F2] hover:border-[#1877F2]" },
                { icon: <XIcon className="w-7 h-7 md:w-9 md:h-9 text-black group-hover:text-white transition-colors" />, href: "https://x.com/ZhoZhoEnt", hover: "hover:bg-black hover:border-black" },
                { icon: <Instagram className="w-8 h-8 md:w-10 md:h-10 text-[#d62976] group-hover:text-white transition-colors" />, href: "https://www.instagram.com/zhozho_entertainments", hover: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-500 hover:border-transparent" },
                { icon: <Youtube className="w-8 h-8 md:w-10 md:h-10 text-[#FF0000] group-hover:text-white transition-colors" />, href: "https://www.youtube.com/@ZhoZhoEntertainments", hover: "hover:bg-[#FF0000] hover:border-[#FF0000]" },
                { icon: <Mail className="w-8 h-8 md:w-10 md:h-10 text-neutral-600 group-hover:text-white transition-colors" />, href: "mailto:info@zhozhoentertainments.com", hover: "hover:bg-neutral-600 hover:border-neutral-600" }
              ].map((link, i, arr) => {
                const angle = (i * 360) / arr.length;
                return (
                  <div 
                    key={i} 
                    className="absolute w-full h-full top-0 left-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    {/* Spoke connecting icon to globe */}
                    <div className="absolute top-[40px] md:top-[50px] h-10 md:h-14 left-1/2 -ml-[0.5px] w-[1px] bg-gradient-to-b from-purple-300 via-purple-200 to-transparent" />

                    <div className="absolute top-0 left-1/2 -mt-8 -ml-8 md:-mt-10 md:-ml-10 w-16 h-16 md:w-20 md:h-20">
                      <motion.div
                        initial={{ rotate: -angle }}
                        animate={{ rotate: -(360 + angle) }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="w-full h-full text-neutral-700 pointer-events-auto"
                      >
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noreferrer" 
                          className={`w-full h-full rounded-full bg-white shadow-xl border-2 border-purple-100 flex items-center justify-center transition-colors duration-300 ${link.hover} group`}
                        >
                          {link.icon}
                        </a>
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Globe container - Front layer, locked pointer events */}
            <div className="absolute z-10 w-[80%] h-[80%] md:w-[60%] md:h-[60%] pointer-events-none flex items-center justify-center rounded-full overflow-hidden">
               <Spline scene="https://prod.spline.design/oVueZoeGO7AO2mhX/scene.splinecode" />
            </div>

          </div>

          <div className="text-center mb-20 px-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-black text-neutral-950 uppercase tracking-tight leading-tight"
            >
              Get visibility across the globe <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">on all the platforms</span>
            </motion.h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySponsor.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white border border-purple-100 hover:border-purple-400 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 blur-2xl group-hover:bg-purple-100 transition-all" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 leading-tight">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 uppercase tracking-tighter">Sponsorship <span className="text-purple-600">Opportunities</span></h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            We offer tailored packages to suit brands of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-[2rem] bg-white border border-neutral-100 hover:bg-neutral-50 transition-all duration-300 shadow-sm hover:shadow-md border-b-4 border-b-purple-500/20 hover:border-b-purple-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 text-neutral-900">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact & Partnership Inquiry */}
      <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">
            Interested in Partnering <br /> <span className="text-purple-400">With Us?</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12">
            We’re excited to collaborate with brands that care about purpose, people, and progress. 
            To receive our sponsorship deck or discuss partnership opportunities, please contact us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-purple-400">
                <Mail size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Email Us</p>
                <a href="mailto:info@zhozhoentertainments.com" className="text-xl font-bold hover:text-purple-400 transition-colors">info@zhozhoentertainments.com</a>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-fuchsia-400">
                <Phone size={32} />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">Call Us</p>
                <a href="tel:+918019037799" className="text-xl font-bold hover:text-fuchsia-400 transition-colors">+ 91 80190 37799</a>
              </div>
            </div>
          </div>
  
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;
