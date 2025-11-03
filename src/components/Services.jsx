import { Smartphone, Battery, Droplet, Plug, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({lang}) => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: lang=="bn"?"স্ক্রিন রিপ্লেসমেন্ট": 'Screen Replacement',
      description: lang=="bn"?"সব ব্র্যান্ডের মোবাইলের স্ক্রিন পেশাদারভাবে পরিবর্তন করা হয়, অরিজিনাল মানের পার্টস ব্যবহারের নিশ্চয়তা সহ।":'Professional screen replacement for all mobile brands with original quality parts.',
    },
    






    {
      icon: <Battery className="w-8 h-8" />,
      title: lang=="bn"?"ব্যাটারি রিপ্লেসমেন্ট": 'Battery Replacement',
      description: lang=="bn"?"পুরোনো ব্যাটারির পরিবর্তে জেনুইন ব্যাটারি লাগিয়ে আপনার মোবাইলের আগের পারফরম্যান্স ফিরিয়ে আনুন।": 'Replace your old battery with genuine batteries to restore battery life.',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: lang=="bn"?"ওয়াটার ড্যামেজ রিপেয়ার":'Water Damage Repair',
      description: lang=="bn"?"জলের ক্ষতিগ্রস্ত মোবাইলের জন্য বিশেষজ্ঞদের মাধ্যমে নির্ভুলভাবে পরীক্ষা ও মেরামত করা হয়, যাতে আপনার ডিভাইস আবার সচল হয়।":'Expert water damage diagnosis and repair to save your device.',
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: lang=="bn"?"চার্জিং পোর্ট ফিক্স":'Charging Port Fix',
      description: lang=="bn"?"চার্জ না হওয়া বা ঢিলা পোর্ট সমস্যার সমাধান — প্রফেশনাল ক্লিনিং অথবা পোর্ট রিপ্লেসমেন্টের মাধ্যমে।":'Fix charging issues with professional port cleaning or replacement.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: lang=="bn"?"ক্যামেরা রিপেয়ার":'Camera Repair',
      description: lang=="bn"?"ক্যামেরার ফোকাস, ব্লার বা কাজ না করা সমস্যা নির্ভুলভাবে ঠিক করা হয়, প্রয়োজনে পার্টস রিপ্লেসমেন্টসহ।":'Restore camera functionality with precision repairs and replacements.',
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 bg-dark overflow-hidden">
      {/* Background images */}
      <div className="absolute w-28 h-28 sm:w-52 sm:h-52 opacity-20 top-1 right-2 sm:bottom-9 sm:top-2 sm:left-4">
        <img src="./images/screw-driver.png" alt="" />
      </div>
      <div className="absolute w-24 h-24 sm:w-48 sm:h-48 opacity-20 bottom-2 sm:bottom-9 right-2 animate-spin">
        <img src="./images/single-setting-bg.png" alt="" />
      </div>

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sm:text-center text-start mb-12 animate-fadeIn">
          <h2
  className={`text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl ${
    lang === "bn" ? "font-bengali leading-loose" : "font-bold"
  } text-white mb-4`}
>
  {lang==="bn"?"আমাদের সার্ভিসসমূহ":"Our Services"}
  
</h2>
         <p
  className={`sm:text-lg text-sm text-white max-w-2xl mx-auto ${
    lang === "bn" ? "font-bengali leading-relaxed tracking-wide text-[1rem]" : ""
  }`}
>
  {
    lang==="bn"?"সব ব্র্যান্ড ও মডেলের মোবাইলের জন্য পেশাদার মেরামত পরিষেবা — নির্ভরযোগ্য মান ও ওয়ারেন্টিসহ।":"Professional repair services for all mobile brands and models with warranty-backed quality."
  }
  
</p>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 max-w-[80vw] m-auto lg:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="hover:cursor-pointer group relative rounded-2xl p-6 sm:p-8 
                         bg-gradient-to-b from-white/10 to-white/5 
                         backdrop-blur-md border border-white/20 
                         hover:shadow-2xl transition-all duration-500 
                         transform hover:-translate-y-3 hover:border-primary"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-400/0 to-purple-200/20 rounded-2xl blur-xl -z-10" />

              {/* Icon */}
              <div className="bg-primary border-2 border-primary text-midDark w-16 h-16 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-white group-hover:text-primary transition-all duration-500 shadow-md">
                {service.icon}
              </div>

              {/* Title */}
<h3
  className={`text-lg ${
    lang === "bn" ? "font-bengali text-[1.5rem] tracking-wider" : "font-semibold"
  } sm:text-2xl text-slate-50 mb-3 text-center group-hover:text-primary transition-colors duration-300`}
>
  {service.title}
</h3>

{/* Description */}
<p
  className={`text-sm sm:text-base text-center leading-relaxed text-white ${
    lang === "bn" ? "font-bengali leading-relaxed tracking-wide" : ""
  }`}
>
  {service.description}
</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
