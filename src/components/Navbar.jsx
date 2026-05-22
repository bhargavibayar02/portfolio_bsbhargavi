import React, { useState } from "react";
import { Link } from "react-scroll"; // smooth scrolling
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

 const navLinks = [
  { name: "About Me", to: "about" },
  { name: "Education", to: "education" },
  { name: "Experience", to: "experience" },
  { name: "Achievements", to: "achievements" },
  { name: "Certificates", to: "certificates" }, // ✅ Added
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Contact", to: "contact" },
  { name: "Location", to: "location" }, 
];

  return (
    <nav className="fixed top-0 w-full bg-[#020617] text-white p-4 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold cursor-pointer">Know More</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`} // public folder
              target="_blank" // open in new tab
              rel="noopener noreferrer"
              download
              className="hover:text-red-500 transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-[#020617] w-full absolute top-16 left-0 p-6 gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-red-500 transition-colors duration-300 text-lg"
                onClick={() => setOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`} // public folder
              target="_blank"
              rel="noopener noreferrer"
              download
              className="hover:text-red-500 transition-colors duration-300 text-lg"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;