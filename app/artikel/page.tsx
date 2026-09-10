import Link from "next/link";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

import FloatingWhatsApp from "../components/FloatingWhatsApp";

export const metadata = {
  title: "Artikel Hukum | Ahmad Tanali & Rekan",
  description:
    "Artikel dan kajian hukum dari Ahmad Tanali & Rekan mengenai hukum pidana, perdata, pertanahan, pertambangan, dan berbagai persoalan hukum aktual.",
};

const articles = [
  {
    category: "HUKUM PERDATA",
    title: "Putusan Pidana yang Telah Inkracht sebagai Novum dalam PK Perdata",
    description:
      "Apakah putusan pidana yang telah berkekuatan hukum tetap dapat menjadi bukti baru dalam Peninjauan Kembali perkara perdata? Simak kedudukan, syarat, dan relevansinya.",
    author: "Ahmad Tanali, S.H.",
    date: "10 September 2026",
    href: "/artikel/putusan-pidana-inkracht-sebagai-novum-perkara-perdata",
  },

  {
    category: "HUKUM PIDANA",
    title:
      "Dari Putusan Menuju Pelaksanaan: Menakar Kesiapan Ekosistem Pidana Pengawasan dan Pidana Kerja Sosial dalam KUHP Nasional",
    description:
      "Kajian mengenai perubahan arsitektur pemidanaan setelah berlakunya KUHP Nasional, khususnya pidana pengawasan dan pidana kerja sosial serta kesiapan ekosistem implementasinya.",
    author: "Lollong Manting, S.S., M.M. & Ahmad Tanali, S.H.",
    date: "2026",
    href: "/artikel/dari-putusan-menuju-pelaksanaan",
  },

  {
    category: "HUKUM PIDANA",
    title: "Perkara Pidana Bukan Merupakan Perkara Perdata",
    description:
      "Memahami batas antara hukum pidana dan hukum perdata serta bagaimana menentukan karakter suatu perkara berdasarkan substansi permasalahannya.",
    author: "Ahmad Tanali, S.H.",
    date: "14 Agustus 2026",
    href: "/artikel/perkara-pidana-bukan-merupakan-perkara-perdata",
  },
];

export default function ArtikelPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HEADER */}
        <section className="border-b border-white/10 px-6 pb-16 pt-32 md:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-yellow-400">
              AHMAD TANALI & REKAN
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              ARTIKEL
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
              Kajian, pemikiran, dan informasi hukum yang disusun untuk
              memberikan pemahaman terhadap berbagai persoalan hukum yang
              berkembang di masyarakat.
            </p>
          </div>
        </section>

        {/* ARTICLE LIST */}
        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="divide-y divide-white/10">
              {articles.map((article, index) => (
                <article
                  key={index}
                  className="group py-10 first:pt-0 last:pb-0"
                >
                  <div className="grid gap-6 md:grid-cols-[180px_1fr_auto] md:items-start">
                    {/* CATEGORY */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
                        {article.category}
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        {article.date}
                      </p>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h2 className="text-2xl font-semibold leading-tight text-white transition-colors group-hover:text-yellow-400 md:text-3xl">
                        {article.title}
                      </h2>

                      <p className="mt-4 max-w-3xl text-base leading-7 text-gray-400">
                        {article.description}
                      </p>

                      <p className="mt-5 text-sm text-gray-500">
                        {article.author}
                      </p>
                    </div>

                    {/* LINK */}
                    <div className="md:pt-1">
                      <Link
                        href={article.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-yellow-400 transition-all group-hover:gap-3"
                      >
                        BACA
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}