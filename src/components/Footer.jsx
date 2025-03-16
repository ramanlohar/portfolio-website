import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mb-4">
          
          {/* Brand Name */}
          <h2 className="text-xl font-semibold mb-4 md:mb-0">Raman Lohar</h2>

          {/* Quick Links */}
          <nav className="flex space-x-6">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="hover:text-gray-400 transition duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ramanlohar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/ramanlohar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:ramanlohar11@gmail.com"
              className="hover:text-white transition duration-300"
            >
              <FaEnvelope size={22} />
            </motion.a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Raman Lohar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
