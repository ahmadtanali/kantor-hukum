"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black
        border-b
        border-yellow-500/20
        transition-all
        duration-300
        ${scrolled ? "shadow-[0_5px_25px_rgba(0,0,0,0.45)]" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-4"
        >
          <Image
            src="/images/logo2.png"
            alt="Logo Ahmad Tanali & Rekan"
            width={60}
            height={60}
            className="h-[60px] w-auto"
          />

          <div>
            <h1 className="text-yellow-400 font-bold text-xl tracking-wide">
              AHMAD TANALI & REKAN
            </h1>

            <p className="text-gray-300 text-xs uppercase tracking-[0.3em]">
              Advocates & Legal Consultants
            </p>
          </div>
        </a>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-white font-semibold">

          <a
            href="/"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Beranda
          </a>

          <a
            href="/tentang"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Tentang
          </a>

          <a
            href="/praktik"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Bidang Praktik
          </a>

          <a
            href="/artikel"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Artikel Hukum
          </a>

          <a
            href="/kontak"
            className="
              bg-yellow-500
              text-black
              px-5
              py-3
              rounded-md
              font-bold
              hover:bg-yellow-400
              transition-all
              duration-300
            "
          >
            Kontak
          </a>

        </div>

      </div>
    </nav>
  );
}