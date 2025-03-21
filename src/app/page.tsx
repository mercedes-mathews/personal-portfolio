"use client";
import React from "react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import MovingBackground from "@/components/MovingBackground";

export default function Home() {
  return (
    <>
    <main className="relative flex items-center justify-center min-h-screen bg-[#0D0D0D] overflow-hidden text-[#F5F5F5]">
      <MovingBackground />
      <div className="relative z-10 flex flex-col items-center text-center">
      <Image src="/circleHeadshot.jpg" width={300} height={300} alt="Headshot" className="mb-8 border-4 border-solid border-[#FF92A5] rounded-full" />
      <h1 className="text-5xl font-bold">
        <Typewriter
          words={["Hey there, I'm Mercedes."]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={50}
        />
      </h1>
      <p className="text-xl mt-4 text-[#BDBDBD]">blah blah blah blah | something something | some more of something</p>
      </div>
    </main>
    </>
  );
}