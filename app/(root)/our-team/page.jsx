"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaGlobe, FaTimes } from "react-icons/fa";

// 1. Dummy Dynamic Data
const teamData = [
  {
    id: 1,
    name: "Mondira Jaisimha",
    role: "Advisory Board",
    category: "leadership",
    bio: "Former Senior Advocacy Director at Heroes Project with deep background in HIV awareness, education, and entertainment. Co-runs Cura Servitium, an eldercare company.A passionate advocate closely involved with stray animals welfare, singing (Hyderabad Voices), and theatre.",
    imageUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500",
    // socials: { linkedin: "#", twitter: "#", website: "#" },
    roles: ["Social Impact", "Eldercare", "Theatre"],
  },
  {
    id: 2,
    name: "Prof. (Dr.) Venkateshwarlu N",
    role: "Advisory Board",
    category: "management",
    bio: "Professor of Law and Dean Faculty of Law, Satavahana University. Former Jt. Secretary, Legal Bureau, UGC New Delhi.Expertise in Corporate and Securities Laws, ADR, ODR, IT Law, IPR, and Human Rights with extensive academic and administrative experience.",
    imageUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500",
    // socials: { linkedin: "#", twitter: "#" },
    roles: ["Law & IPR", "Human Rights", "ADR/ODR"],
  },
];

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeModalMember, setActiveModalMember] = useState(null);
  const canvasRef = useRef(null);

  // Connection Network Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

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

  //   const filteredTeam = activeTab === 'all'
  //     ? teamData
  //     : teamData.filter(member => member.category === activeTab);

  return (
    // Relative wrapper with overflow hidden to safely bound animated backdrops
    <section className="relative bg-white pt-32 mt-11 pb-20 px-6 sm:px-12 min-h-screen overflow-hidden transition-all duration-300">
      {/* 1. Interactive Connection Network Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0 opacity-80"
      />

      {/* 2. Abstract Blurred Glow Meshes representing dynamic output/productivity sparks */}
      <div className="absolute top-[10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-200/30 blur-[120px] pointer-events-none z-0 animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-violet-200/20 blur-[100px] pointer-events-none z-0" />

      {/* Primary Section Layout Wrap */}
      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Header Elements */}
        <span className="text-sm font-semibold tracking-widest text-[#8A39E1] uppercase bg-purple-50 px-4 py-1.5 rounded-full">
          Our Team
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0214] mt-4 mb-3 tracking-tight">
          The Minds Behind the Magic
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We are a diverse collective of innovators, creators, and leaders
          dedicated to bringing purpose and passion to life.
        </p>

        {/* Dynamic Filter Tabs
        <div className="flex flex-wrap justify-center items-center gap-3 mb-16">
          {['all', 'leadership', 'management', 'operations'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 text-sm font-medium rounded-full border transition-all capitalize duration-200 ${
                activeTab === tab
                  ? 'bg-[#8A39E1] text-white border-[#8A39E1] shadow-lg shadow-purple-500/20'
                  : 'bg-transparent text-gray-600 border-gray-300 hover:border-[#8A39E1] hover:text-[#8A39E1]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div> */}

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative bg-[#f5f2fa] border border-[#e2daee] rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10 text-left flex flex-col justify-between"
            >
              <div>
                {/* Profile Image Wrapper */}
                <div className="relative w-full h-80 mb-6 overflow-hidden rounded-2xl bg-purple-100/60">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    priority={member.id <= 3}
                  />
                </div>

                {/* MODIFICATION: Name & Designation stacked on the left, Know More button perfectly aligned on the right */}
             <div className="space-y-4 text-left">
                  {/* Name spans completely to the left, taking full width */}
                  <h3 className="text-xl font-black text-[#0A0515] transition-colors duration-200 group-hover:text-[#8A39E1] w-full block">
                    {member.name}
                  </h3>
                  
                  {/* Bottom info strip layout */}
                  <div className="flex items-center gap-4 pt-1">
                    {/* Know More aligns perfectly directly to the left side of the role */}

                    {/* Role / Designation title element follows on the right */}
                    <p className="text-sm font-medium text-slate-600">
                      {member.role}
                    </p>
                    <button
                      onClick={() => setActiveModalMember(member)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#8A39E1] hover:text-[#0A0515] transition-colors uppercase tracking-wider group/btn whitespace-nowrap"
                    >
                      Know More
                      <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200">
                        &rarr;
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {member.roles && member.roles.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/80">
                    {member.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="pointer-events-none inline-flex items-center text-xs font-semibold px-3 py-1 bg-white text-slate-600 border border-slate-200 rounded-lg select-none shadow-sm"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Action Area */}
              {/* <div className="mt-6 flex flex-col gap-4">
                {member.socials && Object.keys(member.socials).length > 0 && (
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-[#8A39E1] hover:border-[#8A39E1] shadow-sm"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn size={14} />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-[#8A39E1] hover:border-[#8A39E1] shadow-sm"
                        aria-label="Twitter"
                      >
                        <FaTwitter size={14} />
                      </a>
                    )}
                    {member.socials.website && (
                      <a
                        href={member.socials.website}
                        className="text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-[#8A39E1] hover:border-[#8A39E1] shadow-sm"
                        aria-label="Website"
                      >
                        <FaGlobe size={14} />
                      </a>
                    )}
                  </div>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Pop-up Modal */}
      {activeModalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#1c1430] border border-[#2b2046] rounded-3xl p-6 md:p-8 shadow-2xl text-left transform scale-100 transition-all">
            <button
              onClick={() => setActiveModalMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/30 hover:bg-slate-800/60 transition-colors"
            >
              <FaTimes size={16} />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-2xl bg-slate-700 flex-shrink-0">
                <img
                  src={activeModalMember.imageUrl}
                  alt={activeModalMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalMember.name}
                </h3>
                <p className="text-sm font-medium text-[#b87cf8]">
                  {activeModalMember.role}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/40 mb-2">
              "{activeModalMember.bio}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}