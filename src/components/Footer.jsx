import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-400 pt-16 pb-8 px-8 border-t border-gray-800 overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/5 via-transparent to-yellow-500/5"></div>

      {/* CONTENT */}
      <div className="relative grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* 🔥 Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-2xl mb-3 font-serif tracking-wide">
            MISBA
          </h2>
          <p className="text-gray-400">
            Experience luxury dining with world-class chefs and unforgettable ambiance.
          </p>
        </motion.div>

        {/* 🔥 Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white mb-4 text-lg">Navigation</h3>

          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "About", link: "/about" },
              { name: "Services", link: "/services" },
              { name: "Portfolio", link: "/portfolio" },
              { name: "Contact", link: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* 🔥 Contact + Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white mb-4 text-lg">Contact</h3>

          <p className="mb-2">Mumbai, India</p>
          <p className="mb-4">+91 99999 99999</p>

          {/* 🔥 Social Icons */}
          <div className="flex gap-4 text-xl">
            <span className="cursor-pointer hover:text-yellow-400 transition">🐦</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">📸</span>
            <span className="cursor-pointer hover:text-yellow-400 transition">💼</span>
          </div>
        </motion.div>

      </div>

      {/* 🔥 Divider */}
      <div className="w-full h-px bg-gray-800 my-8"></div>

      {/* 🔥 Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-sm text-gray-500"
      >
        © 2026 MISBA Fine Dining. Crafted with luxury ✨
      </motion.div>

    </footer>
  );
}