"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroNew() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
<div
  className="absolute inset-0 bg-[#F7F5F0]"
/>

{/* Background Image */}
<div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
  style={{
    backgroundImage: "url('/images/hero-bg.png')",
  }}
/>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block border border-[#B08D3C] text-[#9A7628] px-5 py-2 rounded-full tracking-[0.3em] uppercase text-xs mb-8">
          Advocates &amp; Legal Consultants
        </span>

        <h1 className="font-cinzel text-5xl md:text-7xl font-bold leading-tight">
          <span className="text-[#17233C]">
  AHMAD TANALI
</span>

          <br />

          <span className="text-[#17233C]">
  &amp; REKAN
</span>
        </h1>

        <div className="w-32 h-1 bg-yellow-500 mx-auto my-8 rounded-full" />

        <p className="text-xl text-[#374151] leading-8 max-w-3xl mx-auto">
          Strategi hukum yang tepat,
          integritas yang tinggi,
          serta pendampingan profesional
          untuk memberikan perlindungan hukum terbaik
          bagi setiap klien.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-5">

          <Link
            href="https://wa.me/6281316871100"
            className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition duration-300"
          >
            Konsultasi WhatsApp
          </Link>

          <Link
            href="#layanan"
            className="border-2 border-yellow-500 text-yellow-400 font-bold px-8 py-4 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Bidang Praktik
          </Link>

        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-yellow-400 animate-bounce">
        <ChevronDown size={34} />
      </div>

    </section>
  );
}