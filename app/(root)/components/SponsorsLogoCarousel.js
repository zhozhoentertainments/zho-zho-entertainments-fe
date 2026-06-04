import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper core styles import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sponsorsLogos = [
  { id: 1, name: "Aggreart Enterprise", src: "/old-sponsers/Aggreart.jpg" },
  { id: 2, name: "Aggreart Brands", src: "/old-sponsers/finishing-point.png" },
  { id: 3, name: "Aggreart Group", src: "/old-sponsers/little-once.png" },
  { id: 4, name: "Aggreart Ltd", src: "/old-sponsers/malla-reddy-vishwavidyapeeth.jpg" },
  { id: 5, name: "Aggreart Global", src: "/old-sponsers/shree-tmt-10krun-logo.png" },
  { id: 6, name: "Aggreart Media", src: "/old-sponsers/sky-veda.png" },
  { id: 7, name: "Aggreart Network", src: "/old-sponsers/Union_Bank_of_India_logo.png" },

];

export default function SponsorsLogoCarousel() {
  return (
    <section className="relative w-full bg-white text-slate-800 font-sans overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* COMPONENT INTRO PANEL */}
        <div className="flex justify-between items-center border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3 text-left">
            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-950 uppercase tracking-wider">
                Corporate Backers
              </h3>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest font-mono">
                Powering the Elite Arena Movement
              </p>
            </div>
          </div>
        </div>

        {/* SWIPER COMPONENT SYSTEM WRAPPER */}
        <div className="relative w-full px-0 md:px-14 group">
          
          {/* FIXED LEFT BUTTON - Uses class name selection directly instead of useRef */}
          <button
            className="swiper-button-custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous logos"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* REAL SWIPER COMPONENT CORE LAYER */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={32}
            // Auto scroll configuration with direct manual click stop interaction
            autoplay={{
              delay: 3500,
              disableOnInteraction: true, // User clicks a button, auto-move stops permanently
              pauseOnMouseEnter: true
            }}
            // Aligned perfectly with specific unique class tags to prevent lifecycle failures
            navigation={{
              prevEl: '.swiper-button-custom-prev',
              nextEl: '.swiper-button-custom-next',
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination'
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 }
            }}
            className="w-full h-auto !pb-4"
          >
            {sponsorsLogos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 flex flex-col items-center justify-between h-56 group transition-all duration-300 hover:bg-white hover:border-orange-500/30 hover:shadow-xl">
                  
                  {/* LARGE IMMERSIVE IMAGE CONTAINER */}
                  <div className="w-full h-32 flex items-center justify-center overflow-hidden bg-white border border-slate-100 rounded-xl p-4 flex-shrink-0 shadow-sm group-hover:border-slate-200 transition-colors">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-w-full max-h-full object-contain filter saturate-100 opacity-100 transition-transform duration-500 scale-95 group-hover:scale-100"
                    />
                  </div>

                  {/* BOTTOM LOGO BRAND TITLE */}
                  <div className="w-full text-center border-t border-slate-100 pt-4 mt-2">
                    <p className="text-xs font-black text-slate-500 group-hover:text-slate-950 uppercase tracking-widest font-mono truncate transition-colors duration-300">
                      {logo.name}
                    </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* FIXED RIGHT BUTTON - Uses class name selection directly instead of useRef */}
          <button
            className="swiper-button-custom-next absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next logos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* UNIFIED INTERACTION CONTROL DOTS AND MOBILE NAVIGATION SYSTEM */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4">
          
          {/* Custom pagination layout */}
          <div className="custom-swiper-pagination flex items-center justify-center gap-1.5 [&>.swiper-pagination-bullet-active]:!w-5 [&>.swiper-pagination-bullet-active]:!bg-slate-800 [&>.swiper-pagination-bullet]:!h-1.5 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!transition-all [&>.swiper-pagination-bullet]:!duration-300 [&>.swiper-pagination-bullet]:!bg-slate-300" />

          {/* Mobile View Navigation Triggers */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <button
              className="swiper-button-custom-prev p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono font-black text-slate-400 tracking-widest uppercase select-none">
              Swipe Grid
            </span>
            <button
              className="swiper-button-custom-next p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}