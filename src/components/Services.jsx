import { Smartphone, Battery, Droplet, Plug, Camera, Settings, Database } from 'lucide-react';

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
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Software/OS Problems',
      description: 'Software updates, virus removal, and operating system troubleshooting.',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Recovery',
      description: 'Recover your important data from damaged or non-functional devices.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Repair Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional repair services for all mobile brands and models with warranty-backed quality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
                key={index}
                className="hover:cursor-pointer group relative bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:border-blue-500"
                >
  {/* Decorative glow on hover */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-2xl blur-xl -z-10" />

  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-md">
    {service.icon}
  </div>

  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300">
    {service.title}
  </h3>

  <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
    {service.description}
  </p>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
