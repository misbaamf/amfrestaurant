import { useState, useEffect, useRef } from "react";

/* ─── DATA ─────────────────────────────────────────── */
const NAV_LINKS = ["Home", "About", "Services", "Portfolio", "Contact"];

const DISHES = [
  { name: "Chicken Biryani", desc: "Spicy and flavorful rice with chicken", tag: "Popular", img: "https://images.unsplash.com/photo-1604908176997-431e7c3e2f03?w=600&q=80" },
  { name: "Pizza", desc: "Cheesy delight with toppings", tag: "Hot", img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=600&q=80" },
  { name: "Burger", desc: "Juicy grilled burger", tag: "Fast Food", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80" },
  { name: "Pasta", desc: "Creamy Italian pasta", tag: "Italian", img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&q=80" },
];

const USPS = [
  { icon: "🌿", title: "Farm-to-Table Ingredients", desc: "Every ingredient is sourced fresh daily from certified organic farms and local artisan producers." },
  { icon: "🏆", title: "Award-Winning Chefs", desc: "Our team holds 3 Michelin stars and has been recognized by the World's 50 Best Restaurants." },
  { icon: "✨", title: "Unmatched Ambience", desc: "Every corner of Faizan is designed to transport you — from the lighting to the table linens." },
  { icon: "🍷", title: "Curated Wine Cellar", desc: "Over 800 labels selected by our resident sommelier from the finest vineyards worldwide." },
];

const TESTIMONIALS = [
  { name: "Priya Mehta", role: "Food Critic, Condé Nast", quote: "Faizan doesn't just serve food — it orchestrates an entire sensory performance. A transcendent evening every single time.", stars: 5 },
  { name: "James Whitfield", role: "CEO, Whitfield Group", quote: "We've hosted board dinners at Faizan for three years. The consistency of excellence is simply unmatched anywhere in the city.", stars: 5 },
  { name: "Aisha Kapoor", role: "Travel Blogger", quote: "If I could only eat at one restaurant for the rest of my life, it would be Faizan. Bold claim — absolutely meant.", stars: 5 },
];

const SERVICES = [
  { icon: "🍽️", title: "Fine Dining Experience", desc: "An intimate à la carte journey through seasonal tasting menus, crafted fresh each evening by Chef Laurent and his brigade." },
  { icon: "🥂", title: "Private Events & Dining", desc: "Exclusive private rooms for up to 40 guests. Perfect for anniversaries, proposals, corporate celebrations, and bespoke occasions." },
  { icon: "🚐", title: "Luxury Catering", desc: "Bring the Faizan experience to your venue. Our catering team delivers the same Michelin-starred quality, wherever you are." },
  { icon: "📅", title: "Online Reservations", desc: "Secure your table instantly via our seamless booking system. Personalise your visit with dietary notes and special requests." },
];

const PORTFOLIO_ITEMS = [
  { category: "Food", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", title: "Wagyu Elegance" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80", title: "The Main Hall" },
  { category: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", title: "Dessert Architecture" },
  { category: "Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80", title: "Private Gala Evening" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80", title: "Wine Cellar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?w=600&q=80", title: "Garden Harvest" },
  { category: "Events", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80", title: "Corporate Dinner" },
  { category: "Interior", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80", title: "The Lounge Bar" },
  { category: "Food", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80", title: "Seasonal Plating" },
];

const TIMELINE = [
  { year: "2008", title: "The Beginning", desc: "Chef Laurent Moreau opens Faizan as a 30-seat bistro in South Mumbai with a single vision: honest luxury." },
  { year: "2012", title: "First Michelin Star", desc: "Four years of relentless refinement earns Faizan its first Michelin star — the first in Maharashtra." },
  { year: "2017", title: "The Grand Expansion", desc: "A full renovation transforms Faizan into a 120-seat temple of fine dining, with a private event wing." },
  { year: "2022", title: "Third Star Awarded", desc: "Faizan joins a rarefied group of three-star establishments in Asia, cementing its global reputation." },
];

/* ─── HELPERS ───────────────────────────────────────── */
function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-4">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#3B82F6]" />
      <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#3B82F6]" />
    </div>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-[#FF5733] text-[0.65rem] tracking-[0.3em] uppercase font-medium font-sans mb-2">
      {label}
    </p>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */
function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-500 ${scrolled ? "py-3 bg-[#0D0B08]/95 backdrop-blur-xl border-b border-[#3B82F6]/10" : "py-5 bg-transparent"}`}>
      <button onClick={() => setActivePage("Home")} className="font-serif text-xl font-bold text-[#3B82F6] tracking-widest">
Faizan<span className="italic font-light text-[#F5EDD6]">.</span>      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map(p => (
          <li key={p}>
            <button onClick={() => setActivePage(p)}
              className={`text-[0.65rem] tracking-[0.2em] uppercase transition-colors duration-300 ${activePage === p ? "text-[#3B82F6]" : "text-[#A89878] hover:text-[#F2EBD9]"}`}>
              {p}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setActivePage("Contact")}
        className="hidden md:block text-[0.65rem] tracking-[0.18em] uppercase border border-[#3B82F6] text-[#3B82F6] px-5 py-2 hover:bg-[#3B82F6] hover:text-[#0D0B08] transition-all duration-300 font-medium">
        Book a Table
      </button>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#3B82F6] text-2xl">
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0D0B08]/98 backdrop-blur-xl border-t border-[#3B82F6]/10 py-6 flex flex-col items-center gap-5">
          {NAV_LINKS.map(p => (
            <button key={p} onClick={() => { setActivePage(p); setMenuOpen(false); }}
              className={`text-[0.7rem] tracking-[0.2em] uppercase transition-colors ${activePage === p ? "text-[#3B82F6]" : "text-[#A89878]"}`}>
              {p}
            </button>
          ))}
          <button onClick={() => { setActivePage("Contact"); setMenuOpen(false); }}
            className="mt-2 text-[0.65rem] tracking-[0.18em] uppercase border border-[#3B82F6] text-[#3B82F6] px-6 py-2 hover:bg-[#3B82F6] hover:text-[#0D0B08] transition-all duration-300">
            Book a Table
          </button>
        </div>
      )}
    </nav>
  );
}

/* ─── HOME PAGE ──────────────────────────────────────── */
function Home({ setActivePage }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeDish, setActiveDish] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0D0B08]">
      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85"
            alt="Fine dining" className="w-full h-full object-cover opacity-40" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0B08]/60 via-transparent to-[#0D0B08]" />
        </div>
        <div className="relative text-center px-6 max-w-4xl mx-auto">
          <SectionLabel label="Established 2008 · Mumbai" />
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-[#F5EDD6] leading-[1.1] mb-6">
Delicious Food<br /><em className="text-[#3B82F6] font-normal">Made For You</em>          </h1>
          <p className="font-light text-[#A89878] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
Enjoy the best food in your city with fresh ingredients and amazing taste.          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setActivePage("Contact")}
              className="px-8 py-4 bg-[#3B82F6] text-[#0D0B08] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#E8C97A] transition-all duration-300">
              Reserve a Table
            </button>
            <button onClick={() => setActivePage("Services")}
              className="px-8 py-4 border border-[#3B82F6]/50 text-[#3B82F6] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:border-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all duration-300">
              View Menu
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-10 bg-gradient-to-b from-[#3B82F6] to-transparent" />
          <p className="text-[#3B82F6] text-[0.6rem] tracking-[0.3em] uppercase">Scroll</p>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel label="Our Creations" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Featured Dishes</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISHES.map((dish, i) => (
            <div key={i} onClick={() => setActiveDish(i)}
              className="group relative overflow-hidden cursor-pointer border border-[#3B82F6]/10 hover:border-[#3B82F6]/40 transition-all duration-500">
              <div className="overflow-hidden h-72">
                <img src={dish.img} alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B08] via-[#0D0B08]/20 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase bg-[#3B82F6] text-[#0D0B08] px-3 py-1 font-medium">{dish.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-serif text-lg text-[#F5EDD6] mb-1">{dish.name}</h3>
                <p className="text-[#A89878] text-sm font-light">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#111009] border-y border-[#3B82F6]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel label="The Faizan Promise" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Why Choose Us</h2>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {USPS.map((u, i) => (
              <div key={i} className="group text-center p-8 border border-[#3B82F6]/10 hover:border-[#3B82F6]/30 hover:bg-[#3B82F6]/5 transition-all duration-500">
                <div className="text-4xl mb-5">{u.icon}</div>
                <h3 className="font-serif text-lg text-[#E8C97A] mb-3">{u.title}</h3>
                <p className="text-[#A89878] text-sm leading-relaxed font-light">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHEF HIGHLIGHT ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=85"
              alt="Chef Laurent" className="w-full h-[600px] object-cover" loading="lazy" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#3B82F6]/40" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border border-[#3B82F6]/20" />
          </div>
          <div>
            <SectionLabel label="Meet the Maestro" />
            <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] leading-tight mb-2">
              Chef Laurent<br /><em className="text-[#3B82F6]">Moreau</em>
            </h2>
            <GoldDivider />
            <p className="text-[#A89878] leading-relaxed mb-6 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              With over 18 years of mastery across Paris, Tokyo, and New York, Chef Laurent brings a philosophy that food is emotion — plated. His menus are seasonal, instinctive, and deeply personal.
            </p>
            <p className="text-[#A89878] leading-relaxed mb-10 font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
              "Cooking is not a profession — it is a conversation between the earth and the soul. Every dish I create is a sentence in that story."
            </p>
            <div className="flex gap-8">
              {[["18+", "Years of Mastery"], ["3", "Michelin Stars"], ["12", "Global Awards"]].map(([num, label]) => (
                <div key={label}>
                  <p className="font-serif text-3xl text-[#3B82F6]">{num}</p>
                  <p className="text-[#A89878] text-xs tracking-widest uppercase mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-[#111009] border-y border-[#3B82F6]/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel label="Guest Voices" />
          <h2 className="font-serif text-4xl text-[#F5EDD6] mb-4">What They Say</h2>
          <GoldDivider />
          <div className="mt-12 min-h-[180px] transition-all duration-500">
            <p className="text-[#F2EBD9] text-xl md:text-2xl font-light leading-relaxed mb-8 italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              "{TESTIMONIALS[activeTestimonial].quote}"
            </p>
            <div className="text-[#3B82F6] text-lg mb-3">{"★".repeat(TESTIMONIALS[activeTestimonial].stars)}</div>
            <p className="text-[#F5EDD6] font-medium text-sm tracking-wide">{TESTIMONIALS[activeTestimonial].name}</p>
            <p className="text-[#A89878] text-xs tracking-widest uppercase mt-1">{TESTIMONIALS[activeTestimonial].role}</p>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setActiveTestimonial(i)}
                className={`w-6 h-px transition-all duration-300 ${i === activeTestimonial ? "bg-[#3B82F6] w-10" : "bg-[#A89878]/40"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="The Faizan World" />
          <h2 className="font-serif text-4xl md:text-5xl text-[#F5EDD6] mb-4">Gallery Preview</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
            <div key={i} className="group relative overflow-hidden aspect-square">
              <img src={item.img} alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
              <div className="absolute inset-0 bg-[#0D0B08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="font-serif text-[#F5EDD6] text-sm">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button onClick={() => setActivePage("Portfolio")}
            className="text-[0.65rem] tracking-[0.25em] uppercase border border-[#3B82F6]/50 text-[#3B82F6] px-8 py-3 hover:bg-[#3B82F6] hover:text-[#0D0B08] transition-all duration-300">
            View Full Portfolio
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── ABOUT PAGE ─────────────────────────────────────── */
function About() {
  return (
    <div className="bg-[#0D0B08] pt-28">
      {/* Story */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel label="Our Story" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] leading-tight mb-6">
            Born from<br /><em className="text-[#3B82F6]">Passion.</em><br />Refined by Time.
          </h2>
          <GoldDivider />
          <div className="space-y-5 mt-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            <p className="text-[#A89878] leading-relaxed">Faizan was never meant to be just a restaurant. When Chef Laurent Moreau arrived in Mumbai in 2008 with nothing but two suitcases and an obsession with honest flavour, he found a city hungry for something different — something that honoured tradition while embracing the bold.</p>
            <p className="text-[#A89878] leading-relaxed">What began as a 30-seat bistro in Colaba has grown into one of Asia's most celebrated dining destinations. Three Michelin stars, countless memories, and an unwavering commitment to the idea that dining is theatre — and every guest deserves a front-row seat.</p>
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=85"
            alt="Faizan interior" className="w-full h-[500px] object-cover" loading="lazy" />
          <div className="absolute -bottom-5 -left-5 bg-[#3B82F6] p-6">
            <p className="font-serif text-4xl text-[#0D0B08] font-bold">2008</p>
            <p className="text-[#0D0B08] text-xs tracking-widest uppercase mt-1">Est. Mumbai</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#111009] border-y border-[#3B82F6]/10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel label="Our Journey" />
            <h2 className="font-serif text-4xl text-[#F5EDD6]">Milestones</h2>
            <GoldDivider />
          </div>
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-[#3B82F6]/20" />
            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex gap-8 items-start ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <span className="font-serif text-[#3B82F6] text-2xl block mb-2">{item.year}</span>
                    <h3 className="font-serif text-xl text-[#F5EDD6] mb-2">{item.title}</h3>
                    <p className="text-[#A89878] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="relative flex-shrink-0 hidden md:block">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] ring-4 ring-[#3B82F6]/20" />
                  </div>
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <SectionLabel label="Recognition" />
          <h2 className="font-serif text-4xl text-[#F5EDD6]">Awards & Acclaim</h2>
          <GoldDivider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["⭐⭐⭐", "Michelin Stars", "2022–Present"],
            ["🥇", "Asia's Best Restaurant", "World's 50 Best, 2023"],
            ["🍷", "Best Wine Programme", "James Beard, 2021"],
            ["🏛️", "Luxury Dining Award", "Condé Nast, 2024"],
          ].map(([icon, award, org]) => (
            <div key={award} className="text-center p-8 border border-[#3B82F6]/15 hover:border-[#3B82F6]/40 transition-all duration-300">
              <div className="text-3xl mb-4">{icon}</div>
              <p className="font-serif text-[#E8C97A] text-sm mb-1">{award}</p>
              <p className="text-[#A89878] text-xs tracking-widest">{org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ambience Images */}
      <section className="pb-28 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 gap-3 h-[400px] md:h-[500px]">
          <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=85" alt="Ambience 1" className="col-span-2 w-full h-full object-cover" loading="lazy" />
          <div className="flex flex-col gap-3">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=85" alt="Ambience 2" className="w-full h-1/2 object-cover" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=85" alt="Ambience 3" className="w-full h-1/2 object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── SERVICES PAGE ──────────────────────────────────── */
function Services({ setActivePage }) {
  return (
    <div className="bg-[#0D0B08] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="What We Offer" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] leading-tight mb-4">
          Our <em className="text-[#3B82F6]">Services</em>
        </h2>
        <GoldDivider />
        <p className="text-[#A89878] mt-6 leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
          Every service at Faizan is curated with the same exacting standard — an obsessive attention to detail that transforms any occasion into an extraordinary memory.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((s, i) => (
          <div key={i} className="group relative p-10 border border-[#3B82F6]/15 hover:border-[#3B82F6]/50 bg-[#111009] hover:bg-[#3B82F6]/5 transition-all duration-500 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="text-5xl mb-6">{s.icon}</div>
            <h3 className="font-serif text-2xl text-[#F5EDD6] mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">{s.title}</h3>
            <p className="text-[#A89878] leading-relaxed font-light">{s.desc}</p>
            <button onClick={() => setActivePage("Contact")}
              className="mt-8 text-[0.6rem] tracking-[0.2em] uppercase text-[#3B82F6] border-b border-[#3B82F6]/30 pb-0.5 hover:border-[#3B82F6] transition-all duration-300">
              Enquire Now →
            </button>
          </div>
        ))}
      </section>

      {/* Private dining promo */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1800&q=80"
          alt="Private dining" className="absolute inset-0 w-full h-full object-cover opacity-30" loading="lazy" />
        <div className="relative text-center px-6">
          <p className="font-serif text-3xl md:text-4xl text-[#F5EDD6] mb-4 italic">Planning something special?</p>
          <button onClick={() => setActivePage("Contact")}
            className="px-8 py-4 bg-[#3B82F6] text-[#0D0B08] text-[0.7rem] tracking-[0.2em] uppercase font-medium hover:bg-[#E8C97A] transition-all duration-300">
            Talk to Our Events Team
          </button>
        </div>
      </section>
    </div>
  );
}

/* ─── PORTFOLIO PAGE ─────────────────────────────────── */
function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const FILTERS = ["All", "Food", "Interior", "Events"];
  const filtered = filter === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(i => i.category === filter);

  return (
    <div className="bg-[#0D0B08] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Visual Story" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] mb-4">Our <em className="text-[#3B82F6]">Portfolio</em></h2>
        <GoldDivider />
      </section>

      {/* Filters */}
      <div className="flex justify-center gap-6 mb-12 px-6 flex-wrap">
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`text-[0.65rem] tracking-[0.2em] uppercase pb-1 border-b transition-all duration-300 ${filter === f ? "border-[#3B82F6] text-[#3B82F6]" : "border-transparent text-[#A89878] hover:text-[#F5EDD6]"}`}>
            {f}
          </button>
        ))}
      </div>

      {/* Masonry-style grid */}
      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <div key={`${filter}-${i}`} onClick={() => setLightbox(item)}
              className="group relative break-inside-avoid overflow-hidden cursor-zoom-in">
              <img src={item.img} alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-[#0D0B08]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#3B82F6]">{item.category}</span>
                <p className="font-serif text-[#F5EDD6] text-base">{item.title}</p>
                <p className="text-[#A89878] text-xl">⊕</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-[#0D0B08]/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-8 text-[#3B82F6] text-2xl hover:text-white transition-colors">✕</button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[80vh] object-contain" />
            <div className="mt-4 text-center">
              <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#3B82F6]">{lightbox.category}</span>
              <p className="font-serif text-xl text-[#F5EDD6] mt-1">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── CONTACT PAGE ───────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", date: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", phone: "", date: "", message: "" });
  };

  const inputClass = "w-full bg-transparent border-b border-[#3B82F6]/20 focus:border-[#3B82F6] outline-none py-3 text-[#F2EBD9] text-sm placeholder-[#A89878]/50 transition-colors duration-300 font-light";

  return (
    <div className="bg-[#0D0B08] pt-28">
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <SectionLabel label="Get In Touch" />
        <h2 className="font-serif text-5xl md:text-6xl text-[#F5EDD6] mb-4">
          Make a <em className="text-[#3B82F6]">Reservation</em>
        </h2>
        <GoldDivider />
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Form */}
        <div className="bg-[#111009] border border-[#3B82F6]/15 p-10">
          <h3 className="font-serif text-2xl text-[#F5EDD6] mb-8">Reserve Your Table</h3>
          {sent && (
            <div className="mb-6 p-4 border border-[#3B82F6]/40 bg-[#3B82F6]/10 text-[#3B82F6] text-sm tracking-wide">
              ✓ Your reservation request has been received. We'll confirm within 24 hours.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Full Name</label>
                <input type="text" required placeholder="Priya Mehta" className={inputClass}
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Email</label>
                <input type="email" required placeholder="hello@example.com" className={inputClass}
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Phone</label>
                <input type="tel" placeholder="+91 98765 43210" className={inputClass}
                  value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Preferred Date</label>
                <input type="date" className={inputClass}
                  value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
              </div>
            </div>
            <div>
              <label className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878] block mb-2">Special Requests</label>
              <textarea rows={4} placeholder="Dietary requirements, occasion details, seating preferences..." className={`${inputClass} resize-none`}
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            </div>
            <button type="submit"
              className="w-full py-4 bg-[#3B82F6] text-[#0D0B08] text-[0.7rem] tracking-[0.25em] uppercase font-medium hover:bg-[#E8C97A] transition-all duration-300">
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-10">
          {/* Map placeholder */}
          <div className="relative overflow-hidden h-56 bg-[#1A1611] border border-[#3B82F6]/15 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#3B82F6] text-3xl mb-2">📍</p>
              <p className="font-serif text-[#F5EDD6]">Faizan Fine Dining</p>
              <p className="text-[#A89878] text-sm mt-1">12, Napean Sea Road, Malabar Hill</p>
              <p className="text-[#A89878] text-sm">Mumbai, Maharashtra 400 006</p>
              <a href="https://maps.google.com" target="_blank" rel="noreferrer"
                className="inline-block mt-4 text-[0.6rem] tracking-[0.2em] uppercase text-[#3B82F6] border-b border-[#3B82F6]/30 hover:border-[#3B82F6] transition-all duration-300">
                Open in Maps →
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="p-8 border border-[#3B82F6]/15 bg-[#111009]">
            <h3 className="font-serif text-xl text-[#E8C97A] mb-6">Opening Hours</h3>
            {[["Monday – Friday", "12:00 PM – 11:00 PM"], ["Saturday", "11:00 AM – 11:30 PM"], ["Sunday", "11:00 AM – 10:00 PM"]].map(([day, time]) => (
              <div key={day} className="flex justify-between py-3 border-b border-[#3B82F6]/10 last:border-0">
                <span className="text-[#A89878] text-sm">{day}</span>
                <span className="text-[#F5EDD6] text-sm font-light">{time}</span>
              </div>
            ))}
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            {[["📞", "Reservations", "+91 9591895425"], ["✉️", "Email", "reserve@Faizan.in"], ["📸", "Instagram", "@Faizan.sirsi"]].map(([icon, label, val]) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 border border-[#3B82F6]/25 flex items-center justify-center text-sm flex-shrink-0">{icon}</div>
                <div>
                  <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#A89878]">{label}</p>
                  <p className="text-[#F5EDD6] text-sm mt-0.5">{val}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── FOOTER ─────────────────────────────────────────── */
function Footer({ setActivePage }) {
  return (
    <footer className="bg-[#080705] border-t border-[#3B82F6]/10 py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="font-serif text-2xl font-bold text-[#3B82F6] tracking-widest mb-4">Faizan<span className="italic font-light text-[#F5EDD6]">.</span></p>
            <p className="text-[#A89878] text-sm leading-relaxed font-light max-w-xs" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Three Michelin stars. One unforgettable evening. Mumbai's temple of fine dining since 2008.
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#3B82F6] mb-5">Navigation</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(p => (
                <li key={p}><button onClick={() => setActivePage(p)} className="text-[#A89878] text-sm hover:text-[#F5EDD6] transition-colors">{p}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-[#3B82F6] mb-5">Contact</p>
            <div className="space-y-2 text-[#A89878] text-sm font-light">
              <p>12, Napean Sea Road, Malabar Hill</p>
              <p>Mumbai, Maharashtra 400 006</p>
              <p className="mt-4">+91 22 4001 9999</p>
              <p>reserve@Faizan.in</p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#3B82F6]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A89878] text-xs tracking-widest">© 2025 Faizan Fine Dining. All rights reserved.</p>
          <p className="text-[#A89878] text-xs tracking-widest">Crafted with passion in Mumbai</p>
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ROOT ───────────────────────────────────────── */
export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const navigate = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PAGE = { Home, About, Services, Portfolio, Contact };
  const PageComponent = PAGE[activePage];

  return (
    <div className="min-h-screen bg-[#0D0B08]">
      <Navbar activePage={activePage} setActivePage={navigate} />
      <main>
        <PageComponent setActivePage={navigate} />
      </main>
      <Footer setActivePage={navigate} />
    </div>
  );
}