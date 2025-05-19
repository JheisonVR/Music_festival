"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  {
    name: "Tickets",
    options: [
      {
        label: "Single day",
        link: "#",
      },
      {
        label: "Seven days",
        link: "#",
      },
    ],
    classname:
      "relative flex h-full items-center p-4 font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
  {
    name: "Lineup",
    options: [],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
  {
    name: "Support",
    options: [],
    classname:
      "relative flex h-full items-center p-4 cursor-pointer font-bold text-pink-200 hover:text-zinc-200 hover:bg-white/10 transition-colors ease-in-out",
    url:'#',
  },
];

export const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileIconMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

  return (
    <nav className="sticky flex top-0 bg-gradient-to-r from-rose-500 to-pink-500 ">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <Link href="/">
          <Image
            src="/musicFestivalLogo2.png"
            alt="logo"
            width={100}
            height={100}
            className="w-14 hover:rotate-45 duration-500"
          />
        </Link>
        <div className="flex">
          <h3 className="font-bold">Stone</h3>
          <h3 className="text-gray-800 font-extrabold">Echo</h3>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className= {`block sm:hidden ml-auto pr-4 my-auto cursor-pointer group ${isMobileMenuOpen ? 'open':''}`}
        id="mobile-menu-button" onClick={handleMobileIconMenu}
      >
        <div className="h-1 w-8 rounded-full bg-zinc-200 group-open:rotate-45 group-open:top-2 relative transition-all duration-100"></div>
        <div className="h-1 w-8 rounded-full bg-zinc-200 mt-1 group-open:opacity-0 transition-all"></div>
        <div className="h-1 w-8 rounded-full bg-zinc-200 mt-1 transition-all group-open:-rotate-45 group-open:-top-2 relative duration-100"></div>
      </button>
      {/* Mobile Menu Content */}
      <div className= {`sm:hidden absolute top-14 bg-gradient-to-r from-rose-500 to-pink-500 w-full transition-all rounded-b-lg ${isMobileMenuOpen ? '' : 'hidden'}`} >
        {items.map( (item, i)=>(
            <div key={i} className={item.classname} >
                <Link href={item.url}><span>{item.name}</span></Link>
            </div>
        ) )}
      </div>

      {/* Navbar items */}
      <div className="hidden sm:flex flex-1 items-center justify-end">
        {items.map((item, index) => (
          <div key={index} className={item.classname + " group"}>
            <span>{item.name}</span>
            <div className="group-hover:block hidden absolute top-full right-0 whitespace-nowrap bg-pink-500 rounded-b-md text-right">
              {item.options.length > 0 &&
                item.options.map((op, i) => (
                  <div
                    key={i}
                    className="p-4 font-bold hover:bg-white/5 hover:text-zinc-200 text-pink-200 transition-colors ease-in-out"
                  >
                    <Link href={op.link}>
                      <span>{op.label}</span>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
