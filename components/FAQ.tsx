import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How do I pay for my delivery?",
      answer: "We accept M-Pesa directly through the app for seamless transactions. We also accept cash on delivery for verified student accounts."
    },
    {
      question: "What are your operating hours?",
      answer: "We operate from 7:00 AM to 11:00 PM every day, including weekends and public holidays, to ensure you get what you need when you need it."
    },
    {
      question: "Do you deliver to specific hostel rooms?",
      answer: "For security and privacy reasons, we deliver to the main entrance or reception area of your hostel. Our riders will call you upon arrival to meet you."
    },
    {
      question: "Is there a minimum order value?",
      answer: "No, there is no minimum order value! Whether it's a single pen from the bookshop or a full meal, we'll deliver it. Standard delivery rates apply based on distance."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you can track your rider's location in real-time on the map within our app. You'll also receive SMS notifications at key stages."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md">
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={`font-bold text-lg transition-colors duration-300 ${activeIndex === index ? 'text-trustBlue' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-trustBlue text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  <i className="fa-solid fa-chevron-down text-sm"></i>
                </span>
              </button>
              
              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className={`px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 transition-opacity duration-500 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;