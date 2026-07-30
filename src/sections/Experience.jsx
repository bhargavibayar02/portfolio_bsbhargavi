import React from "react";
import { motion } from "framer-motion";

// Company Logos
import AbhimoLogo from "../assets/images/abhimo.png";
import CenLogo from "../assets/images/cen.png";

const experienceData = [
  {
    company: "CEN Police Station, Mangaluru",
    role: "Cyber Security Intern",
    period: "June 2026 - July 2026",
    description:
      "Assisted in cybercrime investigations, digital evidence handling, cyber forensics, incident reporting, cyber awareness activities, and gained practical exposure to law enforcement and cybersecurity operations.",
    logo: CenLogo,
    certificate: "/certificates/cen-certificate.png",
  },
  {
    company: "Abhimo Technologies Private Limited",
    role: "Cloud Computing Intern",
    period: "May 2026 - June 2026",
    description:
      "Worked on cloud computing concepts, virtual machines, cloud services, deployment models, cloud deployment, and hands-on implementation of cloud-based applications while gaining practical industry experience.",
    logo: AbhimoLogo,
    certificate: "/certificates/abhimo-certificate.png",
  },
  
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-[#020617] text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400"
        >
          Internship Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-cyan-500"></div>

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-cyan-400 border-4 border-[#020617] z-20"></div>

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-[45%] bg-[#111827] rounded-xl p-6 shadow-lg border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
                {/* Logo + Company */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-300 font-medium">
                      {exp.company}
                    </p>

                    <p className="text-gray-400 text-sm">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;