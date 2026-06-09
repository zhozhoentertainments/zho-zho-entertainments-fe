'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  { id: 1, name: "NARENDRA MODI", role: "PRIME MINISTER OF INDIA", comment: "INCREDIBLY PROUD OF INDIAN MEN'S KHO KHO TEAM FOR WINNING THE KHO KHO WORLD CUP TITLE. THEIR GRIT AND DEDICATION IS COMMENDABLE. THE WIN WILL CONTRIBUTE TO FURTHER POPULARISING KHO KHO AMONG THE YOUTH" },
  { id: 2, name: "DROUPADI MURMU", role: "PRESIDENT OF INDIA", comment: "I CONVEY MY HEARTIEST CONGRATULATIONS TO BOTH THE INDIAN TEAMS, WOMEN'S AND MEN'S, FOR WINNING THE INAUGURAL KHO KHO WORLD CUP. INDIAN PLAYERS HAVE DEMONSTRATED THEIR SUPREMACY IN THIS TRADITIONAL GAME OF OUR COUNTRY. I AM SURE THAT THE HISTORIC SUCCESS OF OUR GIRLS AND BOYS WILL INSPIRE OUR YOUTH, MAKING THE GAME MORE POPULAR. I WISH BOTH THE TEAMS SUSTAINED SUCCESS IN THE FUTURE" },
  { id: 3, name: "JAGDEEP DHANKHAR", role: "VICE PRESIDENT OF INDIA", comment: "HEARTIEST CONGRATULATIONS TO THE INDIAN MEN'S AND WOMEN'S KHO KHO TEAMS ON THEIR OUTSTANDING VICTORY IN THE INAUGURAL #KHOKHOWORLDCUP! THEIR SKILL AND DEDICATION HAVE SHOWCASED INDIA'S EXCELLENCE IN THIS TRADITIONAL SPORT ON A GLOBAL PLATFORM. THIS HISTORIC ACHIEVEMENT WILL INSPIRE COUNTLESS YOUNG INDIANS AND INFUSE NEW ENERGY IN THE PURSUIT OF KHO KHO." },
  { id: 4, name: "SALMAN KHAN", role: "INDIAN ACTOR", comment: "THE WORLD'S FIRST EVER KHO KHO WORLD CUP IS GOING TO BE PLAYED ON INDIAN SOIL. WHEN THE WORLD COMES TOGETHER, THEN INDIA WILL FLY. #THEWORLDGOESKHO" },
  { id: 5, name: "TIGER SHROFF", role: "INDIAN ACTOR & YOUTH ICON", comment: "The sheer athleticism required in Kho Kho—sudden drops, dives, and explosive sprints—makes it one of the most camera-friendly sports. The digital viewership numbers prove that India is ready to consume non-cricket sports passionately." },
  { id: 6, name: "Sachin Tendulkar", role: "Former Cricketer", comment: "Hello everyone, India is set to host the historic first edition of the Kho Kho World Cup in New Delhi. It is indeed a proud moment for India and all Indian sports. I know this competition is going to be a big one. My best wishes to all the participating teams in this competition, with a special wish for my Indian team. All the very best, Jai Hind" },
  { id: 7, name: "Sergey Bubka", role: "IOC Member", comment: "Hello everyone, I wish the best of luck to all the teams, men and women who will compete in the inaugural Kho Kho World Cup in New Delhi. I trust you all will compete with passion and determination and of course, uphold fairness and respect for your opponents. This is an important moment for Kho Kho and I believe this will be a fantastic show. Good luck." },
  { id: 8, name: "Neeraj Chopra", role: "Olympic Gold Medalist, Javelin Thrower", comment: "Hello everyone, Let's all join in with Kho Kho Kho. The world's best Kho Kho World Cup is coming to Delhi which will be watched by the world from 13th-19th January. #TheWorldGoesKho" },
  { id: 9, name: "The Great Khali", role: "Former Wrestler", comment: "Our nation is all set to host the first-ever Kho Kho World Cup in Delhi on 13th January. Teams from all across the globe are coming! Kho Kho is a sport that is connected to our motherland. So friends, let's support our players and hope they win the World Cup. Best of luck to everyone, Jai Hind, Jai Bharat." },
  { id: 10, name: "Bhaichung Bhutia", role: "Former Footballer", comment: "India's traditional sport, Kho Kho, is going international for the first time. I would like to congratulate the federation on this wonderful initiative and wish all participating teams all the best. I am sure Team India is going to do very very well in this tournament. All the best team India! #TheWorldGoesKho" },
  { id: 11, name: "Sunil Gavaskar", role: "Former Cricketer", comment: "Hi, I want to wish the best of luck to everyone involved in the Kho Kho World Cup. To all the participants, enjoy yourself, have fun, and play with great sporting spirit. Thank you very much" },
  { id: 12, name: "Mary Kom", role: "Boxer", comment: "Hello, sports fans, I am delighted that the World Kho Kho Championship is taking place in New Delhi and it's going to be big. Celebrate this thrilling Indigenous sport as the world's best teams battle it out! Don't miss out, join us and cheer for your favorites! #TheWorldGoesKho" },
  { id: 13, name: "Deepa Malik", role: "Para Athlete", comment: "Namaste, As an Indian athlete, it fills me with immense pride to announce that a traditional game rooted in our country's soil, Kho Kho, a game most of us have played at least once in our lives, will see its first-ever World Cup being hosted in India." },
  { id: 14, name: "Abhinav Bindra", role: "Olympic Gold Medalist, Former Shooter", comment: "I'm thrilled to share my excitement about the inaugural Kho Kho World Cup 2025. This historic event brings together 24 nations to celebrate one of India's most traditional yet dynamic sports. Kho Kho has evolved into a modern, fast-paced, and strategic game that showcases exceptional teamwork, agility, and determination. Together let's show the world why the world goes kho." },
];

function getInitials(name) {
  return name.trim().split(/\s+/).map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

const avatarPalette = [
  { bg: '#FFF0E6', color: '#C2410C' },
  { bg: '#F3E8FF', color: '#7E22CE' },
  { bg: '#FEF3C7', color: '#B45309' },
  { bg: '#EDE9FE', color: '#6D28D9' },
  { bg: '#FFE8D6', color: '#EA580C' },
];

const cardAccents = [
  { role: '#EA580C', bar: 'linear-gradient(90deg,#EA580C,#FB923C)', dot: '#FDBA74', dotHover: '#EA580C', quoteBg: '#FEF0E6', borderHover: '#FB923C', shadow: 'rgba(234,88,12,0.12)', scrollThumb: '#FDBA74' },
  { role: '#A021EB', bar: 'linear-gradient(90deg,#A021EB,#C084FC)', dot: '#D8B4FE', dotHover: '#A021EB', quoteBg: '#F3E8FF', borderHover: '#C084FC', shadow: 'rgba(160,33,235,0.12)', scrollThumb: '#D8B4FE' },
];

export default function TestimonialsCarousel() {
  const swiperRef = useRef(null);

  return (
    <>
      <style>{`
        /* ── SECTION ── */
        .ts-section {
          background: #FFFFFF;
          padding: 88px 16px 80px;
          position: relative;
          overflow: hidden;
        }
        @media(min-width:640px){ .ts-section{ padding: 88px 24px 80px; } }
        @media(min-width:1024px){ .ts-section{ padding: 96px 40px 88px; } }

        .ts-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 600px 400px at 5% 0%, rgba(234,88,12,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 500px 400px at 95% 100%, rgba(160,33,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .ts-inner { max-width: 1280px; margin: 0 auto; position: relative; z-index: 1; }

        /* ── HEADER ── */
        .ts-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          margin-bottom: 14px;
        }
        .ts-eyebrow-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 5px 14px;
          border-radius: 999px;
          background: linear-gradient(135deg, #FFF0E6, #F3E8FF);
          border: 1px solid rgba(160,33,235,0.15);
        }
        .ts-eyebrow-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: linear-gradient(135deg, #EA580C, #A021EB);
          flex-shrink: 0;
        }
        .ts-eyebrow-text {
          font-size: 10px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.25em;
          background: linear-gradient(90deg, #EA580C, #A021EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ts-heading {
          font-size: clamp(2.1rem, 5vw, 3.8rem);
          font-weight: 900;
          text-transform: uppercase;
          color: #111827;
          line-height: 1.0;
          letter-spacing: -0.025em;
          margin: 0 0 14px;
        }
        .ts-heading-game {
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #EA580C 0%, #A021EB 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ts-heading-game::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 100%; height: 3px;
          border-radius: 99px;
          background: linear-gradient(90deg, #EA580C, #A021EB);
          opacity: 0.35;
        }
        .ts-subtext {
          font-size: 15px; color: #4B5563; font-weight: 500;
          max-width: 680px; line-height: 1.6; margin: 0;
        }
        .ts-subtext strong {
          color: #111827;
          font-weight: 700;
        }

        /* ── CARD ── */
        .ts-card {
          background: #FFFFFF;
          border: 1.5px solid #F3F4F6;
          border-radius: 20px;
          padding: 28px 24px 22px;
          display: flex; flex-direction: column;
          height: 420px; 
          position: relative; overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default; user-select: none;
        }
        .ts-card-topbar {
          position: absolute;
          top: 0; left: 18px; right: 18px;
          height: 3px; border-radius: 0 0 5px 5px;
          opacity: 0; transition: opacity 0.25s;
        }
        .ts-card:hover .ts-card-topbar { opacity: 1; }
        .ts-card-quotebg {
          position: absolute; top: 10px; right: 14px;
          font-size: 84px; font-family: Georgia, serif;
          line-height: 1; pointer-events: none;
          transition: color 0.25s;
          z-index: 0;
        }

        .ts-avatar-row { display: flex; align-items: center; gap: 13px; margin-bottom: 15px; flex-shrink: 0; }
        .ts-avatar {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 900; flex-shrink: 0; letter-spacing: 0.05em;
        }
        .ts-role {
          font-size: 9px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 0.2em;
          margin-bottom: 3px;
        }
        .ts-name {
          font-size: 13px; font-weight: 900;
          color: #111827; text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .ts-shadow-line { height: 1px; background: #F3F4F6; margin-bottom: 15px; flex-shrink: 0; }
        
        /* ── SCROLLVIEW FOR COMMENT ── */
        .ts-scroll-container {
          flex: 1;
          overflow-y: auto;
          margin-bottom: 12px;
          padding-right: 6px;
          position: relative;
          z-index: 1;
        }
        .ts-comment { font-size: 13.5px; color: #4B5563; line-height: 1.72; margin: 0; }
        
        .ts-scroll-container::-webkit-scrollbar {
          width: 4px;
        }
        .ts-scroll-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .ts-scroll-container::-webkit-scrollbar-thumb {
          background: transparent; 
          border-radius: 10px;
          transition: background 0.3s;
        }
        .ts-card:hover .ts-scroll-container::-webkit-scrollbar-thumb {
          background: var(--scroll-color, #E5E7EB);
        }

        .ts-dots {
          display: flex; gap: 5px;
          margin-top: auto; padding-top: 13px;
          border-top: 1px solid #F9FAFB; flex-shrink: 0;
        }
        .ts-dot { width: 6px; height: 6px; border-radius: 50%; transition: background 0.25s; }

        /* ── SWIPER TRACK ADJUSTMENTS ── */
        .ts-swiper {
          padding: 16px 4px 24px !important; 
          margin-top: -16px;
        }
        .ts-swiper .swiper-slide { height: auto !important; }
        .ts-swiper .swiper-wrapper { align-items: stretch !important; }

        /* ── CONTROLS ── */
        .ts-controls {
          display: flex; align-items: center; justify-content: center;
          gap: 16px; margin-top: 32px;
        }
        .ts-nav-btn {
          width: 52px; height: 52px; border-radius: 50%;
          border: none;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
          color: #fff;
        }
        .ts-nav-btn:hover { opacity: 0.88; box-shadow: 0 8px 28px rgba(0,0,0,0.18); }
        .ts-nav-btn:active { transform: scale(0.91); }
        .ts-nav-prev { background: linear-gradient(135deg, #EA580C, #F97316); box-shadow: 0 4px 16px rgba(234,88,12,0.35); }
        .ts-nav-next { background: linear-gradient(135deg, #A021EB, #B84CF7); box-shadow: 0 4px 16px rgba(160,33,235,0.35); }

        /* ── PAGINATION ── */
        .ts-pagination {
          display: flex !important; align-items: center;
          justify-content: center; gap: 6px;
          position: static !important; bottom: auto !important;
        }
        .ts-pagination .swiper-pagination-bullet {
          width: 8px !important; height: 8px !important;
          border-radius: 999px !important; opacity: 1 !important;
          margin: 0 !important;
          background: #E5E7EB !important;
          transition: all 0.3s ease !important;
        }
        .ts-pagination .swiper-pagination-bullet-active {
          width: 28px !important;
          background: linear-gradient(90deg, #EA580C, #A021EB) !important;
        }
      `}</style>

      <section className="ts-section">
        <div className="ts-inner">

          {/* ── HEADER WITH DYNAMIC DESCRIPTION ── */}
          <div style={{ marginBottom: '52px' }}>
            <div className="ts-eyebrow">
              <div className="ts-eyebrow-pill">
                <span className="ts-eyebrow-dot" />
                <span className="ts-eyebrow-text">Global Endorsements</span>
              </div>
            </div>
            <h2 className="ts-heading">
              Voices for{' '}
              <span className="ts-heading-game">the Game</span>
            </h2>
            <p className="ts-subtext">
              Backed by the Honorable <strong>Prime Minister</strong>, the <strong>President of India</strong>, legendary <strong>cricketers</strong>, and prominent <strong>Bollywood actors</strong>—celebrating Kho Kho's historic global rise.
            </p>
          </div>

          {/* ── SWIPER ── */}
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            loop={true}
            grabCursor={true}
            spaceBetween={20}
            autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.ts-pagination' }}
            breakpoints={{
              320:  { slidesPerView: 1 },
              600:  { slidesPerView: 1.12 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="ts-swiper w-full"
          >
            {testimonialsData.map((item, i) => {
              const pal    = avatarPalette[i % avatarPalette.length];
              const accent = cardAccents[i % 2];
              const initials = getInitials(item.name);

              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="ts-card"
                    style={{ '--scroll-color': accent.scrollThumb }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = accent.borderHover;
                      e.currentTarget.style.boxShadow   = `0 12px 32px ${accent.shadow}`;
                      e.currentTarget.style.transform   = 'translateY(-8px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = '#F3F4F6';
                      e.currentTarget.style.boxShadow   = 'none';
                      e.currentTarget.style.transform   = 'translateY(0)';
                    }}
                  >
                    {/* Top gradient bar */}
                    <div className="ts-card-topbar" style={{ background: accent.bar }} />

                    {/* Ghost quote */}
                    <span className="ts-card-quotebg" style={{ color: accent.quoteBg }} aria-hidden="true">"</span>

                    {/* Avatar row */}
                    <div className="ts-avatar-row">
                      <div className="ts-avatar" style={{ background: pal.bg, color: pal.color }}>
                        {initials}
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p className="ts-role" style={{ color: accent.role }}>{item.role}</p>
                        <h4 className="ts-name">{item.name}</h4>
                      </div>
                    </div>

                    <div className="ts-shadow-line" />
                    
                    {/* Scrollable text container */}
                    <div className="ts-scroll-container">
                      <p className="ts-comment">{item.comment}</p>
                    </div>

                    <div className="ts-dots">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="ts-dot" style={{ background: accent.dot }} />
                      ))}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* ── BOTTOM CONTROLS ── */}
          <div className="ts-controls">
            <button className="ts-nav-btn ts-nav-prev" onClick={() => swiperRef.current?.slidePrev()} aria-label="Previous">
              <ChevronLeft size={22} />
            </button>

            <div className="ts-pagination" />

            <button className="ts-nav-btn ts-nav-next" onClick={() => swiperRef.current?.slideNext()} aria-label="Next">
              <ChevronRight size={22} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}