"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";

const rulesData = [
  {
    title: "GAME SETUP",
    points: [
      "Kho Kho is played by two teams, each with 12 players, but only 9 players from each team take the field.",
      "The game takes place on a rectangular field, typically around 29 by 16 meters.",
      "A central lane divides the field lengthwise, and 8 wooden poles are placed at equal distances along the lane.",
      "The field has two zones, each called an 'end,' with players facing alternating directions.",
    ],
  },
  {
    title: "ROLES & OBJECTIVE",
    customContent: (
      <div className="space-y-4">
        <div>
          <span className="text-red-600 font-bold block mb-1">Chasers:</span>
          <p className="text-gray-600 text-sm">These players are responsible for tagging the opponents.</p>
        </div>
        <div>
          <span className="text-red-600 font-bold block mb-1">Runners:</span>
          <p className="text-gray-600 text-sm">These players avoid getting tagged by dodging or using the poles.</p>
        </div>
        <ul className="space-y-2 mt-4">
          <li className="flex gap-2 text-sm text-gray-600 items-start">
            <span className="mt-1">▶</span> The main goal is to tag as many players on the opposing team as possible within a set time.
          </li>
          <li className="flex gap-2 text-sm text-gray-600 items-start">
            <span className="mt-1">▶</span> The team that tags the most players wins the round.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "GAMEPLAY FLOW",
    points: [
      "The game begins with the chasers kneeling along the central lane, facing alternate directions.",
      "The active chaser starts chasing runners from the opposing team.",
      "The chaser can tag the runners by touching them with their hand.",
      "To change direction or pass the chase to a teammate, the chaser taps a pole or a teammate, says 'Kho,' and allows the next chaser to take over.",
    ],
  },
  {
    title: "RULES FOR CHASERS",
    points: [
      "Only one player (the active chaser) is allowed to chase at a time.",
      "The active chaser can run in either direction along the central lane but cannot cross it or turn back.",
      "A chaser can only tag a runner by hand, calling out 'Kho' when passing the tag to the next chaser.",
      "The chaser must say 'Kho' clearly and audibly to signal the change.",
    ],
  },
];

const stats = ["Quick Reflexes", "Teamwork", "Strategy", "Communication", "Endurance", "Quick Decision-Making"];

export default function SportsManagementPage() {
  return (
    <div className="w-full min-h-[100dvh] bg-white font-sans flex flex-col pb-32">
      {/* Hero Section */}
      <div className="relative w-full h-[55vh] min-h-[400px] md:h-[500px] rounded-b-[2.5rem] bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center overflow-hidden text-white shadow-2xl z-10">
        <div className="absolute inset-0 bg-black/70 md:bg-black/60 lg:bg-gradient-to-t from-black/95 via-black/50 to-black/80 z-0"></div>
        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 w-full max-w-[1280px] mx-auto">
          <Header />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 mt-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md w-fit shadow-lg mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">Sports Management</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">How to Play Kho Kho</h1>
          <div className="mt-8 text-sm font-medium text-white/70 tracking-widest uppercase flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <ChevronRight className="w-4 h-4 text-white/40" />
            <Link href="/objectives" className="hover:text-white transition-colors">Objectives</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white cursor-default">Sports Management</span>
          </div>
        </div>
      </div>

      {/* Intro Section with Staggered Images - Added mt-20 for space after header */}
      <section className="md:px-12 py-24 mb-24 lg:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="bg-red-600 text-white px-3 py-1 text-xs font-bold uppercase mb-4 inline-block">Play</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Game of Chasers</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            Kho Kho is a traditional Indian team sport that's fast-paced and fun, combining elements of tag and running. It has evolved from a rural pastime into a respected competitive sport, celebrated for its heritage and dynamic gameplay.
          </p>
          <p className="text-gray-500 mb-6 uppercase text-sm font-bold tracking-widest">It requires</p>
          <div className="grid grid-cols-2 gap-y-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="text-yellow-500"><Check className="w-6 h-6 stroke-[3px]" /></div>
                <span className="text-lg font-bold text-gray-800">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Collage Grid */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="h-full rounded-[2rem] overflow-hidden shadow-xl">
             <img src="https://plus.unsplash.com/premium_photo-1664303228186-a61e7dc91597?q=80&w=800" alt="Kho Kho Action" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4 h-full">
            <div className="rounded-[2rem] overflow-hidden shadow-xl">
               <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800" alt="Teamwork" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-xl bg-gray-200">
               <img src="https://images.unsplash.com/photo-1526676037777-05a232554f77?q=80&w=800" alt="Strategy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Rule Cards Grid - Added mb-20 for space before footer */}
      <section className="bg-gray-100 py-24 mb-20">
        <div className="mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
            How to Play <span className="text-red-600">Kho-Kho?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rulesData.map((rule, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border-b-4 border-yellow-500 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 border-b pb-4 mb-6 text-center uppercase tracking-wider">
                  {rule.title}
                </h3>
                {rule.points ? (
                  <ul className="space-y-4">
                    {rule.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-600 items-start">
                        <span className="mt-1 text-xs">▶</span> {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  rule.customContent
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}