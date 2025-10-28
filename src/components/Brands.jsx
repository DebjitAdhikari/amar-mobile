const Brands = () => {
  const brands = [
    { name: 'Apple', logo: '🍎',imageSrc:"./images/apple.png" },
    { name: 'Samsung', logo: '📱',imageSrc:"./images/samsung.png" },
    { name: 'OnePlus', logo: '1️⃣',imageSrc:"./images/oneplus.png" },
    { name: 'Xiaomi', logo: '📲',imageSrc:"./images/xiaomi.png" },
    { name: 'Vivo', logo: '📞',imageSrc:"./images/vivo.png" },
    { name: 'Oppo', logo: '☎️',imageSrc:"./images/oppo.png" },
    { name: 'Realme', logo: '📳',imageSrc:"./images/realme.png" },
    { name: 'Others', logo: '📱',imageSrc:"./images/appile.png" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brands We Repair & Support
          </h2>
          <p className="text-lg text-gray-600">
            We service all major smartphone brands with expertise and care
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white cursor-pointer rounded-xl p-6 flex flex-col items-center justify-evenly hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 hover:border-blue-500"
            >
              <div className="text-4xl mb-2">
                {/* {brand.logo} */}
                <img src={brand.imageSrc} alt="" />
              </div>
              <span className="text-sm font-semibold text-gray-700">
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
