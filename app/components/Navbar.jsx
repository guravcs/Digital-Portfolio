"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 w-full mx-auto max-w-[1450px] justify-self-center text-black z-50 bg-gray-200/40 flex justify-between items-center p-4  mt-2 rounded-[10px] px-8   backdrop-blur-sm shadow-inner shadow-blue-400 ">
      <h1 className="text-2xl font-bold cursor-pointer">MyPortfolio</h1>

      <ul className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-400 font-semibold"
              className="cursor-pointer hover:text-blue-400 transition-color duration-75"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center text-black bg-white/40 py-6 space-y-4 w-full rounded-[10px]  absolute top-16 left-0 mt-1 ">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-blue-400 transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
