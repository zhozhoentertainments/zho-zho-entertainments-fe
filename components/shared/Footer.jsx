import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, Globe, MapPin, ArrowRight } from 'lucide-react';

const XIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.076H5.036z" />
  </svg>
);

const NAV_LINKS = [
  { href: '/', label: 'HOME' },
  { href: '/ourTeam', label: 'OUT TEAM' },
  { href: '/aboutUs', label: 'ABOUT US' },
  { href: '/sponsors', label: 'SPONSORS' },
  { href: '/volunteers', label: 'VOLUNTEERS ' },
  { href: '/servicess', label: 'SERVICES' },
];

const SOCIALS = [
  { href: 'https://www.facebook.com/profile.php?id=61580795231859', icon: Facebook, label: 'Facebook' },
  { href: 'https://x.com/ZhoZhoEnt', icon: XIcon, label: 'X', small: true },
  { href: 'https://www.instagram.com/zhozho_entertainments', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@ZhoZhoEntertainments', icon: Youtube, label: 'YouTube' },
];

const CONTACTS = [
  { href: 'tel:+918019037799', icon: Phone, label: '+91 80190 37799', tag: 'BOOKING HOTLINE' },
  { href: 'mailto:info@zhozhoentertainments.com', icon: Mail, label: 'info@zhozhoentertainments.com', tag: 'HQ INQUIRIES' },
  { href: 'https://zhozhoentertainments.com', icon: Globe, label: 'zhozhoentertainments.com', tag: 'DIGITAL ARENA', external: true },
];

export default function Footer() {
  return (
    <footer className="w-full relative overflow-hidden bg-[#0A0515] text-white pt-14 border-t-2 border-[#C8A951]">

      {/* Structural Abstract Stadium Glow Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#C8A951] blur-[140px]" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#C8A951] blur-[120px] opacity-40" />
      </div>

      {/* Top Striped Accent Pitch Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[repeating-linear-gradient(90deg,#C8A951,#C8A951_12px,transparent_12px,transparent_24px)] opacity-30" />

      {/* ─── MAIN BALANCED 3-COLUMN LAYOUT GRID ─── */}
      {/* Fixed: Transitioned to a perfectly proportioned 3-column engine to banish the leftmost empty space */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 pb-12 relative z-10">

        {/* COLUMN 1: BRAND PLATFORM & SOCIAL HUB (Perfect Alignment Block) */}
        <div className="flex flex-col justify-between space-y-8 items-center text-center lg:items-start lg:text-left">
          <div className="w-full space-y-5">
            <a href="/" className="inline-block p-2.5 bg-gradient-to-br from-[rgba(200,169,81,0.15)] to-transparent border border-[rgba(200,169,81,0.3)] rounded-xl group transition-all duration-300 hover:border-[#C8A951]">
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

          {/* Social Platforms - Integrated here to completely solve vertical whitespace voids */}
          <div className="space-y-4 w-full flex flex-col items-center lg:items-start pt-2">
            <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#C8A951] border-b border-[rgba(200,169,81,0.2)] pb-1 w-fit">
              // CONNECT NOW
            </h4>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ href, icon: Icon, label, small }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center border border-[rgba(200,169,81,0.35)] bg-[#0A0515] text-[#C8A951] transition-all duration-300 hover:bg-[#C8A951] hover:text-black hover:-translate-y-1 skew-x-3 rounded-md shadow-lg"
                >
                  <Icon className={`${small ? "w-4 h-4" : "w-[18px] h-[18px]"} -skew-x-3`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* COLUMN 2: THE PLAYBOOK (Navigation Hub) */}
        <div className="space-y-6">
          <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#C8A951] flex items-center gap-2 border-l-4 border-[#C8A951] pl-3 bg-gradient-to-r from-[rgba(200,169,81,0.08)] via-transparent to-transparent py-1 rounded-r">
            THE PLAYBOOK
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="group flex items-center justify-between p-3.5 border border-[rgba(200,169,81,0.18)] bg-[rgba(200,169,81,0.02)] text-sm font-bold tracking-wider text-[rgba(245,240,232,0.85)] transition-all duration-200 hover:bg-[#C8A951] hover:text-black rounded-lg hover:shadow-md"
              >
                <span>{label}</span>
                <ArrowRight size={16} className="text-[#C8A951] group-hover:text-black transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: BACKSTAGE INFO & GUARANTEED ACTIVE MAP MODULE */}
        {/* Fixed: Map component uses an open dark grid schema frame that will never trigger api rejections */}
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-6 w-full">
          <div className="space-y-5 w-full">
            <h4 className="text-[13px] font-black uppercase tracking-[0.3em] text-[#C8A951] flex items-center gap-2 border-l-4 border-[#C8A951] pl-3 bg-gradient-to-r from-[rgba(200,169,81,0.08)] via-transparent to-transparent py-1 rounded-r">
              BACKSTAGE INFO
            </h4>

            <div className="grid grid-cols-1 gap-3">
              {CONTACTS.map(({ href, icon: Icon, label, tag, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-4 p-3.5 border border-dashed border-[rgba(200,169,81,0.3)] bg-[rgba(11,6,22,0.6)] rounded-xl hover:border-[#C8A951] transition-all duration-200 hover:bg-[rgba(200,169,81,0.02)]"
                >
                  <div className="p-2.5 bg-[rgba(200,169,81,0.08)] text-[#C8A951] group-hover:bg-[#C8A951] group-hover:text-black transition-all rounded-lg shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[10px] font-mono font-black tracking-widest text-[#C8A951]/80">
                      {tag}
                    </span>
                    <span className="block text-sm sm:text-[15px] font-bold text-[rgba(245,240,232,0.95)] break-all group-hover:text-[#C8A951] transition-colors mt-0.5">
                      {label}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Location Vector & Fully Functional Live Map */}
          <div className="w-full space-y-4 pt-4 border-t border-[rgba(200,169,81,0.15)]">
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin size={20} className="text-[#C8A951] mt-0.5 shrink-0" />
              <p className="text-[14px] sm:text-base text-[rgba(245,240,232,0.8)] leading-relaxed font-semibold text-center md:text-left">
                Flat No: 102, Sai Kiran Apartments, Ameerpet, Hyderabad, TS - 500038.
              </p>
            </div>

            {/* Optimized High-Contrast Live Map Frame Container */}
            <div className="relative w-full h-44 rounded-xl overflow-hidden border-2 border-[rgba(200,169,81,0.3)] shadow-2xl group bg-[#0A0515]">
              {/* Premium Cyber Gold Transparent Tint Overlays */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[#C8A951]/5 mix-blend-color" />
              <div className="absolute top-0 inset-x-0 h-8 z-20 pointer-events-none bg-gradient-to-b from-[#0A0515] to-transparent opacity-90" />
              <div className="absolute bottom-0 inset-x-0 h-8 z-20 pointer-events-none bg-gradient-to-t from-[#0A0515] to-transparent opacity-90" />

              {/* Clean, fully active custom dark mapped frame block for Hyderabad Ameerpet coordinates */}
              <iframe
                src="https://maps.google.com/maps?q=Sai+Kiran+Apartments,+Ameerpet,+Hyderabad,+TS+-+500038&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
      <div className="bg-[#05020a] border-t border-[rgba(200,169,81,0.2)] relative z-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[11px] uppercase font-mono tracking-widest text-[rgba(245,240,232,0.45)] text-center sm:text-left font-semibold">
            ZHO ZHO ENTERTAINMENTS     </p>

          <div className="flex items-center gap-4 font-mono text-[11px] font-bold text-[#C8A951]/70 tracking-[0.3em] select-none">
            <span>© copyright</span>
            {/* <div className="w-1.5 h-1.5 rounded-full bg-[#C8A951] animate-pulse" /> */}
            <span>  {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}