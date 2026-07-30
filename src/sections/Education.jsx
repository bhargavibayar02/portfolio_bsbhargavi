import React from "react";
import { motion } from "framer-motion";
import BtechLogo from "../assets/images/btech.png"; 
import PULogo from "../assets/images/pu.png"; 
import SSLCLogo from "../assets/images/sslc.png"; 

const educationData = [
  {
    year: "2023 - 2027",
    degree: "B.Tech in Cyber Security & Cyber Forensics",
    institution: "Srinivas University Institute of Engineering and Technology(Final year)",
    cgpa: "CGPA: 9.5",
    logo: BtechLogo,
  },
  {
    year: "2021 - 2023",
    degree: "PUC (Science PCMB)",
    institution: "Vivekananda PU College, Puttur",
    cgpa: "97.5%",
    logo: PULogo,
  },
  {
    year: "2020",
    degree: "SSLC",
    institution: "Vittal Jaycees English Medium School",
    cgpa: "99.36%",
    logo: SSLCLogo,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#020617]"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Education</h2>

      <div className="relative max-w-4xl w-full">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700"></div>

        {educationData.map((edu, index) => (
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
            <div className="bg-[#111827] text-white p-6 rounded-xl shadow-lg max-w-md relative z-10">
              <div className="flex items-center mb-2">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <p className="text-gray-400 text-sm">{edu.year}</p>
              </div>
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-gray-300">{edu.institution}</p>
              {edu.cgpa && (
                <p className="text-gray-400 mt-1">{edu.cgpa}</p>
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

export default Education;