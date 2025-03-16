import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-center max-w-4xl w-full mt-10">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-4">
        Feel free to reach out to me for collaborations, projects, or just a friendly chat!
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="mailto:ramanlohar11@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Mail size={32} />
        </a>
        <a href="https://github.com/ramanlohar" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Github size={32} />
        </a>
        <a href="https://www.linkedin.com/in/ramanlohar" target="_blank" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
          <Linkedin size={32} />
        </a>
      </div>
    </div>
  );
}