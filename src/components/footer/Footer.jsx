import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href="/">MD</Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
