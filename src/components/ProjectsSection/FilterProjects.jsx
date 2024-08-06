"use client";
import React, { useState } from "react";
import { games, web, romantic } from "./Projects";
import ProjectCard from "./ProjectCard";

export default function FilterProjects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects =
    selectedCategory === "all"
      ? [...games, ...web, ...romantic]
      : selectedCategory === "games"
      ? games
      : selectedCategory === "web"
      ? web
      : romantic;

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 py-6">
        <button
          className={`rounded-full w-full sm:w-fit sm:mx-2 border-2 px-6 py-3 text-xl cursor-pointer ${
            selectedCategory === "all"
              ? "border-purple-500 text-white"
              : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All
        </button>

        <button
          className={`rounded-full w-full sm:w-fit sm:mx-2 border-2 px-6 py-3 text-xl cursor-pointer ${
            selectedCategory === "games"
              ? "border-purple-500 text-white"
              : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white"
          }`}
          onClick={() => setSelectedCategory("games")}
        >
          Games
        </button>

        <button
          className={`rounded-full w-full sm:w-fit sm:mx-2 border-2 px-6 py-3 text-xl cursor-pointer ${
            selectedCategory === "web"
              ? "border-purple-500 text-white"
              : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white"
          }`}
          onClick={() => setSelectedCategory("web")}
        >
          Web
        </button>

        <button
          className={`rounded-full w-full sm:w-fit sm:mx-2 border-2 px-6 py-3 text-xl cursor-pointer ${
            selectedCategory === "romantic"
              ? "border-purple-500 text-white"
              : "border-[#ADB7BE] text-[#ADB7BE] hover:border-white"
          }`}
          onClick={() => setSelectedCategory("romantic")}
        >
          Romantic
        </button>
      </div>

      <div className="mt-7">
        <ul className="grid gap-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                img={project.img}
                name={project.name}
                github={project.github}
                demo={project.demo}
                description={project.description}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
