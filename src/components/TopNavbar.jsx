"use client";

import React, { useState } from "react";
import Link from "next/link";

const TopNavbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Pricing", path: "/pricing" },
    { name: "Docs", path: "/docs" },
  ];

  return (
    <nav className="flex items-center justify-between bg-black border border-slate-700 px-6 py-4 mx-4 rounded-full text-white text-sm relative">
      
      {/* Logo */}
      <Link href="#">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block transition-transform duration-300">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4 ml-14">
        <button className="border border-slate-600 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium 
                           shadow-[0px_0px_30px_7px] shadow-white/50 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
             viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 text-base md:hidden transition-all duration-300 ${
          open ? "flex" : "hidden"
        }`}
      >
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className="text-white"
          >
            {item.name}
          </Link>
        ))}
        
        <button className="border border-slate-600 px-4 py-2 rounded-full text-sm font-medium transition text-white">
          Contact
        </button>

        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium 
                           shadow-[0px_0px_30px_7px] shadow-white/50 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
