import Navbar from "../components/Navbar";
import Practice from "../components/Practice";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

export default function Praktik() {
  return (
    <>
      <Navbar />

      <main className="bg-[#090909] min-h-screen pt-24">
        <Practice />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}