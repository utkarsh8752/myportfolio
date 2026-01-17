import React from "react";

const projectsData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using React and Tailwind CSS.",
    tech: ["React", "Tailwind", "JavaScript"],
    image: "/project1.png",
    github: "https://github.com/utkarsh8752",
    live: "#",
  },
  {
    title: "Food Delivery App",
    description:
      "Modern food delivery UI with responsive design and animations.",
    tech: ["React", "CSS", "API"],
    image: "/project2.png",
    github: "https://github.com/utkarsh8752",
    live: "#",
  },
  {
    title: "Contact Form",
    description:
      "Contact form integrated with Formspree for email submissions.",
    tech: ["React", "Formspree"],
    image: "/project3.png",
    github: "https://github.com/utkarsh8752",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="min-h-screen bg-[#0a192f] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-[#020c1b] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm px-4 py-2 bg-cyan-400 text-black rounded-lg hover:opacity-80 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
