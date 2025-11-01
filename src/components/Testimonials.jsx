import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = ({lang}) => {
  const testimonials = [
    {
      name: "Debjit Adhikari",
      rating: 5,
      comment: lang=="bn"?"স্ক্রিনটা দারুণভাবে ফিট করেছে, দেখতে একদম নতুন ফোনের মতো লাগছে। কোয়ালিটিও একেবারে চমৎকার!":"Really impressed! My phone screen was replaced quickly and the quality is perfect. Worth the visit.",
      image: "./images/customers/deb.png",
    },
    {
      name: "Biplab Ghosh",
      rating: 5,
      comment:lang=="bn"?"মোবাইল অ্যাক্সেসরিজের জন্য একদম বেস্ট জায়গা! পাওয়ার ব্যাংক আর টেম্পারড গ্লাস নিয়েছি — কোয়ালিটিটা দারুণ।":"Best place for mobile accessories. Bought a power bank and tempered glass, both are excellent quality.",
      image: "/images/customers/biplab-profile.jpg",
    },
    {
      name: "Ashwini Mishra",
      rating: 5,
      comment:lang=="bn"?"ওয়াটার ড্যামেজ ফোন থেকে ডেটা রিকভার করে ফেলেছে, ভাবতেই পারিনি! একদম প্রফেশনাল কাজ।":"Very professional team. They recovered all my data from a water-damaged phone. Highly recommend!",
      image: "/images/customers/soma-profile.jpg",
    },
    {
      name: "Sumit Ganguly",
      rating: 5,
      comment:lang=="bn"?"খুব ভালো অভিজ্ঞতা হয়েছে। ডেটা রিকভার আর মেরামত, দুইটাই দারুণ হয়েছে। ধন্যবাদ!":"Very professional team. They recovered all my data from a water-damaged phone. Highly recommend!",
      image: "/images/customers/sumit-profile.jpg",
    },
    {
      name: "Priyanka Ghosh",
      rating: 5,
      comment:lang=="bn"?"দারুণ সার্ভিস! ব্যাটারি বদলটা একদম চটপট করে দিল, এখন ফোনটা একেবারে নতুনের মতো চলছে।":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/priyanka.jpg",
    },
    {
      name: "Mousumi Pal",
      rating: 5,
      comment:lang=="bn"?"এক কথায় অসাধারণ! লোকজনগুলো ভীষণ ভালো, কাজও ঝটপট করে ফেলে। খুব খুশি হয়েছি।":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/mousumi.png",
    },
    {
      name: "Abhijit Mondal",
      rating: 3,
      comment:lang=="bn"?"সার্ভিস ভালো, কিন্তু ভিড় একটু বেশি থাকে। বসার জায়গা না থাকায় অনেকক্ষণ দাঁড়িয়ে থাকতে হয়েছে। গ্রাহকদের জন্য একটু বসার ব্যবস্থা থাকলে দারুন হত।":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/abhijit.jpg",
    },
    {
      name: "Parvez Alam",
      rating: 5,
      comment:lang=="bn"?"“সার্ভিসটা খুব ভালো, দামটাও একদম ঠিকঠাক। দোকানের সবাই ভদ্র আর খুব হেল্পফুল।":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/parvez.jpg",
    },
    {
      name: "Suman Ghosal",
      rating: 5,
      comment:lang=="bn"?"একবার আসলে বারবার আসতে ইচ্ছে করবে, এমন ফ্রেন্ডলি বিহেভিয়ার!":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/suman.jpg",
    },
    {
      name: "Sundaram Pal",
      rating: 5,
      comment:lang=="bn"?"ফোনটা একদম নতুনের মতো করে দিয়েছে! ভাবতেই পারিনি এত ভালো সার্ভিস পাব।":"Fast and reliable service. Battery replacement was done quickly and my phone works like new. Great experience!",
      image: "/images/customers/mona-profile.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-dark relative">
      <div className=" opacity-20 absolute animate-zoom sm:w-60 w-48 right-2 sm:top-4 sm:left-4">
        <img src="./images/person-using-laptop.png" alt="" />
      </div>
      <div className="opacity-20 absolute animate-zoom sm:w-60 w-32 bottom-1 right-1">
        <img src="./images/chat-bg.png" alt="" />
      </div>
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        {/* Section Heading */}

        <div className="text-start sm:text-center mb-12 animate-fadeIn">
          <h2
  className={`text-2xl pl-2 border-l-4 sm:border-none border-primary md:text-4xl ${
    lang === "bn" ? "font-bengali " : "font-bold"
  } text-slate-200 mb-4`}
>
  {lang === "bn" ? "আমাদের গ্রাহকদের কথা" : "What Our Customer Says!"}
</h2>
<p
  className={`text-lg text-white ${
    lang === "bn" ? "font-bengali " : ""
  }`}
>
  {lang === "bn"
    ? "শুধু আমাদের মুখের কথা নয় — শুনে নিন, আমাদের গ্রাহকেরা কী বলছেন"
    : "Don’t just take our word for it – hear from our satisfied customers"}
</p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
 // ✅ enables infinite scrolling
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  loop={testimonials.length > 3}
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
                <div className=" bg-white/10 backdrop-blur-md 
             border border-white/20  rounded-xl p-6 mb-3 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">

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
                    <p className="font-semibold text-slate-200">
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
                  <p
  className={`text-white mb-4 italic text-center ${
    lang === "bn" ? "font-bengali tracking-wide" : ""
  }`}
>
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
