"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  Briefcase, 
  Tv, 
  Cpu, 
  Music, 
  Trophy, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const activitiesList = [
  {
    id: "01",
    title: "Corporate Events",
    desc: "Executive summits, brand immersion cups, and premium networking operations management.",
    icon: <Briefcase className="w-5 h-5" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    accentColor: "blue",
    link: "/services"
  },
  {
    id: "02",
    title: "Live Entertainment",
    desc: "Arena-scale musical opening ceremonies and high-octane stadium fan zones execution.",
    icon: <Tv className="w-5 h-5" />,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
    bgColor: "bg-purple-50",
    accentColor: "purple",
    link: "/services"
  },
  {
    id: "03",
    title: "Technology & Ancillary",
    desc: "Automated e-ticketing turnstiles, real-time fan matrices, and smart digital ecosystems.",
    icon: <Cpu className="w-5 h-5" />,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconColor: "text-green-600",
    bgColor: "bg-green-50",
    accentColor: "green",
    link: "/services"
  },
  {
    id: "04",
    title: "Cultural Events",
    desc: "Fusing historical traditional formats with modern structural stadium production values.",
    icon: <Music className="w-5 h-5" />,
    gradient: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50",
    accentColor: "orange",
    link: "/services"
  },
  {
    id: "05",
    title: "Sports Events",
    desc: "Championship multi-city leagues, player drafting rosters, and court management tracking.",
    icon: <Trophy className="w-5 h-5" />,
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-600",
    bgColor: "bg-red-50",
    accentColor: "red",
    link: "/services"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      delay: i * 0.08, 
      ease: [0.21, 1.02, 0.35, 1.1],
    },
  }),
};

export default function FeaturedActivities() {
  const router = useRouter();

  const handleCardClick = (link) => {
    router.push(link);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden w-full">
      
      {/* DM Sans Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
        
        * {
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 40, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Simple Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(124 58 237 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200/50 mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span className="text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
              What We Orchestrate
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Featured Event{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Activities
            </span>
          </h2>
          
          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto"
          />
        </motion.div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activitiesList.map((activity, index) => (
            <motion.div
              key={activity.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={() => handleCardClick(activity.link)}
              className={`relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group`}
            >
              {/* Premium Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-6 relative z-10">
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${activity.bgColor} border border-gray-100 transition-all duration-300`}
                  >
                    <div className={`${activity.iconColor} transition-all duration-300`}>
                      {activity.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="space-y-2 mb-4">
                  <h3 className={`font-semibold text-xl text-gray-900 group-hover:text-${activity.accentColor}-600 transition-colors duration-300`}>
                    {activity.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                    {activity.desc}
                  </p>
                </div>

                {/* Footer */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center justify-end pt-3 border-t border-gray-50"
                >
                  <motion.div 
                    whileHover={{ x: 3 }}
                    className={`flex items-center gap-1.5 text-${activity.accentColor}-500 opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    <span className="text-xs font-medium">Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}