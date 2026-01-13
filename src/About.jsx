export default function About() {
  return (
    <section
      id="about"
      className="about flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-16 bg-white"
    >
      {/* Image Section */}
      <div className="about-img">
        <img
          src="myimage1.jpg"
          alt="Utkarsh Mishra"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="about-content max-w-xl">
        <h2 className="heading text-4xl font-bold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Frontend Developer
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg">
          Hello! I’m <b>Utkarsh Mishra</b>, a passionate Frontend Developer who loves
          to craft clean and interactive web designs using HTML, CSS, and JavaScript.
          I focus on creating modern, responsive, and user-friendly interfaces
          that bring ideas to life.
        </p>
      </div>
    </section>
  );
}
