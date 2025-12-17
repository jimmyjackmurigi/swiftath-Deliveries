import React from 'react';

const Partners: React.FC = () => {
  // Create an array of 12 placeholders
  const partners = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section id="partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2 className="text-2xl font-bold text-gray-500 uppercase tracking-widest">Trusted Partners</h2>
      </div>
      
      <div className="relative w-full">
        <div className="flex w-[200%] animate-scroll">
           {/* First set of logos */}
           <div className="flex w-1/2 justify-around items-center px-4">
             {partners.map((item) => (
               <div key={`a-${item}`} className="w-24 h-24 flex items-center justify-center mx-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img src={`assets/partner${item}.png`} alt={`Partner ${item}`} className="max-w-full max-h-full object-contain" />
               </div>
             ))}
           </div>
           {/* Duplicate set for infinite loop effect */}
           <div className="flex w-1/2 justify-around items-center px-4">
             {partners.map((item) => (
               <div key={`b-${item}`} className="w-24 h-24 flex items-center justify-center mx-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <img src={`assets/partner${item}.png`} alt={`Partner ${item}`} className="max-w-full max-h-full object-contain" />
               </div>
             ))}
           </div>
        </div>
        
        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Partners;