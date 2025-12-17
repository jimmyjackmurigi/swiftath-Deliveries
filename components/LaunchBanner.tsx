import React from 'react';

const LaunchBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-energyOrange via-orange-500 to-red-500 text-white py-16 relative overflow-hidden shadow-2xl">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 py-1 px-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 shadow-sm animate-bounce">
           <i className="fa-solid fa-fire text-yellow-300"></i>
           <span className="font-bold tracking-wider text-xs uppercase">Limited Time Offer</span>
        </div>
        
        {/* Headline */}
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 drop-shadow-md italic transform -rotate-1">
          Launch Special!
        </h2>
        
        {/* Subtext */}
        <p className="text-xl md:text-2xl font-medium mb-10 text-orange-50 leading-relaxed max-w-3xl mx-auto">
          The First 500 Daystar Students get <span className="font-extrabold text-energyOrange bg-white px-3 py-1 rounded shadow-lg transform rotate-1 inline-block">3 FREE Deliveries!</span> <br className="hidden md:block"/> Join the SwiftAth family today.
        </p>
        
        {/* CTA Button */}
        <a 
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group relative bg-white text-energyOrange font-black text-xl py-5 px-12 rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] transform transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse"
        >
          <span className="relative z-10">Claim Your Free Deliveries</span>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-100 animate-ping"></div>
        </a>
      </div>
    </div>
  );
};

export default LaunchBanner;