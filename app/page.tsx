import Navbar from "./components/Navbar";
import HeroNew from "./components/HeroNew";
import About from "./components/About";
import Practice from "./components/Practice";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroNew />
      <About />
      <Practice />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}