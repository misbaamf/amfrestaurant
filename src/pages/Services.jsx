import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee"
          alt="services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative pt-32 px-6 max-w-6xl mx-auto text-center">

        {/* Title */}
        <h1
          data-aos="fade-down"
          className="text-5xl font-bold mb-6 text-yellow-500"
        >
          Our Services
        </h1>

        <div
          data-aos="zoom-in"
          className="w-24 h-1 bg-yellow-500 mx-auto mb-10"
        ></div>

        <p
          data-aos="fade-up"
          className="text-gray-300 mb-16 max-w-2xl mx-auto"
        >
          Experience luxury dining like never before with our exclusive services
          crafted for unforgettable moments.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              title: "🍽️ Fine Dining",
              desc: "Enjoy world-class cuisine crafted by expert chefs in a luxurious setting.",
            },
            {
              title: "🎉 Private Events",
              desc: "Host birthdays, parties, and celebrations with premium arrangements.",
            },
            {
              title: "🥂 Catering",
              desc: "We bring luxury dining experience to your events with elite catering.",
            },
            {
              title: "👨‍🍳 Personal Chef",
              desc: "Hire our chefs for an exclusive dining experience at your home.",
            },
            {
              title: "🍷 Wine Pairing",
              desc: "Expertly curated wine selections to complement your meals.",
            },
            {
              title: "🏨 VIP Experience",
              desc: "Enjoy priority service, premium seating, and luxury treatment.",
            },
          ].map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="bg-black/50 p-8 rounded-2xl backdrop-blur-md
              transform transition duration-500
              hover:scale-105 hover:-translate-y-3
              hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">
                {service.title}
              </h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}

        </div>

        {/* EXTRA PREMIUM SECTION */}
        <div className="mt-32">

          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-6"
          >
            Why Choose Us
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Luxury Atmosphere",
              "Award Winning Chefs",
              "Premium Ingredients",
            ].map((item, index) => (
              <div
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 200}
                className="p-6 border border-yellow-500/30 rounded-xl
                hover:bg-yellow-500/10 transition duration-300"
              >
                <h3 className="text-lg text-yellow-400 font-semibold">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}