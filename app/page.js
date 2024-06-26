"use client";
import { useState } from "react";
import Image from "next/image";
 
export default function Home() {
   const [time, setTime] = useState(null)
   const handleClick = () => {
    setTime(true)
    setTimeout(() => {
      setTime(false)
    }, 66000);
   }
  return (
    <div className=" flex items-center justify-center " onClick={handleClick}>
      <div className="relative sm:min-h-screen  min-w-full sm:min-w-0 sm:aspect-square z-20">
        <Image
          src={"/ISM-E-ZAAT-MUBARIK.png"}
          alt="MERAY SOHNAY RAB KA ZAATI NAAM"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
          priority
        />
      </div>
      {time ? (
        <div className="absolute w-full h-full bg-black z-10"></div>
      ) : (
        <div className="absolute w-full h-full bg-white z-10"></div>
      )}
    </div>
  );
}

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
