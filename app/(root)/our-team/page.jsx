"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaTwitter, FaGlobe, FaTimes } from 'react-icons/fa';

// 1. Dummy Dynamic Data
const teamData = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Founder & CEO',
    category: 'leadership',
    bio: 'Passionate about building large-scale community wellness ecosystems and driving real social impact across India. Over a decade of scaling projects with vision, building brands that care about purpose, people, and progress.',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=500', 
    socials: { linkedin: '#', twitter: '#', website: '#' }
  },
  {
    id: 2,
    name: 'Priya Patel',
    role: 'Head of Operations',
    category: 'management',
    bio: 'Ensuring seamless execution, asset handovers, and milestone tracking across all active projects and city nodes with perfect precision and structural workflow across 15+ target cities nationwide.',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=500',
    socials: { linkedin: '#', twitter: '#' }
  },
  {
    id: 3,
    name: 'Ankit Verma',
    role: 'Lead Full-Stack Developer',
    category: 'operations',
    bio: 'Specializes in the MERN stack and high-performance user applications. Bringing robust digital architectures, rich interactive interfaces, and seamless visual experiences into production-ready realities.',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=500',
    socials: { linkedin: '#', website: '#' }
  }
];

export default function OurTeam() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeModalMember, setActiveModalMember] = useState(null);
  const canvasRef = useRef(null);

  // Connection Network Background Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
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
        ctx.fillStyle = 'rgba(138, 57, 225, 0.25)'; // Purple brand color node
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
      
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredTeam = activeTab === 'all' 
    ? teamData 
    : teamData.filter(member => member.category === activeTab);

  return (
    // Relative wrapper with overflow hidden to safely bound animated backdrops
    <section className="relative bg-white pt-32 mt-11 pb-20 px-6 sm:px-12 min-h-screen overflow-hidden transition-all duration-300">
      
      {/* 1. Interactive Connection Network Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />

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
          We are a diverse collective of innovators, creators, and leaders dedicated to bringing purpose and passion to life.
        </p>

        {/* Dynamic Filter Tabs */}
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
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {filteredTeam.map((member) => (
            <div 
              key={member.id}
              className="group relative bg-slate-800/95 border border-slate-700/60 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-purple-500/10 text-left flex flex-col justify-between"
            >
              <div>
                {/* Profile Image Wrapper - Taller photo cards */}
                <div className="relative w-full h-80 mb-6 overflow-hidden rounded-2xl bg-slate-700">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                    priority={member.id <= 3} 
                  />
                </div>

                {/* Name & Designation */}
                <h3 className="text-xl font-bold text-white transition-colors duration-200 group-hover:text-[#b87cf8]">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-[#b87cf8] mt-1">
                  {member.role}
                </p>
              </div>

              {/* Bottom Action Area */}
              <div className="mt-6">
                <button
                  onClick={() => setActiveModalMember(member)}
                  className="w-full text-center py-2.5 rounded-xl bg-slate-900/50 hover:bg-[#8A39E1] border border-slate-700/40 hover:border-[#8A39E1] text-xs font-semibold text-slate-300 hover:text-white transition-all uppercase tracking-wider"
                >
                  Read Full Bio
                </button>

                {/* Social Links Panel */}
                <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-700/50">
                  {member.socials.linkedin && (
                    <a href={member.socials.linkedin} className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg bg-slate-700/50 hover:bg-[#8A39E1]" aria-label="LinkedIn">
                      <FaLinkedinIn size={14} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a href={member.socials.twitter} className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg bg-slate-700/50 hover:bg-[#8A39E1]" aria-label="Twitter">
                      <FaTwitter size={14} />
                    </a>
                  )}
                  {member.socials.website && (
                    <a href={member.socials.website} className="text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg bg-slate-700/50 hover:bg-[#8A39E1]" aria-label="Website">
                      <FaGlobe size={14} />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Dynamic Pop-up Modal */}
      {activeModalMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl text-left transform scale-100 transition-all">
            
            {/* Close Button */}
            <button 
              onClick={() => setActiveModalMember(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 transition-colors"
            >
              <FaTimes size={16} />
            </button>

            {/* Modal Content Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-20 h-20 overflow-hidden rounded-2xl bg-slate-700 flex-shrink-0">
                <img 
                  src={activeModalMember.imageUrl} 
                  alt={activeModalMember.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{activeModalMember.name}</h3>
                <p className="text-sm font-medium text-[#b87cf8]">{activeModalMember.role}</p>
              </div>
            </div>

            {/* Full Bio Paragraph */}
            <p className="text-slate-300 text-sm md:text-base leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 mb-2">
              "{activeModalMember.bio}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}