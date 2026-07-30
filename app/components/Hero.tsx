"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32">
        <span className="inline-block border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full tracking-[0.3em] uppercase text-xs mb-8">
          Advocates &amp; Legal Consultants
        </span>

        <h1 className="font-cinzel text-5xl md:text-7xl font-bold leading-tight tracking-wide">

          <span className="text-yellow-400">
            AHMAD TANALI
          </span>
          <br />
          <span className="text-white">
            &amp; REKAN
          </span>
        </h1>

        <div className="w-32 h-1 bg-yellow-500 mx-auto my-8 rounded-full" />

        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Strategi hukum yang tepat, integritas yang teguh, dan pendampingan
          profesional untuk melindungi kepentingan setiap klien.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">
          <Link
            href="https://wa.me/6281234567890"
            className="border-2 border-yellow-500 text-yellow-400 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
          >
            Konsultasi via WhatsApp
          </Link>

          <Link
            href="#layanan"
            className="border-2 border-yellow-500 text-yellow-400 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-105"
          >
            Lihat Bidang Praktik
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400/70 animate-bounce">
        <ChevronDown size={28} />
      </div>
    </section>
  );
}