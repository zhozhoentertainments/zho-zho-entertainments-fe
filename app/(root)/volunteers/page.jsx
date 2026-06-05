"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Heart,
  Award,
  Network,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  Zap,
  ChevronRight,
  Calendar,
  Clock,
  ShieldCheck,
  MapPin
} from "lucide-react";

// ─── OPERATIONAL DATA PACKS ───
const volunteerProcess = [
  {
    title: "Application Submission",
    date: "Phase 01",
    content: "Submit your updated profile and experience layout. Our core team evaluates your application based on your operational background or enthusiasm for sports management.",
    points: ["Profile Review", "Background Scan", "Skill Mapping"],
    tag: "Registration",
    endorsement: "Make sure to list any prior experience with crowd control, logistics, or hospitality.",
    side: "right"
  },
  {
    title: "Briefing & Induction Session",
    date: "Phase 02",
    content: "Shortlisted candidates are invited to an online operational orientation. Here we break down the execution blueprint, deployment maps, and communication protocols.",
    points: ["Event Blueprint", "Chain of Command", "Radio Protocols"],
    tag: "Training",
    endorsement: "Attendance in the orientation briefing is mandatory to collect your volunteer kit and access credentials.",
    side: "left"
  },
  {
    title: "On-Ground Deployment",
    date: "Phase 03",
    content: "Move into active shift cycles during match days. Volunteers are assigned to critical clusters including VIP areas, registration counters, media boxes, and arena gates.",
    points: ["Shift Rosters", "Cluster Rotation", "Real-time Operations"],
    tag: "Match Days",
    endorsement: "Each cluster is led by an experienced Cluster Head to support you throughout the event hours.",
    side: "right"
  },
  {
    title: "Debriefing & Certification",
    date: "Phase 04",
    content: "Post-event reconciliation where teams wrap up inventory and sync reports. Followed by an appreciation ceremony to hand over your certification and elite volunteer badges.",
    points: ["Feedback Log", "Inventory Check", "Certificate Handout"],
    tag: "Wrap Up",
    endorsement: "Top-performing volunteers get directly fast-tracked for paid operations lead roles in next tournaments.",
    side: "left"
  }
];

const roles = [
  "Assist in athlete registration, check-ins, and participant document coordination.",
  "Support hydration networks, medical response pathways, and field logistics.",
  "Manage audience crowd flow, entry gate tracking, and grandstand guidance points.",
  "Maintain the high-energy vibe during pre-event fan zones and engagement activities.",
  "Act as an on-ground operational ambassador for Zho Zho Entertainments.",
  "Provide critical backend support—from kit distribution to media box access management."
];

const benefits = [
  {
    title: "Crew Certificate",
    desc: "Official performance certificate from Zho Zho.",
    icon: <Award className="w-5 h-5" />,
    num: "01",
  },
  {
    title: "Direct Reference",
    desc: "Personalized recommendation letter for your CV.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    num: "02",
  },
  {
    title: "VIP Pass",
    desc: "Fast-track crew access to all future tournaments.",
    icon: <Zap className="w-5 h-5" />,
    num: "03",
  },
  {
    title: "Elite Network",
    desc: "Connect directly with sports leads and athletes.",
    icon: <Network className="w-5 h-5" />,
    num: "04",
  },
  {
    title: "Pro Community",
    desc: "Join a high-energy circle of event managers.",
    icon: <Users className="w-5 h-5" />,
    num: "05",
  },
  {
    title: "Premium Kit",
    desc: "Official crew t-shirts, badges, and curated meals.",
    icon: <Heart className="w-5 h-5" />,
    num: "06",
  },
];

const eligibility = [
  "Must be 18 years or older on the date of deployment.",
  "Passionate about sports entertainment, stadium management, and team cooperation.",
  "Available for all key tournament days and the mandatory pre-event briefing.",
  "Must demonstrate strict punctuality, adherence to the event code, and a clean professional attitude.",
  "Prior experience in corporate events or sports meets is a plus, but absolute freshers are welcome."
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function EventVolunteersPage() {
  return (
    <div className="w-full min-h-screen bg-[#faf9f7] text-[#1a1523] selection:bg-purple-100 overflow-x-hidden font-sans scope-zhozho-volunteers">

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap');

        :root {
          --coral: #f07167;
          --coral-pale: #fff1f0;
          --plum: #7c3aed;
          --plum-light: #9d67f5;
          --plum-pale: #ede9fe;
          --plum-pale2: #f5f3ff;
          --ink: #1a1523;
          --ink-2: #3d3752;
          --muted: #7e7898;
          --bg-2: #f3f1ee;
          --border-soft: rgba(0,0,0,0.07);
        }

        .scope-zhozho-volunteers, 
        .scope-zhozho-volunteers div, 
        .scope-zhozho-volunteers h1, 
        .scope-zhozho-volunteers h2, 
        .scope-zhozho-volunteers h3, 
        .scope-zhozho-volunteers p, 
        .scope-zhozho-volunteers span, 
        .scope-zhozho-volunteers a {
          font-family: 'DM Sans', sans-serif !important;
        }

        @keyframes draw-line { to { stroke-dashoffset: 0; } }
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(124,58,237,0.5); }
          50% { box-shadow: 0 0 0 12px rgba(124,58,237,0); }
        }

        .animate-draw {
          stroke-dasharray: 480;
          stroke-dashoffset: 480;
          animation: draw-line 1.8s cubic-bezier(0.42,0,0.58,1) forwards;
        }

        .tl-card {
          background: #ffffff;
          border: 1px solid var(--border-soft);
          border-radius: 24px;
          transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
          position: relative;
        }
        .tl-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--coral), var(--plum));
          opacity: 0; transition: opacity 0.3s; border-radius: 24px 24px 0 0;
        }
        .tl-card:hover { box-shadow: 0 16px 48px rgba(124,58,237,0.08); transform: translateY(-3px); border-color: rgba(124,58,237,0.18); }
        .tl-card:hover::before { opacity: 1; }

        .center-dot { animation: pulse-dot 2.5s ease-in-out infinite; }

        .role-item { border-bottom: 1px solid var(--border-soft); transition: padding-left 0.25s ease; }
        .role-item:hover { padding-left: 6px; }

        .b-card-updated {
          background: #ffffff;
          border: 1px solid var(--border-soft);
          border-radius: 20px;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .b-card-updated:hover {
          border-color: rgba(124,58,237,0.25);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(124,58,237,0.06);
        }
      `}</style>

      {/* ─── HERO SECTION ─── */}
      <section className="relative flex items-end min-h-[85vh] overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/volunteer.jpg"
            alt="Volunteers Arena Hero"
            fill
            className="object-cover opacity-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f7]/20 to-[#faf9f7] z-10" />
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-purple-300/20 blur-[100px] z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 pt-32">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/60 text-[11px] font-bold uppercase tracking-wider text-[#7c3aed]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed] animate-pulse" />
              Join the Crew
            </div>
            <h1
              className="font-black leading-[1.02] text-[#1a1523] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 8.5vw, 5.8rem)" }}
            >
              Run The Event<br />
              <span className="text-[#7c3aed]">With Us.</span>
            </h1>
            <p className="text-[#7e7898] text-lg font-normal max-w-lg leading-relaxed">
              Be the machinery behind stadium execution—gain core tournament expertise, manage clusters, and power large-scale experiences.
            </p>
            <nav className="flex items-center gap-2 text-xs font-bold text-[#7e7898] uppercase tracking-widest pt-1">
              <Link href="/" className="hover:text-[#7c3aed] transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#3d3752]">Volunteers Program</span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ─── 0. INTRO SECTION ─── */}
      {/* <section className="py-24" style={{ background: "var(--bg-2)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-12 items-center">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-4">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#7e7898] uppercase block">Operational Strength</span>
              <p className="font-bold text-[#1a1523] text-2xl md:text-4xl leading-snug tracking-tight">
                "Volunteers are the active interface between elite tournament strategy and unmatched crowd comfort."
              </p>
            </motion.div>

            <div className="hidden lg:block h-full w-[1px] bg-gradient-to-b from-transparent via-purple-300/40 to-transparent self-stretch" />

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1} className="space-y-6">
              <p className="text-[#7e7898] text-base leading-relaxed">
                At Zho Zho Entertainments, we believe event management isn't just about checklists, it's about crisis management, synchronization, and leadership. Our operational framework gives you access to full event life cycles.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-1">
                {[
                  [<Calendar className="w-4 h-4 text-[#7c3aed]" />, "Multi-day Shifts"],
                  [<Clock className="w-4 h-4 text-[#7c3aed]" />, "Flexible Rosters"],
                  [<ShieldCheck className="w-4 h-4 text-[#7c3aed]" />, "Secure Venues"],
                  [<MapPin className="w-4 h-4 text-[#7c3aed]" />, "Prime Locations"]
                ].map(([icon, lbl], i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-gray-200/50">
                    {icon}
                    <span className="text-xs font-bold text-[#3d3752]">{lbl}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section> */}

      {/* ─── 1. ELIGIBILITY CRITERIA (LEFT SIDE CONTENT) ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-6">
              <div>
                <span className="text-[11px] font-bold tracking-[0.18em] text-[#7e7898] uppercase block mb-2">Gate Guidelines</span>
                <h2 className="font-black text-3xl md:text-5xl text-[#1a1523] leading-tight tracking-tight">
                  Eligibility <span className="text-[#7c3aed]">Criteria</span>
                </h2>
              </div>

              <div className="space-y-2">
                {eligibility.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-[#f5f3ff] transition-colors duration-200">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-100 text-[#7c3aed] shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-[#3d3752] text-[15px] leading-relaxed pt-0.5 font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="/volunteers/eligibility.png"
                alt="Eligibility compliance layout"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-xl p-5 bg-white/90 backdrop-blur-md shadow-md border border-purple-100/50">
                <p className="text-[#7c3aed] text-sm font-bold mb-1">Operational Shift Structure</p>
                <p className="text-[#3d3752] text-xs leading-snug font-medium">
                  Applications are monitored based on venue capacity. Selection follows absolute merit.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 2. ROLE OF VOLUNTEERS (RIGHT SIDE CONTENT) ─── */}
      <section className="py-24 bg-[#faf9f7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative rounded-3xl overflow-hidden aspect-[3/4] lg:max-h-[520px] shadow-xl lg:sticky lg:top-16">
              <Image
                src="/volunteers/role.png"
                alt="Volunteers deployment layout"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-purple-100 shadow-md">
                <span className="text-[10px] font-bold text-[#7c3aed] tracking-widest uppercase block mb-1">On-Ground Roles</span>
                <p className="text-[#1a1523] text-xs font-semibold mt-1">Volunteers are structural anchors assigned directly to distinct operations wings.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5} className="space-y-6 pt-2">
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#7e7898] uppercase block">Areas of deployment</span>
              <h2 className="font-black text-3xl md:text-5xl text-[#1a1523] leading-tight tracking-tight">
                Role of <span className="text-[#7c3aed]">Volunteers</span>
              </h2>

              <div className="divide-y divide-gray-100 pt-2">
                {roles.map((role, i) => (
                  <div key={i} className="role-item flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                    <span className="font-bold text-xs text-[#9d67f5] opacity-70 min-w-[20px] pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[#3d3752] text-[15px] leading-relaxed font-normal">{role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── 3. BENEFITS FOR VOLUNTEERS ─── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#7e7898] uppercase block mb-3">
              Volunteer Benefits
            </span>

            <h2 className="font-black text-3xl md:text-5xl text-[#1a1523] leading-tight tracking-tight">
              Why Join The Crew?
            </h2>

            <p className="mt-4 text-[#7e7898] text-sm md:text-base leading-relaxed">
              Gain practical experience, industry exposure, recognition,
              and access to future opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="group bg-[#faf9ff] border border-purple-100/50 rounded-2xl p-6 hover:bg-white hover:shadow-md hover:border-purple-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#7c3aed] flex items-center justify-center border border-purple-100 mb-4">
                  {b.icon}
                </div>

                <h3 className="font-bold text-[#1a1523] text-base mb-2">
                  {b.title}
                </h3>

                <p className="text-sm text-[#7e7898] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── 4. THE CREW SELECTION & DEPLOYMENT FLOW (DUPLICATE COUNTING REMOVED) ─── */}
      <section className="py-28 bg-[#faf9f7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

          <div className="text-center mb-24 max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/60 text-[10px] font-bold uppercase tracking-widest text-[#7c3aed]">
              Roadmap to Field
            </div>
            <h2 className="font-black text-[#1a1523] text-3xl md:text-5xl leading-tight tracking-tight">
              The Crew Selection & <span className="text-[#7c3aed]">Deployment Flow</span>
            </h2>
            <div className="w-52 mx-auto h-4">
              <svg viewBox="0 0 400 18" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path d="M10,12 C80,4 160,16 200,9 C240,2 320,14 390,8" fill="none" stroke="var(--plum)" strokeWidth="2.5" strokeLinecap="round" className="animate-draw" />
              </svg>
            </div>
            <p className="text-[#7e7898] text-sm md:text-base max-w-lg mx-auto pt-2">
              How we coordinate, screen, assign, and reward your structural efforts across our championship phases.
            </p>
          </div>

          <div className="relative">
            {/* Center Timeline Spine Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px]"
              style={{ background: 'linear-gradient(to bottom, transparent, var(--coral) 8%, var(--plum) 50%, var(--coral) 92%, transparent)' }} />

            <div className="md:hidden absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-[#f07167] via-[#7c3aed] to-transparent" />

            {volunteerProcess.map((event, index) => {
              const isLeft = event.side === 'left';
              return (
                <div key={index} className="relative flex flex-col md:flex-row justify-between items-start md:items-center mb-24 w-full group">

                  {/* Outer Primary Counting Box (Only Counting Element Left) */}
                  <div className={`hidden md:flex md:w-[45%] items-center justify-center px-6 ${isLeft ? 'order-3' : 'order-1'}`}>
                    <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-white to-[#f3f1ee] border-2 border-purple-200 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <span className="font-black text-4xl text-[#7c3aed] tracking-tight">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Central Node Dot — REMOVED DUPLICATE COUNTING, replaced with pristine dynamic solid bullet point anchor */}
                  <div className="hidden md:flex order-2 absolute left-1/2 -translate-x-1/2 z-20 w-5 h-5 rounded-full items-center justify-center center-dot bg-[#7c3aed] border-4 border-white shadow-md" />

                  {/* Mobile Left Dot Marker (Keep for Single Small Layout Reference) */}
                  <div className="md:hidden absolute left-1.5 top-4 z-20 w-6 h-6 rounded-full flex items-center justify-center bg-[#7c3aed] border-2 border-white shadow text-[10px] font-black text-white">
                    {index + 1}
                  </div>

                  {/* Card Element Wrapper */}
                  <div className={`tl-card ml-10 md:ml-0 w-[calc(100%-2.5rem)] md:w-[45%] p-6 md:p-8 ${isLeft ? 'order-1' : 'order-3'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-black text-[#7c3aed] uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                        {event.date}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-gray-100 text-[#3d3752] text-[9px] font-bold uppercase tracking-widest">{event.tag}</span>
                    </div>

                    <h3 className="font-black text-xl md:text-2xl text-[#1a1523] mb-3 tracking-tight group-hover:text-[#7c3aed] transition-colors">
                      {event.title}
                    </h3>

                    <p className="text-sm text-[#7e7898] leading-relaxed mb-6">{event.content}</p>

                    {event.points.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {event.points.map((pt, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f3f1ee] border border-gray-200 text-xs font-semibold text-[#3d3752]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f07167]" />
                            {pt}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#f3f1ee]/80 border border-gray-200/50">
                      <span className="text-base mt-0.5">📋</span>
                      <p className="text-xs text-[#7e7898] font-medium leading-relaxed">{event.endorsement}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─── ACTION TRIGGER (CTA) ─── */}
      <section className="py-28 relative overflow-hidden text-center" style={{ background: "var(--plum-pale2)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 65% 60% at 50% 50%, rgba(124,58,237,0.07) 0%, transparent 75%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto px-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 text-[11px] font-bold uppercase tracking-wider text-[#7c3aed]">
            Ready to apply?
          </div>
          <h2 className="font-black text-4xl md:text-5xl text-[#1a1523] leading-tight tracking-tight">
            Apply to be a <span className="text-[#7c3aed]">Volunteer</span>
          </h2>
          <p className="text-[#7e7898] max-w-md mx-auto text-sm md:text-base leading-relaxed">
            Send us your operational profile / resume. Our coordination cell will reach out to schedule your induction phase.
          </p>
          <div className="pt-2">
            <Link
              href="mailto:info@zhozhoentertainments.com"
              className="inline-flex items-center gap-3 bg-[#7c3aed] text-white px-10 py-4.5 rounded-full font-bold text-base shadow-xl shadow-purple-600/20 hover:bg-[#6d28d9] hover:-translate-y-0.5 transition-all duration-200"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STRUCTURAL FOOTER ─── */}
      <footer className="py-10 bg-[#faf9f7] border-t border-gray-200 text-center">
        <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#7e7898]">
          Squad Operations · On-Ground Execution · Production Infrastructure
        </p>
      </footer>
    </div>
  );
}