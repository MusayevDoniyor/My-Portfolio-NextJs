"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "About", href: "about" },
    { id: 2, title: "Projects", href: "projects" },
    { id: 3, title: "Contact", href: "contact" },
  ];

  return (
    <header>
      <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-4">
          <Link
            className="text-2xl md:text-5xl text-white font-semibold"
            href="/"
          >
            LOGO
          </Link>
          <div className="mobile-menu block md:hidden">
            <button
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {menuOpen ? <RxCross2 /> : <FiMenu />}
            </button>
          </div>

          <div className="hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  <Link href={`#${link.href}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col py-4 items-center">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
                >
                  <Link href={`#${link.href}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
