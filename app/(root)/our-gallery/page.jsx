"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  Loader2, 
  X, 
  RefreshCw, 
  AlertTriangle,
  Sparkles
} from "lucide-react";

// ─── EXACT 100% MATCHED MAPPING FROM YOUR VS CODE TREE (CASE FIXED) ───
const realGalleryImages = [
  { id: 1, src: "/oldevent/_DSF0359.jpg", alt: "Championship Live Action" },
  { id: 2, src: "/oldevent/6F8A7271.JPG", alt: "Tournament Ground Segment" }, // Fixed .JPG extension
  { id: 3, src: "/oldevent/end.JPG", alt: "Closing Ceremony Track" },            // Fixed .JPG extension
  { id: 4, src: "/oldevent/IMGL0018.JPG", alt: "Team Distribution Lineup" },    // Fixed .JPG extension
  { id: 5, src: "/oldevent/india.JPG", alt: "National Format Activation" },      // Fixed .JPG extension
  { id: 6, src: "/oldevent/introduction-to-kho-kho.jpg", alt: "Introduction Blueprint Presentation" },
  { id: 7, src: "/oldevent/troffy.JPG", alt: "Official Winners Trophy Ceremony" }, // Fixed .JPG extension
  { id: 8, src: "/bangalore.jpg", alt: "Bangalore Hub Stadium" },
  { id: 9, src: "/chennai.jpg", alt: "Chennai Operations Center" },
  { id: 10, src: "/Delhi.jpg", alt: "Delhi Arena Track Showcase" },             // Fixed capital 'D'
  { id: 11, src: "/Dance-6.jpg", alt: "Cultural Performance Opener" },           // Fixed capital 'D'
  { id: 12, src: "/3d.png", alt: "3D Venue Asset Layout Mapping" }
];

const IMAGES_PER_PAGE = 10;

export default function GalleryPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Pagination Engine
  const totalPages = Math.ceil(realGalleryImages.length / IMAGES_PER_PAGE);
  const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
  const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
  const currentImages = realGalleryImages.slice(indexOfFirstImage, indexOfLastImage);

  // Toast Handler
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-[#faf9f7] text-[#1a1523] overflow-x-hidden font-sans scope-zhozho-gallery-portal">
      
      {/* SCOPED FONT FOR THE ENTIRE PORTAL */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;0,9..40,900&display=swap');

        .scope-zhozho-gallery-portal, 
        .scope-zhozho-gallery-portal div, 
        .scope-zhozho-gallery-portal h1, 
        .scope-zhozho-gallery-portal h2, 
        .scope-zhozho-gallery-portal p, 
        .scope-zhozho-gallery-portal span, 
        .scope-zhozho-gallery-portal button {
          font-family: 'DM Sans', sans-serif !important;
        }

        @keyframes draw-curve-underline {
          to { stroke-dashoffset: 0; }
        }
        .animate-gallery-bar {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: draw-curve-underline 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* DYNAMIC TOAST LAYER */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 bg-red-900/95 backdrop-blur-md text-white border border-red-700 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3"
          >
            <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
            <span className="text-xs font-bold tracking-wide uppercase">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── DYNAMIC HEADER INTERFACE ─── */}
      <section className="mt-40 pt-12 pb-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200/60 pb-12">
          <div className="space-y-3">
            <span className="text-[11px] font-bold text-[#7c3aed] uppercase tracking-[0.25em] block">Asset Operations Log</span>
            <div className="relative inline-block pb-3">
              <h1 className="text-3xl md:text-5xl font-black text-[#1a1523] tracking-tighter leading-none">
                Our Media <span className="text-[#7c3aed]">Gallery</span>
              </h1>
              <div className="absolute -bottom-1 left-0 w-full h-3 max-w-[180px] md:max-w-[240px]">
                <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#f07167" strokeWidth="4" strokeLinecap="round" opacity="0.12" />
                  <path d="M10,12 C90,4 180,14 240,9 C290,5 340,11 390,7" fill="none" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" className="animate-gallery-bar" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-sm font-normal leading-relaxed md:pb-1">
            Visual tracking repository engine optimized for high-end rendering of tournament event milestones.
          </p>
        </div>
      </section>

      {/* ─── GRID REPOSITORY CANVAS ─── */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentImages.map((image, index) => (
            <ImageCard 
              key={image.id} 
              image={image} 
              index={index} 
              onSelect={() => setSelectedImage(image)} 
              triggerToast={triggerToast}
            />
          ))}
        </div>
      </main>

      {/* ─── PAGINATION STRUCTURE ─── */}
      {totalPages > 1 && (
        <section className="py-12 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center bg-white border border-gray-200/60 p-2 rounded-2xl shadow-sm gap-1">
            <button
              onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-transparent disabled:opacity-40 disabled:hover:bg-transparent hover:bg-gray-50 text-gray-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => {
              const pageNum = i + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-xl text-xs font-bold transition-all border ${
                    isActive ? "bg-[#7c3aed] text-white border-transparent shadow-md shadow-purple-600/10" : "bg-white border-transparent text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {String(pageNum).padStart(2, '0')}
                </button>
              );
            })}

            <button
              onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-transparent disabled:opacity-40 disabled:hover:bg-transparent hover:bg-gray-50 text-gray-600"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* ─── DYNAMIC LIGHTBOX MODAL ─── */}
      <AnimatePresence>
        {selectedImage && (
          <LightboxModal 
            image={selectedImage} 
            onClose={() => setSelectedImage(null)} 
            triggerToast={triggerToast}
          />
        )}
      </AnimatePresence>

      <footer className="py-10 bg-white border-t border-gray-100 text-center">
        <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-gray-400">
          Zho Zho Repository Engine · Clean Fail-Safe Image Buffer Layer
        </p>
      </footer>
    </div>
  );
}

// ─── ISOLATED SINGLE CARD CARD ENGINE ───
function ImageCard({ image, index, onSelect, triggerToast }) {
  const [status, setStatus] = useState("loading"); // loading | success | error
  const [retryQuery, setRetryQuery] = useState("");

  const handleRetry = (e) => {
    e.stopPropagation();
    setStatus("loading");
    setRetryQuery(`?retry=${Date.now()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.02 }}
      whileHover={status === "success" ? { y: -4, boxShadow: "0 12px 28px rgba(0,0,0,0.06)" } : {}}
      onClick={() => status === "success" && onSelect()}
      className={`relative rounded-2xl overflow-hidden aspect-[4/3.2] border bg-white flex items-center justify-center group min-h-[180px] ${
        status === "success" ? "cursor-pointer border-gray-200/50" : "border-gray-200"
      }`}
    >
      {/* Individual Loader visible directly on each card container block */}
      {status === "loading" && (
        <div className="absolute inset-0 bg-[#fbfbfa] flex flex-col items-center justify-center space-y-2 z-10">
          <Loader2 className="w-5 h-5 text-[#7c3aed] animate-spin" />
        </div>
      )}

      {/* Explicit Error Handler UI */}
      {status === "error" && (
        <div className="absolute inset-0 bg-red-50/40 flex flex-col items-center justify-center p-4 text-center space-y-2.5 z-10">
          <div className="text-red-500 flex flex-col items-center gap-1">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-[10px] font-black tracking-wider uppercase text-red-700">Failed to stream</span>
          </div>
          <button 
            onClick={handleRetry}
            className="px-2.5 py-1.5 rounded-lg bg-white border border-red-200 text-[11px] font-bold text-red-700 shadow-sm hover:bg-red-50 transition-colors flex items-center gap-1.5"
          >
            <RefreshCw className="w-3 h-3" /> Retry Path
          </button>
        </div>
      )}

      <Image
        src={`${image.src}${retryQuery}`}
        alt={image.alt}
        fill
        sizes="(max-w-640px) 100vw, (max-w-1024px) 33vw, 25vw"
        loading="lazy"
        onLoad={() => setStatus("success")}
        onError={() => {
          setStatus("error");
          triggerToast(`Broken File Stream Target: ${image.src.split('/').pop()}`);
        }}
        className={`object-cover transition-all duration-500 ${
          status === "success" ? "opacity-100 blur-0 group-hover:scale-105" : "opacity-0 blur-md"
        }`}
      />
    </motion.div>
  );
}

// ─── HIGH END LIGHTBOX MODAL ───
function LightboxModal({ image, onClose, triggerToast }) {
  const [modalStatus, setModalStatus] = useState("loading");
  const [modalRetryQuery, setModalRetryQuery] = useState("");

  const handleModalRetry = () => {
    setModalStatus("loading");
    setModalRetryQuery(`?retry=${Date.now()}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#090b11]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-bold tracking-wider uppercase text-gray-300">{image.alt}</span>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="relative max-w-5xl w-full aspect-[4/3] flex items-center justify-center">
        {modalStatus === "loading" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 text-white">
            <Loader2 className="w-6 h-6 text-[#7c3aed] animate-spin" />
            <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Fetching High-Res...</span>
          </div>
        )}

        {modalStatus === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-4">
            <div className="text-red-400 flex flex-col items-center gap-2">
              <AlertTriangle className="w-8 h-8" />
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">High-Res Stream Disconnected</h3>
            </div>
            <button 
              onClick={handleModalRetry}
              className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold shadow-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Re-Fetch Image Asset
            </button>
          </div>
        )}

        <Image
          src={`${image.src}${modalRetryQuery}`}
          alt={image.alt}
          fill
          quality={95}
          priority
          sizes="(max-w-1280px) 100vw"
          onLoad={() => setModalStatus("success")}
          onError={() => {
            setModalStatus("error");
            triggerToast("Modal stream mapping interface failure.");
          }}
          className={`object-contain transition-all duration-500 ${
            modalStatus === "success" ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
          }`}
        />
      </div>
    </motion.div>
  );
}