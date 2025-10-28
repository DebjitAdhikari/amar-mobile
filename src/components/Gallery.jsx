const Gallery = () => {
  const images = [
    {
      url: '/images/gallery-1.jpg',
    //   title: 'Professional Repair Work',
    },
    {
      url: '/images/gallery-2.jpg',
    //   title: 'Professional Repair Work',
    },
    {
      url: '/images/gallery-3.jpg',
    //   title: 'Professional Repair Work',
    },
    {
      url: '/images/gallery-4.jpg',
    //   title: 'Professional Repair Work',
    },
    {
      url: '/images/gallery-5.jpg',
    //   title: 'Professional Repair Work',
    },
    {
      url: '/images/gallery-1.jpg',
    //   title: 'Professional Repair Work',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work & Store
          </h2>
          <p className="text-lg text-gray-600">
            Take a look at our professional workspace and repair services
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold text-lg p-4">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
