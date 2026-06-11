// app/(root)/loading.jsx
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex min-h-[75vh] w-full flex-col items-center justify-center px-4 bg-transparent">
      
      {/* 1. Logo Container with Circular Spinner */}
      <div className="relative flex items-center justify-center h-24 w-24 sm:h-28 sm:w-28">
        
        {/* Background Track Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-100/80 dark:border-gray-800"></div>
        
        {/* Active Animated Spinning Circle */}
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-600 border-t-transparent shadow-sm"></div>
        
        {/* Inside: Your Brand Logo */}
        <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden bg-white p-1 flex items-center justify-center shadow-inner">
          <Image 
            src="/logo.png" 
            alt="Zho-Zho Entertainments Logo" 
            width={80} 
            height={80}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* 2. Small Indicator Icon & Text Section */}
      <div className="mt-6 flex items-center space-x-2 text-gray-500 dark:text-gray-400">
        {/* Small Animated Icon */}
        <svg 
          className="animate-spin h-4 w-4 text-blue-600" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>

        {/* Pulsing Text */}
        <span className="text-sm font-semibold tracking-wider uppercase animate-pulse">
          Loading...
        </span>
      </div>

    </div>
  );
}