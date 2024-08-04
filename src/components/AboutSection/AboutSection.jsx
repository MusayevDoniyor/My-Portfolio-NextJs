"use client";
import React, { useState } from "react";
import Image from "next/image";
import monoblock from "../../../public/about-image.png";

export default function AboutSection() {
  const skills = [
    "JS",
    "Html",
    "CSS",
    "REACT",
    "Next Js",
    "Redux",
    "Tailwind",
    "TypeScript",
  ];
  const education = [
    "Frontend React at Najot Ta'lim",
    "Foundation at IT house",
  ];
  const certification = ["JavaScript Basics from HackerRank"];

  const [active, setActive] = useState("skills");

  return (
    <section
      className="flex flex-col lg:flex-row gap-4 py-8 px-2 xl:gap-16 sm:py-16 xl:px-16"
      id="about"
    >
      <div className="flex-shrink-0">
        <Image
          src={monoblock}
          width={500}
          height={550}
          alt="Image of monoblock with some items"
          className="object-cover rounded-lg shadow-lg md:w-[550px] md:h-[550px]"
        />
      </div>

      <div className="flex flex-col ">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>

        <p className="text-base lg:text-lg">
          I am a frontend web developer with a strong enthusiasm for crafting
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, HTML, CSS, and Git. I am a quick
          learner, always eager to expand my knowledge and skill set. As a
          collaborative team player, I am excited to work with others to create
          exceptional user experiences.
        </p>

        <div className="mt-7">
          <div className="flex gap-3 mb-4 text-[#ADB7BE] text-lg">
            <button
              onClick={() => setActive("skills")}
              className={`relative pb-2 pl-2 font-semibold text-[#ADB7BE] hover:text-white border-animation ${
                active === "skills" ? "active text-white" : ""
              }`}
            >
              Skills
            </button>

            <button
              onClick={() => setActive("education")}
              className={`relative pb-2 pl-2 font-semibold text-[#ADB7BE] hover:text-white border-animation ${
                active === "education" ? "active text-white" : ""
              }`}
            >
              Education
            </button>

            <button
              onClick={() => setActive("certification")}
              className={`relative pb-2 pl-2 font-semibold text-[#ADB7BE] hover:text-white border-animation ${
                active === "certification" ? "active text-white" : ""
              }`}
            >
              Certification
            </button>
          </div>

          <ul className="list-disc pl-7 pt-3 flex flex-col gap-1 text-[17px]">
            {active === "skills" &&
              skills.map((skill, index) => <li key={index}>{skill}</li>)}

            {active === "education" &&
              education.map((educationName, index) => (
                <li key={index}>{educationName}</li>
              ))}

            {active === "certification" &&
              certification.map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
