import Navbar from "../components/Navbar";
import About from "../components/About";
import ProfessionalActivity from "../components/ProfessionalActivity";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Tentang() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909] min-h-screen pt-24">

        {/* JUDUL HALAMAN */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-8 text-center">

            <p className="text-yellow-400 uppercase tracking-[0.45em] text-sm">
              TENTANG KAMI
            </p>

            <h1 className="font-cinzel text-4xl md:text-6xl text-white mt-4">
              AHMAD TANALI & REKAN
            </h1>

            <div className="w-24 h-1 bg-yellow-500 rounded-full mx-auto mt-8" />

          </div>
        </section>

        {/* PROFIL */}
        <About />

        {/* KIPRAH PROFESIONAL */}
        <ProfessionalActivity />

      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}