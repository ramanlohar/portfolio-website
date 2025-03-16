import { Link } from "react-router-dom";

export default function NavigationLinks() {
  return (
    <div className="mt-10 flex gap-6">
      <Link to="/projects" className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
        View Projects
      </Link>
      <Link to="/contact" className="bg-green-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400">
        Get in Touch
      </Link>
    </div>
  );
}