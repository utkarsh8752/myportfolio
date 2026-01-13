// import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

// export default function Home() {
//   return (
//     <section className="home min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-20 bg-gradient-to-br from-[#001d33] via-[#002b4f] to-[#003b6d] text-white">
      
//       {/* Left Content */}
//       <div className="home-content max-w-xl animate-fadeIn">
//         <h3 className="text-xl font-semibold opacity-90">Hello, It's Me</h3>

//         <h1 className="text-5xl md:text-6xl font-extrabold mt-3 leading-tight drop-shadow-lg">
//           Utkarsh <span className="text-blue-400">Mishra</span>
//         </h1>

//         <h3 className="text-3xl font-medium mt-3">
//           I'm a{" "}
//           <span className="text-blue-400 font-extrabold drop-shadow">
//             Web Developer
//           </span>
//         </h3>

//         <p className="mt-5 text-gray-300 leading-relaxed text-lg">
//           I design and build clean, responsive and engaging web interfaces.  
//           Crafting modern digital experiences is what I love to do!
//         </p>

//         {/* Social Icons */}
//         <div className="social-icons flex gap-4 mt-6">
//           <a
//             href="#"
//             className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition shadow-md"
//           >
//             <FaFacebookF className="text-xl" />
//           </a>

//           <a
//             href="#"
//             className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition shadow-md"
//           >
//             <FaInstagram className="text-xl" />
//           </a>

//           <a
//             href="#"
//             className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition shadow-md"
//           >
//             <FaWhatsapp className="text-xl" />
//           </a>

//           <a
//             href="#"
//             className="p-3 bg-white/10 rounded-full hover:bg-black text-white transition shadow-md"
//           >
//             <FaGithub className="text-xl" />
//           </a>
//         </div>

//         {/* Button */}
//         <a
//           href="#"
//           className="inline-block mt-8 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold text-lg shadow-lg transition-all hover:scale-105"
//         >
//           More About Me
//         </a>
//       </div>

//       {/* Right Image */}
//       <div className="home-img mt-12 lg:mt-0 relative">
//         <div className="relative p-4 rounded-full bg-blue-900/40 shadow-[0_0_50px_20px_rgba(0,120,255,0.5)] animate-floating">
//           <img
//             src="myimage1.jpg"
//             alt="Profile"
//             className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-400 shadow-2xl"
//           />
//         </div>

//         {/* Glow effect circle */}
//         <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
//       </div>
//     </section>
//   );
// }
import { FaFacebookF, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 lg:px-20 py-20 bg-gradient-to-br from-[#001d33] via-[#002b4f] to-[#003b6d] text-white">
      
      {/* Left Content */}
      <div className="home-content max-w-xl animate-fadeIn">
        <h3 className="text-xl font-semibold opacity-90">Hello, It's Me</h3>

        <h1 className="text-5xl lg:text-6xl font-extrabold mt-3 leading-tight drop-shadow-lg">
          Utkarsh <span className="text-blue-400">Mishra</span>
        </h1>

        <h3 className="text-3xl font-medium mt-3">
          I'm a{" "}
          <span className="text-blue-400 font-extrabold drop-shadow">
            Web Developer
          </span>
        </h3>

        <p className="mt-5 text-gray-300 leading-relaxed text-lg">
          I design and build clean, responsive and engaging web interfaces.  
          Crafting modern digital experiences is what I love to do!
        </p>

        {/* Social Icons */}
        <div className="social-icons flex gap-4 mt-6">
          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-blue-500 transition shadow-md"
          >
            <FaFacebookF className="text-xl" />
          </a>

          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-pink-500 transition shadow-md"
          >
            <FaInstagram className="text-xl" />
          </a>

          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-green-500 transition shadow-md"
          >
            <FaWhatsapp className="text-xl" />
          </a>

          <a
            href="#"
            className="p-3 bg-white/10 rounded-full hover:bg-black text-white transition shadow-md"
          >
            <FaGithub className="text-xl" />
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="inline-block mt-8 px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-600 font-semibold text-lg shadow-lg transition-all hover:scale-105"
        >
          More About Me
        </a>
      </div>

      {/* Right Image */}
      <div className="home-img mt-12 lg:mt-0 relative">
        <div className="relative p-4 rounded-xl bg-blue-900/40 shadow-[0_0_50px_20px_rgba(0,120,255,0.5)] animate-floating">
          <img
            src="myimage1.jpg"
            alt="Profile"
            className="w-72 h-72 lg:w-80 lg:h-80 object-cover rounded-xl border-4 border-blue-400 shadow-2xl"
          />
        </div>

        {/* Glow effect square */}
        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-xl -z-10"></div>
      </div>
    </section>
  );
}
