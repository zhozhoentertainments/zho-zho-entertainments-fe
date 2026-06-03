"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const floatingOrbs = [
  { size: 320, top: "-10%", left: "-8%", delay: "0s", duration: "8s" },
  { size: 200, top: "60%", right: "-5%", delay: "2s", duration: "10s" },
  { size: 140, top: "30%", left: "55%", delay: "1s", duration: "7s" },
];

const statItems = [
  { value: "12+", label: "Teams Competing" },
  { value: "5K+", label: "Live Spectators" },
  { value: "2", label: "Days of Action" },
  { value: "₹10L", label: "Prize Pool" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;600;700&display=swap');

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #07020f;
          overflow: hidden;
          font-family: 'Rajdhani', sans-serif;
          display: flex;
          align-items: center;
        }

        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.35;
          pointer-events: none;
          z-index: 1;
        }

        .grid-lines {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(138, 43, 226, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(138, 43, 226, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          z-index: 1;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.28) 0%, rgba(88, 0, 180, 0.08) 60%, transparent 80%);
          pointer-events: none;
          z-index: 1;
          animation: orbFloat var(--dur) ease-in-out infinite alternate;
          animation-delay: var(--delay);
        }

        @keyframes orbFloat {
          0% { transform: translateY(0px) scale(1); }
          100% { transform: translateY(-28px) scale(1.04); }
        }

        .diagonal-slash {
          position: absolute;
          top: 0;
          right: 0;
          width: 52%;
          height: 100%;
          background: linear-gradient(135deg, transparent 0%, rgba(104, 28, 200, 0.12) 40%, rgba(180, 80, 255, 0.07) 100%);
          clip-path: polygon(18% 0, 100% 0, 100% 100%, 0% 100%);
          z-index: 1;
        }

        .content-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 6rem 2rem 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        @media (max-width: 900px) {
          .content-wrap {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 5rem 1.5rem 3rem;
          }
          .right-col { order: -1; }
          .stat-row { justify-content: center; }
          .badge-row { justify-content: center; }
          .cta-row { justify-content: center; }
        }

        .eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(138, 43, 226, 0.15);
          border: 1px solid rgba(180, 100, 255, 0.3);
          border-radius: 999px;
          padding: 6px 16px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #d49fff;
          margin-bottom: 1.2rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.1s;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #b060ff;
          box-shadow: 0 0 0 0 rgba(176, 96, 255, 0.5);
          animation: pulseDot 1.8s infinite;
        }

        @keyframes pulseDot {
          0% { box-shadow: 0 0 0 0 rgba(176, 96, 255, 0.5); }
          70% { box-shadow: 0 0 0 8px rgba(176, 96, 255, 0); }
          100% { box-shadow: 0 0 0 0 rgba(176, 96, 255, 0); }
        }

        .headline {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.4rem, 7vw, 6rem);
          line-height: 0.95;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 0.4rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.2s;
        }

        .headline .accent {
          display: block;
          background: linear-gradient(90deg, #bf5fff 0%, #8b2be2 50%, #da80ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sub-headline {
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #7a7a9a;
          margin-bottom: 1.6rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.3s;
        }

        .desc-text {
          font-size: 1.1rem;
          font-weight: 400;
          line-height: 1.7;
          color: #9d8fbb;
          max-width: 500px;
          margin-bottom: 2rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.4s;
        }

        .badge-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 2.2rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.45s;
        }

        .info-badge {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #c4b8d8;
          letter-spacing: 0.03em;
        }

        .info-badge svg {
          width: 15px;
          height: 15px;
          opacity: 0.7;
          flex-shrink: 0;
        }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.5s;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #8b2be2 0%, #6010c0 100%);
          color: #fff;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 13px 28px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
          box-shadow: 0 6px 30px rgba(138, 43, 226, 0.45);
          text-decoration: none;
        }

        .btn-primary::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::after { left: 160%; }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(138, 43, 226, 0.6);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #c4a8e8;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 12px 28px;
          border-radius: 10px;
          border: 1px solid rgba(180, 100, 255, 0.35);
          cursor: pointer;
          transition: background 0.18s ease, border-color 0.18s ease, transform 0.18s ease;
          text-decoration: none;
        }

        .btn-secondary:hover {
          background: rgba(138, 43, 226, 0.12);
          border-color: rgba(180, 100, 255, 0.6);
          transform: translateY(-2px);
        }

        .stat-row {
          display: flex;
          gap: 0;
          margin-top: 3rem;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 2rem;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 0.6s;
        }

        .stat-item {
          flex: 1;
          padding-right: 1.5rem;
          border-right: 1px solid rgba(255,255,255,0.07);
          margin-right: 1.5rem;
        }

        .stat-item:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }

        .stat-val {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2rem;
          letter-spacing: 0.04em;
          color: #d49fff;
          line-height: 1;
          margin-bottom: 3px;
        }

        .stat-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5a5070;
        }

        .right-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .logo-glow-ring {
          position: absolute;
          width: 460px;
          height: 460px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, rgba(88, 0, 180, 0.1) 40%, transparent 70%);
          animation: ringPulse 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.06); opacity: 1; }
        }

        .logo-ring-2 {
          position: absolute;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          border: 1px solid rgba(138, 43, 226, 0.12);
          animation: ringPulse 3s ease-in-out infinite reverse;
          pointer-events: none;
        }

        .logo-ring-3 {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          border: 1px dashed rgba(138, 43, 226, 0.07);
          pointer-events: none;
        }

        .logo-wrap {
          position: relative;
          z-index: 2;
          animation: logoFloat 4s ease-in-out infinite;
          filter: drop-shadow(0 20px 60px rgba(138, 43, 226, 0.5)) drop-shadow(0 0 120px rgba(138, 43, 226, 0.25));
        }

        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50% { transform: translateY(-14px) rotate(1deg); }
        }

        .tagline-strip {
          position: absolute;
          bottom: -2.5rem;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(180, 100, 255, 0.5);
          z-index: 2;
        }

        .bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent 0%, #8b2be2 30%, #da80ff 50%, #8b2be2 70%, transparent 100%);
          z-index: 20;
          opacity: 0.7;
        }

        .scroll-hint {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          opacity: 0.4;
          animation: fadeSlideUp 0.6s ease both;
          animation-delay: 1s;
        }

        .scroll-hint span {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #9d8fbb;
        }

        .scroll-line {
          width: 1px;
          height: 36px;
          background: linear-gradient(180deg, #8b2be2, transparent);
          animation: scrollLine 1.8s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .sport-tag {
          display: inline-block;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.95rem;
          letter-spacing: 0.2em;
          color: rgba(180, 100, 255, 0.6);
          margin-bottom: 0.5rem;
        }
      `}</style>

      <section className="hero-root">
        <div className="noise-overlay" />
        <div className="grid-lines" />
        <div className="diagonal-slash" />

        {floatingOrbs.map((orb, i) => (
          <div
            key={i}
            className="orb"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: (orb as any).left,
              right: (orb as any).right,
              ["--dur" as any]: orb.duration,
              ["--delay" as any]: orb.delay,
            }}
          />
        ))}

        <div className="content-wrap">
          {/* LEFT — TEXT */}
          <div>
            <div className="eyebrow-badge">
              <span className="pulse-dot" />
              Zho Zho Entertainments Presents
            </div>

            <div className="sport-tag">Elite Kho Kho Championship</div>

            <h1 className="headline">
              India's
              <span className="accent">Fastest</span>
              Growing Sport
            </h1>

            <p className="sub-headline">Built for the Next Generation</p>

            <p className="desc-text">
              Experience the <strong style={{ color: "#d49fff" }}>"Sport of Our Soil"</strong> — Telangana's Pride and India's next sporting movement. Raw speed. Tribal strategy. Explosive action.
            </p>

            <div className="badge-row">
              <div className="info-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                August 2026
              </div>
              <div className="info-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                Yousufguda Indoor Stadium, Hyderabad
              </div>
            </div>

            <div className="cta-row">
              <a href="#register" className="btn-primary">
                Register Now
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
              <a href="#about" className="btn-secondary">
                Know More
              </a>
            </div>

            <div className="stat-row">
              {statItems.map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — LOGO */}
          <div className="right-col">
            <div className="logo-ring-3" />
            <div className="logo-ring-2" />
            <div className="logo-glow-ring" />
            <div className="logo-wrap" ref={logoRef}>
              <Image
                src="/android-chrome-512x512.png"
                alt="Zho Zho Entertainments"
                width={380}
                height={380}
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="tagline-strip">Sport of Our Soil · Telangana's Pride</div>
          </div>
        </div>

        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>

        <div className="bottom-bar" />
      </section>
    </>
  );
}