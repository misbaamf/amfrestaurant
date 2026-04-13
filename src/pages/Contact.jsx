import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.date || !form.guests) {
      alert("Please fill all fields");
      return;
    }

    console.log(form);
    alert("Reservation submitted!");

    setForm({
      name: "",
      email: "",
      date: "",
      guests: "",
    });
  };

  return (
    <div className="relative min-h-screen text-white flex items-center justify-center px-6">

      {/* 🔥 Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
          className="w-full h-full object-cover"
          alt="restaurant"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* 💎 Form Card */}
      <form
        onSubmit={handleSubmit}
        className="
          relative z-10
          bg-white/10 backdrop-blur-lg
          border border-white/20
          shadow-2xl
          p-10 rounded-2xl
          w-full max-w-md
          transform transition duration-500
          hover:scale-[1.02]
        "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-500">
          Reserve a Table
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          className="
            w-full mb-4 p-3 rounded-lg
            bg-black/50 border border-gray-600
            focus:outline-none focus:border-yellow-500
            focus:ring-2 focus:ring-yellow-500/30
            transition
          "
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          className="
            w-full mb-4 p-3 rounded-lg
            bg-black/50 border border-gray-600
            focus:outline-none focus:border-yellow-500
            focus:ring-2 focus:ring-yellow-500/30
            transition
          "
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        {/* Date */}
        <input
          type="date"
          value={form.date}
          className="
            w-full mb-4 p-3 rounded-lg
            bg-black/50 border border-gray-600
            focus:outline-none focus:border-yellow-500
            focus:ring-2 focus:ring-yellow-500/30
            transition
          "
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />

        {/* Guests */}
        <input
          type="number"
          placeholder="Number of Guests"
          value={form.guests}
          className="
            w-full mb-6 p-3 rounded-lg
            bg-black/50 border border-gray-600
            focus:outline-none focus:border-yellow-500
            focus:ring-2 focus:ring-yellow-500/30
            transition
          "
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
        />

        {/* Button */}
        <button
          className="
            w-full py-3 rounded-lg
            bg-yellow-500 text-black font-semibold
            hover:bg-yellow-400 hover:scale-105
            transition duration-300
            shadow-lg
          "
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}