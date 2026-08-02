"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroNew() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* Kiri */}
        <div>
          <span className="inline-block border border-yellow-500 text-yellow-400 px-5 py-2 rounded-full tracking-[0.3em] uppercase text-xs mb-8">
            Advocates &amp; Legal Consultants
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-yellow-400">
              AHMAD TANALI
            </span>

            <br />

            <span className="text-white">
              &amp; REKAN
            </span>
          </h1>

          <div className="w-32 h-1 bg-yellow-500 rounded-full my-8"></div>

          <p className="text-xl text-gray-300 leading-8">
            Strategi hukum yang tepat,
            integritas yang tinggi,
            serta pendampingan profesional
            untuk memberikan perlindungan hukum
            terbaik bagi setiap klien.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">

            <Link
              href="https://wa.me/6281316871100"
              className="bg-yellow-500 text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400"
            >
              Konsultasi WhatsApp
            </Link>

            <Link
              href="#layanan"
              className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black"
            >
              Bidang Praktik
            </Link>

          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center">

          <img
            src="/images/ahmad-tanali.png"
            alt="Ahmad Tanali"
            width={450}
            height={560}
            className="rounded-3xl border-4 border-yellow-500 shadow-2xl"
          />

        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-yellow-400">
        <ChevronDown size={34} />
      </div>

    </section>
  );
}