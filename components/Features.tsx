import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Student Wallet Friendly",
      image: "assets/wallet.png",
      description: "Low fees tailored for student budgets."
    },
    {
      title: "Campus Gate Delivery",
      image: "assets/campus-gate.png",
      description: "We meet you right where you need us."
    },
    {
      title: "Real-Time Tracking",
      image: "assets/tracking.png",
      description: "Follow your order every step of the way."
    },
    {
      title: "Late Night Study Fuel",
      image: "assets/coffee.png",
      description: "Caffeine and snacks when you're burning the midnight oil."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Choose SwiftAth</h2>
          <div className="w-20 h-1 bg-energyOrange mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;