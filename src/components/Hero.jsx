import { Wrench, ShoppingBag } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE SECTION */}
      <div className="relative order-1 md:order-2 flex justify-center animate-fadeIn">
        <div className="relative z-10 max-w-[500px] sm:w-96 md:w-[600px] lg:w-[520px] drop-shadow-2xl">
          <img
            src="./images/gallery-5.jpg"
            alt="Mobile Repair"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 -z-0"></div>
        <div className="absolute -top-6 -left-6 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-40 -z-0"></div>
      </div>

      {/* TEXT SECTION */}
      <div className="space-y-6 text-center md:text-left order-2 md:order-1 animate-slideUp">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
          Your Trusted Mobile Repair & Accessories Store
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0">
          Fast, reliable, and affordable mobile repair solutions. Plus, explore our wide range of genuine mobile accessories for every model.
        </p>

        <div className="flex items-center justify-center md:justify-start flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => scrollToSection('#contact')}
            className="group bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Wrench className="w-5 h-5" />
            Book a Repair
          </button>
          <button
            onClick={() => scrollToSection('#accessories')}
            className="group bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            Shop Accessories
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Soft background highlight */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/30 to-transparent -z-10"></div>
</div>


    </section>
  );
};

export default Hero;
