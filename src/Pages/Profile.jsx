import { Code, Globe, Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function ProfileSection({ profilePic }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center max-w-4xl w-full">
      <img 
        src={profilePic} 
        alt="GitHub Profile" 
        className="w-40 h-40 rounded-full mx-auto border-4 border-blue-500 dark:border-blue-400 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-6">Raman Lohar</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
        B.Tech Computer Science student specializing in AI, passionate about full-stack development. I create user-friendly applications with modern technologies.
      </p>

      {/* Icons Section */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <Code size={48} className="text-blue-600 dark:text-blue-400" />
          <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">Full-Stack Dev</span>
        </div>
        <div className="flex flex-col items-center">
          <Globe size={48} className="text-green-600 dark:text-green-400" />
          <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">Self-Hosting</span>
        </div>
        <div className="flex flex-col items-center">
          <Cpu size={48} className="text-purple-600 dark:text-purple-400" />
          <span className="mt-2 text-sm text-gray-700 dark:text-gray-300">AI Enthusiast</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://github.com/ramanlohar" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Github size={32} />
        </a>
        <a href="https://www.linkedin.com/in/ramanlohar" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Linkedin size={32} />
        </a>
        <a href="mailto:ramanlohar11@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Mail size={32} />
        </a>
      </div>
    </div>
  );
}