"use client";

import Image from "next/image";

const services = [
  {
    title: "HUKUM PERDATA",
    image: "/images/services/perdata.png",
    desc: "Pendampingan dan penyelesaian sengketa perdata, wanprestasi, perbuatan melawan hukum, perjanjian serta berbagai perkara keperdataan lainnya.",
  },
  {
    title: "HUKUM PIDANA",
    image: "/images/services/pidana.png",
    desc: "Pendampingan hukum pada setiap tahapan proses pidana secara profesional guna melindungi hak dan kepentingan klien.",
  },
  {
    title: "HUKUM PERUSAHAAN",
    image: "/images/services/perusahaan.png",
    desc: "Pendampingan hukum perusahaan meliputi legal opinion, kontrak bisnis, kepatuhan hukum serta penyelesaian sengketa korporasi.",
  },
  {
    title: "PERTANAHAN & PERTAMBANGAN",
    image: "/images/services/pertambangan.png",
    desc: "Pelayanan hukum di bidang pertanahan, sertifikasi, sengketa lahan, perizinan, pertambangan dan sumber daya alam.",
  },
];

export default function Practice() {
  return (
    <section
      id="layanan"
      className="bg-[#090909] py-28"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <p className="text-yellow-400 uppercase tracking-[0.45em] text-sm">
            LAYANAN HUKUM
          </p>

          <h2 className="font-cinzel text-5xl text-white mt-4">
            BIDANG PRAKTIK KAMI
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-8 mb-8"></div>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Kami memberikan pelayanan hukum profesional,
            strategis, dan berorientasi pada penyelesaian
            terbaik demi melindungi kepentingan setiap klien.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="
              group
              bg-[#121212]
              rounded-3xl
              overflow-hidden
              border
              border-yellow-500/20
              transition-all
              duration-500
              hover:-translate-y-4
              hover:border-yellow-400
              hover:shadow-[0_0_45px_rgba(234,179,8,.30)]
              "
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={420}
                  className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              </div>

              <div className="p-8">
                                <h3
                  className="
                  font-cinzel
                  text-2xl
                  text-white
                  leading-snug
                  transition-all
                  duration-300
                  group-hover:text-yellow-400
                  "
                >
                  {service.title}
                </h3>

                <div
                  className="
                  w-16
                  h-1
                  bg-yellow-500
                  rounded-full
                  my-5
                  transition-all
                  duration-500
                  group-hover:w-28
                  "
                ></div>

                <p className="text-gray-400 leading-8 text-[15px]">
                  {service.desc}
                </p>

                <button
                  className="
                  mt-8
                  text-yellow-400
                  font-bold
                  uppercase
                  tracking-[0.20em]
                  transition-all
                  duration-300
                  group-hover:translate-x-3
                  group-hover:text-yellow-300
                  "
                >
                  KONSULTASI →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}