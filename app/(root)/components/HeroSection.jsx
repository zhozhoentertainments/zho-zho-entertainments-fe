import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

// ─── 🛠️ आपका मैन्युअल इमेजेस और कलर्स का डेटा एरे ───
const customSliderData = [
  { id: 1, src: "/slider/1.png", bgColor: "bg-[#110024]" },
  { id: 2, src: "/slider/2.png", bgColor: "bg-[#1A0033]" },
  { id: 3, src: "/slider/3.png", bgColor: "bg-[#0D001A]" },
  { id: 4, src: "/slider/4.png", bgColor: "bg-[#16002C]" },
  // नई इमेज जोड़ने के लिए बस नीचे इस तरह लाइन बढ़ा दें:
  // { id: 5, src: "/slider/my-new-image.png", bgColor: "bg-[#110024]" },
];

export default function UltimatePerfectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const containerWidth = useRef(0);
  const containerRef = useRef(null);

  // एरे खाली होने पर क्रैश से बचाने के लिए सेफ फॉलबैक
  const currentBg = customSliderData[currentIndex]?.bgColor || "bg-[#110024]";

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % customSliderData.length);
    setDragOffset(0);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + customSliderData.length) % customSliderData.length);
    setDragOffset(0);
  };

  // ऑटो-प्ले
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

      {/* ─── मुख्य स्लाइडर ट्रैक ─── */}
      <div className="relative w-full max-w-7xl aspect-video z-10 flex items-center justify-center px-0 sm:px-4 md:px-8 mt-20">
        <div className="relative w-full h-full overflow-hidden sm:rounded-2xl md:rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/20">

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
                <div className="relative w-full h-full pointer-events-none">
                  <Image
                    src={slide.src}
                    alt={`Slide ${slide.id}`}
                    fill
                    priority={index === 0}
                    className="object-fill sm:object-cover object-center"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── प्रिवियस (Prev) बटन: टैबलेट/मोबाइल पर छुपा हुआ, डेस्कटॉप पर स्क्रीन के कोने पर ─── */}
      <button
        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-purple-600 text-white p-2.5 sm:p-4 rounded-full backdrop-blur-md transition-all duration-300 border border-white/10 cursor-pointer shadow-2xl hidden md:flex items-center justify-center active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* ─── नेक्स्ट (Next) बटन: टैबलेट/मोबाइल पर छुपा हुआ, डेस्कटॉप पर स्क्रीन के कोने पर ─── */}
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
      `}</style>

    </div>
  );
}