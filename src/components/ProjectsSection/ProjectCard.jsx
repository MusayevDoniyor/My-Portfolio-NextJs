import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard({ img, name, github, demo, description }) {
  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg h-96">
      <div className="relative w-full h-3/4 overflow-hidden">
        <Image
          src={img}
          alt={description}
          layout="fill"
          className="transition-transform duration-300 transform group-hover:scale-110 object-cover"
        />
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center mx-2"
            href={github}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-10 w-10 text-[#ADB7BE] group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
              ></path>
            </svg>
          </Link>

          <Link
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center mx-2"
            href={demo}
            aria-label="Demo"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="h-10 w-10 text-[#ADB7BE] group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
}
