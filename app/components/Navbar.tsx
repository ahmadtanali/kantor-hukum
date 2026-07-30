"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo2.png"
            alt="Logo Ahmad Tanali & Rekan"
            width={60}
            height={60}
          />

          <div>
            <h1 className="text-yellow-400 font-bold text-xl tracking-wide">
              AHMAD TANALI & REKAN
            </h1>

            <p className="text-gray-300 text-xs uppercase tracking-[0.3em]">
              Advocates & Legal Consultants
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-white font-medium">
          <a href="#beranda" className="hover:text-yellow-400 transition">
            Beranda
          </a>

          <a href="#tentang" className="hover:text-yellow-400 transition">
            Tentang
          </a>

          <a href="#layanan" className="hover:text-yellow-400 transition">
            Layanan
          </a>

          <a href="#kontak" className="hover:text-yellow-400 transition">
            Kontak
          </a>
        </div>
      </div>
    </nav>
  );
}