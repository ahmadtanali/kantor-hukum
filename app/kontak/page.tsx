import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Kontak() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909] min-h-screen pt-24">
        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}