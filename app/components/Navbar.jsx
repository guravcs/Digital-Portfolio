"use client";
import { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return ( 
  <>
    <nav className="md:flex hidden fixed top-0 w-full mx-auto max-w-[1450px] justify-self-center text-black z-50 bg-gray-200/40  justify-between items-center p-4  mt-2 rounded-[10px] px-8   backdrop-blur-sm shadow-inner shadow-blue-400 ">
      <h1 className="text-2xl font-bold cursor-pointer hidden md:flex">MyPortfolio</h1>

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
 </nav>
 <nav2 className="md:hidden flex">
      {/* Mobile */} 
      <div className="flex  items-center   ">
           <ul className="fixed bottom-6 left-5 justify-between justify-items-center flex items-center text-black bg-gray-400/30 py-4 px-3 space-x-6  z-50 rounded-[10px] ">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
              
                className="cursor-pointer hover:  bg-contain backdrop-blur-sm  transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav2>
  </>
  );
}
