import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
/***প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী (FAQ)**
আমাদের সার্ভিস সম্পর্কে আপনার সাধারণ প্রশ্নগুলির উত্তর এখানে পাবেন 👇

---

**❓আপনারা কি হোম সার্ভিস বা দরজায় মেরামতির ব্যবস্থা রাখেন?**
হ্যাঁ, নির্দিষ্ট কিছু রিপেয়ারের জন্য আমরা ডোরস্টেপ সার্ভিস দিয়ে থাকি। আপনার ফোনটি এই সার্ভিসের জন্য যোগ্য কি না, তা জানতে আমাদের সঙ্গে যোগাযোগ করুন।

---

**❓রিপেয়ারের ওপর কি ওয়ারেন্টি পাওয়া যায়?**
অবশ্যই! আমাদের সব রিপেয়ার সার্ভিসেই পার্টস ও লেবার-এর ওপর ৯০ দিনের ওয়ারেন্টি দেওয়া হয়। আমরা আমাদের কাজের গুণমানের ওপর পুরো আত্মবিশ্বাসী।

---

**❓অ্যাকসেসরিজের সঙ্গে কি গ্যারান্টি থাকে?**
হ্যাঁ, আমাদের দোকান থেকে কেনা সব অ্যাকসেসরিজে প্রস্তুতকারক কোম্পানির ৬ মাস থেকে ১ বছরের ওয়ারেন্টি থাকে (প্রোডাক্ট অনুযায়ী)।


*/
const FAQ = ({lang}) => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: lang==="bn"?"আপনারা কি হোম সার্ভিস বা দরজায় মেরামতির ব্যবস্থা রাখেন?":'Do you offer doorstep repair services?',
      answer: lang==="bn"?"হ্যাঁ, নির্দিষ্ট কিছু রিপেয়ারের জন্য আমরা ডোরস্টেপ সার্ভিস দিয়ে থাকি। আপনার ফোনটি এই সার্ভিসের জন্য যোগ্য কি না, তা জানতে আমাদের সঙ্গে যোগাযোগ করুন।":'Yes, we offer doorstep repair services for select repairs. Please contact us to check if your repair is eligible for home service.',
    },
    {
      question: lang==="bn"?"রিপেয়ারের ওপর কি ওয়ারেন্টি পাওয়া যায়?":'Is there warranty on repairs?',
      answer: lang==="bn"?"অবশ্যই! আমাদের সব রিপেয়ার সার্ভিসেই পার্টস ও লেবার-এর ওপর ৯০ দিনের ওয়ারেন্টি দেওয়া হয়। আমরা আমাদের কাজের গুণমানের ওপর পুরো আত্মবিশ্বাসী।":'Yes, all our repairs come with a 90-day warranty on parts and labor. We stand behind the quality of our work.',
    },
    {
      question: lang==="bn"?"অ্যাকসেসরিজের সঙ্গে কি গ্যারান্টি থাকে?":'Do accessories come with a guarantee?',
      answer: lang==="bn"?"হ্যাঁ, আমাদের দোকান থেকে কেনা সব অ্যাকসেসরিজে প্রস্তুতকারক কোম্পানির ৬ মাস থেকে ১ বছরের ওয়ারেন্টি থাকে (প্রোডাক্ট অনুযায়ী)।":'Absolutely! All accessories purchased from us come with a manufacturer warranty ranging from 6 months to 1 year depending on the product.',
    },
    {
      question: lang==="bn"?"একটা ফোন রিপেয়ার করতে সাধারণত কত সময় লাগে?":'How long does a typical repair take?',
      answer: lang==="bn"?"স্ক্রিন বা ব্যাটারি রিপ্লেসমেন্টের মতো বেশিরভাগ কাজ ৩০–৬০ মিনিটের মধ্যেই সম্পন্ন হয়। তবে কিছু জটিল রিপেয়ার ২–৩ ঘণ্টা সময় নিতে পারে।":'Most repairs like screen replacement and battery replacement are completed within 30-60 minutes. Complex repairs may take 2-3 hours.',
    },
    {
      question: lang==="bn"?"আপনারা কি অরিজিনাল পার্টস ব্যবহার করেন?":'Do you use original parts for repairs?',
      answer: lang==="bn"?"হ্যাঁ, আমরা কাস্টমারের পছন্দ ও বাজেট অনুযায়ী **জেনুইন OEM পার্টস** বা **হাই-কোয়ালিটি আফটারমার্কেট পার্টস** ব্যবহার করি। সব পার্টসের সাথেই ওয়ারেন্টি দেওয়া হয়।":'We use genuine OEM parts and high-quality aftermarket parts depending on your preference and budget. All parts come with warranty.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-16 md:py-24 bg-dark">
      <div className="w-72 sm:absolute hidden sm:block animate-zoom top-2 left-3 absolute opacity-20 ">
        <img src="./images/laptop-query.png" alt="" />
      </div>
      <div className="sm:w-60 w-32 animate-zoom top-4 sm:top-2 right-3 absolute opacity-20 ">
        <img src="./images/question-mark.png" alt="" />
      </div>
      <div className="w-72  animate-zoom bottom-2 right-3 absolute opacity-20 ">
        <img src="./images/person-query-bg.png" alt="" />
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-start sm:text-center mb-12 animate-fadeIn">
          <h2
  className={`text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl ${
    lang === "bn" ? "font-bengali " : "font-bold"
  } text-white mb-4`}
>
  {lang === "bn" ? "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী" : "Frequently Asked Questions"}
</h2>
<p
  className={`text-lg text-slate-200 ${
    lang === "bn" ? "font-bengali " : ""
  }`}
>
  {lang === "bn"
    ? "আমাদের সার্ভিস সম্পর্কে আপনার সাধারণ প্রশ্নগুলির উত্তর এখানে পাবেন "
    : "Find answers to common questions about our services"}
</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md 
             border border-white/20  rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-midDark transition-colors duration-200"
              >
                <span
  className={`${
    lang === "bn" ? "font-bengali " : "font-semibold"
  } text-primary text-lg pr-4`}
>
  {faq.question}
</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p
  className={`px-6 pb-6 text-white ${
    lang === "bn" ? "font-bengali " : ""
  }`}
>
  {faq.answer}
</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
