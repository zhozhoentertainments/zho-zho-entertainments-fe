import React from 'react';
import Image from 'next/image';

// स्पॉन्सर्स/स्टेकहोल्डर्स का डेटा ऑब्जेक्ट
const sponsorsData = [
  {
    id: 1,
    name: "Sports Authority of Telangana",
    logo: "/images/sports-authority-telangana.png", // अपनी इमेजिस का सही पाथ यहाँ डालें
  },
  {
    id: 2,
    name: "Kho Kho Federation of India",
    logo: "/images/kkfi.png",
  },
  {
    id: 3,
    name: "Telangana Kho Kho Association",
    logo: "/images/telangana-kho-kho.png",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* छोटा सब-हेडिंग */}
        <p className="text-xs font-semibold tracking-widest text-[#7B2CBF] uppercase mb-2">
          Under Recognition and Support From
        </p>
        
        {/* मेन हेडिंग */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3 relative inline-block">
          Our Stakeholders & Sponsors
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#7B2CBF] rounded-full"></span>
        </h2>
        
        {/* सपोर्टिंग टेक्स्ट */}
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-12">
          Brought to you by <span className="font-semibold text-gray-700">ZHO ZHO ENTERTAINMENTS</span>
        </p>

        {/* लोगोज़ ग्रिड */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 items-center justify-center">
          {sponsorsData.map((sponsor) => (
            <div 
              key={sponsor.id} 
              className="group relative bg-white p-6 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px]"
            >
              {/* लोगो कंटेनर */}
              <div className="relative w-32 h-32 mb-4 flex items-center justify-center bg-gray-50 rounded-full p-2 group-hover:scale-105 transition-transform duration-300">
                {/* Next.js Image component का इस्तेमाल। 
                  सुनिश्चित करें कि public/images/ में ये फाइल्स मौजूद हों।
                */}
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={120}
                  className="object-contain"
                  priority
                />
              </div>

              {/* स्पॉन्सर का नाम */}
              <h3 className="text-xs font-bold text-gray-600 uppercase tracking-wider text-center px-2 max-w-[200px] group-hover:text-[#7B2CBF] transition-colors duration-200">
                {sponsor.name}
              </h3>
              
              {/* हल्का सा पर्पल बॉटम बॉर्डर जो होवर करने पर दिखेगा */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7B2CBF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}