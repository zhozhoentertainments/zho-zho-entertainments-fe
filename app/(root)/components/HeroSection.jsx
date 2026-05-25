import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

// ─── 🛠️ आपका मैन्युअल इमेजेस और कलर्स का डेटा एरे ───
const customSliderData = [
  { id: 1, src: "/slider/1.png", bgColor: "bg-[#110024]" },
  { id: 2, src: "/slider/2.png", bgColor: "bg-[#1A0033]" },
  { id: 3, src: "/slider/3.png", bgColor: "bg-[#0D001A]" },
  { id: 4, src: "/slider/4.png", bgColor: "bg-[#16002C]" },
];

export default function UltimatePerfectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const containerWidth = useRef(0);
  const containerRef = useRef(null);

  const currentBg = customSliderData[currentIndex]?.bgColor || "bg-[#110024]";

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customSliderData.length);
    setDragOffset(0);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + customSliderData.length) % customSliderData.length);
    setDragOffset(0);
  };

  useEffect(() => {
    if (isDragging) return;
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide, isDragging]);

  /* ─── 🛠️ स्वाइप और ड्रैग लॉजिक ─── */
  const handleStart = (e) => {
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    if (containerRef.current) {
      containerWidth.current = containerRef.current.offsetWidth;
    }
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const currentOffset = clientX - startX.current;
    setDragOffset(currentOffset);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = containerWidth.current * 0.15;

    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    } else {
      setDragOffset(0);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${currentBg} transition-colors duration-1000 ease-in-out overflow-hidden flex flex-col items-center justify-center pt-24 pb-8 select-none`}
      onTouchStart={handleStart}
      onTouchMove={handleMove}
      onTouchEnd={handleEnd}
      onMouseDown={handleStart}
      onMouseMove={handleMove}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
    >

      {/* ─── डेंस स्टेडियम लाइट्स (12 Floating Bubbles) ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden md:block overflow-hidden">
        {/* Left Side Bubbles */}
        <div className="stadium-bubble sb-left-1"></div>
        <div className="stadium-bubble sb-left-2"></div>
        <div className="stadium-bubble sb-left-3"></div>
        <div className="stadium-bubble sb-left-4"></div>
        <div className="stadium-bubble sb-left-5"></div>
        <div className="stadium-bubble sb-left-6"></div>
        
        {/* Right Side Bubbles */}
        <div className="stadium-bubble sb-right-1"></div>
        <div className="stadium-bubble sb-right-2"></div>
        <div className="stadium-bubble sb-right-3"></div>
        <div className="stadium-bubble sb-right-4"></div>
        <div className="stadium-bubble sb-right-5"></div>
        <div className="stadium-bubble sb-right-6"></div>
      </div>

      {/* एम्बिएंट बैकग्राउंड ऑरा ग्लो */}
      {customSliderData.map((slide, index) => (
        <div
          key={`ambient-${slide.id}`}
          className={`absolute inset-0 w-full h-full z-0 pointer-events-none blur-3xl opacity-25 scale-110 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-25' : 'opacity-0'
          }`}
        >
          <Image src={slide.src} alt="Ambient Back" fill className="object-cover object-center" />
        </div>
      ))}

      {/* ─── मुख्य स्लाइडर ट्रैक (अब रेस्पॉन्सिव हाइट के साथ ताकि कोई टेक्स्ट न कटे) ─── */}
      <div className="relative w-full max-w-7xl z-10 px-4 sm:px-6 md:px-16 mt-20">
        {/* 'invisible' इमेज का इस्तेमाल करके कंटेनर को इमेज के नेचुरल एस्पेक्ट रेशियो में फैलाया है */}
        <div className="relative w-full overflow-hidden sm:rounded-2xl md:rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          
          {/* ये इमेज यूजर को नहीं दिखेगी, ये सिर्फ कंटेनर की विड्थ और हाइट को डिज़ाइन के हिसाब से ऑटो-एडजस्ट करेगी */}
          {customSliderData[0] && (
            <img 
              src={customSliderData[0].src} 
              alt="Structure Fallback" 
              className="w-full h-auto invisible pointer-events-none" 
            />
          )}

          {customSliderData.map((slide, index) => {
            let positionClass = "translate-x-full opacity-0";
            let inlineStyle = {};

            if (index === currentIndex) {
              positionClass = "translate-x-0 opacity-100";
              if (dragOffset !== 0) {
                inlineStyle = { transform: `translateX(${dragOffset}px)`, transition: 'none' };
              }
            } else if (index === (currentIndex - 1 + customSliderData.length) % customSliderData.length) {
              positionClass = "-translate-x-full opacity-0";
              if (dragOffset !== 0) {
                inlineStyle = { transform: `translateX(calc(-100% + ${dragOffset}px))`, transition: 'none', opacity: 0.5 };
              }
            } else if (index === (currentIndex + 1) % customSliderData.length) {
              positionClass = "translate-x-full opacity-0";
              if (dragOffset !== 0) {
                inlineStyle = { transform: `translateX(calc(100% + ${dragOffset}px))`, transition: 'none', opacity: 0.5 };
              }
            }

            return (
              <div
                key={slide.id}
                style={inlineStyle}
                className={`absolute inset-0 w-full h-full flex items-center justify-center ${
                  isDragging ? '' : 'transition-all duration-500 ease-out'
                } ${positionClass}`}
              >
                {/* अब बिना किसी एस्पेक्ट रेशियो बाइंडिंग के इमेज 100% ओरिजिनल प्रपोर्शन में रेंडर होगी */}
                <div className="relative w-full h-full pointer-events-none">
                  <img
                    src={slide.src}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── प्रिवियस (Prev) बटन ─── */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-purple-600 text-white p-2.5 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 cursor-pointer shadow-2xl hidden md:flex items-center justify-center active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* ─── नेक्स्ट (Next) बटन ─── */}
      <button
        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-purple-600 text-white p-2.5 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 cursor-pointer shadow-2xl hidden md:flex items-center justify-center active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* ─── बॉटम इंडिकेटर डॉट्स ─── */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-md px-4 py-2.5 rounded-full border border-white/10 max-w-[85%] overflow-x-auto scrollbar-none">
        {customSliderData.map((_, index) => (
          <button
            key={index}
            onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); setDragOffset(0); }}
            className={`h-2 rounded-full transition-all duration-300 shrink-0 cursor-pointer ${
              index === currentIndex
                ? 'w-7 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_12px_rgba(168,85,247,0.5)]'
                : 'w-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* ─── हैवी नीयन स्टेडियम बबल्स सीएसएस ─── */
        .stadium-bubble {
          position: absolute;
          border-radius: 50%;
          background: #bc66ff; 
          opacity: 0.55;
          animation: heavyStadiumFloat 11s ease-in-out infinite;
        }

        .sb-left-1 { width: 24px; height: 24px; left: 3%; top: 15%; box-shadow: 0 0 40px 20px #a855f7, 0 0 80px 40px #ec4899; animation-delay: 0s; }
        .sb-left-2 { width: 14px; height: 14px; left: 8%; top: 35%; box-shadow: 0 0 30px 15px #6366f1, 0 0 60px 25px #a855f7; animation-delay: -2s; animation-duration: 14s; }
        .sb-left-3 { width: 20px; height: 20px; left: 2%; top: 50%; box-shadow: 0 0 45px 22px #ec4899, 0 0 90px 45px #6366f1; animation-delay: -4s; animation-duration: 9s; }
        .sb-left-4 { width: 16px; height: 16px; left: 9%; top: 68%; box-shadow: 0 0 35px 18px #a855f7, 0 0 70px 35px #6366f1; animation-delay: -1s; animation-duration: 12s; }
        .sb-left-5 { width: 22px; height: 22px; left: 4%; top: 82%; box-shadow: 0 0 40px 20px #ec4899, 0 0 80px 40px #a855f7; animation-delay: -5s; animation-duration: 15s; }
        .sb-left-6 { width: 12px; height: 12px; left: 11%; top: 23%; box-shadow: 0 0 25px 12px #6366f1, 0 0 50px 25px #ec4899; animation-delay: -3s; animation-duration: 10s; }

        .sb-right-1 { width: 26px; height: 26px; right: 3%; top: 12%; box-shadow: 0 0 45px 22px #6366f1, 0 0 90px 45px #ec4899; animation-delay: -1.5s; animation-duration: 13s; }
        .sb-right-2 { width: 18px; height: 18px; right: 7%; top: 32%; box-shadow: 0 0 35px 18px #ec4899, 0 0 70px 35px #a855f7; animation-delay: -3.5s; }
        .sb-right-3 { width: 22px; height: 22px; right: 4%; top: 52%; box-shadow: 0 0 40px 20px #a855f7, 0 0 80px 40px #6366f1; animation-delay: -6s; animation-duration: 11s; }
        .sb-right-4 { width: 14px; height: 14px; right: 9%; top: 65%; box-shadow: 0 0 30px 15px #6366f1, 0 0 60px 30px #ec4899; animation-delay: -2.5s; animation-duration: 15s; }
        .sb-right-5 { width: 20px; height: 20px; right: 2%; top: 80%; box-shadow: 0 0 38px 19px #a855f7, 0 0 76px 38px #ec4899; animation-delay: -4.5s; animation-duration: 8s; }
        .sb-right-6 { width: 16px; height: 16px; right: 10%; top: 22%; box-shadow: 0 0 32px 16px #ec4899, 0 0 64px 32px #6366f1; animation-delay: -5.5s; animation-duration: 12s; }

        @keyframes heavyStadiumFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.55; }
          33% { transform: translate(15px, -35px) scale(1.15); opacity: 0.8; }
          66% { transform: translate(-15px, 30px) scale(0.9); opacity: 0.4; }
        }
      `}</style>

    </div>
  );
}