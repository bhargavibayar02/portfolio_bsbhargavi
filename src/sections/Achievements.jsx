import React from "react";
import { motion } from "framer-motion";

const achievementsData = [
  {
    title: "Hackathon Participant",
    description:
      "Participated in multiple hackathons to gain practical knowledge and problem-solving experience like AI Hackathon by Flinder's University, 24 hr National AI Hackathon at JNNCE Shimogga,Finspark'26 Cyber Security Hackathon by Bank of Maharastra,MSME Ideathon 2026",
  },
  {
    title: "Vice President - SATARC",
    description:
      "Student Association Committee Of Cyber Security. Conducted various Technical, Cultural, and Sports activities.",
  },
  {
    title: "Vice President - Leo Club Mangalore Karavali SUIET",
    description:
      "Led public service activities and social initiatives for the community.",
  },
  
  {
    title: "Master of Ceremonies",
    description: "Hosted more than 30 events, engaging large audiences with confidence.",
  },
  {
    title: "Performing Arts Competitions",
    description:
      "Participated in District level Yakshagana, Dance, and Singing competitions, showcasing artistic talent.",
  },
  {
    title: "Bharatanatyam - Vidwath Exam",
    description:
      "Completed the Vidwath exam in Bharatanatyam and performed in more than 150+ stages.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#020617]"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Achievements</h2>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {achievementsData.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="bg-[#111827] p-6 rounded-xl shadow-lg text-white hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{ach.title}</h3>
            <p className="text-gray-300">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;