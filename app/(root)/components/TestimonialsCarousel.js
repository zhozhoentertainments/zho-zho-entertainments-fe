// components/TestimonialsCarousel.js
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Former National Athlete",
    comment: "Zhozho Entertainment has completely revolutionized how traditional Indian sports are presented. Seeing Kho Kho on a global arena with a world-class prize pool is a dream come true.",
    rating: 5
  },
  {
    id: 2,
    name: "Ananya Reddy",
    role: "Sports Journalist & Analyst",
    comment: "The presentation and high-octane production scale of the Elite Kho Kho Championship match the commercial standards of global cricket leagues. Over 64M+ digital streams prove its massive impact.",
    rating: 5
  },
  {
    id: 3,
    name: "Vikram Rathore",
    role: "Managing Director, KVBR Arena",
    comment: "Hosting the 1st Edition at Yousufguda Indoor Stadium was seamless. The crowd engagement, structural layout management, and overall coordination by the Zhozho crew were absolutely elite.",
    rating: 5
  },
  {
    id: 4,
    name: "Srinivas Rao",
    role: "State Coach, Telangana",
    comment: "An exceptional corporate leap forward for our grassroots sport. The ₹30.5 Lakh prize pool is not just a reward; it is fueling the bright future and professional security for hundreds of athletes.",
    rating: 5
  },
  {
    id: 5,
    name: "Meera Deshmukh",
    role: "Gen-Z Digital Content Creator",
    comment: "As a digital-first creator, the speed, energy, and relentless tactical pace of Kho Kho matches kept my audience pinned down. Absolutely phenomenal organization and visual branding!",
    rating: 5
  },
  {
    id: 6,
    name: "Amit Sharma",
    role: "Lead Sponsor Consultant",
    comment: "The massive footfall of 80,000+ live spectators combined with OTT broadcasting provides unparalleled premium visibility for corporate partners. This tournament is India's next big sporting movement.",
    rating: 5
  },
  {
    id: 7,
    name: "Preeti Naidu",
    role: "Tech Stack Architect",
    comment: "Attended the grand finale live in Hyderabad. The mix of traditional soil spirit with futuristic stadium lighting and entertainment systems created an unforgettable fan experience.",
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-sliding loop every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(testimonialsData[(startIndex + i) % testimonialsData.length]);
    }
    return cards;
  };

  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* SIMPLE CLEAN HEADER */}
        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
            Testimonials for the Kho Kho globally
          </h2>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative w-full px-0 md:px-12">
          
          {/* DESKTOP ONLY LEFT BUTTON */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-950 hover:border-slate-400 shadow-md transition-all active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Previous items"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* DYNAMIC CARD GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {getVisibleCards().map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className={`bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-slate-300 hover:shadow-md ${
                  index === 2 ? 'hidden lg:flex' : index === 1 ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div className="space-y-4">
                  {/* Rating Section */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    ))}
                  </div>

                  {/* Clean Text Description */}
                  <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Profile Block */}
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-700 text-xs border border-slate-200">
                    {item.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 tracking-wide uppercase">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP ONLY RIGHT BUTTON */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-950 hover:border-slate-400 shadow-md transition-all active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Next items"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* UNIFIED INTERACTION CONTROL SYSTEM (PERFECTLY CENTER-ALIGNED ON MOBILE) */}
        <div className="flex items-center justify-center gap-4 pt-4 w-full max-w-sm mx-auto">
          
          {/* Mobile Navigation Left Button */}
          <button
            onClick={handlePrev}
            className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-950 shadow-sm md:hidden flex items-center justify-center active:scale-95 transition-all"
            aria-label="Previous item mobile"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Central Indication Loops */}
          <div className="flex items-center gap-1.5 py-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === startIndex ? 'w-5 bg-slate-800' : 'w-1.5 bg-slate-300'
                }`}
                aria-label={`Go to slice index ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile Navigation Right Button */}
          <button
            onClick={handleNext}
            className="p-2 bg-white border border-slate-200 rounded-xl text-slate-500 hover:text-slate-950 shadow-sm md:hidden flex items-center justify-center active:scale-95 transition-all"
            aria-label="Next item mobile"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}