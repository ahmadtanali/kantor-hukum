import Navbar from "../components/Navbar";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Artikel() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909] min-h-screen pt-24">
        <Articles />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}