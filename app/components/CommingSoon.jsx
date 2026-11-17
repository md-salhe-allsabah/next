'use client';
import Image from "next/image";
import React, { useState } from "react";
import commingSoon from "@/data/comming_soon_data";
export default function CommingSoon({ title }) {

  const [coin, setcoin] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center border-dashed rounded-3xl select-none p-4 border transition-all duration-150 active:scale-95 justify-between gap-1.5">
        <p className="font-mono">{title}</p>
        <Image
          src={commingSoon.image}
          draggable={false}
          width={200}
          height={200}
          alt="Comming soon"
          className="rounded-3xl"
          onClick={() => {
            setcoin(!coin)
          }}
        />

        <p
        className="font-mono"
        >
          {coin? 'Tails' : 'Head'}
        </p>

      </div>
    </>
  );
}
