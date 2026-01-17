export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-12 px-6 md:px-20 py-20 bg-white"
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="/myimage1.jpg"
          alt="Utkarsh Mishra"
          className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-xl"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="text-blue-500">Me</span>
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Frontend / MERN Developer
        </h3>

        <p className="text-gray-600 leading-relaxed text-lg mb-6">
          Hello! I’m <b>Utkarsh Mishra</b>, a passionate developer who enjoys building
          clean, scalable, and interactive web applications. I work with modern
          technologies and focus on performance, responsiveness, and great user
          experience.
        </p>

        {/* Tech Stack */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "MongoDB",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 border border-blue-500 text-blue-500 rounded-full text-sm hover:bg-blue-500 hover:text-white transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
