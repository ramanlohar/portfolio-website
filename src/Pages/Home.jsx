import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

import NavigationLinks from "./NavigationLinks";

export default function Home() {
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/users/ramanlohar")
      .then((res) => setProfilePic(res.data.avatar_url))
      .catch(() => setProfilePic("https://via.placeholder.com/150")); // Fallback image
  }, []);

  return (
    // <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-12">
    <>
      <Profile profilePic={profilePic} />
      <About />
      <Projects />
      <Contact />
      <NavigationLinks/>
    </>
    // </div>
  );
}
