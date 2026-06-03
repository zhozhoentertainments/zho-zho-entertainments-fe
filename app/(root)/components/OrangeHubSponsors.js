// app/sponsors/page.js
"use client";

import { 
  Heart, Users, MapPin, Eye, Sparkles, Zap, Award, 
  Gift, Microscope, Megaphone, Droplets, Target, 
  Mail, Phone, ArrowRight, Globe, Shield, TrendingUp,
  Star, Rocket, Infinity, Crown, Flower2, CheckCircle,
  Building2, Coffee, Video, Droplet, Quote
} from "lucide-react";

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8ff] via-white to-[#faf8ff]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16 px-4">
        {/* Abstract background shapes */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#961FDE]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#120323]/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#961FDE]/10 px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#961FDE]" />
            <span className="text-sm font-bold text-[#120323]">PARTNERS FOR CHANGE</span>
          </div>
          
          {/* Punchy headline - smaller and attractive */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#120323] leading-tight mb-8">
            When{' '}
            <span className="bg-gradient-to-r from-[#961FDE] to-[#120323] bg-clip-text text-transparent">
              passion meets purpose
            </span>
            <br />
            magic happens ✨
          </h1>
          
          {/* Full emotional copy */}
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            <p className="text-lg text-[#120323]/70 leading-relaxed">
              We believe that real impact is made when passionate people and visionary brands come together. 
              Our sponsors and partners are not just supporters — they are{' '}
              <span className="font-bold text-[#961FDE]">changemakers</span> who share our commitment to 
              wellness, community, and meaningful engagement.
            </p>
            
            <p className="text-md text-[#120323]/60 leading-relaxed">
              Whether it's a city run for mental health, a wellness retreat, or an awareness campaign, 
              your sponsorship helps us reach more people, create deeper experiences, and build a 
              healthier, more connected India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#961FDE] text-white px-8 py-3 rounded-full font-bold hover:bg-[#120323] transition-all shadow-lg shadow-[#961FDE]/30 flex items-center gap-2">
              Become a Partner <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-[#961FDE] text-[#961FDE] px-8 py-3 rounded-full font-bold hover:bg-[#961FDE] hover:text-white transition-all">
              Download Sponsorship Deck
            </button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 pt-6 border-t border-[#120323]/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#961FDE]">PAN-India</div>
              <div className="text-sm text-[#120323]/50">15+ Cities</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#961FDE]">100K+</div>
              <div className="text-sm text-[#120323]/50">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#961FDE]">50M+</div>
              <div className="text-sm text-[#120323]/50">Digital Reach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#961FDE]">4.8★</div>
              <div className="text-sm text-[#120323]/50">Partner Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#120323] mb-4">Why Partner With Us?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#961FDE] to-[#120323] mx-auto rounded-full"></div>
        </div>

        {/* Two Big Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="group bg-white rounded-3xl p-8 border border-[#120323]/10 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#961FDE]/20 to-[#961FDE]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Globe className="w-8 h-8 text-[#961FDE]" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#961FDE]/10 text-[#961FDE] text-xs font-bold uppercase mb-4 tracking-wider">
              Growth Vision
            </div>
            <h3 className="text-2xl font-bold text-[#120323] mb-3">PAN-India Scale</h3>
            <p className="text-[#120323]/70 leading-relaxed">
              Be part of a bold journey to scale across 15+ cities and create large-format experiences nationwide.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#961FDE]">
              <TrendingUp className="w-4 h-4" />
              300% Growth YoY
            </div>
          </div>

          <div className="group bg-white rounded-3xl p-8 border border-[#120323]/10 hover:shadow-2xl hover:-translate-y-1 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#961FDE]/20 to-[#961FDE]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <Users className="w-8 h-8 text-[#961FDE]" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#961FDE]/10 text-[#961FDE] text-xs font-bold uppercase mb-4 tracking-wider">
              Audience
            </div>
            <h3 className="text-2xl font-bold text-[#120323] mb-3">Engaged & Diverse</h3>
            <p className="text-[#120323]/70 leading-relaxed">
              Connect with health-conscious individuals, youth, corporates, families, and changemakers across India.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#961FDE]">
              <Users className="w-4 h-4" />
              100K+ Strong Community
            </div>
          </div>
        </div>

        {/* Three Small Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#961FDE] to-[#120323] rounded-2xl p-6 text-white shadow-xl">
            <Heart className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cause-Driven Visibility</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Align your brand with mental health & community wellness movement.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-bold">
              <CheckCircle className="w-4 h-4" />
              IMPACT FIRST
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#120323]/10 hover:shadow-xl transition group">
            <Eye className="w-10 h-10 text-[#961FDE] mb-4" />
            <h3 className="text-xl font-bold text-[#120323] mb-2">High-Value Exposure</h3>
            <p className="text-[#120323]/60 text-sm leading-relaxed">
              Logo placements, stage mentions, digital branding, media coverage & influencer tie-ins.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Logo', 'Stage', 'Digital', 'Media'].map(item => (
                <span key={item} className="bg-[#961FDE]/10 px-2 py-1 rounded-full text-xs font-semibold text-[#961FDE]">{item}</span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#120323]/10 hover:shadow-xl transition group">
            <TrendingUp className="w-10 h-10 text-[#961FDE] mb-4" />
            <h3 className="text-xl font-bold text-[#120323] mb-2">Proven ROI</h3>
            <p className="text-[#120323]/60 text-sm leading-relaxed">
              3.2x average ROI for partners with exceptional retention rates.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-[#961FDE] fill-[#961FDE]" />
              <span className="font-bold text-[#120323] text-sm">4.8★ Partner Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-14 bg-white border-y border-[#120323]/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm uppercase tracking-wider text-[#120323]/50 mb-8 font-bold">
            Trusted by visionary brands
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {['HealthFirst', 'WellnessCorp', 'MindCare', 'ActiveLife', 'NutriVibe', 'FitIndia', 'ZenLife', 'Vitality'].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#961FDE]"></div>
                <span className="font-semibold text-[#120323]/70 hover:text-[#961FDE] transition cursor-pointer">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#961FDE]/10 px-4 py-2 rounded-full mb-4">
            <Crown className="w-4 h-4 text-[#961FDE]" />
            <span className="text-sm font-bold uppercase text-[#961FDE]">Sponsorship Tiers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#120323] mb-4">Choose Your Impact Level</h2>
          <p className="text-[#120323]/60 text-lg">Tailored packages for brands of all sizes</p>
        </div>

        {/* Title Sponsor - Featured */}
        <div className="relative mb-10 group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#961FDE] to-[#120323] rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition"></div>
          <div className="relative bg-gradient-to-r from-[#120323] to-[#1a0a2e] rounded-3xl p-10 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#961FDE]/20 rounded-full blur-3xl"></div>
            <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="w-8 h-8 text-[#961FDE]" />
                  <span className="bg-[#961FDE] px-4 py-1.5 rounded-full text-sm font-bold uppercase">Title Sponsor</span>
                </div>
                <h3 className="text-3xl font-bold mb-3">Maximum Brand Presence</h3>
                <p className="text-white/80 text-lg max-w-2xl">
                  Complete brand integration across all platforms — event collaterals, T-shirts, medals, 
                  press releases, opening/closing ceremonies, and more.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {['Logo Priority', 'Stage Naming', 'Press Coverage', 'VIP Access'].map(f => (
                    <span key={f} className="bg-white/10 px-3 py-1 rounded-full text-sm">{f}</span>
                  ))}
                </div>
              </div>
              <button className="bg-white text-[#120323] px-8 py-3 rounded-xl font-bold hover:bg-[#961FDE] hover:text-white transition whitespace-nowrap shadow-xl">
                Inquire Now →
              </button>
            </div>
          </div>
        </div>

        {/* Package Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Gift, title: "Merchandise Partner", desc: "Sponsor event kits, T-shirts, medals & giveaways that go directly to participants", benefits: ["Brand on Kits", "Product Sampling", "Social Shoutouts"] },
            { icon: Microscope, title: "Wellness Partner", desc: "Support pre-event talk sessions, wellness zones & expert speaker panels", benefits: ["Stage Time", "Panel Access", "Content Collab"] },
            { icon: Megaphone, title: "Digital Partner", desc: "Co-branded digital campaigns & influencer outreach across platforms", benefits: ["Influencer Tags", "Co-branded Ads", "Story Features"] },
            { icon: Droplets, title: "Hydration Partner", desc: "Feature your brand at hydration points, nutrition zones & refreshment counters", benefits: ["On-ground Signs", "Product Display", "Photo Ops"] },
          ].map((pkg, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#120323]/10 hover:shadow-2xl transition-all group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#961FDE]/20 to-[#120323]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <pkg.icon className="w-7 h-7 text-[#961FDE]" />
              </div>
              <h3 className="text-xl font-bold text-[#120323] mb-2">{pkg.title}</h3>
              <p className="text-[#120323]/60 text-sm leading-relaxed mb-4">{pkg.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {pkg.benefits.map((b, i) => (
                  <span key={i} className="bg-[#faf8ff] px-2 py-0.5 rounded text-xs font-medium text-[#120323]/70">{b}</span>
                ))}
              </div>
              <button className="text-[#961FDE] font-semibold text-sm group-hover:gap-2 transition-all inline-flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Testimonial */}
      <section className="bg-[#120323] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div className="space-y-8">
              <div className="text-center md:text-left">
                <div className="text-4xl font-black text-[#961FDE]">94%</div>
                <div className="text-white/60 text-sm mt-1">Partner Retention Rate</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-black text-[#961FDE]">3.2x</div>
                <div className="text-white/60 text-sm mt-1">Average ROI for Partners</div>
              </div>
              <div className="text-center md:text-left">
                <div className="text-4xl font-black text-[#961FDE]">25+</div>
                <div className="text-white/60 text-sm mt-1">Active Brand Partners</div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <Quote className="w-10 h-10 text-[#961FDE] mb-4" />
                <p className="text-white text-xl leading-relaxed mb-6">
                  "Orange Hub has given us unprecedented access to a highly engaged, 
                  purpose-driven audience. The ROI has been exceptional."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#961FDE] to-[#120323] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Rajiv Mehta</div>
                    <div className="text-white/50 text-sm">CMO, WellnessCorp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#120323] to-[#1a0a2e]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#961FDE]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#961FDE]/5 rounded-full blur-3xl"></div>
          
          <div className="relative p-10 md:p-14 text-center">
            <div className="inline-flex items-center gap-2 bg-[#961FDE]/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4 text-[#961FDE]" />
              <span className="text-sm font-bold text-white uppercase">Limited Slots Available</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Ready to Make Real Impact?
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              We're excited to collaborate with brands that care about purpose, people, and progress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-[#961FDE] text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#961FDE] transition-all flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get Sponsorship Deck
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule a Call
              </button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
              <span>📧 partners@orangehub.co.in</span>
              <span>📞 +91 98765 43210</span>
              <span>⏱️ Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}