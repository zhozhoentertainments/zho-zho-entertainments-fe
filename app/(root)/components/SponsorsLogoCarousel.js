import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper core styles import
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const sponsorsLogos = [
  { id: 1, name: "Aggreart Enterprise", src: "/old-sponsers/Aggreekart.jpg" },
  { id: 2, name: "Aggreart Brands", src: "/old-sponsers/finishing-point.png" },
  { id: 3, name: "Aggreart Group", src: "/old-sponsers/little-once.png" },
  { id: 4, name: "Aggreart Ltd", src: "/old-sponsers/malla-reddy-vishwavidyapeeth.jpg" },
  { id: 5, name: "Aggreart Global", src: "/old-sponsers/shree-tmt-10krun-logo.png" },
  { id: 6, name: "Aggreart Media", src: "/old-sponsers/sky-veda.png" },
  { id: 7, name: "Aggreart Network", src: "/old-sponsers/Union_Bank_of_India_logo.png" },
];

export default function SponsorsLogoCarousel() {
  return (
    <section
      className="relative w-full bg-white text-slate-800 overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
      style={{ fontFamily: "'Poppins', 'Poppins Fallback', system-ui, -apple-system, sans-serif" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <div className="flex flex-col border-b border-slate-100 pb-6">
          <div className="flex items-center gap-3 text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight relative inline-block">
                Reach Out Sponsorship
                <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></span>
              </h3>
            </div>
          </div>
        </div>

        {/* SWIPER - Clean logos only */}
        <div className="relative w-full px-0 md:px-14 group">

          {/* LEFT BUTTON */}
          <button
            className="swiper-button-custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Previous logos"
          >
            <ChevronLeft className="w-5 h-5 " />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            grabCursor={true}
            spaceBetween={40}
            autoplay={{
              delay: 800,
              disableOnInteraction: false, // Changed to false - keeps auto-playing after interaction
              pauseOnMouseEnter: true, // Stops when mouse enters
              stopOnLastSlide: false,
            }}
            speed={800}
            navigation={{
              prevEl: '.swiper-button-custom-prev',
              nextEl: '.swiper-button-custom-next',
            }}
            pagination={{
              clickable: true,
              el: '.custom-swiper-pagination'
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 5 }
            }}
            className="w-full h-auto !pb-4"
          >
            {sponsorsLogos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-105">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-auto h-40 object-contain transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT BUTTON */}
          <button
            className="swiper-button-custom-next absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-slate-950 hover:border-slate-400 hover:shadow-lg transition-all active:scale-95 hidden md:flex items-center justify-center"
            aria-label="Next logos"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4">
          <div className="custom-swiper-pagination flex items-center justify-center gap-1.5 [&>.swiper-pagination-bullet-active]:!w-5 [&>.swiper-pagination-bullet-active]:!bg-slate-800 [&>.swiper-pagination-bullet]:!h-1.5 [&>.swiper-pagination-bullet]:!rounded-full [&>.swiper-pagination-bullet]:!transition-all [&>.swiper-pagination-bullet]:!duration-300 [&>.swiper-pagination-bullet]:!bg-slate-300" />

          {/* MOBILE NAVIGATION */}
          <div className="flex md:hidden items-center justify-center gap-4 w-full max-w-xs mx-auto">
            <button className="swiper-button-custom-prev p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[10px] font-mono font-black text-slate-400 tracking-widest uppercase select-none">
              Swipe
            </span>
            <button className="swiper-button-custom-next p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 active:scale-95 transition-all flex items-center justify-center shadow-sm">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}