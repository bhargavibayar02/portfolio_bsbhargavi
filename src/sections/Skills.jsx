import React, { useState } from "react";

// Icons from react-icons (ensure installed with: npm install react-icons)
import { FaDatabase } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineCode } from "react-icons/ai";

const skillsData = [
  {
    category: "Programming",
    icon: <SiPython className="inline mr-2" />,
    skills: ["Python", "Java", "C", "JavaScript","C#"],
  },
  {
    category: "Web Development",
    icon: <SiReact className="inline mr-2" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MERN Stack"],
  },
  {
    category: "Databases",
    icon: <FaDatabase className="inline mr-2" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Developer Tools",
    icon: <AiOutlineCode className="inline mr-2" />,
    skills: ["VSCode", "Jupyter Notebook", "Wokwi", "LaTeX"],
  },
  {
    category: "Cybersecurity Tools",
    icon: <GiNetworkBars className="inline mr-2" />,
    skills: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "SQLMap",
      "John the Ripper",
      "Hashcat",
      "DVWA",
      "OWASP Juice Shop",
    ],
  },
  {
    category: "Soft Skills",
    icon: <AiOutlineCode className="inline mr-2" />,
    skills: ["Communication", "Leadership", "Problem Solving", "Quick Learner"],
  },
  {
    category: "Languages Known",
    skills: ["English", "Kannada", "Hindi", "Tulu"],
  }
];

const Skills = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-[#020617]"
    >
      <h2 className="text-4xl font-bold mb-12 text-white">Skills</h2>

      <div className="w-full max-w-4xl flex flex-col gap-4">
        {skillsData.map((cat, index) => (
          <div key={index} className="bg-[#111827] rounded-xl shadow-lg overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between text-white font-semibold hover:bg-gray-800 transition"
            >
              <span className="flex items-center">
                {cat.icon} {cat.category}
              </span>
              <span>{openCategory === index ? "▲" : "▼"}</span>
            </button>

            {/* Skills List */}
            {openCategory === index && (
              <div className="px-6 py-4 text-gray-300 flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-red-500 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
