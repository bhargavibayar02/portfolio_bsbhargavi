import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const projectsData = [
  {
  title: "Sri-Guard SOC Console",
  description: "AI-Powered Security Operations Center Dashboard.",
  details:
    "Developed an AI-driven SOC dashboard for real-time security monitoring, threat visualization, alert management, and incident response using modern web technologies.",
  github: "https://github.com/bhargavibayar02/sri-guard",
},
  {
  title: "RGB-Thermal Pedestrian Detection",
  description: "AI-Based Multimodal Pedestrian Detection.",
  details:
    "Enhanced the QFDet model for RGB-Thermal pedestrian detection by implementing gated feature fusion, improving detection accuracy in low-light and challenging environments using PyTorch and MMDetection.",
  github: "https://github.com/bhargavibayar02/RGB-Thermal-Pedestrian-Detection",
},
  {
  title: "MRA Interiors",
  description: "Interior Design Business Website.",
  details:
    "Designed and developed a responsive website for an interior design company featuring service showcases, project galleries, contact forms, and a modern user interface.",
  github: "https://github.com/bhargavibayar02/mra-interiors",
},
  {
    title: "EventSphere",
    description: "Microservice-based event management platform.",
    details:
      "Built using React, Node.js, API Gateway, Google Maps integration, registration and location services with admin dashboard.",
    github: "https://github.com/bhargavibayar02/college-event-management.git",
  },

  {
    title: "DigiDiary",
    description: "Decentralized Digital Diary.",
    details:
      "A Decentralized Application built using Solidity Smart Contracts, Truffle and Ganache blockchain environment.",
    github: "https://github.com/bhargavibayar02/Codtech4.git",
  },
  {
  title: "AI Intrusion Detection System",
  description: "Machine Learning-Based Network Intrusion Detection.",
  details:
    "Built an AI-powered intrusion detection system using machine learning to classify network traffic, detect malicious activities, and provide real-time security insights through an interactive dashboard.",
  github: "https://github.com/bhargavibayar02/ai_ids",
},
{
  title: "Weather App",
  description: "Real-Time Weather Forecast Application.",
  details:
    "Developed a responsive weather application that fetches live weather data using APIs, displaying current conditions, temperature, humidity, wind speed, and forecasts.",
  github: "https://github.com/bhargavibayar02/weatherapp",
},
{
  title: "MoodStory",
  description: "Mood-Based Journaling Application.",
  details:
    "Built a mood tracking and digital journaling application that allows users to record daily emotions, maintain personal journals, and visualize mood trends over time.",
  github: "https://github.com/bhargavibayar02/moodstoryapp",
},

];

// Parent animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const Projects = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleProject = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 bg-[#020617] text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12 text-red-500">
        Projects
      </h2>

      {/* Project Container */}
      <motion.div
        className="max-w-5xl mx-auto grid gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#111827] rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-red-500 hover:shadow-red-500/20 transition-all duration-300"
          >
            {/* Top Section */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              
              {/* Project Info */}
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2">
                  {project.description}
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap">
                
                {/* GitHub Button */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-gray-900 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>

                {/* Demo Button */}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition duration-300"
                  >
                    <FaExternalLinkAlt size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>

            {/* Expand Button */}
            <button
              onClick={() => toggleProject(index)}
              className="mt-5 flex items-center gap-2 text-red-400 hover:text-red-300 transition"
            >
              {openIndex === index ? (
                <>
                  <FaChevronUp size={18} />
                  Show Less
                </>
              ) : (
                <>
                  <FaChevronDown size={18} />
                  View More
                </>
              )}
            </button>

            {/* Expandable Details */}
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="mt-4 text-gray-300 leading-relaxed border-t border-gray-700 pt-4">
                {project.details}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;