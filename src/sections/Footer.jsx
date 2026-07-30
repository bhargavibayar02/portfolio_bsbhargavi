import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white py-6 flex flex-col items-center justify-center gap-4">
      <div className="flex gap-6">
        {/* GitHub */}
        <a
          href="https://github.com/bhargavibayar02"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors text-2xl"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/b-s-bhargavi-2410bb293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors text-2xl"
        >
          <FaLinkedin />
        </a>

        {/* Email */}
        <a
          href="mailto:bhargavibayar@gmail.com"
          className="hover:text-red-500 transition-colors text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>

      <p className="text-gray-400 text-sm mt-2">
        © {new Date().getFullYear()} B S Bhargavi. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;