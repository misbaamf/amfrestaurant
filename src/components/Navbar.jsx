import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  // 🔥 Hide / Show Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  // 🔥 Cursor Glow FIX (React way)
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      if (glow) {
        glow.style.left = e.clientX - 80 + "px";
        glow.style.top = e.clientY - 80 + "px";
      }
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* 🔥 Scroll Progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-yellow-400 origin-left z-[60]"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: show ? 0 : -120 }}
        transition={{ duration: 0.4 }}
        className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4">

          {/* 🔥 LOGO (UPGRADED) */}
          <Link to="/" className="flex items-center gap-2 group">

  <h1 className="text-2xl md:text-3xl font-serif font-semibold 
    bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-500 
    bg-clip-text text-transparent tracking-widest
    transition duration-500 group-hover:scale-105">

    ZAFFRAN PALACE

  </h1>

  {/* ✨ subtle dot */}
  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>

</Link>
          {/* 🔥 Desktop */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link, i) => (
              <Link key={i} to={link.path} className="relative group">

                <span
                  className={`transition ${
                    location.pathname === link.path
                      ? "text-yellow-400"
                      : "text-white"
                  } group-hover:text-yellow-400`}
                >
                  {link.name}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                  ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>

              </Link>
            ))}

            {/* 🔥 Premium Button */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link to="/contact">
                <button className="px-6 py-2 bg-yellow-500 text-black rounded-full font-semibold shadow-xl hover:bg-yellow-400 transition">
                  Book Now
                </button>
              </Link>
            </motion.div>

          </div>

          {/* 🔥 Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl text-yellow-400"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* 🔥 Mobile Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={open ? { opacity: 1 } : { opacity: 0 }}
          className={`md:hidden bg-black/95 backdrop-blur-xl ${
            open ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6">

            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-lg ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-white"
                } hover:text-yellow-400 transition`}
              >
                {link.name}
              </Link>
            ))}

            <Link to="/contact" onClick={() => setOpen(false)}>
              <button className="px-6 py-2 bg-yellow-500 text-black rounded-full font-semibold">
                Book Now
              </button>
            </Link>

          </div>
        </motion.div>
      </motion.nav>

      {/* 🔥 Cursor Glow */}
      <div
        id="cursor-glow"
        className="pointer-events-none fixed w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl z-[40]"
      />
    </>
  );
}