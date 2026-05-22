import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },

        body: new URLSearchParams(formData).toString(),
      });

      setSubmitted(true);

      form.reset();

    } catch (error) {
      alert("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#020617] text-white"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12 text-red-500">
        Contact Me
      </h2>

      {/* Success Message */}
      {submitted ? (
        <div className="bg-[#111827] border border-red-500 text-center px-8 py-6 rounded-2xl shadow-lg">
          <p className="text-green-400 text-xl font-semibold">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-[#111827] p-8 rounded-2xl shadow-lg border border-gray-800 flex flex-col gap-6"
        >
          {/* Required Hidden Inputs */}
          <input type="hidden" name="form-name" value="contact" />

          <input
            type="hidden"
            name="bot-field"
          />

          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-3 rounded-lg bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:border-red-500 transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 rounded-lg bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:border-red-500 transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-2 text-gray-300 font-medium">
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="p-3 rounded-lg bg-[#1f2937] text-white border border-gray-700 focus:outline-none focus:border-red-500 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition duration-300 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-red-500/30"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
};

export default Contact;