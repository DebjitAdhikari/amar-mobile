import { Facebook, Instagram, Twitter, Youtube, Smartphone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-16 h-16 p-2 rounded-lg">
                <img src="/images/logo.png" alt="" />
              </div>
              <span className="text-2xl font-bold">
                Amar<span className="text-blue-400">Moblie</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted destination for mobile repairs, genuine parts, and quality accessories.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Satgachia, Super Market, Durga Mandir</li>
              <li>Purba Bardhaman, West Bengal 713422</li>
              <li>+91 70034 54240/+91 98321 22122</li>
              <li>amarmobile@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-gray-400">
</div>

      </div>
  <div className="w-[90vw]   mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
    <p className="text-sm">&copy; 2025 Amar Mobile. All rights reserved.</p>
    <p className="text-sm">
      Developed by{" "}
      <span className="text-white font-medium hover:text-blue-400 transition-colors">
        Debjit Adhikari :)
      </span>
    </p>
  </div>
    </footer>
  );
};

export default Footer;
