import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function ContactSection() {
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
          <Link href="https://github.com/MusayevDoniyor">
            <FaGithub className="text-white size-12" />
          </Link>

          <Link href="https://www.linkedin.com/in/doniyor-musayev-2783592a4/">
            <FaLinkedin className="text-white size-12" />
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <form class="flex flex-col">
          <div class="mb-6">
            <label
              for="email"
              class="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              required=""
              class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              name="email"
            />
          </div>

          <div class="mb-6">
            <label
              for="subject"
              class="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>

            <input
              type="text"
              id="subject"
              required=""
              class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              name="subject"
            />
          </div>

          <div class="mb-6">
            <label
              for="message"
              class="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            class="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      <div></div>
    </section>
  );
}
