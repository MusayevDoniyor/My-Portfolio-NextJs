import React from "react";
import FilterProjects from "./FilterProjects";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="text-center text-4xl text-white font-bold mt-10 mb-8 md:mb-12">
        My Projects
      </h2>

      <FilterProjects />
    </section>
  );
}
