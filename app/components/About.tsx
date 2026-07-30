import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-zinc-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* Foto */}
        <div
          className="flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative">

            <div className="absolute -inset-2 rounded-3xl bg-yellow-500 blur-xl opacity-20"></div>

            <Image
              src="/images/profile.png"
              alt="Ahmad Tanali, SH"
              width={420}
              height={520}
              className="relative rounded-3xl border-4 border-yellow-500 shadow-2xl object-cover transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/40"
            />

          </div>
        </div>

        {/* Konten */}
        <div data-aos="fade-left">

          <p className="text-yellow-400 uppercase tracking-[0.35em] mb-4">
            Tentang Kami
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Ahmad Tanali & Rekan
          </h2>

          <div className="w-24 h-1 bg-yellow-500 rounded-full mt-6 mb-8"></div>

          <p className="text-gray-300 leading-9 text-lg">
            Kantor Hukum Ahmad Tanali & Rekan merupakan firma hukum yang
            memberikan pelayanan hukum profesional, independen,
            berintegritas, serta berorientasi pada penyelesaian hukum
            terbaik bagi setiap klien.

            <br /><br />

            Kami menangani perkara litigasi maupun non litigasi,
            mulai dari sengketa perdata, pidana,
            pertanahan, pertambangan,
            hingga hukum perusahaan dengan pendekatan yang
            profesional dan bertanggung jawab.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="bg-black border border-yellow-500 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-500 hover:text-black"
            >
              ⚖️ Hukum Perdata
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="bg-black border border-yellow-500 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-500 hover:text-black"
            >
              👮 Hukum Pidana
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              className="bg-black border border-yellow-500 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-500 hover:text-black"
            >
              🏛️ Hukum Perusahaan
            </div>

            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-black border border-yellow-500 rounded-xl p-5 transition-all duration-300 hover:-translate-y-2 hover:bg-yellow-500 hover:text-black"
            >
              ⛏️ Pertanahan & Pertambangan
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}