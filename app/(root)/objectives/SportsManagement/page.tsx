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
  {
    title: "RULES FOR RUNNERS",
    points: [
      "Runners dodge the chasers by running around the central lane or using poles as a barrier.",
      "Once a runner is tagged, they are out of the game until the inning changes.",
      "Runners can’t step out of bounds or touch the central lane directly.",
      "Runners can use the poles to change direction and dodge the chaser.",
      "Runners are not allowed to cross the central lane or touch it directly.",
    ],
  },
  {
    title: "SCORING & WINNING",
    points: [
      "Each runner tagged by the chasers counts as one point for the chasing team.",
      "Each team scores by tagging as many runners as possible.",
      "After each inning, teams switch roles – chasers become runners and vice versa.",
      "At the end of both innings, the team with the highest score wins.",
      "If the scores are tied, an extra inning or sudden-death round may be played.",
     ]
  },
  {
    title: "KEY SKILLS",
    customContent: (
      <div className="space-y-4">
        <div>
          <span className="text-red-600 font-bold block mb-1">Agility and Reflexes :</span>
          <p className="text-gray-600 text-sm">Both chasers and runners need to make quick decisions and movements.</p>
        </div>
        <div>
          <span className="text-red-600 font-bold block mb-1">Team Coordination :</span>
          <p className="text-gray-600 text-sm">Chasers need good communication for smooth role changes.</p>
        </div>
        <div>
          <span className="text-red-600 font-bold block mb-1">Pole Utilization :</span>
          <p className="text-gray-600 text-sm">Runners can use poles to evade tags; chasers use poles to switch directions.</p>
        </div>
         <div>
          <span className="text-red-600 font-bold block mb-1">Endurance :</span>
          <p className="text-gray-600 text-sm">Kho Kho is fast-paced, so players need to pace their energy for sustained performance.</p>
        </div>
      </div>
    ),
  },
  {
    title: "STRATEGIES",
    customContent: (
      <div className="space-y-4">
        <div>
          <span className="text-red-600 font-bold block mb-1">Positioning and Anticipation :</span>
          <p className="text-gray-600 text-sm">Chasers should position strategically to block runners’ escape routes.</p>
        </div>
        <div>
          <span className="text-red-600 font-bold block mb-1">Efficient Use of "Kho" :</span>
          <p className="text-gray-600 text-sm">Switch roles only when needed to maintain energy and field coverage.</p>
        </div>
        <div>
          <span className="text-red-600 font-bold block mb-1">Deceptive Movements :</span>
          <p className="text-gray-600 text-sm">Runners should use fake moves and pole dodges to mislead chasers.</p>
        </div>
         <div>
          <span className="text-red-600 font-bold block mb-1">Endurance Management :</span>
          <p className="text-gray-600 text-sm">Both teams should pace their energy, with chasers avoiding unnecessary sprints and runners using strategic pauses.</p>
        </div>
      </div>
    ),
  },
];

const stats = ["Quick Reflexes", "Teamwork", "Strategy", "Communication", "Endurance", "Quick Decision-Making"];

export default function SportsManagementPage() {
  return (
    <div className="w-full bg-white font-sans">
     
      <div className="relative w-full h-[60vh] min-h-[500px] rounded-b-[2.5rem] bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center overflow-hidden text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/70 md:bg-black/60 lg:bg-gradient-to-t from-black/95 via-black/50 to-black/80"></div>
        
        <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 w-full mx-auto">
          <Header />
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md shadow-lg mb-6">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs md:text-sm font-bold text-white tracking-widest uppercase">Sports Management</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">Kho Kho</h1>
          
          <nav className="flex items-center gap-2 text-sm font-medium text-white/70 tracking-widest uppercase">
            <Link href="/" className="hover:text-white transition-colors">Home</Link> 
            <ChevronRight className="w-4 h-4 text-white/40" />
            <Link href="/objectives" className="hover:text-white transition-colors">Objectives</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white cursor-default">Sports Management</span>
          </nav>
        </div>
      </div>

    
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 rounded-full border border-gray-100 bg-gray-50 px-4 py-2 w-fit shadow-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs md:text-sm font-bold text-gray-900 tracking-widest uppercase">Play</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">The Game of Chasers</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Kho Kho is a traditional Indian team sport that's fast-paced and fun, combining elements of tag and running. It has evolved from a rural pastime into a respected competitive sport.
          </p>
          
          <div className="pt-4">
            <p className="text-gray-400 mb-6 uppercase text-xs font-bold tracking-[0.2em]">Required Skills</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="text-red-600 bg-red-50 p-1 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-base font-bold text-gray-800">{stat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*Collage Layout */}
        <div className="grid grid-cols-2 gap-4 h-[500px]">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
             <img src="https://gripinternational.in/wp-content/uploads/2019/08/Banner-2-1.jpg" alt="Kho Kho Action" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
               <img src="https://images.tv9hindi.com/wp-content/uploads/2025/01/kho-kho.jpg?w=1280" alt="Teamwork" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white bg-gray-100">
               <img src="https://img-cdn.publive.online/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/01/Rajasthan-attacker-Bhuvneshwar-Sahu-in-Blue-captures-Telugu-Yoddhas-wicket-during-a-Ultimate-Kho-Kho-Season1-match-in-Pune-on-Tuesday-August-16-2022_11zon-1737367282.jpg" alt="Strategy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    

      <section className="bg-gray-50 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
              How to Play <span className="text-red-600 underline decoration-red-200 underline-offset-8">Kho-Kho?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rulesData.map((rule, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <h3 className="text-xl font-extrabold text-gray-900 border-b border-gray-50 pb-6 mb-6 uppercase tracking-tighter">
                  {rule.title}
                </h3>
                {rule.points ? (
                  <ul className="space-y-4 flex-grow">
                    {rule.points.map((p, i) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base text-gray-600 items-start leading-relaxed">
                        <span className="text-red-500 font-bold mt-0.5">•</span> {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-grow">{rule.customContent}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}