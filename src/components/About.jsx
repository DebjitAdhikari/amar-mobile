import { Award, Users, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '5,000+', label: 'Devices Repaired' },
    { icon: <Award className="w-6 h-6" />, value: '10+', label: 'Years Experience' },
    { icon: <CheckCircle className="w-6 h-6" />, value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <img
              src="./images/shop-about-img.jpg"
              alt="Amar Moblie"
              className="rounded-2xl max-h-[600px]  m-auto shadow-2xl"
            />
          </div>

          <div className="space-y-6 animate-slideUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We've been repairing smartphones and providing premium accessories since 2015.
              With over 5,000 devices repaired, we are your trusted local mobile care partner.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of certified technicians uses only genuine parts and follows industry
              best practices to ensure your device receives the highest quality repair service.
              We stand behind our work with comprehensive warranties and exceptional customer support.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
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
