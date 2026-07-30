import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes, FaFileDownload } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", to: "about" },
    { name: "Education", to: "education" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Achievements", to: "achievements" },
    { name: "Certificates", to: "certificates" },
    { name: "Resume", to: "resume" },
    { name: "Contact", to: "contact" },
    { name: "Location", to: "location" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/95 backdrop-blur-md border-b border-cyan-500/20 shadow-lg">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
            Bhargavi
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-cyan-400"
                  className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold transition duration-300"
            >
              <FaFileDownload />
              Resume
            </a>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-16 left-0 w-full bg-[#020617] border-t border-cyan-500/20 z-40 md:hidden">
          <ul className="flex flex-col items-center py-6 space-y-5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setOpen(false)}
                  className="text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold transition duration-300"
                onClick={() => setOpen(false)}
              >
                <FaFileDownload />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
