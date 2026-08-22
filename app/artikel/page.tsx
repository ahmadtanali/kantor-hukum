import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "Artikel Hukum | Ahmad Tanali & Rekan",
  description:
    "Wawasan dan informasi hukum mengenai sengketa tanah, perdata, pertambangan, waris, dan berbagai persoalan hukum lainnya.",
};

const articles = [
  {
    category: "Sengketa Tanah",
    title: "Tanah Saya Diserobot Orang, Apa yang Harus Saya Lakukan?",
    description:
      "Tanah dipagari, dibangun, dikuasai, atau diklaim pihak lain? Kenali hal-hal yang perlu diperhatikan sebelum menentukan langkah hukum.",
    date: "22 Agustus 2026",
    href: "/artikel/tanah-diserobot-orang-apa-yang-harus-dilakukan",
  },
  {
    category: "Hukum Pidana",
    title: "Perkara Pidana Bukan Merupakan Perkara Perdata",
    description:
      "Memahami perbedaan karakter dan mekanisme antara perkara pidana dan perkara perdata dalam praktik hukum.",
    date: "14 Agustus 2026",
    href: "/artikel/perkara-pidana-bukan-merupakan-perkara-perdata",
  },
];

export default function Artikel() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F7F5F0] min-h-screen pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-8">

          {/* HEADER */}
          <header className="mb-16">

            <p className="text-[#9A7628] uppercase tracking-[0.35em] text-sm mb-4">
              Artikel Hukum
            </p>

            <h1 className="font-cinzel text-4xl md:text-5xl text-[#17233C]">
              Wawasan Hukum
            </h1>

            <div className="w-20 h-1 bg-[#B08D3C] rounded-full mt-6" />

            <p className="text-[#4B5563] text-lg leading-8 max-w-3xl mt-8">
              Informasi dan wawasan hukum untuk membantu Anda memahami
              persoalan hukum sebelum menentukan langkah yang tepat.
            </p>

          </header>

          {/* DAFTAR ARTIKEL */}
          <div className="border-t border-[#17233C]/10">

            {articles.map((article) => (
              <article
                key={article.href}
                className="
                  py-9
                  border-b
                  border-[#17233C]/10
                  transition-all
                  duration-300
                  hover:bg-white/60
                "
              >

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">

                  <div className="max-w-3xl">

                    <p className="text-[#9A7628] text-sm uppercase tracking-[0.25em] mb-3">
                      {article.category}
                    </p>

                    <h2 className="text-[#17233C] text-2xl md:text-3xl font-semibold">
                      {article.title}
                    </h2>

                    <p className="text-[#4B5563] text-base leading-8 mt-4 max-w-2xl">
                      {article.description}
                    </p>

                    <p className="text-[#6B7280] text-base mt-4">
                      Ahmad Tanali, S.H. · {article.date}
                    </p>

                  </div>

                  <Link
                    href={article.href}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      px-6
                      py-3
                      border
                      border-[#B08D3C]/60
                      rounded-full
                      text-[#9A7628]
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      hover:bg-[#B08D3C]
                      hover:text-white
                      hover:border-[#B08D3C]
                      transition-all
                      duration-300
                      whitespace-nowrap
                    "
                  >
                    Baca →
                  </Link>

                </div>

              </article>
            ))}

          </div>

          {/* CTA */}
          <section className="mt-20 pt-10 border-t border-[#17233C]/10">

            <div className="text-center max-w-2xl mx-auto">

              <p className="text-[#9A7628] text-sm uppercase tracking-[0.25em]">
                Membutuhkan Pendampingan?
              </p>

              <h2 className="font-cinzel text-2xl md:text-3xl text-[#17233C] mt-4">
                Persoalan Hukum Anda Berbeda
              </h2>

              <p className="text-[#4B5563] leading-8 mt-5">
                Informasi dalam artikel bersifat umum. Untuk menentukan
                langkah hukum yang tepat, diperlukan pemahaman terhadap
                fakta dan dokumen dalam setiap perkara.
              </p>

              <Link
                href="/kontak"
                className="
                  inline-flex
                  mt-7
                  px-8
                  py-4
                  rounded-full
                  bg-[#B08D3C]
                  text-white
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-sm
                  transition-all
                  duration-300
                  hover:bg-[#9A7628]
                  hover:-translate-y-1
                "
              >
                Konsultasi Hukum →
              </Link>

            </div>

          </section>

        </section>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}