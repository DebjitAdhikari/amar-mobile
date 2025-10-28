import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Debjit Adhikari",
      rating: 5,
      comment:
        "Really impressed! My phone screen was replaced quickly and the quality is perfect. Worth the visit.",
      image: "./images/deb.png",
    },
    {
      name: "Donald Trumph",
      rating: 5,
      comment:
        "Very professional team. They recovered all my data from a water-damaged phone. Highly recommend SmartFix!",
      image: "/images/donald.jpg",
    },
    {
      name: "Amit Kumar",
      rating: 5,
      comment:
        "Best place for mobile accessories. Bought a power bank and tempered glass, both are excellent quality.",
      image: "/images/customers/amit.jpg",
    },
    {
      name: "Sneha Reddy",
      rating: 5,
      comment:
        "Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/sneha.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Don’t just take our word for it – hear from our satisfied customers
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  loop={true} // ✅ enables infinite scrolling
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  onInit={(swiper) => {
    // ✅ reattach navigation buttons manually for loop mode
    const nextBtn = document.querySelector(".swiper-button-next-custom");
    const prevBtn = document.querySelector(".swiper-button-prev-custom");

    swiper.params.navigation.prevEl = prevBtn;
    swiper.params.navigation.nextEl = nextBtn;

    swiper.navigation.init();
    swiper.navigation.update();
  }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  }}
  className="pb-10"
>

            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl p-6 mb-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

                  {/* Profile Image */}
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full object-cover mb-3 border-1 border-blue-500"
                    />
                    
                  </div>
                  {/* Name */}
                  <div className="border-t pt-4 text-center">
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    
                  </div>
                  {/* Comment */}
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  <p className="text-gray-600 mb-4 italic text-center">
                    "{testimonial.comment}"
                  </p>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom  absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
