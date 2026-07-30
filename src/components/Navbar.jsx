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
    { name: "Contact", to: "contact" },
    { name: "Location", to: "location" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-lg border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-cyan-400 cursor-pointer">
            Bhargavi
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-70}
                  spy
                  activeClass="text-cyan-400"
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition"
            >
              <FaFileDownload />
              Resume
            </a>
          </ul>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-[#020617] z-40 transition-all duration-300 ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } lg:hidden`}
      >
        <ul className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="text-lg cursor-pointer hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 px-5 py-3 rounded-lg"
            onClick={() => setOpen(false)}
          >
            <FaFileDownload />
            Resume
          </a>
        </ul>
      </div>
    </>
  );
};

export default Navbar;