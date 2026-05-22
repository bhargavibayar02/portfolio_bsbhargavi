import React from "react";
import { motion } from "framer-motion"; // ✅ import framer-motion

const certificatesData = [
  { title: "NoSQL MongoDB", issuer: "United Latino Students Association", year: "2026" },
  { title: "Nestle E-Learning", issuer: "Nestle", year: "2026" },
  { title: "SQL Injection Attacks", issuer: "CodeRed", year: "2026" },
  { title: "Intro to Dark Web, Anonymity & Cryptocurrency", issuer: "CodeRed", year: "2026" },
  { title: "Hash Cracking: John & Hashcat Tool", issuer: "Udemy", year: "2025" },
  { title: "Ethical Hacker", issuer: "Cisco", year: "2026" },
  { title: "Cybersecurity Awareness", issuer: "HP", year: "2025" },
  { title: "Website Hacking", issuer: "Udemy", year: "2025" },
  { title: "Cyber Security and Applied Ethical Hacking", issuer: "Infosys Springboard", year: "2025" },
  { title: "RDBMS, Cloud Fundamentals & Front-End Technologies", issuer: "United Latino Students Association", year: "2025" },
  { title: "Intro to Big Data, Hadoop & Ecosystem", issuer: "United Latino Students Association", year: "2025" },
  { title: "Tata Cyber Security Job Simulation", issuer: "Tata", year: "2025" },
  { title: "Certiport CCST", issuer: "Certiport", year: "2024" },
  { title: "IBM SQL and Relational Databases", issuer: "IBM", year: "2025" },
  { title: "Cisco Network Security", issuer: "Cisco", year: "2025" },
];

// Parent container animation (stagger children)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // one by one delay
    },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // slide from bottom
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
};

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#020617] text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-red-500">Certificates</h2>

      <motion.div
        className="w-full max-w-5xl grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-[#111827] p-6 rounded-lg shadow hover:scale-105 transition-transform"
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
            <p className="text-gray-300">{cert.issuer}</p>
            <p className="text-gray-400">{cert.year}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificates;