import { Zap, Headphones, Ear, ShieldCheck, Shield, Battery, Cable } from 'lucide-react';

const Accessories = ({lang}) => {
  const products = [
    {
      icon: <Zap className="w-12 h-12" />,
      name: lang=="bn"?"ফাস্ট চার্জার": 'Fast Chargers',
      imagesrc:"./images/fast-chargers.png",
      description: lang=="bn"?"সব ধরনের ডিভাইসের জন্য কুইক চার্জ সাপোর্টেড চার্জার।": 'Quick charge compatible chargers for all devices',
      price: '₹49',
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      name: lang=="bn"?"ব্লুটুথ হেডফোন": 'Bluetooth Headphones',
      imagesrc:"./images/bluetooth-audio-devices.png",
      description: lang=="bn"?"নয়েজ ক্যানসেলেশনসহ প্রিমিয়াম কোয়ালিটির ওয়্যারলেস হেডফোন।": 'Premium wireless headphones with noise cancellation',
      price: '₹799',
    },
    {
      icon: <Ear className="w-12 h-12" />,
      name: lang=="bn"?"ইয়ারফোন": 'Earphones',
      imagesrc:"./images/wired-earphones.png",
      description: lang=="bn"?"গভীর বেস সহ উচ্চমানের ওয়্যার্ড ইয়ারফোন।": 'High-quality wired earphones with deep bass',
      price: '₹50',
    },
    {
      icon: <ShieldCheck className="w-12 h-12" />,
      name: lang=="bn"?"মোবাইল কভার": 'Mobile Covers',
      imagesrc:"./images/mobile-covers.png",
      description: lang=="bn"?"সব মডেলের জন্য টেকসই ও স্টাইলিশ প্রোটেকটিভ কভার।": 'Durable protective cases for all models',
      price: '₹80',
    },
    {
      icon: <Shield className="w-12 h-12" />,
      name: lang=="bn"?"টেম্পারড গ্লাস": 'Tempered Glass',
      imagesrc:"./images/mobile-glass.png",
      description: lang=="bn"?"স্ক্রিন সুরক্ষার জন্য 9H হার্ডনেস টেম্পারড গ্লাস।": '9H hardness screen protectors',
      price: '₹100',
    },
    {
      icon: <Battery className="w-12 h-12" />,
      name: lang=="bn"?"পাওয়ার ব্যাংক": 'Power Banks',
      imagesrc:"./images/power-bank.png",
      description: lang=="bn"?"১০,০০০mAh ক্ষমতার পোর্টেবল চার্জিং সমাধান।": '10000mAh portable charging solutions',
      price: '₹250',
    },
    {
      icon: <Cable className="w-12 h-12" />,
      name: lang=="bn"?"ডেটা কেবল": 'Data Cables',
      imagesrc:"./images/data-cables.png",
      description: lang=="bn"?"দ্রুত চার্জিং ও ডেটা সিঙ্ক সাপোর্টেড কেবল।": 'Fast charging & data sync cables',
      price: '₹120',
    },
  ];

  return (
    <section id="accessories" className=" relative py-16 md:py-24 bg-dark">
      <div className='absolute w-24 h-24 sm:w-72 sm:h-72 opacity-45 right-2 sm:left-8 animate-float'>
        <img src="./images/headphone-bg.png" alt="" />
      </div>
      <div className='hidden sm:block sm:absolute  w-24 h-24 sm:w-72 sm:h-72 opacity-45 top-2 right-6 animate-zoom'>
        <img src="./images/neckband-bg.png" alt="" />
      </div>
      <div className='absolute w-32 h-32 opacity-45 bottom-20 left-6 animate-zoom'>
        <img src="./images/earbuds-bg.png" alt="" />
      </div>
      <div className='absolute w-72 h-72 opacity-45 bottom-8 right-6 animate-sway'>
        <img src="./images/mobile-bg.png" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-start sm:text-center mb-12 animate-fadeIn">
          <h2
  className={`text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl ${
    lang === "bn" ? "font-bengali leading-wide" : "font-bold"
  } text-white mb-4`}
>
  {
    lang==="bn"?"মোবাইল অ্যাক্সেসরিজ শপ":"Shop Mobile Accessories"
  }
  
</h2>
<p
  className={`sm:text-lg text-white max-w-2xl mx-auto ${
    lang === "bn" ? "font-bengali leading-wide" : ""
  }`}
>
  {
    lang === "bn" ? "প্রিমিয়াম মানের মোবাইল অ্যাক্সেসরিজ এখন সাশ্রয়ী দামে।প্রতিটি পণ্যের সঙ্গে থাকছে নির্ভরযোগ্য ওয়ারেন্টি।" : "Premium quality accessories at competitive prices. All products come with warranty."
  }
  
</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {products.map((product, index) => (
    <div
  key={index}
  className="group rounded-xl overflow-hidden 
             bg-white/10 backdrop-blur-md 
             border border-white/20 
             shadow-md hover:shadow-2xl 
             transition-all duration-300 
             transform hover:-translate-y-2 
             hover:border-yellow-400"
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
        <h3
  className={`text-xl ${
    lang === "bn" ? "font-bengali " : "font-semibold"
  } text-slate-50 mb-2`}
>
  {product.name}
</h3>
<p
  className={`text-white mb-4 ${
    lang === "bn" ? "font-bengali tracking-wide " : ""
  }`}
>
  {product.description}
</p>
        <div className="flex items-center justify-between">
          <span
  className={`text-white ${
    lang === "bn" ? "font-bengali " : "font-medium"
  }`}
>
  {lang === "bn" ? "মূল্য শুরু" : "Starting from"}
</span>
<span className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold">
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
