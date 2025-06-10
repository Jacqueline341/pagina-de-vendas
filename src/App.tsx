import React from 'react';
import Hero from './components/Hero';
import WhyDifferent from './components/WhyDifferent';
import Benefits from './components/Benefits';
import WhatYouGet from './components/WhatYouGet';
import Bonuses from './components/Bonuses';
import Testimonials from './components/Testimonials';
import FinalOffer from './components/FinalOffer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <WhyDifferent />
      <Benefits />
      <WhatYouGet />
      <Bonuses />
      <Testimonials />
      <FinalOffer />
      <Footer />
    </div>
  );
}

export default App;