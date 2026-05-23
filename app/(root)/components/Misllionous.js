import React from 'react';
import Image from 'next/image';

// Stats Data from your Event Snapshot
const stats = [
  { id: 1, label: 'TEAMS', value: '16', desc: '8 Men\'s & 8 Women\'s' },
  { id: 2, label: 'ATHLETES', value: '288', desc: 'India\'s Finest Players' },
  { id: 3, label: 'PRIZE POOL', value: '₹30.5 L', desc: 'Rewarding Excellence' },
  { id: 4, label: 'FOOTFALL', value: '80,000+', desc: 'Live at the Venue' },
];

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-[#1A0033] text-white flex flex-col justify-between pt-20 overflow-hidden relative">
      
      {/* Background Decorative Elements (Subtle Glows) */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#7B2CBF] opacity-20 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#9D4EDD] opacity-15 blur-[150px] pointer-events-none"></div>

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-12">
        
        {/* Left Side: Aggressive & Sporty Text */}
        <div className="lg:col-span-6 space-y-6 z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#7B2CBF]/30 border border-[#9D4EDD]/40 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-[#E0AAFF] uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            India's Next Sporting Movement
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black italic tracking-tight uppercase leading-none">
            Elite <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r screen bg-gradient-to-r from-[#9D4EDD] via-[#C77DFF] to-white">
              Kho Kho
            </span> <br />
            Championship <span className="text-[#9D4EDD]">1.0</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            India's fastest growing sport. Built for the next generation. <br />
            <span className="text-[#C77DFF] font-semibold">Sport of our soil - Telangana's pride.</span>
          </p>

          {/* Venue & Date Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-semibold pt-2">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2">
              📅 JULY 2026
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-2">
              📍 Yousufguda Indoor Stadium, Hyderabad
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] hover:from-[#9D4EDD] hover:to-[#7B2CBF] font-bold text-sm uppercase tracking-wider rounded-xl shadow-[0_4px_20px_rgba(123,44,191,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
              Explore Now
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300">
              Watch Live Broadcast
            </button>
          </div>
        </div>

        {/* Right Side: Dynamic Image/Slider Container */}
        <div className="lg:col-span-6 relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden border-2 border-[#7B2CBF]/30 shadow-[0_0_50px_rgba(123,44,191,0.2)] group">
          {/* यहाँ आपकी शानदार डाइव लगाने वाली इमेज आएगी */}
          <Image
            src="/images/kho-kho-action.jpg" // इमेज 2 या 3 का पाथ यहाँ डालें
            alt="Elite Kho Kho Action"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
            priority
          />
          {/* Overlays to match the brand depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0033] via-transparent to-transparent opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A0033]/40 via-transparent to-transparent hidden lg:block"></div>
        </div>

      </div>

      {/* EVENT SNAPSHOT STRIP (Bottom of Hero) */}
      <div className="w-full bg-[#120024] border-t border-[#7B2CBF]/20 py-8 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 sm:divide-x lg:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col justify-center px-2">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                  {stat.value}
                </span>
                <span className="text-xs font-bold tracking-widest text-[#C77DFF] uppercase mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5 hidden sm:block">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}