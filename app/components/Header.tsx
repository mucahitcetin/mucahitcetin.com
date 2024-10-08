"use client";

import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-primary shadow-lg flex justify-between  items-center h-24 px-4 rounded-b-xl lg:px-8">
      {/* Logo */}
      <Link href="/" className="text-white lg:text-4xl md:text-3xl text-2xl">
        Mücahit Çetin
      </Link>

      {/* Büyük ekran menüsü */}
      <nav className="hidden md:flex space-x-6 text-white text-xl">
        <Link href="/aboutme" className="hover:text-secondary">
          About Me
        </Link>
        <Link href="/skills" className="hover:text-secondary">
          Skills
        </Link>
        <Link href="/projects" className="hover:text-secondary">
          Projects
        </Link>
        <Link href="/experience" className="hover:text-secondary">
          Experience
        </Link>
        <Link href="/contact" className="hover:text-secondary">
          Contact
        </Link>
      </nav>

      {/* Küçük ekran menüsü */}
      <div className="md:hidden text-white mr-3">
        <Hamburger toggled={menuOpen} toggle={setMenuOpen} size={27} />
      </div>

      {/* Mobil menü */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-primary shadow-lg p-4 md:hidden z-50">
          <nav className="flex flex-col space-y-4 text-white">
            <Link href="/aboutme" className="hover:text-secondary">
              About Me
            </Link>
            <Link href="/skills" className="hover:text-secondary">
              Skills
            </Link>
            <Link href="/projects" className="hover:text-secondary">
              Projects
            </Link>
            <Link href="/experience" className="hover:text-secondary">
              Experience
            </Link>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
