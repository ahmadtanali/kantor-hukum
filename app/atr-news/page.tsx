import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function ATRNews() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909] min-h-screen pt-32 pb-24">
        <section className="max-w-5xl mx-auto px-8">

          {/* HEADER */}
          <header className="mb-16">
            <p className="text-yellow-400 uppercase tracking-[0.35em] text-sm mb-4">
              Ahmad Tanali & Rekan
            </p>

            <h1 className="font-cinzel text-4xl md:text-5xl text-white">
              ATR NEWS
            </h1>

            <p className="text-gray-500 mt-5 text-sm md:text-base">
              Legal News · Legal Insight · Professional Update
            </p>

            <div className="w-20 h-1 bg-yellow-500 rounded-full mt-6" />
          </header>

          {/* DAFTAR BERITA */}
          <div className="border-t border-white/10">

            {/* ARTIKEL PIDANA */}
            <article className="py-8 border-b border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>
                  <p className="text-yellow-400 text-xs uppercase tracking-[0.25em] mb-3">
                    Hukum Pidana
                  </p>

                  <h2 className="text-white text-xl md:text-2xl font-semibold">
                    Perkara Pidana Bukan Merupakan Perkara Perdata
                  </h2>

                  <p className="text-gray-500 text-sm mt-3">
                    Ahmad Tanali, S.H. · 14 Agustus 2026
                  </p>
                </div>

                <Link
                  href="/artikel/perkara-pidana-bukan-merupakan-perkara-perdata"
                  className="text-yellow-400 text-sm font-semibold uppercase tracking-[0.18em] hover:text-white transition whitespace-nowrap"
                >
                  Baca →
                </Link>

              </div>
            </article>

          </div>

        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}