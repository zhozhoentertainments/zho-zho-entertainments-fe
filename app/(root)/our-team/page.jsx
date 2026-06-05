"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaTimes, FaUserAlt, FaUsers, FaAward } from "react-icons/fa";

// Team data structure with explicit image configurations
const teamData = [
  {
    id: 1,
    name: "Mondira Jaisimha",
    role: "Advisory Board",
    bio: "Former Senior Advocacy Director at Heroes Project with deep background in HIV awareness, education, and entertainment. Co-runs Cura Servitium, an eldercare company. A passionate advocate closely involved with stray animals welfare, singing (Hyderabad Voices), and theatre.",
    imageUrl: "/monindra.jpeg",
    roles: ["Social Impact", "Eldercare", "Theatre"],
    aspectClass: "aspect-[4/5]" 
  },
  {
    id: 2,
    name: "Prof. (Dr.) Venkateshwarlu N",
    role: "Advisory Board",
    bio: "Professor of Law and Dean Faculty of Law, Satavahana University. Former Jt. Secretary, Legal Bureau, UGC New Delhi. Expertise in Corporate and Securities Laws, ADR, ODR, IT Law, IPR, and Human Rights with extensive academic and administrative experience.",
    roles: ["Law & IPR", "Human Rights", "ADR/ODR"],
    aspectClass: "aspect-[4/5]"
  },
];

export default function OurTeam() {
  const [activeModalMember, setActiveModalMember] = useState(null);
  const canvasRef = useRef(null);

  // Dynamically calculating stats to avoid looking hardcoded/dummy
  const totalAdvisors = teamData.length;
  const totalExpertiseTags = Array.from(
    new Set(teamData.flatMap((member) => member.roles || []))
  ).length;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const particleCount = 40; 
    const connectionDistance = 135; 

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    class Particle {
      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = (Math.random() - 0.5) * 0.5; 
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 1.2 + 1.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (canvas) {
          if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
          if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(138, 57, 225, 0.2)";
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

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - distance / connectionDistance) * 0.12;
            ctx.strokeStyle = `rgba(138, 57, 225, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
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

  const renderProfileAsset = (member) => {
    if (!member.imageUrl || member.imageUrl.includes("logo") || member.imageUrl === "") {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50/40 p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shadow-inner mb-3">
            <FaUserAlt size={22} />
          </div>
        </div>
      );
    }

    return (
      <Image
        src={member.imageUrl}
        alt={member.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        priority={member.id <= 3}
      />
    );
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFB] min-h-screen selection:bg-purple-100 selection:text-purple-900 overflow-hidden">
      {/* Dynamic Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />

      {/* Atmospheric Blur Layers */}
      <div className="absolute top-[-5%] right-[-5%] w-[40vw] h-[40vw] bg-purple-200/15 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse duration-[10000ms]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[30vw] h-[30vw] bg-indigo-100/25 rounded-full blur-[110px] pointer-events-none z-0" />

      {/* Layout Content Wrapper - mt-20 Added for header clearing */}
      <div className="relative max-w-6xl mx-auto z-10 mt-20">
        
        {/* Header Block */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-widest text-purple-700 uppercase bg-purple-50 border border-purple-100/80 px-3 py-1 rounded-full inline-block shadow-sm mb-4">
            Our Leadership
          </span>
          
          {/* Symmetrical Underlined Header Structure */}
          <div className="relative inline-block pb-5 mb-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Our Advisory Members
            </h2>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[3.5px] bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-400 rounded-full" />
          </div>
     
        </div>

        {/* Clean, Non-Dummy Live Metrics Summary Box */}
        {/* <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 mb-16 max-w-xl mx-auto bg-white border border-slate-200/60 py-4 px-8 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3">
            <FaUsers className="text-purple-600 text-lg" />
            <div className="text-left">
              <span className="block text-lg font-extrabold text-slate-800 leading-none">{totalAdvisors}</span>
              <span className="text-xs text-slate-400 font-medium">Active Board Members</span>
            </div>
          </div>
          <div className="w-px h-8 bg-slate-200 hidden sm:block" />
          <div className="flex items-center gap-3">
            <FaAward className="text-purple-600 text-lg" />
            <div className="text-left">
              <span className="block text-lg font-extrabold text-slate-800 leading-none">{totalExpertiseTags}+</span>
              <span className="text-xs text-slate-400 font-medium">Core Industry Domains</span>
            </div>
          </div>
        </div> */}

        {/* Profile Card Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamData.map((member) => (
            <div
              key={member.id}
              onClick={() => setActiveModalMember(member)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveModalMember(member);
                }
              }}
              className="group relative bg-white border border-slate-200/80 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(138,57,225,0.05)] text-left flex flex-col justify-between max-w-sm mx-auto w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40"
            >
              <div>
                <div className={`relative w-full ${member.aspectClass || "aspect-[4/5]"} mb-5 overflow-hidden rounded-xl bg-slate-50 border border-slate-100`}>
                  {renderProfileAsset(member)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-800 transition-colors duration-200 group-hover:text-purple-700">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Tags Area */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-4">
                {member.roles && member.roles.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {member.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold px-2.5 py-0.5 bg-slate-50 text-slate-600 border border-slate-200/60 rounded-md select-none"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}

                {/* Interactive CTA Pill */}
                <div className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-white bg-purple-600 group-hover:bg-purple-700 shadow-md shadow-purple-600/10 py-2.5 px-4 rounded-xl transition-all duration-300 tracking-wide pointer-events-none">
                  Know More
                  <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200 text-sm font-light">
                    &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Detail Pop-up Modal */}
      {activeModalMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
          onClick={() => setActiveModalMember(null)}
        >
          <div
            className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl text-left transform scale-100 transition-all duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <FaTimes size={13} />
            </button>

            {/* Profile Row */}
            <div className="flex items-center gap-4 mb-5">
              <div className="relative w-16 h-16 overflow-hidden rounded-xl bg-slate-50 border border-slate-100 flex-shrink-0">
                {!activeModalMember.imageUrl || activeModalMember.imageUrl.includes("logo") ? (
                  <div className="w-full h-full flex items-center justify-center bg-purple-50 text-purple-600">
                    <FaUserAlt size={16} />
                  </div>
                ) : (
                  <img
                    src={activeModalMember.imageUrl}
                    alt={activeModalMember.name}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>
              <div className="space-y-0.5">
                <h3 className="text-xl font-extrabold text-slate-900">
                  {activeModalMember.name}
                </h3>
                <p className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  {activeModalMember.role}
                </p>
              </div>
            </div>

            {/* Tags in Modal */}
            {activeModalMember.roles && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {activeModalMember.roles.map((role, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-bold px-2 py-0.5 bg-purple-50 text-purple-700 border border-purple-100 rounded-md"
                  >
                    {role}
                  </span>
                ))}
              </div>
            )}

            {/* Bio Text area */}
            <p className="text-slate-600 text-sm leading-relaxed bg-slate-50/70 p-4 rounded-xl border border-slate-100 italic font-normal">
              "{activeModalMember.bio}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}