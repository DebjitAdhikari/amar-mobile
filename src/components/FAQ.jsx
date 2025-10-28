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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-gray-600">
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
