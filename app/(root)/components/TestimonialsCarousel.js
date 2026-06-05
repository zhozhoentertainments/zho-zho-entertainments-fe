import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonialsData = [
 {
    id: 1,
    name: "Sudhanshu Mittal",
    role: "President, Kho Kho Federation of India (KKFI)",
    comment: "Kho Kho is an indigenous sport that has risen from the mud to the mat. The ultimate goal is to take this traditional Indian game to the Asian Games and eventually the Olympics. The global interest we are seeing now is unprecedented.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarika Kale",
    role: "Arjuna Awardee & Former Indian Women's Kho Kho Captain",
    comment: "The introduction of professional leagues and financial backing has completely changed the lives of players. Earlier, families hesitated to send girls into sports, but now they see a secure future and immense pride in Kho Kho.",
    rating: 5
  },
  {
    id: 3,
    name: "Tenzing Niyogi",
    role: "CEO & League Commissioner, Ultimate Kho Kho",
    comment: "We always knew Kho Kho had massive potential because of its relentless speed and agility. By packaging it with high-octane broadcast tech, shorter formats, and dynamic presentation, we have captured both rural and urban youth audiences.",
    rating: 5
  },
  {
    id: 4,
    name: "Ramji Kashyap",
    role: "Star Indian Kho Kho Player (Ultimate Kho Kho Player of the Tournament)",
    comment: "Playing on mats under stadium lights with millions watching on TV felt like a dream. This sport has given players like me an identity, financial stability, and the chance to show our speed and skills to the entire nation.",
    rating: 5
  },
  {
    id: 5,
    name: "Sumit Bhatia",
    role: "Sports Analyst & Commentator",
    comment: "The sheer athleticism required in Kho Kho—sudden drops, dives, and explosive sprints—makes it one of the most camera-friendly sports. The digital viewership numbers prove that India is ready to consume non-cricket sports passionately.",
    rating: 5
  },
  {
    id: 6,
    name: "Karan Mendon",
    role: "Professional Kho Kho Athlete",
    comment: "From being considered a schoolyard game to seeing corporate brands invest in us, the transformation is incredible. The level of fitness and scientific training we undergo now matches international sports standards.",
    rating: 5
  }
];

export default function TestimonialsCarousel() {
  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* SIMPLE CLEAN HEADER */}
        <div className="text-center md:text-left max-w-4xl space-y-3">
  {/* Subtle Top Indicator Badge */}
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/70 border border-purple-200/50 text-[10px] font-black uppercase tracking-widest text-[#7c3aed]">
    Global Endorsements
  </div>
  
  {/* Main Heading Container */}
  <div className="relative inline-block pb-4">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase leading-none">
      Testimonials for <span className="text-[#7c3aed]">Kho Kho globally</span>
    </h2>
    
    {/* Premium Half Underline Dynamic Curve Layer */}
    <div className="absolute -bottom-1 left-0 md:left-0 mx-auto md:mx-0 w-full h-3 max-w-[280px] sm:max-w-[340px] md:max-w-[420px]">
      <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Shadow Track Line */}
        <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
        {/* Active Animated Curve Line */}
        <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="2.5" strokeLinecap="round" className="animate-curve-bar" />
      </svg>
    </div>
  </div>
</div>

        {/* CAROUSEL WRAPPER WITH LEFT/RIGHT CENTER BUTTONS */}
        <div className="relative w-full px-0 md:px-14 group">
          
          {/* DESKTOP ONLY LEFT BUTTON - Aligned via precise CSS parameters */}
          <button
            className="testimonial-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center disabled:opacity-30"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* SWIPER CONTAINER ELEMENT */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            loopedSlides={3}
            loopAdditionalSlides={3}
            watchSlidesProgress={true}
            grabCursor={true}
            spaceBetween={24}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            navigation={{
              prevEl: '.testimonial-swiper-prev',
              nextEl: '.testimonial-swiper-next',
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-swiper-pagination'
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full h-auto !pb-4"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-64 group transition-all duration-300 hover:border-slate-300 hover:shadow-md select-none">
                  
                  <div className="space-y-4">
                    {/* Rating Stars Row */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      ))}
                    </div>

                    {/* Testimonial Statement */}
                    <p className="text-sm font-medium text-slate-600 leading-relaxed italic line-clamp-4 group-hover:text-slate-950 transition-colors duration-300">
                      &ldquo;{item.comment}&rdquo;
                    </p>
                  </div>

                  {/* Profile Identification Card */}
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-100 flex-shrink-0">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* DESKTOP ONLY RIGHT BUTTON - Aligned via precise CSS parameters */}
          <button
            className="testimonial-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center disabled:opacity-30"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* UNIFIED NAVIGATION DESK (PERFECTLY CENTER-ALIGNED ON MOBILE) */}
        <div className="flex flex-col items-center justify-center gap-4 pt-2">
          
          {/* Custom Dots Pagination Render Element */}
          <div className="testimonial-swiper-pagination flex items-center justify-center gap-1.5 [&>.swiper-pagination-bullet-active]:!w-5 [&>.swiper-pagination-bullet-active]:!bg-slate-800 [&>.swiper-pagination-bullet]:!h-1.5 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!transition-all [&>.swiper-pagination-bullet]:!duration-300 [&>.swiper-pagination-bullet]:!bg-slate-300" />

          {/* Mobile Only Control Triggers */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <button className="testimonial-swiper-prev p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono font-black text-slate-400 tracking-widest uppercase select-none">
              Swipe Grid
            </span>
            <button className="testimonial-swiper-next p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}