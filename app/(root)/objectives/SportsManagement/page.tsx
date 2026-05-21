"use client";

import Header from "@/components/shared/Header";
import Link from "next/link";
import React from "react";
import { ChevronRight, Check, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
          <span className="text-purple-600 font-extrabold block mb-1">Chasers:</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">These players are responsible for tagging the opponents.</p>
        </div>
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Runners:</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">These players avoid getting tagged by dodging or using the poles.</p>
        </div>
        <ul className="space-y-2 mt-4">
          <li className="flex gap-2 text-sm md:text-base text-neutral-600 items-start font-medium">
            <span className="text-purple-500 mt-1">▶</span> The main goal is to tag as many players on the opposing team as possible within a set time.
          </li>
          <li className="flex gap-2 text-sm md:text-base text-neutral-600 items-start font-medium">
            <span className="text-purple-500 mt-1">▶</span> The team that tags the most players wins the round.
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
          <span className="text-purple-600 font-extrabold block mb-1">Agility and Reflexes :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Both chasers and runners need to make quick decisions and movements.</p>
        </div>
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Team Coordination :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Chasers need good communication for smooth role changes.</p>
        </div>
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Pole Utilization :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Runners can use poles to evade tags; chasers use poles to switch directions.</p>
        </div>
         <div>
          <span className="text-purple-600 font-extrabold block mb-1">Endurance :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Kho Kho is fast-paced, so players need to pace their energy for sustained performance.</p>
        </div>
      </div>
    ),
  },
  {
    title: "STRATEGIES",
    customContent: (
      <div className="space-y-4">
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Positioning and Anticipation :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Chasers should position strategically to block runners’ escape routes.</p>
        </div>
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Efficient Use of "Kho" :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Switch roles only when needed to maintain energy and field coverage.</p>
        </div>
        <div>
          <span className="text-purple-600 font-extrabold block mb-1">Deceptive Movements :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Runners should use fake moves and pole dodges to mislead chasers.</p>
        </div>
         <div>
          <span className="text-purple-600 font-extrabold block mb-1">Endurance Management :</span>
          <p className="text-neutral-600 text-sm md:text-base font-medium">Both teams should pace their energy, with chasers avoiding unnecessary sprints and runners using strategic pauses.</p>
        </div>
      </div>
    ),
  },
];

const stats = ["Quick Reflexes", "Teamwork", "Strategy", "Communication", "Endurance", "Quick Decision-Making"];

export default function SportsManagementPage() {
  return (
    <div className="w-full bg-[#FCEBFC] font-sans">
     
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[500px] rounded-b-[3.5rem] bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center overflow-hidden text-white shadow-2xl">
        <div className="absolute inset-0 bg-neutral-900/60 md:bg-neutral-900/40 lg:bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        {/* <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 w-full mx-auto">
          <Header />
        </div> */}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md shadow-lg mb-8"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></div>
            <span className="text-xs md:text-sm font-bold text-white tracking-[0.3em] uppercase">Sports Management</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 uppercase"
          >
            Kho Kho
          </motion.h1>
          
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-xs md:text-sm font-bold text-white/70 tracking-[0.2em] uppercase"
          >
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link> 
            <ChevronRight className="w-4 h-4 text-white/40" />
            <Link href="/objectives" className="hover:text-purple-400 transition-colors">Objectives</Link>
            <ChevronRight className="w-4 h-4 text-white/40" />
            <span className="text-white cursor-default">Sports Management</span>
          </motion.nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-40 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-10"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 rounded-full border border-purple-200 bg-purple-100/50 px-5 py-2 w-fit">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></div>
              <span className="text-xs md:text-sm font-bold text-purple-900 tracking-widest uppercase italic">Discover the Tradition</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-neutral-900 leading-[0.9] tracking-tighter uppercase">The Game of <br/><span className="text-purple-600">Run</span> &  <span className="text-purple-600">Chase</span></h2>
          </div>

          <p className="text-neutral-600 leading-relaxed text-xl font-medium max-w-xl">
            Kho Kho is a traditional Indian team sport that's fast-paced and fun, combining elements of tag and running. It has evolved from a rural pastime into a respected competitive sport.
          </p>
          
          <div className="pt-8 space-y-8">
            <p className="text-neutral-400 uppercase text-xs font-bold tracking-[0.3em]">Required Skills Path</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group cursor-default"
                >
                  <div className="text-purple-600 bg-purple-100 p-2 rounded-xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-lg font-bold text-neutral-800 tracking-tight group-hover:text-purple-600 transition-colors uppercase">{stat}</span>
                </motion.div>
              ))}
            </div>
          </div>

        
        </motion.div>

        {/* Collage Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6 h-[600px] items-center"
        >
          <div className="rounded-[3rem] overflow-hidden shadow-2xl border-2 border-white/50 h-[90%] mt-auto hover:scale-[1.02] transition-transform duration-700">
             <img src="https://gripinternational.in/wp-content/uploads/2019/08/Banner-2-1.jpg" alt="Kho Kho Action" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-rows-2 gap-6 h-full">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/50 hover:scale-[1.02] transition-transform duration-700">
               <img src="https://images.tv9hindi.com/wp-content/uploads/2025/01/kho-kho.jpg?w=1280" alt="Teamwork" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-white/50 bg-gray-100 hover:scale-[1.02] transition-transform duration-700">
               <img src="https://img-cdn.publive.online/filters:format(webp)/english-betterindia/media/post_attachments/uploads/2025/01/Rajasthan-attacker-Bhuvneshwar-Sahu-in-Blue-captures-Telugu-Yoddhas-wicket-during-a-Ultimate-Kho-Kho-Season1-match-in-Pune-on-Tuesday-August-16-2022_11zon-1737367282.jpg" alt="Strategy" className="w-full h-full object-cover" />
            </div>
          </div>
        </motion.div>
      </section>
    
      {/* Rules Section */}
      <section className="bg-white/40 backdrop-blur-xl border-t border-white/20 py-24 md:py-48 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FCEBFC] to-transparent"></div>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-24 md:mb-32">
            <h2 className="text-5xl md:text-8xl font-black text-neutral-900 tracking-tighter uppercase leading-[0.9]">
              How to Play <br/><span className="text-purple-600 underline decoration-purple-100 decoration-8 underline-offset-[16px]">Kho-Kho?</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {rulesData.map((rule, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 p-10 md:p-12 rounded-[3.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group flex flex-col"
              >
                <h3 className="text-2xl font-black text-neutral-900 border-b border-purple-50 pb-8 mb-8 uppercase tracking-tighter group-hover:text-purple-600 transition-colors">
                  {rule.title}
                </h3>
                {rule.points ? (
                  <ul className="space-y-5 flex-grow">
                    {rule.points.map((p, i) => (
                      <li key={i} className="flex gap-4 text-sm md:text-base text-neutral-600 items-start leading-relaxed font-medium">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex-grow text-neutral-700">{rule.customContent}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}