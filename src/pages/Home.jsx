import GoldDivider from "../components/GoldDivider";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">

      {/* 🔥 HERO SECTION (PARALLAX + PREMIUM) */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6">

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-yellow-500 text-sm mb-4 tracking-[0.3em]"
          >
            LUXURY EXPERIENCE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            MISBA Fine Dining
          </motion.h1>

          <GoldDivider />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 max-w-xl mx-auto mb-8"
          >
            Where taste meets elegance. Discover unforgettable dining moments.
          </motion.p>

          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-yellow-500 text-black font-semibold rounded-full shadow-lg hover:bg-yellow-400 transition"
            >
              Reserve Now
            </motion.button>
          </Link>
        </div>

      </section>

      {/* 🔥 ABOUT (GLASS STYLE) */}
      <section className="py-24 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif mb-6 text-yellow-500"
        >
          About Us
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          We craft extraordinary dining experiences with world-class chefs,
          premium ingredients, and an ambience that defines luxury.
        </p>
      </section>

      {/* 🔥 SERVICES (GLASS CARDS + HOVER GLOW) */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-center">

        <h2 className="text-4xl font-serif mb-16 text-yellow-500">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

          {[
            {
              title: "Fine Dining",
              img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
              desc: "Luxury meals crafted by expert chefs."
            },
            {
              title: "Private Events",
              img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
              desc: "Celebrate your moments in elegance."
            },
            {
              title: "Catering",
              img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
              desc: "Premium catering anywhere you want."
            }
          ].map((item, i) => (

            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden
              hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-500"
            >
              <img src={item.img} className="h-56 w-full object-cover" />

              <div className="p-6">
                <h3 className="text-xl mb-2 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </motion.div>

          ))}

        </div>

      </section>

      {/* 🔥 GALLERY (HOVER ZOOM + OVERLAY) */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-serif mb-16 text-yellow-500">
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto px-6">

          {[
            "1414235077428-338989a2e8c0",
            "1552566626-52f8b828add9",
            "1517248135467-4c7edcad34c4",
            "1504674900247-0877df9cc836",
            "1540189549336-e6e99c3679fe",
            "1525755662778-989d0524087e"
          ].map((id, i) => (

            <div key={i} className="group relative overflow-hidden rounded-xl">

              <img
                src={`https://images.unsplash.com/photo-${id}`}
                className="group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

            </div>

          ))}

        </div>

      </section>

      {/* 🔥 CTA SECTION (SUPER PREMIUM) */}
      <section className="py-24 text-center bg-gradient-to-r from-yellow-500/10 to-transparent">

        <h2 className="text-4xl font-serif mb-6 text-yellow-400">
          Ready for a Luxury Experience?
        </h2>

        <p className="text-gray-400 mb-8">
          Book your table now and enjoy unforgettable moments.
        </p>

        <Link to="/contact">
          <button className="px-10 py-4 bg-yellow-500 text-black font-semibold rounded-full
            hover:bg-yellow-400 hover:scale-105 transition duration-300 shadow-xl">
            Book Now
          </button>
        </Link>

      </section>

    </div>
  );
}