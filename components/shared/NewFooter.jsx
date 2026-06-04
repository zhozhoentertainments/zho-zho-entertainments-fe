import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, Globe, MapPin, ArrowRight, Linkedin, Twitter } from 'lucide-react';

// Social Media Icons Data
const SOCIALS = [
  { href: 'https://www.instagram.com/zhozho_entertainments', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.facebook.com/share/1CxFmj3d56/', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.linkedin.com/company/zho-zho-entertainments/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://x.com/zhozhoent', icon: Twitter, label: 'Twitter' },
  { href: 'https://youtube.com/@zhozhoentertainments', icon: Youtube, label: 'YouTube' },
];

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/ourTeam', label: 'OUR TEAM' },
  { href: '/aboutUs', label: 'ABOUT US' },
  { href: '/sponsors', label: 'SPONSORS' },
  { href: '/volunteers', label: 'VOLUNTEERS' },
  { href: '/services', label: 'SERVICES' },
];

const CONTACTS = [
  { href: 'tel:+918019037799', icon: Phone, label: '+91 80190 37799', tag: 'BOOKING HOTLINE' },
  { href: 'mailto:info@zhozhoentertainments.com', icon: Mail, label: 'info@zhozhoentertainments.com', tag: 'HQ INQUIRIES' },
  { href: 'https://zhozhoentertainments.com', icon: Globe, label: 'zhozhoentertainments.com', tag: 'DIGITAL ARENA', external: true },
];

export default function NewFooter() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#0A0515] text-white pt-14 border-t-2 border-[#CA15FF]">

      {/* Structural Abstract Stadium Glow Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#CA15FF] blur-[140px]" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#CA15FF] blur-[120px] opacity-40" />
      </div>

      {/* Top Striped Accent Pitch Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,#CA15FF,#CA15FF_12px,transparent_12px,transparent_24px)] opacity-30" />

      {/* ─── MAIN BALANCED 3-COLUMN LAYOUT GRID ─── */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 pb-12 relative z-10">

        {/* COLUMN 1: BRAND PLATFORM & SOCIAL HUB */}
        <div className="flex flex-col justify-between space-y-8 items-center text-center lg:items-start lg:text-left">
          <div className="w-full space-y-5">
            <a href="/" className="inline-block p-2.5 bg-gradient-to-br from-[rgba(202,21,255,0.15)] to-transparent border border-[rgba(202,21,255,0.3)] rounded-xl group transition-all duration-300 hover:border-[#CA15FF]">
              <img
                src="/logo.png"
                alt="Zho Zho Entertainments"
                className="object-contain h-12 w-auto brightness-110 mx-auto lg:mx-0 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-[15px] sm:text-base leading-relaxed text-[rgba(245,240,232,0.75)] font-medium max-w-sm sm:max-w-md md:max-w-none mx-auto lg:mx-0">
              Architecting high-intensity live experiences, sports production logistics, and cultural entertainment properties globally.
            </p>
          </div>

          {/* Social Platforms */}
          <div className="space-y-4 w-full flex flex-col items-center lg:items-start pt-2">
            <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#CA15FF] pb-1 w-fit">
              || CONNECT NOW
            </h4>
            <div className="flex items-center gap-3 flex-wrap justify-center lg:justify-start">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center border border-[#CA15FF] bg-[#0A0515] text-[#CA15FF] transition-all duration-300 hover:bg-white hover:text-black hover:-translate-y-1 skew-x-3 rounded-md shadow-lg"
                >
                  <Icon className="w-[18px] h-[18px] -skew-x-3" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 2: THE PLAYBOOK (Navigation Hub) */}
        <div className="space-y-6">
          <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#CA15FF] flex items-center gap-2 border-l-4 border-[#f9f871] pl-3 bg-gradient-to-r from-[rgba(202,21,255,0.08)] via-transparent to-transparent py-1 rounded-r">
            OUR INDEX
          </h4>
          <p className="text-[11px] uppercase tracking-wider text-[#B8B8B8] pl-3 hidden md:block">
            MAIN NAVIGATION
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="group flex items-center justify-between p-3.5 border border-[rgba(202,21,255,0.18)] bg-[rgba(202,21,255,0.02)] text-sm font-bold tracking-wider text-[rgba(245,240,232,0.85)] transition-all duration-200 hover:bg-white hover:text-black rounded-lg hover:shadow-md"
              >
                <span>{label}</span>
                <ArrowRight size={16} className="text-[#CA15FF] group-hover:text-black transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: BACKSTAGE INFO & SECURE LIVE MAP MODULE */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-6 w-full">
          <div className="space-y-5 w-full">
            <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#CA15FF] flex items-center gap-2 border-l-4 border-[#f9f871] pl-3 bg-gradient-to-r from-[rgba(202,21,255,0.08)] via-transparent to-transparent py-1 rounded-r">
              BACKSTAGE INFO
            </h4>
            <p className="text-[11px] uppercase tracking-wider text-[#B8B8B8] pl-3">
              CONTACT & SUPPORT
            </p>

            <div className="grid grid-cols-1 gap-3">
              {CONTACTS.map(({ href, icon: Icon, label, tag, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-4 p-3.5 border border-dashed border-[rgba(202,21,255,0.3)] bg-[rgba(11,6,22,0.6)] rounded-xl hover:border-[#CA15FF] transition-all duration-200 hover:bg-white/10"
                >
                  <div className="p-2.5 bg-[rgba(202,21,255,0.08)] text-[#CA15FF] group-hover:bg-white group-hover:text-black transition-all rounded-lg shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] font-mono font-black tracking-widest text-[#B8B8B8]/80">
                      {tag}
                    </span>
                    <span className="block text-sm sm:text-[15px] font-bold text-[rgba(245,240,232,0.95)] break-all group-hover:text-white transition-colors mt-0.5">
                      {label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location Vector & Fully Functional Live Map */}
          <div className="w-full space-y-4 pt-4 border-t border-[rgba(202,21,255,0.15)]">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin size={20} className="text-[#CA15FF] mt-0.5 shrink-0" />
              <p className="text-[14px] sm:text-base text-[rgba(245,240,232,0.8)] leading-relaxed font-semibold text-center md:text-left">
                Flat No: 102, Sai Kiran Apartments, Ameerpet, Hyderabad, TS - 500038.
              </p>
            </div>

            {/* High-Contrast Styled Live Map Container */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden border-2 border-[rgba(202,21,255,0.3)] shadow-2xl group bg-[#0A0515]">
              <div className="absolute inset-0 z-10 pointer-events-none bg-[#CA15FF]/5 mix-blend-color" />
              <div className="absolute top-0 inset-x-0 h-8 z-20 pointer-events-none bg-gradient-to-b from-[#0A0515] to-transparent opacity-90" />
              <div className="absolute bottom-0 inset-x-0 h-8 z-20 pointer-events-none bg-gradient-to-t from-[#0A0515] to-transparent opacity-90" />

              <iframe
                src="https://maps.google.com/maps?q=Sai%20Kiran%20Apartments%2C%20Ameerpet%2C%20Hyderabad&t=m&z=15&output=embed&iwloc=near"
                className="absolute inset-0 w-full h-full opacity-75 filter invert contrast-115 brightness-90 saturate-100 group-hover:opacity-95 transition-all duration-300"
                title="Ameerpet Office Location Arena"
                loading="lazy"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── LOWER STADIUM DECK / BOTTOM BAR ─── */}
      <div className="bg-[#05020a] border-t border-[rgba(202,21,255,0.2)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="text-white/60 text-[10px] uppercase tracking-widest hidden md:inline">
              Follow Us:
            </span>

            <div className="flex items-center gap-2 text-white/90">
              {SOCIALS.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-full bg-white/10 hover:bg-white hover:text-black flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <p className="text-[11px] uppercase font-mono tracking-widest text-[rgba(245,240,232,0.45)] text-center sm:text-left font-semibold">
            ZHO ZHO ENTERTAINMENTS
          </p>

          <div className="flex items-center gap-4 font-mono text-[11px] font-bold text-[#CA15FF]/70 tracking-[0.3em] select-none">
            <span>© COPYRIGHT</span>
            <span>{new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}