import SkillsSection from "./Skills";

export default function About() {
    return (
        <>
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 text-left max-w-4xl w-full mt-10">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          Hi, I'm Raman Lohar, a passionate software developer with expertise in modern technologies like <strong>JavaScript, React.js, Electron.js, and Node.js</strong>. 
          My focus is on creating innovative and seamless user experiences, whether it's a dynamic web application or a powerful cross-platform desktop app.
        </p>
        <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
          I love problem-solving and constantly exploring new tools and frameworks. I also enjoy self-hosting solutions and optimizing workflows with automation.
        </p>
      </div>
      <SkillsSection/>
        </>
    );
  }