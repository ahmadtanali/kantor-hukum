
"use client";

const articles = [
  {
    category: "HUKUM PERDATA",
    title: "Wanprestasi dan Perbuatan Melawan Hukum: Apa Perbedaannya?",
    author: "Ahmad Tanali, S.H.",
    date: "12 Agustus 2026",
    desc: "Memahami perbedaan wanprestasi dan perbuatan melawan hukum serta bagaimana menentukan dasar hukum yang tepat dalam suatu sengketa.",
  },
  {
    category: "PERTANAHAN",
    title: "Sengketa Pertanahan dan Perlindungan Hak Atas Tanah",
    author: "Ahmad Tanali, S.H.",
    date: "10 Agustus 2026",
    desc: "Pembahasan mengenai langkah hukum dalam menghadapi sengketa kepemilikan, penguasaan, dan permasalahan hak atas tanah.",
  },
  {
    category: "PERTAMBANGAN",
    title: "Aspek Hukum dalam Kegiatan Pertambangan",
    author: "Ahmad Tanali, S.H.",
    date: "8 Agustus 2026",
    desc: "Memahami aspek perizinan, pertanahan, serta potensi sengketa hukum yang dapat timbul dalam kegiatan pertambangan.",
  },
];

export default function Articles() {
  return (
    <section
      id="artikel"
      className="bg-[#090909] py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* HEADER */}
        <div className="text-center mb-14">

          <p className="text-yellow-400 uppercase tracking-[0.45em] text-sm">
            WAWASAN HUKUM
          </p>

          <h2 className="font-cinzel text-4xl md:text-5xl text-white mt-4">
            ARTIKEL HUKUM
          </h2>

          <div className="w-20 h-1 bg-yellow-500 rounded-full mx-auto mt-7 mb-7" />

          <p className="text-gray-400 max-w-2xl mx-auto leading-8">
            Wawasan, pandangan, dan pembahasan hukum dari praktisi
            serta profesional di bidang hukum.
          </p>

        </div>

        {/* ARTICLE LIST */}
        <div className="border-t border-yellow-500/20">

          {articles.map((article, index) => (

            <article
              key={index}
              className="
              group
              border-b
              border-yellow-500/20
              py-8
              transition-all
              duration-300
              hover:px-4
              "
            >

              <div className="grid md:grid-cols-[180px_1fr_120px] gap-6 items-center">

                {/* CATEGORY */}
                <div>

                  <p className="text-yellow-400 text-xs font-semibold tracking-[0.20em]">
                    {article.category}
                  </p>

                  <p className="text-gray-600 text-xs mt-3">
                    {article.date}
                  </p>

                </div>

                {/* CONTENT */}
                <div>

                  <h3
                    className="
                    font-cinzel
                    text-xl
                    md:text-2xl
                    text-white
                    leading-snug
                    transition-colors
                    duration-300
                    group-hover:text-yellow-400
                    "
                  >
                    {article.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2">
                    Oleh {article.author}
                  </p>

                  <p className="text-gray-400 text-sm leading-7 mt-4 max-w-3xl">
                    {article.desc}
                  </p>

                </div>

                {/* BUTTON */}
                <div className="md:text-right">

                  <button
                    className="
                    text-yellow-400
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    transition-all
                    duration-300
                    group-hover:translate-x-2
                    "
                  >
                    BACA →
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* ALL ARTICLES */}
        <div className="text-center mt-12">

          <button
            className="
            text-yellow-400
            border
            border-yellow-500/50
            px-7
            py-3
            rounded-full
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            transition-all
            duration-300
            hover:bg-yellow-500
            hover:text-black
            hover:border-yellow-500
            "
          >
            LIHAT SEMUA ARTIKEL
          </button>

        </div>

      </div>
    </section>
  );
}
