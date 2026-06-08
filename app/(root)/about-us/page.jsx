"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  FaBullseye,
  FaEye,
  FaStar,
  FaUsers,
  FaBriefcase,
  FaQuoteLeft,
  FaGlobe,
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import RecentActivities from "../components/RecentActivities.jsx";
import OurTeam from "../components/OurTeam.jsx";

export default function AboutUs() {
  const canvasRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { src: "/events/team-event.JPG", alt: "Event Production" },
    { src: "/events/medals.JPG", alt: "Global Entertainment" },
  ];

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Canvas particle effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 30;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 2 + 1;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(138, 57, 225, 0.12)";
        ctx.fill();
      }
    }

    const init = () => {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(138, 57, 225, ${0.06 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative bg-white py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Soft Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Header - About Us */}
        <div className="text-center mt-20 mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-4">
            <FaGlobe className="text-[#8A39E1] text-xs" />
            <span className="text-xs font-semibold text-[#8A39E1] tracking-wide">KNOW US BETTER</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0B0214] tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8A39E1] to-[#B362FF]">Us</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#8A39E1] to-amber-400 mx-auto mt-4 rounded-full" />
        </div>



        {/* Our Narrative Section with Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left Side - Our Narrative */}
          <div className="space-y-5">
            <div>
              <span className="text-sm font-bold text-[#8A39E1] uppercase tracking-wider border-l-4 border-[#8A39E1] pl-3">
                OUR NARRATIVE
              </span>
            </div>
            <p className="text-lg font-semibold text-gray-800">
              We don't just manage events; we architect experiences that resonate.
            </p>
            <p className="text-gray-600 leading-relaxed">
              <strong className="text-[#0B0214]">Zho Zho Entertainments</strong> is a new-generation creative powerhouse redefining how events are conceptualized and delivered.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From high-octane sporting arenas to intimate corporate retreats, our mission is to build a world-class enterprise that delivers exceptional creative experiences across every platform.
            </p>
            <div className="bg-purple-50 border-l-4 border-[#8A39E1] p-4 rounded-r-lg my-4">
              <p className="text-[#8A39E1] font-semibold italic">
                "Events that Speak. Moments that Stay."
              </p>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We live by this simple promise. We believe in the power of storytelling to enrich lives and the precision of strategy to drive ROI.
            </p>
          </div>

          {/* Right Side - Circular Animated Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full animate-spin-slow">
                <div className="absolute inset-[-4px] rounded-full bg-gradient-to-r from-[#8A39E1] via-purple-400 to-amber-400 opacity-80" />
                <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#8A39E1] via-purple-400 to-amber-400 opacity-100 blur-sm animate-pulse" />
              </div>

              {/* Inner Circle with Rotating Images */}
              <div className="absolute inset-[8px] rounded-full overflow-hidden shadow-2xl">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-all duration-1000 ${idx === currentImageIndex ? "opacity-100 scale-100" : "opacity-0 scale-110"
                      }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${idx === currentImageIndex
                      ? "w-6 h-2 bg-[#8A39E1]"
                      : "w-2 h-2 bg-gray-300 hover:bg-[#8A39E1]/50"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LEFT-RIGHT SPLIT SECTION - Both sections same style with enhanced hover */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">

          {/* LEFT SIDE - Our Core Pillars */}
          <div className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-purple-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300">
                <FaStar className="text-[#8A39E1] text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B0214] mb-1">
                Our <span className="text-[#8A39E1]">Core Pillars</span>
              </h2>
              <p className="text-gray-500 text-sm">The foundation that drives everything we do</p>
            </div>

            <div className="space-y-4">
              {/* Mission Card */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <FaBullseye className="text-[#8A39E1] text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-[#8A39E1] transition-colors duration-300">Our Mission</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      To build a world-class entertainment enterprise that produces, promotes, and delivers exceptional creative experiences across all platforms, inspiring action and connections nationwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vision Card */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                    <FaEye className="text-amber-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-amber-600 transition-colors duration-300">Our Vision</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      We are on a trajectory to become a{" "}
                      <span className="font-bold text-[#8A39E1] group-hover:text-[#8A39E1]">₹100 Cr</span> global entertainment brand. By pushing the boundaries of luxury entertainment and cinematic experiences, we aim to shape the future.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objectives Card */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <FaRocket className="text-[#8A39E1] text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-[#8A39E1] transition-colors duration-300">Our Objectives</h3>
                    <ul className="text-gray-500 text-sm space-y-1 group-hover:text-gray-700 transition-colors duration-300">
                      <li className="flex items-start gap-2">
                        <span className="text-[#8A39E1] group-hover:translate-x-1 transition-transform duration-300">▹</span>
                        <span>Deliver exceptional creative experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8A39E1] group-hover:translate-x-1 transition-transform duration-300">▹</span>
                        <span>Build a ₹100 Cr global brand</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8A39E1] group-hover:translate-x-1 transition-transform duration-300">▹</span>
                        <span>Push boundaries of luxury entertainment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#8A39E1] group-hover:translate-x-1 transition-transform duration-300">▹</span>
                        <span>Shape future of music, sports & gaming</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - The Zho Zho Edge */}
          <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:border-amber-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full mb-3">
                <FaStar className="text-amber-500 text-lg" />
              </div>
              <h2 className="text-2xl font-bold text-[#0B0214] mb-1">
                Why Choose Us <span className="text-amber-500">?</span>
              </h2>
              <p className="text-gray-500 text-sm">Why we lead with excellence</p>
            </div>

            <div className="space-y-4">
              {/* Card 1 */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <FaHandshake className="text-[#8A39E1] text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-[#8A39E1] transition-colors duration-300">Purpose-Driven Leadership</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      We focus on events that drive real-world impact and social change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 group-hover:scale-110 transition-all duration-300">
                    <FaUsers className="text-amber-500 text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-amber-600 transition-colors duration-300">Strong Support Network
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      A vast, energized ecosystem of volunteers, professionals, and strategic partners.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group bg-gray-50/50 rounded-xl p-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                    <FaChartLine className="text-[#8A39E1] text-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B0214] mb-1 group-hover:text-[#8A39E1] transition-colors duration-300">Flawless Synthesis</h3>
                    <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      We bridge the gap between creative concept and reality through seamless, strategic planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <OurTeam />
      <RecentActivities />
      <div class="w-full max-w-5xl mx-auto py-10 px-6 bg-white border-y border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left select-none">

        <div class="font-sans tracking-tight">
          <span class="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
            Orangehub
          </span>
          <span class="text-xl sm:text-2xl md:text-3xl font-light text-slate-400 mx-2">
            is now
          </span>
          <span class="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Zho-Zho Entertainments
          </span>
        </div>

        <div class="flex-shrink-0">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider text-purple-700 uppercase bg-purple-50 border border-purple-100">
            <span class="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            Official
          </span>
        </div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </section>
  );
}