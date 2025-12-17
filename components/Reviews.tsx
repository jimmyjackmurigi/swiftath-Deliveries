import React from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah K.",
      role: "Daystar Student",
      text: "SwiftAth saved my finals week! Got my coffee and snacks in 20 minutes.",
      avatar: "assets/avatar1.png"
    },
    {
      name: "John M.",
      role: "Athi Resident",
      text: "Finally a reliable delivery service in town. The app is super smooth.",
      avatar: "assets/avatar2.png"
    },
    {
      name: "Lisa P.",
      role: "Medical Student",
      text: "The rider was so polite and professional. Highly recommend!",
      avatar: "assets/avatar3.png"
    },
    {
      name: "Kevin O.",
      role: "Business Major",
      text: "Great prices for students. Use it almost every day.",
      avatar: "assets/avatar4.png"
    },
    {
      name: "Michelle W.",
      role: "Lecturer",
      text: "Convenient for getting lunch delivered to the faculty lounge.",
      avatar: "assets/avatar5.png"
    },
    {
      name: "David K.",
      role: "IT Student",
      text: "Real-time tracking is actually real-time. Love the tech behind this.",
      avatar: "assets/avatar6.png"
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900">Campus Love</h2>
          <p className="text-gray-600 mt-2">See what people are saying about us</p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar px-4">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 snap-center flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-trustBlue/20" />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 text-sm mb-3">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="text-gray-600 text-sm italic flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;