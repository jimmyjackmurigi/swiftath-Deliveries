import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-trustBlue/5 rounded-3xl transform -rotate-3 scale-105 z-0"></div>
            <img 
              src="assets/about-mission.png" 
              alt="SwiftAth Delivery Rider" 
              className="relative rounded-3xl shadow-2xl z-10 w-full h-auto object-cover transform rotate-2 hover:rotate-0 transition-all duration-500"
            />
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-energyOrange/10 rounded-full blur-3xl z-0"></div>
          </div>

          {/* Text Side */}
          <div>
            <div className="inline-block px-3 py-1 bg-trustBlue/10 text-trustBlue text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
              Who We Are
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Our Mission & Vision
            </h2>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
              <p className="mb-6 font-medium text-gray-800 text-xl border-l-4 border-energyOrange pl-4">
                SwiftAth isn't just a delivery company; we are the heartbeat of the Daystar and Athi River community.
              </p>
              <p className="mb-6">
                 Our mission is to bridge the gap between busy student schedules and their daily needs.
              </p>
              <p className="text-gray-500 italic">
                "Founded by students, for students. We believe in speed, trust, and supporting local businesses."
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-8">
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-trustBlue text-xl">
                   <i className="fa-solid fa-bolt"></i>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900">Fast</h4>
                   <p className="text-xs text-gray-500">Optimized routes</p>
                 </div>
               </div>
               <div className="flex items-center gap-3">
                 <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-energyOrange text-xl">
                   <i className="fa-solid fa-users"></i>
                 </div>
                 <div>
                   <h4 className="font-bold text-gray-900">Local</h4>
                   <p className="text-xs text-gray-500">Community focused</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;