import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Blog', href: '#blog' },
  ];

  const downloadLink = "https://play.google.com/store/apps/details?id=com.swiftath.delivery";

  return (
    <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <nav className="pointer-events-auto w-full max-w-4xl bg-white/70 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl px-6 py-3 transition-all duration-300">
        <div className="flex justify-between items-center">
          {/* Logo - Connected to Home */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="font-display font-bold text-xl md:text-2xl text-trustBlue tracking-tight flex items-center gap-2">
              <i className="fa-solid fa-bolt text-energyOrange"></i>
              SwiftAth
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-trustBlue font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-energyOrange hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Download App
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 hover:text-trustBlue focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in-down p-6 flex flex-col items-center gap-4 mx-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-800 font-medium hover:text-trustBlue text-lg"
              >
                {link.name}
              </a>
            ))}
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center bg-energyOrange text-white px-6 py-3 rounded-xl font-bold mt-2"
            >
              Download App
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;