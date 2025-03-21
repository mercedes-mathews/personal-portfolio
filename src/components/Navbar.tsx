import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#FF92A5] text-[#1A1A1A] opacity-70 hover:opacity-90 flex justify-between items-center p-4 z-20">
<a href="/" className="flex items-center">
        <Image
          src="/homeIcon.png"
          alt="Home"
          width={100}
          height={100}
          className="rotate-5 scale-150 hover:opacity-80 transition-transform object-contain"
        />
      </a> 
      <ul className="flex space-x-6">
            <li>
                <a href="/about" className="hover:underline">About Me</a>
            </li>
            <li>
                <a href="/" className="hover:underline">somthing else</a>
            </li>
            <li>
                <a href="/" className="hover:underline">one more</a>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
