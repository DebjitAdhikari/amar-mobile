const Brands = () => {
  const brands = [
    { name: 'Apple', logo: '🍎',imageSrc:"./images/apple-logo.png" },
    { name: 'Samsung', logo: '📱',imageSrc:"./images/samsung-logo.avif" },
    { name: 'OnePlus', logo: '1️⃣',imageSrc:"./images/oneplus-logo.png" },
    { name: 'Xiaomi', logo: '📲',imageSrc:"./images/xiaomi.png" },
    { name: 'Vivo', logo: '📞',imageSrc:"./images/vivo.png" },
    { name: 'Oppo', logo: '☎️',imageSrc:"./images/oppo-logo.png" },
    { name: 'Realme', logo: '📳',imageSrc:"./images/realme.png" },
    { name: 'Nothing', logo: '📱',imageSrc:"./images/nothing-logo.png" },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-dark">
      {/* <div className="absolute sm:w-72 sm:h-72 animate-drift  opacity-45 top-1 right-2 sm:bottom-9 sm:top-2 sm:left-4">
        <img src="./images/brand-bg.png" alt="" />
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start sm:text-center mb-12 animate-fadeIn">
          <h2 className="text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl font-bold text-white mb-4">
            Brands We Repair & Support
          </h2>
          <p className="text-lg text-slate-200">
            We service all major smartphone brands with expertise and care
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className=" bg-white/10 backdrop-blur-md 
             border border-white/20 
             cursor-pointer rounded-xl p-6 flex flex-col items-center justify-evenly hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2  border-gray-200 hover:border-primary"
            >
              <div className="text-4xl  mb-2">
                {/* {brand.logo} */}
                <img src={brand.imageSrc} alt="" />
              </div>
              <span className="text-sm font-semibold text-white">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
