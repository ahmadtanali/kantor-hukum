const reasons = [
  {
    icon: "⚖️",
    title: "Profesional",
    text: "Setiap perkara ditangani secara profesional berdasarkan analisis hukum yang mendalam dan strategi yang terukur.",
  },
  {
    icon: "🛡️",
    title: "Integritas",
    text: "Kami menjunjung tinggi etika profesi advokat, menjaga kerahasiaan klien, serta mengutamakan kejujuran.",
  },
  {
    icon: "🎯",
    title: "Strategi Hukum",
    text: "Setiap sengketa memiliki karakteristik berbeda sehingga memerlukan pendekatan dan strategi yang tepat.",
  },
  {
    icon: "🤝",
    title: "Pendampingan Klien",
    text: "Kami berkomitmen memberikan pendampingan hukum secara menyeluruh dengan komunikasi yang terbuka.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="bg-zinc-950 text-white py-24"
      id="whyus"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400 mb-3">
            Mengapa Memilih Kami
          </p>

          <h2 className="text-5xl font-bold">
            Komitmen Kami
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            Kami percaya bahwa setiap klien berhak memperoleh
            pelayanan hukum yang profesional, transparan,
            dan berorientasi pada penyelesaian terbaik.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {reasons.map((item, index) => (

            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-2xl border border-zinc-800 bg-black p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.20)]"
            >

              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-yellow-400">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>
{/* Statistik */}
<div
  className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
  data-aos="fade-up"
>
  {[
    { value: "100+", label: "Perkara Ditangani" },
    { value: "24/7", label: "Layanan Konsultasi" },
    { value: "100%", label: "Komitmen Profesional" },
    { value: "Indonesia", label: "Jangkauan Layanan" },
  ].map((item, index) => (
    <div
      key={item.label}
      data-aos="zoom-in"
      data-aos-delay={index * 100}
      className="rounded-xl border border-zinc-800 bg-black p-6 text-center transition-all duration-300 hover:border-yellow-500 hover:-translate-y-1"
    >
      <h3 className="text-4xl font-bold text-yellow-400">
        {item.value}
      </h3>

      <p className="mt-3 text-gray-400">
        {item.label}
      </p>
    </div>
  ))}
</div>

      </div>
      
    </section>
  );
}
