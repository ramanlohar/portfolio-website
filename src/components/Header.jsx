import { 
    FaGithub, FaLinkedin, FaSun, FaMoon, FaBars, FaTimes, 
    FaHome, FaProjectDiagram, FaUser, FaEnvelope 
  } from "react-icons/fa";
  import { motion, AnimatePresence } from "framer-motion";
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  const Header = () => {
    const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
    const [isOpen, setIsOpen] = useState(false);
  
    useEffect(() => {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [isDark]);
  
    const menuItems = [
      { name: "Home", icon: <FaHome size={20} />, path: "/" },
      { name: "Projects", icon: <FaProjectDiagram size={20} />, path: "/projects" },
      { name: "About", icon: <FaUser size={20} />, path: "/about" },
      { name: "Contact", icon: <FaEnvelope size={20} />, path: "/contact" },
    ];
  
    return (
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-50">

        <h1 className="text-xl font-semibold">Raman Lohar</h1>
  
        <div className="flex justify-between items-center space-x-4">  
          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="flex items-center space-x-2 hover:text-gray-400 transition duration-300"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
  
          <div className="flex gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/ramanlohar"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaGithub size={24} />
            </motion.a>
  
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/ramanlohar"
              target="_blank"
              rel="noreferrer"
              className="icon"
            >
              <FaLinkedin size={24} />
            </motion.a>
  
            <motion.button
              className="icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <FaSun className="text-yellow-400" size={24} />
              ) : (
                <FaMoon className="text-gray-300" size={24} />
              )}
            </motion.button>
  
            {/* Mobile Menu Button */}
            <motion.button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </motion.button>
          </div>
        </div>
  
        {/* Mobile Menu with AnimatePresence for Exit Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-14 left-0 w-full bg-gray-800 p-4"
            >
              {menuItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className="flex items-center space-x-2 py-2 text-white hover:text-gray-400 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  };
  
  export default Header;
  