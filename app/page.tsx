import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Brands from "@/components/Brands";
import About from "@/components/About";
import InvestmentSimulator from "@/components/InvestmentSimulator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Brands />
        <About />
        <InvestmentSimulator />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
