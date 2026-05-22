import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Achievements from "./sections/Achievements";
import Skills from "./sections/Skills";
import Certificates from "./sections/Certificates";
import Projects from "./sections/Projects"; // ✅ Import Projects
import Contact from "./sections/Contact";
import Location from "./sections/Location";

function App() {
  return (
    <div className="bg-[#020617] text-white flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <About />
        <Education />
        <Experience />
        <Achievements />
        <Skills />

        {/* ✅ Projects Section */}
        <Projects />

        <Certificates />
        <Contact />
        <Location />
      </main>

      {/* Footer */}
      <footer className="bg-[#111827] text-gray-300 py-6 flex flex-col items-center justify-center">
        <p className="mb-3">Connect with me:</p>

        <div className="flex gap-6 mb-3">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/b-s-bhargavi-2410bb293"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/bhargavibayar02"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:bhargavibayar@gmail.com"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaEnvelope size={24} />
          </a>

        </div>

        <p className="text-sm text-gray-500 text-center px-4">
          &copy; {new Date().getFullYear()} B S Bhargavi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;