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
    ZoomIn,
    Maximize
} from "lucide-react";

// ─── YOUR IMAGES ───
const realGalleryImages = [
    // --- Fan Village Images Added at the Top ---
    { id: 1, src: "/fan-village/_DSF0262.jpg", alt: "Fan Village Selfie Point with Traditional Attire" },
 
    { id: 7, src: "/fan-village/0D6A9747.jpg", alt: "Kho Kho Photo Booth Installation with Dancers" },
    { id: 8, src: "/fan-village/0D6A9757.jpg", alt: "Artists Performing Martial Arts or Folk Dance on Stage" },
    { id: 10, src: "/fan-village/A19I9026.jpg", alt: "Traditional Gujarati Garba or Folk Dance Group" },
    { id: 11, src: "/fan-village/DSC00023.jpg", alt: "Traditional Group Dance Performance on Lawn" },
    { id: 12, src: "/fan-village/MDI08153.jpg", alt: "Kho Kho India 2025 Creative Selfie Corner" },
    { id: 13, src: "/fan-village/MDI08175.jpg", alt: "Cultural Artist Posing in Front of Village Backdrop" },

    // --- Existing Old Event Images (IDs incremented dynamically) ---
    { id: 14, src: "/oldevent/_DSF0359.jpg", alt: "Championship Live Action" },
    { id: 15, src: "/oldevent/6F8A7271.JPG", alt: "Tournament Ground Segment" },
    { id: 16, src: "/oldevent/end.JPG", alt: "Closing Ceremony Track" },
    { id: 17, src: "/oldevent/IMGL0018.JPG", alt: "Team Distribution Lineup" },
    { id: 18, src: "/oldevent/india.JPG", alt: "National Format Activation" },
    { id: 19, src: "/oldevent/introduction-to-kho-kho.jpg", alt: "Introduction Blueprint Presentation" },
    { id: 20, src: "/oldevent/troffy.JPG", alt: "Official Winners Trophy Ceremony" },
    { id: 21, src: "/bangalore.jpg", alt: "Bangalore Hub Stadium" },
    { id: 22, src: "/chennai.jpg", alt: "Chennai Operations Center" },
  
    { id: 24, src: "/Dance-6.jpg", alt: "Cultural Performance Opener" },
];

const IMAGES_PER_PAGE = 6;

export default function GalleryPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [toastMessage, setToastMessage] = useState(null);

    const totalPages = Math.ceil(realGalleryImages.length / IMAGES_PER_PAGE);
    const indexOfLastImage = currentPage * IMAGES_PER_PAGE;
    const indexOfFirstImage = indexOfLastImage - IMAGES_PER_PAGE;
    const currentImages = realGalleryImages.slice(indexOfFirstImage, indexOfLastImage);

    const triggerToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 400, behavior: "smooth" });
    };

    const handleImageClick = (image) => {
        const actualIndex = realGalleryImages.findIndex(img => img.id === image.id);
        setSelectedImage(image);
        setSelectedIndex(actualIndex);
    };

    const handleNext = () => {
        if (selectedIndex < realGalleryImages.length - 1) {
            const nextIndex = selectedIndex + 1;
            setSelectedImage(realGalleryImages[nextIndex]);
            setSelectedIndex(nextIndex);
        }
    };

    const handlePrev = () => {
        if (selectedIndex > 0) {
            const prevIndex = selectedIndex - 1;
            setSelectedImage(realGalleryImages[prevIndex]);
            setSelectedIndex(prevIndex);
        }
    };

    return (
        <div className="w-full min-h-screen bg-white text-[#1a1523] font-sans overflow-x-hidden">

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900&display=swap');
        * { font-family: 'DM Sans', sans-serif !important; }
        ::-webkit-scrollbar { width: 8px; height: 8px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: #7c3aed; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #6d28d9; }
      `}</style>

            {/* Toast Notification */}
            <AnimatePresence>
                {toastMessage && (
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-900 to-red-800 text-white border border-red-700 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3"
                    >
                        <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                        <span className="text-xs font-bold tracking-wide uppercase">{toastMessage}</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <section className="mt-40 pt-12 pb-16 max-w-7xl mx-auto px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block text-[11px] font-bold text-[#7c3aed] uppercase tracking-[0.3em] mb-4 bg-purple-50 px-4 py-2 rounded-full"
                    >
                        Asset Operations Log
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-[#1a1523] tracking-tighter"
                    >
                        Our Media{' '}
                        <span className="text-[#7c3aed] font-black">Gallery</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100px" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-1 bg-gradient-to-r from-[#7c3aed] to-[#a855f7] mx-auto mt-6 rounded-full"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-600 text-sm md:text-base mt-6 max-w-2xl mx-auto"
                    >
                        Visual tracking repository engine optimized for high-end rendering of tournament event milestones
                    </motion.p>
                </motion.div>
            </section>

            {/* Gallery Grid */}
            <main className="max-w-7xl mx-auto px-4 md:px-8 pb-12">
                <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {currentImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative w-full"
                            style={{ aspectRatio: '4/3' }}
                        >
                            <ImageCard
                                image={image}
                                index={indexOfFirstImage + index}
                                onSelect={() => handleImageClick(image)}
                                triggerToast={triggerToast}
                            />
                        </div>
                    ))}
                </motion.div>
            </main>

            {/* Pagination */}
            {totalPages > 1 && (
                <section className="py-12 max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <div className="text-sm text-gray-500">
                            Page {currentPage} of {totalPages}
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button
                                onClick={() => handlePageChange(1)}
                                disabled={currentPage === 1}
                                className="hidden md:flex w-10 h-10 rounded-xl items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-purple-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <span className="text-sm font-bold">«</span>
                            </button>

                            <button
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-purple-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => {
                                    const pageNum = i + 1;
                                    if (totalPages > 7) {
                                        if (pageNum === 1 || pageNum === totalPages || (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)) {
                                            return (
                                                <motion.button
                                                    key={pageNum}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={() => handlePageChange(pageNum)}
                                                    className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 ${currentPage === pageNum
                                                        ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-lg shadow-purple-500/25"
                                                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-purple-200"
                                                        }`}
                                                >
                                                    {String(pageNum).padStart(2, '0')}
                                                </motion.button>
                                            );
                                        } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                                            return <span key={pageNum} className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>;
                                        }
                                        return null;
                                    }
                                    return (
                                        <motion.button
                                            key={pageNum}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handlePageChange(pageNum)}
                                            className={`w-10 h-10 rounded-xl text-sm font-bold transition-all duration-300 ${currentPage === pageNum
                                                ? "bg-gradient-to-r from-[#7c3aed] to-[#a855f7] text-white shadow-lg shadow-purple-500/25"
                                                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-purple-200"
                                                }`}
                                        >
                                            {String(pageNum).padStart(2, '0')}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            <button
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="w-10 h-10 rounded-xl flex items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-purple-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>

                            <button
                                onClick={() => handlePageChange(totalPages)}
                                disabled={currentPage === totalPages}
                                className="hidden md:flex w-10 h-10 rounded-xl items-center justify-center border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:border-purple-200 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
                            >
                                <span className="text-sm font-bold">»</span>
                            </button>
                        </div>

                        <div className="text-xs text-gray-400 mt-2">
                            Showing {indexOfFirstImage + 1} to {Math.min(indexOfLastImage, realGalleryImages.length)} of {realGalleryImages.length} images
                        </div>
                    </motion.div>
                </section>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <LightboxModal
                        image={selectedImage}
                        onClose={() => {
                            setSelectedImage(null);
                            setSelectedIndex(null);
                        }}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        hasNext={selectedIndex < realGalleryImages.length - 1}
                        hasPrev={selectedIndex > 0}
                        currentIndex={selectedIndex}
                        totalImages={realGalleryImages.length}
                        triggerToast={triggerToast}
                    />
                )}
            </AnimatePresence>

            <footer className="py-12 bg-white border-t border-gray-100 text-center">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-[10px] font-bold tracking-[0.24em] uppercase text-gray-400">
                        Zho Zho Repository Engine · Clean Fail-Safe Image Buffer Layer
                    </p>
                </div>
            </footer>
        </div>
    );
}

// ─── IMAGE CARD ───
function ImageCard({ image, index, onSelect, triggerToast }) {
    const [status, setStatus] = useState("loading");
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
            whileHover={{ y: -8 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={() => status === "success" && onSelect()}
            className={`relative w-full h-full rounded-2xl overflow-hidden bg-gray-100 cursor-pointer group ${status === "success" ? "shadow-lg hover:shadow-2xl" : "shadow-md"}`}
            style={{ aspectRatio: '4/3' }}
        >
            {/* Loading */}
            <AnimatePresence>
                {status === "loading" && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 z-10"
                    >
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            <Loader2 className="w-8 h-8 text-[#7c3aed]" />
                        </motion.div>
                        <span className="text-xs text-gray-400 mt-3 font-medium">Loading...</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error */}
            <AnimatePresence>
                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 z-10 p-6 text-center"
                    >
                        <div className="bg-red-500/10 p-3 rounded-full mb-3">
                            <AlertTriangle className="w-8 h-8 text-red-500" />
                        </div>
                        <p className="text-xs text-red-600 font-semibold mb-2">Failed to load</p>
                        <p className="text-[10px] text-gray-600 break-all mb-4">{image.src.split('/').pop()}</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => { e.stopPropagation(); setStatus("loading"); }}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white text-xs font-bold shadow-lg"
                        >
                            <RefreshCw className="w-3 h-3 inline mr-2" /> Try Again
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image */}
            {status !== "error" && (
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-all duration-700"
                        style={{ transform: isHovered && status === "success" ? 'scale(1.1)' : 'scale(1)' }}
                        priority={index < 6}
                        onLoadingComplete={() => setStatus("success")}
                        onError={() => { setStatus("error"); triggerToast(`Failed: ${image.src.split('/').pop()}`); }}
                    />
                </div>
            )}

            {/* Hover Overlay */}
            <AnimatePresence>
                {isHovered && status === "success" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <p className="text-white text-xs md:text-sm font-semibold line-clamp-2">{image.alt}</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 md:p-2">
                                    <ZoomIn className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                </div>
                                <div className="bg-white/20 backdrop-blur-md rounded-full p-1.5 md:p-2">
                                    <Maximize className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Index Badge */}
            {status === "success" && (
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute top-3 left-3 bg-black/50 backdrop-blur-md rounded-lg px-2 py-1 z-10"
                >
                    <span className="text-white text-[10px] font-bold">{String(index + 1).padStart(2, '0')}</span>
                </motion.div>
            )}
        </motion.div>
    );
}

// ─── LIGHTBOX MODAL ───
function LightboxModal({ image, onClose, onNext, onPrev, hasNext, hasPrev, currentIndex, totalImages, triggerToast }) {
    const [modalStatus, setModalStatus] = useState("loading");

    // Reset status when image changes
    useEffect(() => {
        setModalStatus("loading");
    }, [image.src]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' && hasNext) onNext();
            if (e.key === 'ArrowLeft' && hasPrev) onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, onNext, onPrev, hasNext, hasPrev]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            // Backdrop — clicking it closes the modal
            className="fixed inset-0 z-[9999] bg-black/95"
            onClick={onClose}
        >
            {/* ── TOP BAR: counter left, close button right ── */}
            <div
                className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-4 z-[10001]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Image counter */}
                <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                    <span className="text-white text-sm font-semibold">
                        {String(currentIndex + 1).padStart(2, '0')} / {String(totalImages).padStart(2, '0')}
                    </span>
                </div>

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
                    aria-label="Close lightbox"
                >
                    <X className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* ── LEFT ARROW ── */}
            {hasPrev && (
                <button
                    onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 active:scale-95 backdrop-blur-md transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </button>
            )}

            {/* ── RIGHT ARROW ── */}
            {hasNext && (
                <button
                    onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 hover:bg-white/40 active:scale-95 backdrop-blur-md transition-all duration-200 flex items-center justify-center shadow-xl cursor-pointer"
                    aria-label="Next image"
                >
                    <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </button>
            )}

            {/* ── IMAGE AREA ── */}
            <div
                className="absolute inset-0 flex items-center justify-center px-20 pt-20 pb-20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Loading */}
                {modalStatus === "loading" && (
                    <div className="flex flex-col items-center justify-center gap-4">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                            <Loader2 className="w-12 h-12 text-purple-400" />
                        </motion.div>
                        <span className="text-white/70 text-sm font-medium">Loading high resolution...</span>
                    </div>
                )}

                {/* Error */}
                {modalStatus === "error" && (
                    <div className="flex flex-col items-center justify-center text-white p-4 text-center">
                        <div className="bg-red-500/20 p-4 rounded-full mb-4">
                            <AlertTriangle className="w-16 h-16 text-red-400" />
                        </div>
                        <p className="text-xl font-bold mb-2">Failed to Load Image</p>
                        <p className="text-sm text-gray-400 mb-6 break-all">{image.src.split('/').pop()}</p>
                        <button
                            onClick={() => setModalStatus("loading")}
                            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm font-bold shadow-lg hover:shadow-purple-500/25 transition-all"
                        >
                            <RefreshCw className="w-4 h-4 inline mr-2" /> Try Again
                        </button>
                    </div>
                )}

                {/* Image */}
                {modalStatus !== "error" && (
                    <div className="relative w-full h-full">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={100}
                            priority
                            className="object-contain"
                            onLoadingComplete={() => setModalStatus("success")}
                            onError={() => {
                                setModalStatus("error");
                                triggerToast("Failed to load high-resolution image");
                            }}
                        />
                    </div>
                )}
            </div>

            {/* ── CAPTION BAR ── */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-5 z-[10001]"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="max-w-6xl mx-auto">
                    <p className="text-white text-base font-semibold">{image.alt}</p>
                    <p className="text-white/50 text-xs mt-0.5">{image.src.split('/').pop()}</p>
                </div>
            </div>
        </motion.div>
    );
}