// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-16 px-6 md:px-20 bg-gray-50 text-gray-900"
//     >
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My <span className="text-blue-500">Skills</span>
//       </h2>

//       <div className="max-w-3xl mx-auto space-y-8">

//         {/* HTML */}
//         <SkillBar title="HTML" color="bg-blue-500" percent="95%" />

//         {/* CSS */}
//         <SkillBar title="CSS" color="bg-green-500" percent="90%" />

//         {/* JavaScript */}
//         <SkillBar title="JavaScript" color="bg-yellow-500" percent="80%" />

//         {/* React */}
//         <SkillBar title="React" color="bg-cyan-500" percent="85%" />

//         {/* Next.js */}
//         <SkillBar title="Next.js" color="bg-black" percent="75%" />

//         {/* Node.js */}
//         <SkillBar title="Node.js" color="bg-emerald-500" percent="70%" />

//         {/* MongoDB */}
//         <SkillBar title="MongoDB" color="bg-green-600" percent="65%" />

//       </div>
//     </section>
//   );
// }

// /* Reusable Skill Bar Component */
// function SkillBar({ title, percent, color }) {
//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-2">{title}</h3>
//       <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
//         <span
//           className={`block h-3 rounded-full ${color} transition-all duration-700`}
//           style={{ width: percent }}
//         ></span>
//       </div>
//     </div>
//   );
// }


export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#001d33] via-[#002b4f] to-[#003b6d] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-14">
        My <span className="text-blue-400">Skills</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-8 bg-white/5 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-white/10">

        <SkillBar title="HTML" percent={95} color="bg-blue-500" />
        <SkillBar title="CSS" percent={90} color="bg-green-400" />
        <SkillBar title="JavaScript" percent={80} color="bg-yellow-400" />
        <SkillBar title="React" percent={85} color="bg-cyan-400" />
        <SkillBar title="Next.js" percent={75} color="bg-gray-200" />
        <SkillBar title="Node.js" percent={70} color="bg-emerald-400" />
        <SkillBar title="MongoDB" percent={65} color="bg-green-500" />

      </div>
    </section>
  );
}

/* Modern Skill Bar */
function SkillBar({ title, percent, color }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold text-blue-100">{title}</h3>
        <span className="text-sm text-blue-200">{percent}%</span>
      </div>

      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full ${color} transition-all duration-700`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
