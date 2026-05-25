import React from 'react';

export default function WhyKhoKhoTimeline() {
  const timelineEvents = [
    {
      title: "India Entering New Sports Era",
      date: "Phase 1: The Shift",
      icon: "/images/president-murmu.png",
      iconAlt: "President Droupadi Murmu",
      content: "From local grounds to global screens, Indian sports are evolving rapidly. After the massive commercial success of Cricket and Kabaddi, Kho Kho is primed as the next big leap in the franchise league ecosystem.",
      points: [
        "75M+ rural players actively participating",
        "5000+ registered clubs across India",
        "₹200Cr+ projected league valuation by 2026"
      ],
      tag: "Zho Zho Original",
      ctaText: "Explore Era",
      endorsement: "Hon'ble President Droupadi Murmu has applauded the grassroots revolution, calling Kho Kho a 'sport of the future.'",
      side: "right"
    },
    {
      title: "Why Kho Kho? Why Now?",
      date: "Phase 2: Market Dynamics",
      icon: "/images/pm-modi.png",
      iconAlt: "Prime Minister Narendra Modi",
      content: "A game, a movement, a massive opportunity. Minimal infrastructure, low development cost, and exceptional fast-paced high accessibility make Kho Kho optimized for lightning-fast mass adoption.",
      points: [
        "No expensive equipment required",
        "Playable on any terrain - urban or rural",
        "30-minute match format perfect for TV slots",
        "Lower franchise costs than cricket/kabaddi"
      ],
      tag: "Strategic Focus",
      ctaText: "View Analytics",
      endorsement: "Hon'ble Prime Minister Narendra Modi has endorsed indigenous sports, highlighting Kho Kho as a vehicle for 'New India' sporting dominance.",
      side: "left"
    },
    {
      title: "Massive Momentum In Numbers",
      date: "Phase 3: Ultimate Impact",
      icon: "/images/trophy-icon.png",
      iconAlt: "Kho Kho Trophy",
      content: "With 64M+ total league viewership, a 43% Gen-Z audience demographic, and an industry-leading 41% female viewer engagement ratio, Kho Kho is commercially proven as the next big fast-paced sport.",
      points: [
        "64M+ total league viewership",
        "43% Gen-Z audience demographic",
        "41% female viewer engagement ratio",
        "3.2M peak concurrent viewers",
        "180+ countries broadcast reach"
      ],
      tag: "64M+ Viewership",
      ctaText: "Check Stats",
      endorsement: "The Hon'ble President and Vice-President have repeatedly acknowledged Kho Kho's meteoric rise.",
      side: "right"
    },
    {
      title: "The Nation Supports The Game",
      date: "Phase 4: Global Stage",
      icon: "/images/govt-emblem.png",
      iconAlt: "Government of India Support",
      content: "Highly commended by the Hon'ble President, Vice President, and Prime Minister of India following the historic World Cup win. The sport is fully ready to scale beyond domestic boundaries.",
      points: [
        "Official recognition from Rashtrapati Bhavan",
        "Khelo India program integration",
        "World Cup 2024 Champions",
        "10+ international federations established"
      ],
      tag: "Govt Backed",
      ctaText: "Read Endorsements",
      endorsement: "Official commendations from Rashtrapati Bhavan & PMO",
      side: "left"
    },
    {
      title: "Future Global Expansion",
      date: "Phase 5: World Domination",
      icon: "/images/global-icon.png",
      iconAlt: "Global Expansion",
      content: "Kho Kho is now entering international markets with franchise leagues planned in UAE, UK, and USA. The sport's unique blend of strategy and athleticism is captivating audiences worldwide.",
      points: [
        "UAE league launching Q1 2025",
        "UK broadcast deal with Sky Sports",
        "USA exhibition matches confirmed",
        "Olympic inclusion bid submitted"
      ],
      tag: "Global Reach",
      ctaText: "Learn More",
      endorsement: "Broadcast deals with international sports networks finalized for 2025 season.",
      side: "right"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 px-4 font-sans selection:bg-[#f07167] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section matching the image */}
        <div className="text-center ">
          {/* Authority Logos Row */}
       
          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 drop-shadow-sm">
            Why  <span className="text-[#f07167]">KHO - KHO </span>
          </h2>
          <div className="w-28 h-1 bg-[#f07167] mx-auto mt-6 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base font-medium mt-4 max-w-2xl mx-auto">
            From grassroots to global glory — witness the unstoppable rise of India's fastest-growing indigenous sport.
          </p>
        </div>

        {/* Main Timeline Wrapper */}
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
          
          {/* Central Vertical Track Line */}
          <div className="hidden md:block border-l-2 border-[#f07167]/30 absolute left-1/2 transform -translate-x-1/2 h-full top-0 z-0" />
          
          {/* Mobile vertical line */}
          <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-[#f07167]/20 z-0" />

          {timelineEvents.map((event, index) => {
            const isLeftSide = event.side === 'left';
            
            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row justify-between items-start md:items-center mb-20 z-10 w-full group`}
              >
                {/* Spacer for desktop layout */}
                <div className={`hidden md:block md:w-5/12 ${isLeftSide ? 'order-2' : ''}`} />

                {/* Center Icon Badge */}
                <div className={`absolute left-3 md:left-1/2 transform md:-translate-x-1/2 top-3 md:top-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center bg-white border-4 border-[#f07167] w-16 h-16 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#f07167]/30`}>
                  {event.icon ? (
                    <img 
                      src={event.icon} 
                      alt={event.iconAlt} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/48?text=Icon';
                      }}
                    />
                  ) : (
                    <span className="text-3xl">🏆</span>
                  )}
                </div>

                {/* Content Block */}
                <div className={`ml-16 md:ml-0 w-[calc(100%-4rem)] md:w-5/12 bg-white rounded-2xl shadow-xl p-6 md:p-8 relative transition-all duration-300 hover:shadow-2xl border border-gray-100 ${
                  isLeftSide ? 'order-1' : ''
                }`}>
                  
                  {/* Desktop Arrow Pointer */}
                  <div className={`hidden md:block absolute top-8 w-0 h-0 ${
                    isLeftSide 
                      ? '-right-[12px] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-white border-r-0' 
                      : '-left-[12px] border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-white border-l-0'
                  }`} />

                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-4 mb-4">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight group-hover:text-[#f07167] transition-colors">
                      {event.title}
                    </h3>
                    <span className="text-[11px] font-bold bg-[#f07167]/10 text-[#f07167] px-3 py-1.5 rounded-full">
                      {event.date}
                    </span>
                  </div>

                  {/* Main Content */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                    {event.content}
                  </p>

                  {/* Bullet Points Section */}
                  <div className="mb-5 space-y-2.5">
                    {event.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 group/point">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#f07167] group-hover/point:scale-150 transition-transform"></div>
                        <span className="text-sm text-gray-700 group-hover/point:text-gray-900 transition-colors">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Endorsement Badge */}
                  <div className="mt-4 mb-5 flex items-center gap-2 text-[11px] bg-[#f07167]/5 p-2.5 rounded-lg border border-[#f07167]/10">
                    <span className="text-[#f07167] text-base">🏛️</span>
                    <span className="text-gray-600 text-xs">{event.endorsement}</span>
                  </div>

                  {/* Footer Action Row */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-gray-100">
                    <button className="inline-flex items-center gap-2 bg-[#f07167] hover:bg-[#e05d52] text-white font-bold text-xs px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg active:scale-95">
                      {event.ctaText}
                      <span className="text-base">→</span>
                    </button>
                    <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase bg-gray-50 px-3 py-1.5 rounded-full">
                      {event.tag}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-14 md:mt-20 bg-gradient-to-r from-[#f07167]/5 to-transparent rounded-3xl p-8 border border-[#f07167]/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#f07167] mb-2">64M+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Total League Viewership</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#f07167] mb-2">43%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Gen-Z Audience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-[#f07167] mb-2">41%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Female Viewers</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#f07167] rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-black">K</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm uppercase tracking-wider">Official League Partner</p>
                <p className="text-xs text-gray-500">Powered by Zho Zho Entertainments</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="text-[#f07167] text-sm font-semibold bg-[#f07167]/10 px-4 py-2 rounded-full">🏟️ 6 Franchises</span>
              <span className="text-[#f07167] text-sm font-semibold bg-[#f07167]/10 px-4 py-2 rounded-full">🌍 15+ Countries</span>
              <span className="text-[#f07167] text-sm font-semibold bg-[#f07167]/10 px-4 py-2 rounded-full">📅 Season 3 Announced</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-[11px] tracking-[0.2em] uppercase font-mono font-semibold">
            ZHO ZHO ENTERTAINMENTS • PRIVATE & CONFIDENTIAL
          </p>
        </div>
      </div>
    </div>
  );
}