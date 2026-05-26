import React from 'react';


export default function WhyKhoKhoTimeline() {
  const timelineEvents = [
    // {
    //   title: "India Entering New Sports Era",
    //   date: "Phase 1: The Shift",
    //   // icon: "/images/president-murmu.png",
    //   // iconAlt: "President Droupadi Murmu",
    //   image: "/partnership/1.png",
    //   content: "From local grounds to global screens, Indian sports are evolving rapidly. After the massive commercial success of Cricket and Kabaddi, Kho Kho is primed as the next big leap in the franchise league ecosystem.",
    //   points: [
    //     "75M+ rural players actively participating",
    //     "5000+ registered clubs across India",
    //     "₹200Cr+ projected league valuation by 2026"
    //   ],
    //   tag: "Zho Zho Original",
    //   // ctaText: "Explore Era",
    //   // ctaLink: "https://example.com/era",
    //   endorsement: "Hon'ble President Droupadi Murmu has applauded the grassroots revolution, calling Kho Kho a 'sport of the future.'",
    //   side: "right"
    // },
       {
      title: "India Entering New Sports Era",
      date: "the nation supports kho kho",
      // icon: "/images/president-murmu.png",
      // iconAlt: "President Droupadi Murmu",
      image: "/partnership/1.png",
      content: "I CONVEY MY HEARTIEST CONGRATULATIONS TO BOTH THE INDIAN TEAMS, WOMEN`U+0060`S AND MEN’S, FOR WINNING THE INAUGURAL KHO KHO WORLD CUP. INDIAN PLAYERS HAVE DEMONSTRATED THEIR SUPREMACY IN THIS TRADITIONAL GAME OF OUR COUNTRY. I AM SURE THAT THE HISTORIC SUCCESS OF OUR GIRLS AND BOYS WILL INSPIRE OUR YOUTH, MAKING THE GAME MORE POPULAR. I WISH BOTH THE TEAMS SUSTAINED SUCCESS IN THE FUTURE",
      points: [
    
      ],
      tag: "sources",
      // ctaText: "Explore Era",
      // ctaLink: "https://example.com/era",
      endorsement: "Hon'ble President Droupadi Murmu has applauded the grassroots revolution, calling Kho Kho a 'sport of the future.'",
      side: "right"
    },
    {
      title: "Why Kho Kho? Why Now?",
      date: "the nation supports kho kho",
      // icon: "/images/pm-modi.png",
      // iconAlt: "Prime Minister Narendra Modi",
      image: "/partnership/2.png",
      content: "INCREDIBLY PROUD OF INDIAN MEN’S KHO KHO TEAM FOR WINNING THE KHO KHO WORLD CUP TITLE. THEIR GRIT AND DEDICATION IS COMMENDABLE. THE WIN WILL CONTRIBUTE TO FURTHER POPULARISING KHO KHO AMONG THE YOUTH",
      points: [
      ],
      tag: "Strategic Focus",
      endorsement: "Hon'ble Prime Minister Narendra Modi has endorsed indigenous sports, highlighting Kho Kho as a vehicle for 'New India' sporting dominance.",
      side: "left"
    },
    {
      title: "Massive Momentum In Numbers",
      date: "Ultimate Impact",
      icon: "/images/trophy-icon.png",
      iconAlt: "Kho Kho Trophy",
      image: "/icons/android-chrome-192x192.png",
      content: "With 64M+ total league viewership, a 43% Gen-Z audience demographic, and an industry-leading 41% female viewer engagement ratio, Kho Kho is commercially proven as the next big fast-paced sport.",
      points: [
          "16 TEAMS",
        "288 ATHLETES",
        "100+ PARTNERS",
        "64M+ total league viewership",
        "43% Gen-Z audience demographic",
        "41% female viewer engagement ratio",
        "3.2M peak concurrent viewers",
      
      ],
      tag: "64M+ Viewership",
      ctaText: "Check Stats",
      ctaLink: "https://example.com/stats",
      endorsement: "The Hon'ble President and Vice-President have repeatedly acknowledged Kho Kho's meteoric rise.",
      side: "right"
    },
    {
      title: "Future Global Expansion",
      date: " World Domination",
      content: "Kho Kho International is dedicated to promoting and advancing Kho Kho, a thrilling and dynamic traditional sport originating in India, on a global scale.",
      points: [
        "61 +  Playing Countries",
        "1 Million + Active Players Globally",
        "USA exhibition matches confirmed",
        "Female Participation - One of fastest growing female sports globally"
      ],
      tag: "Global Reach",
      // ctaText: "Learn More",
      // ctaLink: "https://example.com/global",
      endorsement: "Broadcast deals with international sports networks finalized for 2026 season.",
      side: "left"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 font-sans selection:bg-[#f07167] selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { font-family: 'DM Sans', sans-serif; }

        .heading-font { font-family: 'Playfair Display', Georgia, serif; }

        @keyframes text-focus-in {
          0% { filter: blur(6px); opacity: 0; transform: scale(0.97); }
          100% { filter: blur(0px); opacity: 1; transform: scale(1); }
        }
        @keyframes draw-underline {
          to { stroke-dashoffset: 0; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(240,113,103,0.4), 0 0 0 0 rgba(159,33,234,0.2); }
          50% { box-shadow: 0 0 0 8px rgba(240,113,103,0), 0 0 0 16px rgba(159,33,234,0); }
        }

        .animate-text-focus-in {
          animation: text-focus-in 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-draw-underline {
          stroke-dasharray: 480;
          stroke-dashoffset: 480;
          animation: draw-underline 1.8s cubic-bezier(0.42, 0, 0.58, 1) forwards;
          animation-delay: 0.5s;
        }
        .timeline-card {
          animation: fadeSlideUp 0.55s ease both;
        }
        .timeline-card:nth-child(1) { animation-delay: 0.05s; }
        .timeline-card:nth-child(2) { animation-delay: 0.15s; }
        .timeline-card:nth-child(3) { animation-delay: 0.25s; }
        .timeline-card:nth-child(4) { animation-delay: 0.35s; }
        .timeline-card:nth-child(5) { animation-delay: 0.45s; }

        .circular-image-wrap {
          position: relative;
          width: 148px;
          height: 148px;
          flex-shrink: 0;
        }
        /* Spinning dashed outer ring */
        .circular-image-wrap::before {
          content: '';
          position: absolute;
          inset: -6px;
          border-radius: 50%;
          border: 2.5px dashed #f07167;
          animation: spin-slow 12s linear infinite;
          opacity: 0.6;
        }
        /* Solid gradient ring */
        .circular-image-wrap::after {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: conic-gradient(#f07167, #9F21EA, #aac65d, #f07167);
          z-index: 0;
        }
        .circular-image-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid white;
          background: #f5f5f5;
          animation: pulse-ring 3s ease-in-out infinite;
        }
        .circular-image-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
        /* Placeholder when image errors */
        .circular-image-placeholder {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f07167/10, #9F21EA/10);
          font-size: 11px;
          color: #9ca3af;
          text-align: center;
          letter-spacing: 0.05em;
        }

        .card-arrow-right::after {
          content: '';
          position: absolute;
          top: 28px;
          right: -12px;
          width: 0; height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-left: 12px solid white;
        }
        .card-arrow-left::after {
          content: '';
          position: absolute;
          top: 28px;
          left: -12px;
          width: 0; height: 0;
          border-top: 12px solid transparent;
          border-bottom: 12px solid transparent;
          border-right: 12px solid white;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center py-6 px-4 max-w-4xl mx-auto select-none">
          <div className="relative inline-block text-center">
            <h2 className="heading-font flex items-center justify-center gap-x-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-gray-900 uppercase">
              <span className="text-gray-950">Why</span>
               <span className="relative inline-block text-[#9F21EA] animate-text-focus-in tracking-wider">
                Elite
              </span>
              <span className="relative inline-block text-[#9F21EA] animate-text-focus-in tracking-wider">
                KHO - KHO
              </span>
            </h2>

            {/* Beautiful decorative underline */}
            <div className="w-full mt-3">
              <svg viewBox="0 0 400 20" preserveAspectRatio="none" className="w-full h-5" xmlns="http://www.w3.org/2000/svg">
                {/* Thick glow layer */}
                <path d="M 10,14 C 60,6 120,18 200,11 C 280,4 340,17 390,10"
                  fill="none" stroke="#f07167" strokeWidth="8" strokeLinecap="round" opacity="0.12" />
                {/* Mid layer */}
                <path d="M 10,14 C 60,6 120,18 200,11 C 280,4 340,17 390,10"
                  fill="none" stroke="#9F21EA" strokeWidth="3.5" strokeLinecap="round"
                  className="animate-draw-underline" />
                {/* Fine top highlight */}
                <path d="M 10,14 C 60,6 120,18 200,11 C 280,4 340,17 390,10"
                  fill="none" stroke="#f07167" strokeWidth="1" strokeLinecap="round"
                  opacity="0.5" style={{ strokeDasharray: '6 10' }} />
                {/* Accent dots */}
                <circle cx="10" cy="14" r="4" fill="#f07167" />
                <circle cx="200" cy="11" r="3" fill="#9F21EA" />
                <circle cx="390" cy="10" r="4" fill="#f07167" />
              </svg>
            </div>
          </div>

          <p className="mt-6 max-w-xl mx-auto text-xs sm:text-sm md:text-base text-gray-500 font-medium leading-relaxed">
            From grassroots to global glory — witness the unstoppable rise of India's fastest-growing indigenous sport.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="relative wrap overflow-hidden p-4 md:p-10">

          {/* Desktop center gradient line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 h-full z-0"
            style={{ width: '2px', background: 'linear-gradient(to bottom, transparent, #f07167 6%, #9F21EA 50%, #f07167 94%, transparent)' }} />

          {/* Mobile left line */}
          <div className="md:hidden absolute left-6 top-0 h-full z-0"
            style={{ width: '2px', background: 'linear-gradient(to bottom, transparent, #f07167 6%, #9F21EA 94%, transparent)' }} />

          {timelineEvents.map((event, index) => {
            const isLeft = event.side === 'left';
            // image panel goes on the OPPOSITE side of the card
            // card is on RIGHT → image on LEFT, card is on LEFT → image on RIGHT

            return (
              <div key={index} className="timeline-card relative flex flex-col md:flex-row justify-between items-center mb-20 z-10 w-full group">

                {/*
                  Layout for desktop (3 columns: image | center-dot | card):
                  - side=right: card is in col-3, image is in col-1
                  - side=left:  card is in col-1, image is in col-3
                  We use explicit order classes.
                */}

                {/* ── Desktop Image Side ── */}
                <div className={`hidden md:flex md:w-5/12 items-center justify-center px-6
                  ${isLeft ? 'order-3' : 'order-1'}`}>
                  {event.image ? (
                    <div className="">
                      <div className="">
                        <img
                          src={event.image}
                          alt={event.title}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML =
                              '<div class="circular-image-placeholder">No Image</div>';
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="md:w-5/12" />
                  )}
                </div>

                {/* ── Center Icon Badge ── */}
                <div className="hidden md:flex order-2 absolute left-1/2 transform -translate-x-1/2 z-20
                  items-center justify-center bg-purple-200 w-16 h-16 rounded-full"
                  style={{
                    border: '4px solid #C49FD1',
                    boxShadow: '0 4px 24px rgba(159,33,234,0.18), 0 2px 8px rgba(240,113,103,0.15)'
                  }}>
                  {/* <img
                    src={event.icon}
                    alt={event.iconAlt}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/48?text=⚡'; }}
                  /> */}
                </div>

                {/* Mobile icon */}
                <div className="md:hidden absolute left-3 top-3 z-20
                  flex items-center justify-center bg-white w-10 h-10 rounded-full"
                  style={{ border: '3px solid #aac65d', boxShadow: '0 2px 10px rgba(159,33,234,0.2)' }}>
                  <img
                    src={event.icon}
                    alt={event.iconAlt}
                    className="w-8 h-8 rounded-full object-cover"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/32?text=⚡'; }}
                  />
                </div>

                {/* ── Content Card ── */}
                <div className={`ml-14 md:ml-0 w-[calc(100%-3.5rem)] md:w-5/12 bg-white rounded-2xl shadow-lg p-6 md:p-7 relative
                  transition-all duration-300 hover:shadow-2xl border border-gray-100
                  ${isLeft ? 'order-1 card-arrow-right' : 'order-3 card-arrow-left'}`}>

                  {/* Mobile-only image inside card */}
                  {event.image && (
                    <div className="md:hidden mb-4 flex justify-center">
                      <div className="circular-image-wrap" style={{ width: 96, height: 96 }}>
                        <div className="circular-image-inner">
                          <img
                            src={event.image}
                            alt={event.title}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML =
                                '<div class="circular-image-placeholder">No Image</div>';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-gray-100 pb-4 mb-4">
                    <h3 className="heading-font text-lg md:text-4xl font-bold text-gray-900 leading-tight group-hover:text-[#f07167] transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-[10px] font-bold bg-[#f07167]/10 text-[#f07167] px-3 py-1.5 rounded-full whitespace-nowrap capitalize">
                      {event.date}
                    </span>
                  </div>

                  {/* Body */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{event.content}</p>

                  {/* Bullet Points */}
                  <div className="mb-5 space-y-2">
                    {event.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 group/point">
                        <div className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#f07167] flex-shrink-0 group-hover/point:scale-150 transition-transform" />
                        <span className="text-sm text-gray-700 group-hover/point:text-gray-900 transition-colors">{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Endorsement */}
                  <div className="mb-5 flex items-start gap-2 bg-[#f07167]/5 p-3 rounded-xl border border-[#f07167]/10">
                    <span className="text-base flex-shrink-0">🏛️</span>
                    <span className="text-gray-600 text-xs leading-relaxed">{event.endorsement}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                    {event.ctaLink ? (
                      <a
                        href={event.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#f07167] hover:bg-[#e05d52] text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95"
                      >
                        {event.ctaText} <span>→</span>
                      </a>
                    ) : <span />}
                    <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase bg-gray-50 px-3 py-1.5 rounded-full">
                      {event.tag || 'Zho Zho Original'}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ── Stats ── */}
        {/* <div className="mt-10 md:mt-16 bg-gradient-to-r from-[#f07167]/5 to-transparent rounded-3xl p-8 border border-[#f07167]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { val: '64M+', label: 'Total League Viewership' },
              { val: '43%', label: 'Gen-Z Audience' },
              { val: '41%', label: 'Female Viewers' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="heading-font text-4xl md:text-5xl font-black text-[#f07167] mb-2">{val}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div> */}

        {/* ── Footer ── */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-mono font-semibold">
             • ONE CHAMPIONSHIP. MASSIVE IMPACT. LIMITLESS OPPORTUNITY
          </p>
        </div>
      </div>
    </div>
  );
}