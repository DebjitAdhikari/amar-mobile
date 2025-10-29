import { Smartphone, Battery, Droplet, Plug, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Screen Replacement',
      description: 'Professional screen replacement for all mobile brands with original quality parts.',
    },
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Battery Replacement',
      description: 'Replace your old battery with genuine batteries to restore battery life.',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Water Damage Repair',
      description: 'Expert water damage diagnosis and repair to save your device.',
    },
    {
      icon: <Plug className="w-8 h-8" />,
      title: 'Charging Port Fix',
      description: 'Fix charging issues with professional port cleaning or replacement.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Camera Repair',
      description: 'Restore camera functionality with precision repairs and replacements.',
    },
  ];

  return (
    <section id="services" className="relative py-16 md:py-24 bg-dark overflow-hidden">
      {/* Background images */}
      <div className="absolute w-28 h-28 sm:w-72 sm:h-72 opacity-45 top-1 right-2 sm:bottom-9 sm:top-2 sm:left-4">
        <img src="./images/screw-driver.png" alt="" />
      </div>
      <div className="absolute w-24 h-24 sm:w-60 sm:h-60 opacity-60 bottom-2 sm:bottom-9 right-2 animate-spin">
        <img src="./images/single-setting-bg.png" alt="" />
      </div>

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="sm:text-center text-start mb-12 animate-fadeIn">
          <h2 className="text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl font-bold text-white mb-4">
            Our Repair Services
          </h2>
          <p className="sm:text-lg text-sm text-white max-w-2xl mx-auto">
            Professional repair services for all mobile brands and models with warranty-backed quality.
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
              <h3 className="text-lg font-semibold sm:text-2xl text-slate-50 mb-3 text-center group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white text-sm sm:text-base text-center leading-relaxed">
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
