import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Accessories from './components/Accessories';
import SpecialOffers from './components/SpecialOffers';
import Brands from './components/Brands';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
 

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-dark">
      <Navbar />
      <Hero />
      <Services />
      <Accessories />
      {/* <SpecialOffers /> */}
      <Brands />
      <About />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
