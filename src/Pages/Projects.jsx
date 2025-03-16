export default function Projects() {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-left max-w-4xl w-full mt-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <div className="mt-6 space-y-6">
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Portfolio Website</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              A responsive portfolio website built with React, Vite, and Tailwind CSS.
            </p>
            <a href="https://github.com/ramanlohar/myportfolio" className="text-blue-500 hover:text-blue-400 transition duration-300 mt-3 inline-block">
              View Project →
            </a>
          </div>
          <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Electron Desktop App</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              A cross-platform desktop application built with Electron and React.
            </p>
            <a href="https://github.com/ramanlohar/myelectronapp" className="text-blue-500 hover:text-blue-400 transition duration-300 mt-3 inline-block">
              View Project →
            </a>
          </div>
        </div>
      </div>
    );
  }