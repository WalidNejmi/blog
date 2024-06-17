'use client'

import Link from "next/link";
import { FaYoutube, FaLinkedin, FaGithub, FaLaptop } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbar() {
  const iconClass = "text-white/90 hover:text-white hover:opacity-80 transition duration-300 ease-in-out";
  return (
    // Add the sticky proprety or not
    <nav className="top-0 drop-shadow-xl"> 
      <Logo />
      <div className="flex flex-row justify-center items-center sm:justify-evenly gap-4 text-white text-xs lg:text-xl">
        <Link className={iconClass} href="https://www.linkedin.com/company/homebasedao/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Link>
        <Link className={iconClass} href="./ContactForm">
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
