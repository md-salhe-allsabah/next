"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navigations() {
  const [mode, setMode] = useState(true);

  const links = [
    { item: "Home", href: "/" },
    { item: "News", href: "/News" },
    { item: "About", href: "/About" },
    { item: "Archived", href: "/Archived" },
  ];

  return (
    <nav className="bg-neutral-900/70 font-mono backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.12)] px-4 sm:px-8 md:px-10 py-2 rounded-2xl sm:rounded-3xl flex justify-center items-center fixed top-4 inset-x-0 z-50 mx-auto w-[94%] sm:w-fit max-w-2xl">
      {/* tabs */}
      <ul className="flex w-full sm:w-auto justify-center sm:justify-center gap-2 sm:gap-4 md:gap-6 items-center text-[clamp(0.75rem,2.5vw,1rem)]">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
            >
              {link.item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
