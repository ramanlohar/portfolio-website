import { Code2, Laptop, Cpu, Brush, Globe, Github, Database, Server, Terminal } from "lucide-react";

export default function SkillsSection() {
  const skills = [
    { icon: <Code2 size={24} className="text-blue-500 dark:text-blue-300" />, name: "JavaScript (ES6+)" },
    { icon: <Laptop size={24} className="text-green-500 dark:text-green-300" />, name: "React.js" },
    { icon: <Cpu size={24} className="text-purple-500 dark:text-purple-300" />, name: "Electron.js" },
    { icon: <Brush size={24} className="text-yellow-500 dark:text-yellow-300" />, name: "Tailwind CSS" },
    { icon: <Globe size={24} className="text-gray-500 dark:text-gray-300" />, name: "Node.js" },
    { icon: <Github size={24} className="text-red-500 dark:text-red-300" />, name: "Git & GitHub" },
    { icon: <Database size={24} className="text-indigo-500 dark:text-indigo-300" />, name: "Database Design" },
    { icon: <Server size={24} className="text-pink-500 dark:text-pink-300" />, name: "Backend Development" },
    { icon: <Terminal size={24} className="text-teal-500 dark:text-teal-300" />, name: "CLI Tools" },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-left max-w-4xl w-full mt-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center bg-gray-100 dark:bg-gray-900 px-4 py-3 rounded-lg shadow-sm">
            {skill.icon}
            <span className="ml-3 text-gray-700 dark:text-gray-300">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}