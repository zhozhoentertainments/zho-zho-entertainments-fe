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
  return (
    <section className="relative w-full bg-slate-50 text-slate-800 font-sans overflow-hidden py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        
        {/* SIMPLE CLEAN HEADER */}
        <div className="text-center md:text-left max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase">
            Testimonials for the Kho Kho globally
          </h2>
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