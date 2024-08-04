"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

export default function NavBar({ navLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="sm:hidden flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
      >
        {!menuOpen ? <FiMenu /> : <RxCross2 />}
      </button>

      {menuOpen && (
        <div className="top-full left-0 w-full bg-slate-800 text-slate-200 border-t border-slate-600">
          <ul className="flex flex-col py-4 gap-4 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-xl rounded md:p-0 hover:text-white"
              >
                <Link href={`#${link.href}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="hidden sm:block">
        <ul className="flex gap-4 items-center">
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
    </nav>
  );
}
