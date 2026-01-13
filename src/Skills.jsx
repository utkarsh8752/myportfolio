export default function Skills() {
  return (
    <section
      id="skills"
      className="skills py-16 px-6 md:px-20 bg-gray-50 text-gray-900"
    >
      <h2 className="heading text-4xl font-bold text-center mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="skills-container max-w-3xl mx-auto space-y-8">

        {/* Skill Box - HTML */}
        <div className="skill-box">
          <h3 className="text-xl font-semibold mb-2">HTML</h3>
          <div className="skill-bar w-full bg-gray-300 rounded-full h-3">
            <span className="block h-3 bg-blue-500 rounded-full w-[95%] transition-all duration-700"></span>
          </div>
        </div>

        {/* Skill Box - CSS */}
        <div className="skill-box">
          <h3 className="text-xl font-semibold mb-2">CSS</h3>
          <div className="skill-bar w-full bg-gray-300 rounded-full h-3">
            <span className="block h-3 bg-green-500 rounded-full w-[90%] transition-all duration-700"></span>
          </div>
        </div>

        {/* Skill Box - JavaScript */}
        <div className="skill-box">
          <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
          <div className="skill-bar w-full bg-gray-300 rounded-full h-3">
            <span className="block h-3 bg-yellow-500 rounded-full w-[80%] transition-all duration-700"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
