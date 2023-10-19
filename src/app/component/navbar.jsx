"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useState } from "react";

function Navbar() {
  const [navbar, SetNavbar] = useState(false);
  const ChangeBG = () => {
    if (window.scrollY <= 500) {
      localStorage.setItem("bhs", "ing");
      SetNavbar(true);
    } else {
      localStorage.setItem("bhs", "chi");
      SetNavbar(false);
    }
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", ChangeBG);
  }

  return (
    <div
      className={`z-50 fixed flex py-5  w-screen justify-between px-16 ${
        navbar ? "bg-transparent" : "bg-[#eb3ddd9a]"
      }`}
    >
      <button className="hoverin">
        <Image src={"/next.svg"} alt="" width={100} height={70} />
      </button>

      <button
        className={`hoverin h-[50px]  flex justify-center items-center px-5 rounded-full bg-gradient-to-b  from-pink-600 to-purple-700 hover:bg-gradient-to-r from-pink-600 to-purple-700 text-white hover:text-white font-bold `}
      >
        Contact Us
      </button>
    </div>
  );
}

export default Navbar;
