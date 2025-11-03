import { Award, Users, CheckCircle } from 'lucide-react';

const About = ({lang}) => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: lang==="bn"?"১,৫০০+": '1,500+', label: lang==="bn"?"মোবাইল রিপেয়ার সম্পন্ন": 'Devices Repaired' },
    { icon: <Award className="w-6 h-6" />, value: lang==="bn"?"২০+": '20+', label: lang==="bn"?"বছরের অভিজ্ঞতা": 'Years Experience' },
    { icon: <CheckCircle className="w-6 h-6" />, value: lang==="bn"?"৯৭%": '97%', label: lang==="bn"?"গ্রাহক সন্তুষ্টি হার": 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <img
              src="./images/main_image2.jpg"
              alt="Amar Moblie"
              className="rounded-2xl max-h-[400px] sm:max-h-[600px]  m-auto shadow-2xl"
            />
          </div>

          <div className="space-y-6 animate-slideUp">
            <h2
  className={`text-2xl pl-2 border-l-4 border-primary md:text-4xl ${
    lang === "bn" ? "font-bengali leading-wide" : "font-bold"
  } text-white mb-4`}
>
  {lang === "bn" ? "আমাদের সম্পর্কে" : "About Us"}
</h2>
            <p
  className={`sm:text-lg text-white  ${
    lang === "bn" ? "font-bengali tracking-wide leading-loose" : "leading-relaxed"
  }`}
>
  {lang === "bn"
    ? `২০০৭ সাল থেকে আমরা স্মার্টফোন মেরামত ও প্রিমিয়াম মানের মোবাইল অ্যাক্সেসরিজ সরবরাহ করে আসছি।
১৫০০-রও বেশি ডিভাইস সফলভাবে মেরামত করার অভিজ্ঞতা নিয়ে, আমরা আপনার নির্ভরযোগ্য স্থানীয় মোবাইল কেয়ার পার্টনার।

আমাদের সার্টিফায়েড টেকনিশিয়ানদের দল শুধুমাত্র জেনুইন পার্টস ব্যবহার করে এবং সর্বাধুনিক শিল্পমান মেনে কাজ সম্পন্ন করে, যাতে আপনার ডিভাইস পায় সর্বোচ্চ মানের সার্ভিস।
আমরা আমাদের প্রতিটি কাজের ওপর সম্পূর্ণ আস্থা রাখি — তাই দিচ্ছি ওয়ারেন্টিসহ নিশ্চিন্ত পরিষেবা ও চমৎকার কাস্টমার সাপোর্ট।
`
    : `We've been repairing smartphones and providing premium accessories since 2015.
With over 5,000 devices repaired, we are your trusted local mobile care partner.

Our team of certified technicians uses only genuine parts and adheres to the latest industry standards to ensure your device receives the highest quality service.

We have complete confidence in our work, which is why we offer worry-free service backed by a warranty and excellent customer support.`}
</p>
            

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-200 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
