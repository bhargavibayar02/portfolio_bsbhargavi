import React from "react";
import { FaFilePdf, FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-[#0F172A] text-white px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          Resume
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          View or download my latest resume to explore my education,
          technical skills, internships, projects, certifications,
          and achievements.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* View Resume */}
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaEye />
            View Resume
          </a>

          {/* Download Resume */}
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download="Bhargavi_Resume.pdf"
            className="flex items-center gap-2 border border-cyan-400 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <FaFilePdf className="text-red-500 text-7xl animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Resume;