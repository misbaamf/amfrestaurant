import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

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
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          alt="restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative pt-32 px-6 text-center max-w-6xl mx-auto">

        {/* Title */}
        <h1 data-aos="fade-down"
          className="text-5xl font-bold mb-6 tracking-wide text-yellow-500">
          About Us
        </h1>

        <div data-aos="zoom-in"
          className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>

        <p data-aos="fade-up"
          className="text-xl text-gray-200 mb-6">
          Welcome to MISBA Fine Dining, where luxury meets taste.
        </p>

        <p data-aos="fade-up" data-aos-delay="200"
          className="text-gray-300 mb-4">
          We provide a premium dining experience with world-class chefs,
          elegant ambiance, and unforgettable flavors.
        </p>

        <p data-aos="fade-up" data-aos-delay="400"
          className="text-gray-400 mb-10">
          Our mission is to deliver excellence in every dish and create
          moments worth remembering.
        </p>

        {/* CTA */}
        <button data-aos="zoom-in"
          className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full 
          hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg">
          Book a Table
        </button>

        {/* WHY SECTION */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">

          {[
            {
              title: "🍽️ Premium Food",
              desc: "Crafted by top chefs with finest ingredients."
            },
            {
              title: "✨ Luxury Ambience",
              desc: "Experience elegance and comfort."
            },
            {
              title: "🥂 Fine Experience",
              desc: "Moments that you will always remember."
            }
          ].map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="bg-black/50 p-6 rounded-xl backdrop-blur-md
              transform transition duration-500
              hover:scale-105 hover:-translate-y-2
              hover:shadow-2xl hover:shadow-yellow-500/20"
            >
              <h3 className="text-xl font-semibold mb-2 text-yellow-500">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}

        </div>

        {/* CHEF SECTION */}
        <div className="mt-28 text-center">

          <h2 data-aos="fade-up"
            className="text-4xl font-bold mb-4 tracking-wide">
            Our Master Chefs
          </h2>

          <div data-aos="zoom-in"
            className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
             {
  name: "Chef Antonio",
  role: "Italian Cuisine Expert",
  img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80"
},
{
  name: "Chef Maria",
  role: "Pastry Specialist",
  img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=800&q=80"
},
{
  name: "Chef Lee",
  role: "Asian Fusion Master",
  img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80"
}
            ].map((chef, index) => (

              <div
                key={index}
                data-aos="flip-left"
                data-aos-delay={index * 200}
                className="group perspective"
              >

                <div className="relative rounded-2xl overflow-hidden
                  transform transition duration-500
                  group-hover:rotate-y-6 group-hover:-rotate-x-3
                  group-hover:scale-105
                  shadow-xl hover:shadow-yellow-500/30">

                  {/* Image */}
                  <img
                    src={chef.img}
                    alt={chef.name}
                    className="w-full h-[350px] object-cover object-center md:object-top"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 w-full p-4 text-left">
                    <h3 className="text-lg font-semibold text-yellow-400">
                      {chef.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {chef.role}
                    </p>
                  </div>

                </div>
              </div>

            ))}

          </div>
        </div>

        {/* 🔥 BOOKING SECTION */}
        <div className="mt-32 mb-20">

          <h2 className="text-4xl font-bold mb-6 text-yellow-500">
            Reserve Your Table
          </h2>

          <p className="text-gray-300 mb-10">
            Experience luxury dining — book your table now.
          </p>

          <form className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />

            <input
              type="date"
              className="p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />

            <input
              type="number"
              placeholder="Guests"
              className="p-3 rounded-lg bg-black/50 border border-gray-600 focus:outline-none focus:border-yellow-500"
            />

            <button
              className="md:col-span-2 bg-yellow-500 text-black py-3 rounded-lg font-semibold
              hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-lg">
              Confirm Booking
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}