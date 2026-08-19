"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-black/95 backdrop-blur-md shadow-lg"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-3 md:gap-4"
          >
            <Image
              src="/images/logo2.png"
              alt="Logo Ahmad Tanali & Rekan"
              width={52}
              height={52}
              className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] object-contain"
            />

            <div>
              <h1 className="text-yellow-400 font-bold text-sm md:text-xl tracking-wide">
                AHMAD TANALI & REKAN
              </h1>

              <p className="text-gray-300 text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Advocates & Legal Consultants
              </p>
            </div>
          </Link>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex items-center gap-10 text-white font-medium">
            <Link
              href="/"
              className="hover:text-yellow-400 transition"
            >
              Beranda
            </Link>

            <Link
              href="/tentang"
              className="hover:text-yellow-400 transition"
            >
              Tentang
            </Link>

            <Link
              href="/praktik"
              className="hover:text-yellow-400 transition"
            >
              Praktik
            </Link>

            <Link
              href="/artikel"
              className="hover:text-yellow-400 transition"
            >
              Artikel
            </Link>

            <Link
              href="/kontak"
              className="hover:text-yellow-400 transition"
            >
              Kontak
            </Link>
          </div>

          {/* TOMBOL MENU HP */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg border border-white/20 hover:border-yellow-400 hover:text-yellow-400 transition"
            aria-label="Buka menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-2xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* MENU MOBILE */}
        {menuOpen && (
          <div className="md:hidden mt-4 border-t border-white/10 pt-4 pb-2">
            <div className="flex flex-col">
              
              <Link
                href="/"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition"
              >
                Beranda
              </Link>

              <Link
                href="/tentang"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition"
              >
                Tentang
              </Link>

              <Link
                href="/praktik"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition"
              >
                Praktik
              </Link>

              <Link
                href="/artikel"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition"
              >
                Artikel
              </Link>

              <Link
                href="/kontak"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-white/5 hover:text-yellow-400 transition"
              >
                Kontak
              </Link>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
}