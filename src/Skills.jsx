export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-gray-50 text-gray-900"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        My <span className="text-blue-500">Skills</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* HTML */}
        <SkillBar title="HTML" color="bg-blue-500" percent="95%" />

        {/* CSS */}
        <SkillBar title="CSS" color="bg-green-500" percent="90%" />

        {/* JavaScript */}
        <SkillBar title="JavaScript" color="bg-yellow-500" percent="80%" />

        {/* React */}
        <SkillBar title="React" color="bg-cyan-500" percent="85%" />

        {/* Next.js */}
        <SkillBar title="Next.js" color="bg-black" percent="75%" />

        {/* Node.js */}
        <SkillBar title="Node.js" color="bg-emerald-500" percent="70%" />

        {/* MongoDB */}
        <SkillBar title="MongoDB" color="bg-green-600" percent="65%" />

      </div>
    </section>
  );
}

/* Reusable Skill Bar Component */
function SkillBar({ title, percent, color }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
        <span
          className={`block h-3 rounded-full ${color} transition-all duration-700`}
          style={{ width: percent }}
        ></span>
      </div>
    </div>
  );
}
