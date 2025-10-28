import { Zap, Headphones, Ear, ShieldCheck, Shield, Battery, Cable } from 'lucide-react';

const Accessories = () => {
  const products = [
    {
      icon: <Zap className="w-12 h-12" />,
      name: 'Fast Chargers',
      imagesrc:"./images/fast-chargers.png",
      description: 'Quick charge compatible chargers for all devices',
      price: '₹499',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      name: 'Bluetooth Headphones',
      imagesrc:"./images/bluetooth-audio-devices.png",
      description: 'Premium wireless headphones with noise cancellation',
      price: '₹1,999',
    },
    {
      icon: <Ear className="w-12 h-12" />,
      name: 'Earphones',
      imagesrc:"./images/wired-earphones.png",
      description: 'High-quality wired earphones with deep bass',
      price: '₹299',
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      name: 'Mobile Covers',
      imagesrc:"./images/mobile-covers.png",
      description: 'Durable protective cases for all models',
      price: '₹249',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: 'Tempered Glass',
      imagesrc:"./images/mobile-glass.png",
      description: '9H hardness screen protectors',
      price: '₹199',
    },
    {
      icon: <Battery className="w-12 h-12" />,
      name: 'Power Banks',
      imagesrc:"./images/power-bank.png",
      description: '10000mAh portable charging solutions',
      price: '₹999',
    },
    {
      icon: <Cable className="w-12 h-12" />,
      name: 'Data Cables',
      imagesrc:"./images/data-cables.png",
      description: 'Fast charging & data sync cables',
      price: '₹149',
    },
  ];

  return (
    <section id="accessories" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop Mobile Accessories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium quality accessories at competitive prices. All products come with warranty.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map((product, index) => (
    <div
      key={index}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {/* Image Section */}
      <div className="bg-gradient-to-br from-blue-50 to-gray-50 flex items-center justify-center group-hover:from-blue-100 group-hover:to-gray-100 transition-all duration-300">
        <img
          src={product.imagesrc}
          alt={product.name}
          className="w-full h-56 object-cover sm:h-64 md:h-60 lg:h-64 xl:h-60"
        />
      </div>

      {/* Details Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-700 font-medium">Starting from</span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg font-semibold">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Accessories;
