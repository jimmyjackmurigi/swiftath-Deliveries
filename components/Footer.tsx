import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-gray-800 pb-12">
          
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
               <i className="fa-solid fa-bolt text-energyOrange"></i> SwiftAth
            </h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Bridging the gap between convenience and campus life. Fast, reliable, and always local.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-energyOrange hover:text-white transition-all">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-energyOrange hover:text-white transition-all">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-energyOrange hover:text-white transition-all">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-400 hover:text-energyOrange transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-energyOrange transition-colors">About Us</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-energyOrange transition-colors">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-energyOrange transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-gray-400">
                <i className="fa-solid fa-envelope w-4 mr-2 text-energyOrange"></i>
                hello@swiftath.com
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fa-solid fa-phone w-4 mr-2 text-energyOrange"></i>
                +254 700 000 000
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">Get the latest campus deals and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-energyOrange border border-gray-700 text-sm placeholder-gray-500"
              />
              <button 
                type="button" 
                className="bg-energyOrange hover:bg-energyOrangeDark text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg text-sm uppercase tracking-wide"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 SwiftAth Deliveries. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;