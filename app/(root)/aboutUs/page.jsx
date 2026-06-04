"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FaEye,
  FaBullseye,
  FaStar,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

export default function AboutUs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 45; // Density of the connectivity network

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.6; // Soft productivity flow speed
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 2 + 1.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce back smoothly from edges
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(138, 57, 225, 0.25)"; // Purple brand color node
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
      if (!ctx) return;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // If nodes get close, draw a connecting dynamic bridge line
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity scales up dynamically when nodes draw near (High connection strength)
            ctx.strokeStyle = `rgba(138, 57, 225, ${0.12 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!ctx) return;
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
    <section className="relative bg-white mt-11 text-slate-800 pt-32 pb-20 px-6 sm:px-12 md:px-20 min-h-screen overflow-hidden">
      
      {/* Interactive Live Connectivity Canvas Background Asset */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Soft, Fluid Light Background Shapes & Lines */}
      <div className="absolute top-[5%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-200/20 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-amber-100/30 blur-[110px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto z-10 space-y-32">
        {/* SECTION 1: HERO / OUR NARRATIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-left space-y-6 lg:pr-6">
            <span className="text-xs font-bold tracking-widest text-[#8A39E1] uppercase bg-purple-100/60 border border-purple-200/40 px-4 py-2 rounded-full inline-block">
              Our Narrative
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B0214] tracking-tight leading-tight">
              More Than Moments.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#130928] to-[#8A39E1]">
                We Create Movements.
              </span>
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl pt-2">
              <p>
                We don’t just manage events; we architect experiences that
                resonate.{" "}
                <strong className="text-[#0B0214] font-semibold">
                  Zho Zho Entertainments
                </strong>{" "}
                is a new-generation event management company and creative
                powerhouse redefining how events are conceptualized and
                delivered.
              </p>
              <p>
                With a dynamic approach and a strong focus on innovation, we
                specialize in curating and executing a diverse range of
                events—including high-energy sports events, vibrant cultural
                experiences, and professionally managed government and corporate
                engagements.
              </p>
              <p>
                From high-octane sporting arenas to intimate corporate retreats,
                our mission is to build a world-class enterprise that delivers
                exceptional creative experiences across every platform.
              </p>
              <p className="text-[#8A39E1] font-bold italic border-l-4 border-[#8A39E1] pl-4 my-5 bg-purple-50/50 py-2 pr-2 rounded-r-xl">
                "Events that Speak. Moments that Stay."
              </p>
              <p>
                We live by this simple promise. We believe in the power of
                storytelling to enrich lives and the precision of strategy to
                drive ROI.
              </p>
            </div>
          </div>

          {/* IMAGE DESIGN: Asymmetric Fluid Border Mask Frame with Neon Gradient Effect */}
          <div className="lg:col-span-5 relative h-[450px] w-full p-4 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#8A39E1]/20 via-purple-500/10 to-[#E2A855]/20 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] animate-[pulse_8s_infinite_alternate]" />
            <div className="relative w-full h-full rounded-[40%_60%_70%_30%_/_40%_50%_50%_60%] overflow-hidden border border-purple-200/40 shadow-xl shadow-purple-950/5">
              <Image
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800"
                alt="Movements Production Concept"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover scale-105"
                priority
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: THE ZHO ZHO PHILOSOPHY */}
        <div className="relative max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-50 via-white to-amber-50/50 border border-purple-100/50 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-[#8A39E1] flex items-center justify-center text-white shadow-md">
            <FaQuoteLeft size={14} />
          </div>
          <span className="text-xs font-bold tracking-widest text-amber-600 uppercase block mb-3">
            The Zho Zho Philosophy
          </span>
          <h2 className="text-3xl font-black text-[#0B0214] tracking-tight">
            Engineering Emotion. Igniting Movements.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            At the heart of everything we build is a commitment to shifting
            paradigms. We combine deep strategic architecture with explosive
            artistic production to impact human emotions dynamically.
          </p>
        </div>

        {/* SECTION 3: VISION AND MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission Card */}
          <div className="relative bg-white/70 border border-purple-100/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left space-y-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/90">
            <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#8A39E1]">
              <FaBullseye size={20} />
            </div>
            <h2 className="text-2xl font-black text-[#0B0214]">Our Mission</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To build a world-class entertainment enterprise that produces,
              promotes, and delivers exceptional creative experiences across all
              platforms, inspiring action and connections nationwide. We
              vision becoming a{" "}
              <span className="font-bold text-[#8A39E1]">₹100 Cr</span> brand
              that inspires action and connection nationwide.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white/70 border border-purple-100/60 backdrop-blur-md rounded-2xl p-8 sm:p-10 text-left space-y-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white/90">
            <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#E2A855]">
              <FaEye size={20} />
            </div>
            <h2 className="text-2xl font-black text-[#0B0214]">Our Vision</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              To be a leading, diversified entertainment organisation recognised
              for creative excellence, technological innovation, and social
              impact — shaping the future of entertainment across sports, music,
              culture, gaming, travel, and live experiences. We are on a
              trajectory to become a{" "}
              <span className="font-bold text-[#8A39E1]">₹100 Cr</span> global
              entertainment brand. By pushing the boundaries of luxury
              entertainment and cinematic experiences, we aim to shape the
              future of how the world experiences music, sports, gaming, and
              travel.
            </p>
          </div>
        </div>

        {/* SECTION 4: THE ZHO ZHO EDGE (WHY WE LEAD) */}
        <div className="text-center space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B0214]">
              The Zho Zho Edge: Why We Lead
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
              We deliver excellence through a powerful combination of
              leadership, community assets, and strategic creative execution.
            </p>
          </div>

          {/* The Mapped Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaStar size={18} />,
                title: "Purpose-Driven Leadership / Why Let's Star",
                desc: "Highly committed leadership focused on creating events that matter, drive real-world impact, and spark meaningful social change.",
              },
              {
                icon: <FaUsers size={18} />,
                title: "The Kinetic Network / Why Our Users",
                desc: "A vast network and energized ecosystem of volunteers, sports professionals, and dedicated partner organizations nationwide.",
              },
              {
                icon: <FaBriefcase size={18} />,
                title: "Flawless Synthesis / Why Choose Us?",
                desc: "Seamless planning, creative execution, and outstanding event experiences—bridging the gap between creative concept and reality.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/70 border border-slate-200/60 rounded-2xl p-8 text-left space-y-4 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#8A39E1]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B0214] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: CALL TO ACTION BANNER (MAX WIDTH & HIGH CONVERSION METRICS) */}
        <div className="relative rounded-3xl p-12 md:p-16 text-center bg-gradient-to-br from-[#120323] via-[#0b0116] to-[#04000a] text-white overflow-hidden shadow-2xl shadow-purple-950/40 max-w-7xl mx-auto group border border-white/5 backdrop-blur-xl">
          {/* Ambient Mesh Backgrounds & Micro-Animations */}
          <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#8A39E1]/20 to-amber-500/10 blur-[100px] mix-blend-screen transition-transform duration-1000 group-hover:scale-110 pointer-events-none z-0 animate-[spin_30s_linear_infinite]" />
          <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[80px] pointer-events-none z-0" />

          {/* Subtle Grid Overlay Pattern for Depth */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none z-0" />

          <div className="relative z-10 space-y-12">
            {/* Header Block */}
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-purple-200">
                  Scale Your Experience
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300">
                Ready to create something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-400 to-purple-600">
                  extraordinary?
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto font-medium leading-relaxed">
                Bring your strategic vision to life with precision production,
                cinematic scale, and flawless live execution across every
                channel.
              </p>
            </div>

            {/* Productivity Metric Integration Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-b border-white/10 py-8 my-4 backdrop-blur-sm bg-white/[0.01] rounded-2xl px-4">
              <div className="space-y-1 text-center sm:text-left sm:pl-6 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <div className="text-2xl font-black text-amber-400">100%</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Turnkey Execution
                </div>
              </div>
              <div className="space-y-1 text-center sm:text-left sm:pl-6 border-b sm:border-b-0 sm:border-r border-white/10 pb-4 sm:pb-0">
                <div className="text-2xl font-black text-white">End-to-End</div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Strategy &amp; ROI Mapping
                </div>
              </div>
              <div className="space-y-1 text-center sm:text-left sm:pl-6">
                <div className="text-2xl font-black text-purple-400">
                  Nationwide
                </div>
                <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Network Delivery
                </div>
              </div>
            </div>

            {/* Call to Action Trigger */}
            <div className="pt-2">
              <button className="inline-flex items-center gap-3 px-10 py-4.5 text-xs font-bold uppercase tracking-widest text-[#0B0214] bg-white hover:bg-[#8A39E1] hover:text-white rounded-full shadow-[0_0_30px_rgba(138,57,225,0.2)] hover:shadow-[0_0_50px_rgba(138,57,225,0.6)] transition-all duration-500 hover:scale-[1.03] group/btn transform active:scale-95">
                <span>Explore Our Services</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#0B0214]/5 group-hover/btn:bg-white/20 transition-colors duration-300">
                  <FaArrowRight
                    size={10}
                    className="transform group-hover/btn:translate-x-0.5 transition-transform duration-300"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}