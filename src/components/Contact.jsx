import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact ({lang}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = ((e) => {
    e.preventDefault();
    // alert('Thank you for contacting us! We will get back to you soon.');
    const myNumber=7003454240
    const formattedMessage = encodeURIComponent(
      `Hi, I'm contacting you from the Amar Mobile website.\n`
      +`Name: ${formData.name}\n`
      +`${formData.phone?`Contact No: ${formData.phone}\n`:""}`
      +`Message: ${formData.message}`
    )
    const whatsappLink = `https://wa.me/${myNumber}?text=${formattedMessage}`
    window.location.href=whatsappLink
    setFormData({ name: '', phone: '', message: '' });
    
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
};

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2
  className={`text-3xl md:text-4xl ${
    lang === "bn" ? "font-bengali " : "font-bold"
  } text-slate-200 mb-4`}
>
  {lang === "bn" ? "যোগাযোগ করুন" : "Get in Touch"}
</h2>
<p
  className={`text-lg text-white ${
    lang === "bn" ? "font-bengali " : ""
  }`}
>
  {lang === "bn"
    ? "কোনো প্রশ্ন আছে বা ফোন রিপেয়ার করাতে চান? আজই আমাদের সঙ্গে যোগাযোগ করুন!"
    : "Have a question or need a repair? Contact us today!"}
</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-start  gap-6">
  {/* Address */}
  <div className="flex p-2 items-start max-h-[180px] gap-4 bg-midDark rounded-xl sm:p-6 flex-1 sm:min-w-[280px] lg:max-w-sm hover:shadow-lg transition-all duration-300">
    <div className="bg-transparent text-primary border-2 border-primary p-3 rounded-lg flex-shrink-0">
      <MapPin className="w-6 h-6" />
    </div>
    <div>
      <h3
  className={`${
    lang === "bn" ? "font-bengali  " : "font-semibold"
  } text-yellow-400 mb-1`}
>
  {lang === "bn" ? "ঠিকানা" : "Address"}
</h3>
      <p className={`text-white text-sm sm:text-base leading-relaxed ${
    lang === "bn" ? "font-bengali" : ""
  }`}>
        {
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
        }
        
      </p>
    </div>
  </div>

  {/* Phone */}
  <div className="flex p-2 items-start max-h-[120px] gap-4 bg-midDark rounded-xl sm:p-6 flex-1 sm:min-w-[280px] lg:max-w-sm hover:shadow-lg transition-all duration-300">
    <div className="bg-transparent text-primary border-2 border-primary p-3 rounded-lg flex-shrink-0">
      <Phone className="w-6 h-6" />
    </div>
    <div>
      <h3 className={`${
    lang === "bn" ? "font-bengali  " : "font-semibold"
  } text-yellow-400 mb-1`}>{
      lang==="bn"?"ফোন":"Phone"
      }
      </h3>
      
      <p className="text-white text-sm sm:text-base">
        {
          lang==="bn"?"+৯১ ৭০০৩৪৫৪২৪০/ +৯১ ৯৮৩২১২২১২২":"+91 7003454240/ +91 9832122122"
        }
        </p>
    </div>
  </div>

  {/* Email */}
  <div className="flex p-2 items-start gap-4 max-h-[120px] bg-midDark rounded-xl sm:p-6 flex-1 sm:min-w-[280px] lg:max-w-sm hover:shadow-lg transition-all duration-300">
    <div className="bg-transparent text-primary border-2 border-primary p-3 rounded-lg flex-shrink-0">
      <Mail className="w-6 h-6" />
    </div>
    <div>
      <h3 className={`${
    lang === "bn" ? "font-bengali  " : "font-semibold"
  } text-yellow-400 mb-1`}>{
      lang==="bn"?"ইমেইল":"Email"
      }
      </h3>
      <p className="text-white text-sm sm:text-base break-words">
        amarmobile@gmail.com
      </p>
    </div>
  </div>

  {/* Opening Hours */}
  <div className="flex items-start p-2 gap-4 max-h-[120px] bg-midDark rounded-xl sm:p-6 flex-1 sm:min-w-[280px] lg:max-w-sm hover:shadow-lg transition-all duration-300">
    <div className="bg-transparent text-primary border-2 border-primary p-3 rounded-lg flex-shrink-0">
      <Clock className="w-6 h-6" />
    </div>
    <div>
      <h3 className={`${
    lang === "bn" ? "font-bengali  " : "font-semibold"
  } text-yellow-400 mb-1`}>{
      lang==="bn"?"খোলার সময়":"Opening Hours"
      }
      </h3>
      <p
  className={`text-white text-sm sm:text-base leading-relaxed ${
    lang === "bn" ? "font-bengali" : ""
  }`}
>
  {lang === "bn" ? "প্রতিদিন সকাল ৭:৩০টা – রাত ৯:৩০টা" : "Everyday: 7:30 AM - 9:30 PM"}
</p>
    </div>
  </div>

  {/* WhatsApp Button */}
  {/* <div className="w-52 sm:w-full flex justify-center mt-4">
    <a
      href="https://wa.me/917003454240"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-green-500 text-white px-2 py-2 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
    >
      <MessageCircle className="w-5 h-5" />
      Chat on WhatsApp
    </a>
  </div> */}
</div>



          <div className="bg-white/10 backdrop-blur-md 
             border border-white/20 rounded-xl sm:p-8 p-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
  htmlFor="name"
  className={`block text-sm ${
    lang === "bn" ? "font-bengali text-xl" : "font-semibold"
  } text-white mb-2`}
>
  {lang === "bn" ? "নাম" : "Name"}
</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border text-slate-200 bg-transparent border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder={lang==="bn"?"আপনার নাম":"Your Name"}
                />
              </div>

              <div>
                <label
  htmlFor="phone"
  className={`block text-sm ${
    lang === "bn" ? "font-bengali text-xl" : "font-semibold"
  } text-white mb-2`}
>
  {lang === "bn" ? "ফোন নম্বর" : "Phone Number"}
</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  
                  className="w-full px-4 py-3 border text-slate-200 bg-transparent border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                  placeholder={lang==="bn"?"আপনার ফোন নম্বর":"Your Phone Number"}
                />
              </div>

              <div>
                <label
  htmlFor="message"
  className={`block text-sm ${
    lang === "bn" ? "font-bengali text-xl" : "font-semibold"
  } text-white mb-2`}
>
  {lang === "bn" ? "মেসেজ" : "Message"}
</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border text-slate-200 bg-transparent border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder={lang==="bn"?"আপনার রিপেয়ার সংক্রান্ত প্রয়োজন বা প্রশ্নটি লিখুন...":"Tell us about your repair needs or questions..."}
                />
              </div>

              <button
  type="submit"
  className={`w-full bg-green-600 text-white px-6 py-4 rounded-lg ${
    lang === "bn" ? "font-bengali " : "font-semibold"
  } transition-all duration-300 transform hover:scale-90 shadow-lg hover:shadow-xl`}
>
  {lang === "bn" ? "মেসেজ পাঠান" : "Send Message"}
</button>
            </form>

            <div className="mt-8">
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d269.9690910636078!2d88.1423961508175!3d23.26437727341292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1761637777398!5m2!1sen!2sin"      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Shop Location"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}

