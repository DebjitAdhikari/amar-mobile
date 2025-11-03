import { useState } from 'react'
import './App.css'
import { FaWhatsapp } from "react-icons/fa";
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
import { ChartBarIcon, MessageCircle } from 'lucide-react';
import WhatsAppButton from './components/WhatsAppButton';
import LanguagePopup from './components/LanguagePopup';
 

function App() {
  const [lang,setLang]=useState("")
  if(!lang){
    return <LanguagePopup onSelect={setLang}></LanguagePopup>
  }
  return (
    <div className="min-h-screen z-50 overflow-hidden bg-dark">
      
      <Navbar lang={lang} />
      <WhatsAppButton></WhatsAppButton>
      <Hero lang={lang}/>
      <Services lang={lang}/>
      <Accessories lang={lang}/>
      {/* <SpecialOffers /> */}
      <Brands lang={lang}/>
      <About lang={lang}/>
      <Testimonials lang={lang}/>
      <Gallery lang={lang}/>
      <FAQ lang={lang}/>
      <Contact lang={lang}/>
      <Footer lang={lang}/>
    </div>
  );
}

export default App;
