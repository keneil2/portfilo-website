export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "PHP",
    "Laravel",
    "MYSQL",
    "SQL",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section id="skills" className="py-20 bg-slate-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
