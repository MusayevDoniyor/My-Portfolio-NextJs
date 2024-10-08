"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/meojkjjg", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ email: "", subject: "", message: "" });
      setStatusMessage("Message sent successfully!");
      setIsSuccess(true);
    } else {
      setStatusMessage("Failed to send message. Please try again.");
      setIsSuccess(false);
    }

    setTimeout(() => {
      setStatusMessage("");
    }, 2000);
  };

  return (
    <section
      className="flex flex-col md:flex-row gap-4 my-12 py-24 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex-1">
        <h3 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h3>

        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="flex flex-row gap-4">
          <Link
            href="https://github.com/MusayevDoniyor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white text-3xl" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/doniyor-musayev-2783592a4/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-3xl" />
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>

            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>

        {statusMessage && (
          <div
            className={`mt-4 p-2 rounded-lg text-center ${
              isSuccess ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {statusMessage}
          </div>
        )}
      </div>
    </section>
  );
}
