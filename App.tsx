import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LaunchBanner from './components/LaunchBanner';
import Stats from './components/Stats';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppShowcase from './components/AppShowcase';
import ServicePromise from './components/ServicePromise';
import Partners from './components/Partners';
import Reviews from './components/Reviews';
import Blog from './components/Blog';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LaunchBanner />
        <Stats />
        <About />
        <Features />
        <HowItWorks />
        <AppShowcase />
        <ServicePromise />
        <Partners />
        <Reviews />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default App;