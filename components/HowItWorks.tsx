import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How to Get the App</h2>
          <div className="w-24 h-1 bg-energyOrange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative mb-16">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-3xl text-trustBlue shadow-lg mb-6 group-hover:scale-110 group-hover:border-energyOrange transition-all duration-300 relative z-10">
              <i className="fa-solid fa-download"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Download App</h3>
            <p className="text-gray-600">Get SwiftAth on iOS or Android.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-3xl text-trustBlue shadow-lg mb-6 group-hover:scale-110 group-hover:border-energyOrange transition-all duration-300 relative z-10">
              <i className="fa-solid fa-basket-shopping"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Place Order</h3>
            <p className="text-gray-600">Choose from local favorites.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center text-3xl text-trustBlue shadow-lg mb-6 group-hover:scale-110 group-hover:border-energyOrange transition-all duration-300 relative z-10">
              <i className="fa-solid fa-truck-fast"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Fast</h3>
            <p className="text-gray-600">Delivered to your location.</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://play.google.com/store" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1"
          >
            <i className="fa-brands fa-google-play text-2xl"></i>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Get it on</div>
              <div className="text-sm font-bold leading-none">Google Play</div>
            </div>
          </a>

          <a 
            href="https://www.apple.com/app-store/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1"
          >
            <i className="fa-brands fa-apple text-3xl"></i>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wide opacity-80">Download on the</div>
              <div className="text-sm font-bold leading-none">App Store</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;