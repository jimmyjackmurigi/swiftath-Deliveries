import React from 'react';

const AppShowcase: React.FC = () => {
  return (
    <section id="app-showcase" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="flex-1 order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">Your Campus in Your Pocket.</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the ultimate convenience app designed for the Daystar community. Simple, fast, and secure.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg text-trustBlue mr-4 mt-1">
                  <i className="fa-solid fa-hand-pointer"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">One-tap ordering</h4>
                  <p className="text-gray-500 text-sm">Save your favorites for instant re-ordering.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-lg text-energyOrange mr-4 mt-1">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Live Rider Chat</h4>
                  <p className="text-gray-500 text-sm">Communicate directly with your rider.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg text-green-600 mr-4 mt-1">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Secure M-Pesa Integration</h4>
                  <p className="text-gray-500 text-sm">Cashless, safe, and automatic.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Phone Mockup */}
          <div className="flex-1 order-1 md:order-2 flex justify-center relative">
            <div className="relative w-72 h-[580px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden z-10">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-gray-50 overflow-hidden relative">
                 <img src="assets/app-screen.png" alt="App Screen" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Background Decor for Phone */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-[600px] bg-trustBlue/10 rounded-[3.5rem] -z-10 rotate-3"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;