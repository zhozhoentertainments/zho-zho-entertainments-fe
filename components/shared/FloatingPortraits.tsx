"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const portraits = [
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop", x: "5%", y: "15%", size: 80, delay: 0 },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop", x: "85%", y: "10%", size: 100, delay: 0.2 },
  { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop", x: "10%", y: "75%", size: 90, delay: 0.4 },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop", x: "80%", y: "70%", size: 110, delay: 0.6 },
  { src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop", x: "40%", y: "5%", size: 120, delay: 0.8 },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop", x: "45%", y: "85%", size: 85, delay: 1.0 },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop", x: "90%", y: "40%", size: 95, delay: 1.2 },
  { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop", x: "2%", y: "45%", size: 75, delay: 1.4 },
];

export const FloatingPortraits = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40 mix-blend-multiply">
      {/* Slow orbital motion for the entire group */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
        className="relative w-full h-full"
      >
        {portraits.map((portrait, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full p-1 bg-white shadow-2xl border-2 border-purple-500/30"
            style={{
              left: portrait.x,
              top: portrait.y,
              width: portrait.size,
              height: portrait.size,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, 25, 0],
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: portrait.delay,
            }}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden grayscale-[50%] hover:grayscale-0 transition-all duration-700">
              <Image
                src={portrait.src}
                alt="Sponsor Partner"
                fill
                className="object-cover"
              />
            </div>
            
            {/* The signature PayAtom checkmark badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: portrait.delay + 1, type: "spring" }}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-tr from-purple-600 to-fuchsia-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-lg"
            >
              <Check size={12} strokeWidth={4} />
            </motion.div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-purple-500/5 blur-xl -z-10" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FloatingPortraits;
