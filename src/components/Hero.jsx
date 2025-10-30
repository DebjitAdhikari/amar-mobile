import { Wrench, ShoppingBag, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Aurora from './Aurora';
const Hero = ({lang}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample images for the slider - replace with your actual images
  const sliderImages = [
    "./images/gallery-5.jpg",
    "./images/gallery-2.jpg", 
    "./images/gallery-3.jpg",
    "./images/gallery-4.jpg"
  ];

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="relative bg-dark">
      
  
{/* <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/> */}
      <div className="relative pt-24 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-dark">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            
            {/* IMAGE SLIDER SECTION */}
            <div className="relative order-1 md:order-2 flex justify-center animate-fadeIn">
              <div className="relative z-10 w-full  max-w-[500px] sm:w-96 md:w-[500px] lg:w-[520px]">
                {/* Slider Container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[5/5] md:aspect-[4/4]">
                  {sliderImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Mobile Repair ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                  </button>

                  {/* Slide Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-[#f5c96a] scale-125' 
                            : 'bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-40 h-32 bg-cyan-200 rounded-full blur-3xl opacity-20 -z-10"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#f5c96a] rounded-full blur-3xl opacity-30 -z-10"></div>
              </div>
            </div>

            {/* TEXT CONTENT SECTION */}
            <div className="space-y-6 sm:text-center md:text-left order-2 md:order-1 animate-slideUp">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f5c96a] leading-tight tracking-tight">
                  
                  {
                    lang=="bn"?"আমার মোবাইল":"Amar Mobile"
                  }
                </h1>
                <h2 className={`text-xl md:text-2xl lg:text-3xl  text-slate-200 leading-tight ${lang=="bn"?"font-light":"font-semibold"}`}>
                  
                  {
                    lang=="bn"?"আপনাদের বিশ্বস্ত মোবাইল রিপেয়ারিং এবং অ্যাক্সেসরিজ স্টোর":"Your Trusted Mobile Repair & Accessories Store"
                  }
                  
                </h2>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Fast, reliable, and affordable mobile repair solutions. Plus, explore our wide range of genuine mobile accessories for every model.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 md:py-4 max-w-md mx-auto md:mx-0">
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-[#f5c96a] rounded-full"></div>
                  <span className="text-sm md:text-base">Quick Repair</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-[#f5c96a] rounded-full"></div>
                  <span className="text-sm md:text-base">Genuine Parts</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-[#f5c96a] rounded-full"></div>
                  <span className="text-sm md:text-base">Warranty Included</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <div className="w-2 h-2 bg-[#f5c96a] rounded-full"></div>
                  <span className="text-sm md:text-base">Expert Technicians</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="group bg-[#f5c96a] text-black px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#f5c96a]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <Wrench className="w-5 h-5" />
                  Book a Repair
                </button>
                <button
                  onClick={() => scrollToSection('#accessories')}
                  className="group bg-transparent text-white border-2 border-[#f5c96a] px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-[#f5c96a] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Shop Accessories
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-200 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#f5c96a] rounded-full blur-3xl opacity-10"></div>
      </div>
    </section>
  );
};

export default Hero;