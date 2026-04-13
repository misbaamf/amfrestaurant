import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Portfolio() {

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const items = [
    {
      title: "Signature Dishes",
      img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    },
    {
      title: "Luxury Dining Hall",
      img: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
    },
    {
      title: "Chef Specials",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    },
    {
      title: "Dessert Collection",
      img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
    },
    {
      title: "Fine Wine",
      img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03",
    },
    {
      title: "Private Dining",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative px-6 pt-32 max-w-7xl mx-auto">

        {/* Title */}
        <h1 data-aos="fade-down"
          className="text-5xl font-bold text-center text-yellow-500 mb-6">
          Our Portfolio
        </h1>

        <div data-aos="zoom-in"
          className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

        <p data-aos="fade-up"
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
          Explore our finest creations, luxurious ambience, and unforgettable dining experiences.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {items.map((item, index) => (

            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(item.img)}
              className="group cursor-pointer"
            >

              <div className="relative rounded-2xl overflow-hidden
                transform transition duration-500
                group-hover:scale-105 group-hover:-rotate-x-3 group-hover:rotate-y-6
                shadow-xl hover:shadow-yellow-500/30">

                <img
                  src={item.img}
                  className="w-full h-[300px] object-cover"
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-yellow-500/10"></div>

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-0 p-5">
                  <h2 className="text-xl font-semibold text-yellow-400">
                    {item.title}
                  </h2>
                </div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="mt-28 text-center">

          <h2 data-aos="fade-up"
            className="text-4xl font-bold text-yellow-500 mb-6">
            Want to Experience This?
          </h2>

          <p data-aos="fade-up" data-aos-delay="200"
            className="text-gray-300 mb-8">
            Book your table now and enjoy a premium dining experience.
          </p>

          <button data-aos="zoom-in"
            className="px-8 py-3 rounded-full bg-yellow-500 text-black font-semibold
            hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg">
            Book Now
          </button>

        </div>

      </div>

      {/* 🔥 LIGHTBOX (FULLSCREEN VIEW) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            className="max-w-4xl w-full rounded-xl shadow-2xl transform scale-95 animate-[zoomIn_0.4s_ease]"
          />

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-yellow-400"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}