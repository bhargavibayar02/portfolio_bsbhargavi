import React from "react";
import { motion } from "framer-motion";

// Company logos
import CodtechLogo from "../assets/images/codtech.png";
import CodechTechLogo from "../assets/images/codech.png";
import SystemTronLogo from "../assets/images/systemtron.png";

const experienceData = [
  {
    company: "Codtech IT Solutions Private Limited",
    role: "Online Internship - Cyber Security & Ethical Hacking",
    period: "30 Jan 2026 - 27 Feb 2026",
    description:
      "Gained hands-on experience in penetration testing, vulnerability assessment, and security monitoring. Developed practical skills in ethical hacking.",
    logo: CodtechLogo,
    certificate: "/certificates/certificate1.png",
  },
  {
    company: "System Tron",
    role: "Cyber Security Internship",
    period: "26 Jan 2026 - 22 Feb 2026",
    description:
      "Assisted in threat assessment, penetration testing, and monitoring security incidents for web applications.",
    logo: SystemTronLogo,
    certificate: "/certificates/certificate3.png",
  },
  {
    company: "Codtech IT Solutions Private Limited",
    role: "Blockchain Technology Internship",
    period: "5 Jun 2025 - 5 Jul 2025",
    description:
      "Learned and applied blockchain architecture, smart contracts, and secure decentralized solutions.",
    logo: CodtechLogo,
    certificate: "/certificates/certificate4.png",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#020617]"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Experience</h2>

      <div className="relative max-w-4xl w-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

        {experienceData.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`mb-12 flex flex-col md:flex-row items-center justify-between relative ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Card */}
            <div className="bg-[#111827] text-white p-6 rounded-xl shadow-lg max-w-md relative z-10 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-2">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <p className="text-gray-400 text-sm">{exp.period}</p>
              </div>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-gray-300">{exp.company}</p>
              <p className="text-gray-400 mt-1">{exp.description}</p>

              {/* Certificate Button */}
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white font-semibold transition"
                >
                  View Certificate
                </a>
              )}
            </div>

            {/* Red dot */}
            <div
              className="absolute top-6 md:top-8 w-4 h-4 bg-red-500 rounded-full border-2 border-gray-700 left-1/2 transform -translate-x-1/2 z-20"
            ></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;