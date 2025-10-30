import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Do you offer doorstep repair services?',
      answer: 'Yes, we offer doorstep repair services for select repairs. Please contact us to check if your repair is eligible for home service.',
    },
    {
      question: 'Is there warranty on repairs?',
      answer: 'Yes, all our repairs come with a 90-day warranty on parts and labor. We stand behind the quality of our work.',
    },
    {
      question: 'Do accessories come with a guarantee?',
      answer: 'Absolutely! All accessories purchased from us come with a manufacturer warranty ranging from 6 months to 1 year depending on the product.',
    },
    {
      question: 'How long does a typical repair take?',
      answer: 'Most repairs like screen replacement and battery replacement are completed within 30-60 minutes. Complex repairs may take 2-3 hours.',
    },
    {
      question: 'Do you use original parts for repairs?',
      answer: 'We use genuine OEM parts and high-quality aftermarket parts depending on your preference and budget. All parts come with warranty.',
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
          <h2 className="text-2xl pl-2 sm:pl-0 border-l-4 border-primary sm:border-none md:text-4xl font-bold text-white mb-4">
           Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-200">
            Find answers to common questions about our services
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
                <span className="font-semibold text-primary text-lg pr-4">
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
                <p className="px-6 pb-6 text-white">
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
