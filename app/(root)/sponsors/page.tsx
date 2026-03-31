"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  Mail
} from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/shared/Header";
import SplineScene from "@/components/shared/SplineScene";

const SponsorsPage = () => {
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
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-neutral-950">

        <div className="absolute inset-0 z-0">
          <SplineScene
            scene="https://prod.spline.design/9lvOfw94ipelXTn3/scene.splinecode"
            className="w-full h-full"
          />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
        </div>

        <div className="relative z-20 text-center px-4 mt-20 pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter mb-4 text-white drop-shadow-2xl uppercase"
          >
            Sponsors <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-fuchsia-300 drop-shadow-xl">& Partners</span>
          </motion.h1>
          <nav className="flex items-center justify-center gap-3 text-xs md:text-sm font-bold text-white/80 uppercase tracking-[0.2em] pointer-events-auto drop-shadow-md">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-white/50" />
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
      <section className="py-24 bg-purple-50/30 relative border-y border-purple-100 overflow-hidden group/why">

        <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-950 uppercase tracking-tighter">Why Sponsor Us?</h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Align your brand with impact and reach a wider, more engaged audience.
            </p>
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
