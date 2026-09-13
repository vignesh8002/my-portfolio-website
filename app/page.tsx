import Navbar      from "@/components/Navbar";
import Hero        from "@/components/Hero";
import About       from "@/components/About";
import Skills      from "@/components/Skills";
import Projects    from "@/components/Projects";
import Experience  from "@/components/Experience";
import ProofOfWork from "@/components/ProofOfWork";
import Contact     from "@/components/Contact";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ProofOfWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}