import React from 'react';

const ServicePromise: React.FC = () => {
  return (
    <section className="py-20 bg-trustBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Our Service Promise</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-energyOrange rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg">
              <i className="fa-solid fa-stopwatch text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">30-Minute Guarantee</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We value your time. If we're late, you get a discount on your next order. Period.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-green-500 rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg">
              <i className="fa-solid fa-user-shield text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Verified Riders</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              All our riders are vetted, trained, and insured. Your safety and package security is our priority.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 mx-auto bg-purple-500 rounded-full flex items-center justify-center text-2xl mb-6 shadow-lg">
              <i className="fa-solid fa-heart text-white"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We exclusively partner with local Athi vendors, supporting the businesses you know and love.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePromise;