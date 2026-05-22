import React from "react";

const Location = () => {
  return (
    <section
      id="location"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#111827] text-white"
    >
      <h2 className="text-4xl font-bold mb-12 text-red-500">Location - Srinivas University, Mukka</h2>

      <div className="w-full max-w-4xl h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Srinivas University Mukka"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.991151018488!2d74.77770147482786!3d13.012042290589768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35c917e0d6b49%3A0x8e8cf1f527a9c6c0!2sSrinivas%20University%2C%20Mukka%2C%20Mangaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;