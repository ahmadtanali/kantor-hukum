const services = [
  {
    icon: "⚖️",
    title: "Hukum Perdata",
    description:
      "Penyelesaian sengketa wanprestasi, perbuatan melawan hukum, sengketa tanah, waris, dan perkara perdata lainnya.",
  },
  {
    icon: "👮",
    title: "Hukum Pidana",
    description:
      "Pendampingan pada tahap penyelidikan, penyidikan, persidangan, hingga upaya hukum lanjutan.",
  },
  {
    icon: "🏛️",
    title: "Hukum Perusahaan",
    description:
      "Pendirian perusahaan, kontrak bisnis, legal opinion, serta konsultasi hukum korporasi.",
  },
  {
    icon: "⛏️",
    title: "Pertanahan & Pertambangan",
    description:
      "Pendampingan sengketa pertanahan, perizinan, IUP, dan penyelesaian konflik pertambangan.",
  },
];

export default function Practice() {
  return (
    <section
      id="layanan"
      className="bg-black text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <p className="uppercase tracking-[0.35em] text-yellow-400 mb-3">
            Bidang Praktik
          </p>

          <h2 className="text-5xl font-bold">
            Layanan Hukum Kami
          </h2>

          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {services.map((service, index) => (

            <div
              key={service.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_0_35px_rgba(234,179,8,0.25)]"
            >

              <div className="text-5xl mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}