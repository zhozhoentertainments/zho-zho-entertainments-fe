"use client";

// import Landing from "./Landing/page";
// import BackgroundVideo from 'next-video/background-video';

// import Video from 'next-video';
// import myVideo from '../../videos/hero1.mp4';
import Sponsors from "./components/Sponsors";
import EliteChampionship from "./components/EliteChampionship";
import WhyKhoKho from "./components/WhyKhoKho";
import KhoKhoHistory from "./components/KhoKhoHistory";
import PerformedEvents from "./components/PerformedEvents";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhyKhoKhoPartner from "./components/WhyKhoKhoPartner";
import SponsorsLogoCarousel from "./components/SponsorsLogoCarousel.js";
import ServicesPage from "./components/ServicesPage.js";
import RecentActivities from "./components/RecentActivities.jsx";




export default function Home() {
  return (
    <div className="w-full min-h-screen font-sans flex flex-col bg-white">

      <EliteChampionship/>
      <WhyKhoKhoPartner/>
      <KhoKhoHistory/>
      <Sponsors />
      <RecentActivities />
      <TestimonialsCarousel/>
      {/* <WhyKhoKho/>  the timeline code*/}
      <PerformedEvents/>
      <ServicesPage/>
      <SponsorsLogoCarousel />
    </div>
  );
}

