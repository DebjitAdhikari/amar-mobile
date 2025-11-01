import { Facebook, Instagram, Twitter, Youtube, Smartphone } from 'lucide-react';

const Footer = ({lang}) => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: lang==="bn"?" হোম":'Home', href: '#home' },
    { name: lang==="bn"?"সার্ভিসেস":'Services', href: '#services' },
    { name: lang==="bn"?"অ্যাকসেসরিজ":'Accessories', href: '#accessories' },
    { name: lang==="bn"?"যোগাযোগ":'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' },
    { icon: <Youtube className="w-5 h-5" />, href: '#' },
  ];

  return (
    <footer className="relative  bg-midDark text-white py-12">
      {/* <div className='absolute top-0 z-20 w-[90vw]'>
        <img src="./images/footer-bg.png" className="w-full"alt="" />
      </div> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-16 h-16 p-2 rounded-lg">
                <img src="/images/amar-logo.png" alt="" />
              </div>
              <span className="text-2xl font-bold">
                Amar<span className="text-primary">Moblie</span>
              </span>
            </div>
           <p
  className={`text-gray-400 mb-4 ${
    lang === "bn" ? "font-bengali leading-relaxed" : ""
  }`}
>
  {lang === "bn"
    ? "আপনার বিশ্বস্ত মোবাইল সার্ভিস সেন্টার — যেখানে পাবেন নির্ভরযোগ্য রিপেয়ার, অরিজিনাল পার্টস এবং মানসম্মত অ্যাকসেসরিজ"
    : "Your trusted destination for mobile repairs, genuine parts, and quality accessories."}
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
  <h3
    className={`text-lg ${
      lang === "bn" ? "font-bengali leading-wide" : "font-semibold"
    } mb-4`}
  >
    {lang === "bn" ? "দ্রুত লিংকসমূহ" : "Quick Links"}
  </h3>
  <ul className="space-y-2">
    {quickLinks.map((link, index) => (
      <li key={index}>
        <button
          onClick={() => scrollToSection(link.href)}
          className={`text-gray-400 hover:text-white transition-colors duration-200 ${
            lang === "bn" ? "font-bengali leading-wide" : ""
          }`}
        >
          {link.name}
        </button>
      </li>
    ))}
  </ul>
</div>

          <div>
            <h3
  className={`text-lg ${
    lang === "bn" ? "font-bengali leading-wide" : "font-semibold"
  } mb-4`}
>
  {lang === "bn" ? "যোগাযোগের তথ্য" : "Contact Info"}
</h3>
<ul
  className={`space-y-2 text-gray-400 ${
    lang === "bn" ? "font-bengali leading-wide" : ""
  }`}
> <li>{
          lang==="bn"?(
            <>
            সাতগাছিয়া, সুপার মার্কেট, দুর্গা মন্দির <br/>
            পূর্ব বর্ধমান, পশ্চিমবঙ্গ ৭১৩৪২২</>
          ):(
            <>
            Satgachia, Super Market, Durga Mandir<br />
        Purba Bardhaman, West Bengal 713422
            </>
          )
        }</li>
              <li>{
          lang==="bn"?"+৯১ ৭০০৩৪৫৪২৪০/ +৯১ ৯৮৩২১২২১২২":"+91 7003454240/ +91 9832122122"
        }</li>
              <li>amarmobile@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-500 pt-8 text-gray-400">
</div>

      </div>
  <div className="w-[90vw]   mx-auto flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2">
    <p className="text-sm">&copy; 2025 Amar Mobile. All rights reserved.</p>
    <p className="sm:text-sm text-xs">
      Developed by{" "}
      <span className="text-white font-medium  hover:text-blue-400 transition-colors">
        Debjit Adhikari :)
      </span>
    </p>
  </div>
    </footer>
  );
};

export default Footer;
