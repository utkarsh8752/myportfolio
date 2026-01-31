import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20 bg-gradient-to-br from-[#001d33] via-[#002b4f] to-[#003b6d] text-white"
    >
      {/* LEFT CONTENT */}
      <div className="max-w-xl animate-fadeIn">
        <h3 className="text-xl font-semibold opacity-90">
          Hello, It's Me
        </h3>

        <h1 className="text-5xl lg:text-6xl font-extrabold mt-3 leading-tight drop-shadow-lg">
          Utkarsh <span className="text-blue-400">Mishra</span>
        </h1>

        <h3 className="text-3xl font-medium mt-3">
          I'm a{" "}
          <span className="text-blue-400 font-extrabold">
            Full Stack Developer
          </span>
        </h3>

        <p className="mt-5 text-gray-300 leading-relaxed text-lg">
          I build fast, modern and responsive web applications using{" "}
          <span className="text-blue-400 font-semibold">
            React, Next.js, Tailwind CSS
          </span>.
          Passionate about clean UI and great user experience.
        </p>

        {/* STATS */}
        <div className="flex gap-8 mt-8">
          <div>
            <h2 className="text-3xl font-bold text-blue-400">10+</h2>
            <p className="text-gray-300 text-sm">Projects</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400">100%</h2>
            <p className="text-gray-300 text-sm">Responsive</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-400">Clean</h2>
            <p className="text-gray-300 text-sm">UI/UX</p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-8">
          <a
            href="https://www.facebook.com/utkarshmishra.pandit"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition shadow-md"
          >
            <FaFacebookF className="text-xl" />
          </a>

          <a
            href="https://www.instagram.com/utkarshmishra0013/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition shadow-md"
          >
            <FaInstagram className="text-xl" />
          </a>

          <a
            href="https://wa.me/918104591013"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition shadow-md"
          >
            <FaWhatsapp className="text-xl" />
          </a>

          <a
            href="https://github.com/utkarsh8752"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-black transition shadow-md"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex gap-4 mt-8 flex-wrap">
  <Link
    to="/projects"
    className="px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold text-lg shadow-lg transition-all hover:scale-105"
  >
    View Projects
  </Link>

  <a
    href="/contact"
    className="px-8 py-3 rounded-full border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold text-lg transition-all hover:scale-105"
  >
    Contact Me
  </a>
</div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="mt-12 lg:mt-0 relative">
        <div className="relative p-4 rounded-full bg-blue-900/40 shadow-[0_0_50px_20px_rgba(0,120,255,0.5)] animate-floating">
          <img
            src="/myimage1.jpg"
            alt="Utkarsh Mishra"
            className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-blue-400 shadow-2xl"
          />
        </div>

        {/* GLOW */}
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl -z-10"></div>
      </div>
    </section>
  );
}
