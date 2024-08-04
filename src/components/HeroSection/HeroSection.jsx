"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import avatar from "./../../../public/hero-image.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex gap-10 flex-col md:flex-row md:gap-16 items-center">
      <motion.div
        className="md:mr-2 text-center md:text-left"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Hello, I&apos;m
          </span>

          <br />

          <span>
            <TypeAnimation
              sequence={[
                "Doniyor",
                1000,
                "Web Developer",
                1000,
                "Creative Thinker",
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          I'm Doniyor Musayev, a 14-year-old aspiring developer from Tashkent,
          Uzbekistan. Passionate about technology and coding, I specialize in
          creating engaging web applications using modern technologies.
          Currently, I am focused on developing my skills in frontend
          development and exploring new opportunities in the tech world. In my
          free time, I enjoy learning about new trends in technology, working on
          personal projects, and contributing to open-source communities.
        </p>

        <div className="space-y-4">
          <Link
            className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:bg-slate-200 text-white"
            href="/#contact"
          >
            Hire Me
          </Link>

          <Link
            className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-pink-500 to-purple-600 hover:bg-slate-800 text-white mt-3"
            href="/"
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={avatar}
          alt="Avatar"
          className="rounded-full bg-[#181818]"
          width={400}
          height={500}
        />
      </motion.div>
    </section>
  );
}
