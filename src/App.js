import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import Navbar from "./components/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Certificates from "./sections/Certificates";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";
import Location from "./sections/Location";

function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Certificates />
        <Resume />
        <Contact />
        <Location />
      </main>

      {/* Footer */}
      <footer className="bg-[#0F172A] border-t border-cyan-500/20 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">

          <h3 className="text-xl font-semibold text-cyan-400 mb-2">
            Let's Connect
          </h3>

          <p className="text-gray-400 text-center mb-6">
            Thank you for visiting my portfolio. Feel free to connect with me
            through any of the platforms below.
          </p>

          {/* Social Icons */}
          <div className="flex gap-8 mb-6">
            <a
              href="https://www.linkedin.com/in/b-s-bhargavi-2410bb293"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/bhargavibayar02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>

            <a
              href="mailto:bhargavibayar@gmail.com"
              className="text-gray-300 hover:text-cyan-400 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 mb-4"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="text-cyan-400 font-medium">
              B S Bhargavi
            </span>
            . All Rights Reserved.
          </p>

          <p className="text-xs text-gray-600 mt-2 text-center">
            Designed & Developed with ❤️ by Bhargavi
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;