"use client";
import React from "react";
import Image from "next/image";

export default function Card({ image, title, block }) {
  return (
    <div
      tabIndex={0}
      className="group w-80 h-[420px] shrink-0 flex flex-col bg-neutral-800 select-none border border-neutral-700 focus:border-neutral-500 rounded-lg overflow-hidden shadow-md outline-none cursor-pointer touch-manipulation transition-colors"
    >
      {/* Image container */}
      <div className="w-80 h-80 shrink-0 overflow-hidden relative border-b border-neutral-700 transition-all duration-500 ease-in-out group-hover:h-0 group-hover:opacity-0 group-hover:border-b-0 group-focus:h-0 group-focus:opacity-0 group-focus:border-b-0">
        <Image
          draggable={false}
          src={image}
          alt={title || "Card image"}
          width={320}
          height={320}
          className="w-80 h-80 max-w-none object-cover"
        />
      </div>

      {/* 👇 THIS DIV (The text container with overflow-y-auto) */}
      <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h1 className="text-neutral-100 font-mono text-lg line-clamp-1 group-hover:line-clamp-none group-focus:line-clamp-none">
          {title}
        </h1>
        <p className="text-neutral-300 font-sans tracking-wide leading-relaxed text-sm line-clamp-1 group-hover:line-clamp-none group-focus:line-clamp-none">
          {block}
        </p>
      </div>
    </div>
  );
}
