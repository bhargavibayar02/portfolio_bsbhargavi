import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProfilePic from "../assets/images/profile.png"; 

const About = () => {
  const words = [
    { text: "a Student.", color: "text-red-500" },
    { text: "a Developer.", color: "text-white" },
    { text: "a Security Enthusiast.", color: "text-red-500" },
    { text: "an Artist.", color: "text-white" },
    { text: "a Speaker.", color: "text-red-500" },
     { text: "a Dancer.", color: "text-red-500" },
  ];

  const [index, setIndex] = useState(0);
  const [text] = useTypewriter({
    words: words.map((w) => w.text),
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
    onLoopDone: () => setIndex((prev) => (prev + 1) % words.length),
  });

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-[#020617]"
    >
      {/* Hero Name + Photo */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Yo, I am Bhargavi
        </h1>

        {/* Profile Photo with floating animation */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-lg shadow-lg overflow-hidden animate-bounce-slow">
  <img
    src={ProfilePic}
    alt="Bhargavi"
    className="w-full h-full object-cover"
  />
</div>
      </div>

      {/* Typing Animation */}
      <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-center">
        I am{" "}
        <span className={words[index].color}>
          {text}
          <Cursor cursorStyle="|" />
        </span>
      </h2>

      {/* About Content */}
      <div className="max-w-3xl text-justify px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center md:text-left">
          About Me
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I am a curious mind navigating the <span className="text-red-500">digital cosmos</span>, where I craft
          <span className="text-red-500"> innovative applications,</span> explore <span className="text-red-500">blockchain architectures,</span> conduct 
          <span className="text-red-500"> penetration testing,</span> and fortify <span className="text-red-500">cyber defenses.</span> 
          I thrive on decoding complex systems, uncovering hidden vulnerabilities, and designing solutions that are both <span className="text-red-500">secure</span> and <span className="text-red-500">efficient.</span>
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          With a passion for <span className="text-red-500">ethical hacking</span> and <span className="text-red-500">software innovation,</span> I continuously
          experiment, learn, and push the boundaries of technology to create impactful, high-performance, and <span className="text-red-500">resilient</span> digital solutions.
        </p>
      </div>
    </section>
  );
};

export default About;