import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909]">

        {/* HERO */}
        <HeroNew />

        {/* INTRO SINGKAT */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-8 text-center">

            <p className="text-yellow-400 uppercase tracking-[0.4em] text-sm">
              AHMAD TANALI & REKAN
            </p>

            <h2 className="font-cinzel text-3xl md:text-5xl text-white mt-5">
              ADVOKAT & KONSULTAN HUKUM
            </h2>

            <div className="w-20 h-1 bg-yellow-500 rounded-full mx-auto mt-7 mb-8" />

            <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
              Memberikan pendampingan dan konsultasi hukum secara
              profesional, strategis, dan berintegritas dengan
              mengutamakan kepentingan serta perlindungan hukum klien.
            </p>

          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-20 border-t border-yellow-500/10">
          <div className="max-w-4xl mx-auto px-8 text-center">

            <p className="text-gray-400 text-lg">
              Memerlukan pendampingan atau konsultasi hukum?
            </p>

            <a
              href="/kontak"
              className="
              inline-flex
              mt-7
              px-8
              py-4
              rounded-full
              bg-yellow-500
              text-black
              font-bold
              uppercase
              tracking-[0.18em]
              text-sm
              transition-all
              duration-300
              hover:bg-yellow-400
              hover:-translate-y-1
              "
            >
              KONSULTASI HUKUM →
            </a>

          </div>
        </section>

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}