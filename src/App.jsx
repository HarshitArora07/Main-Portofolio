import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#12325B] text-white scroll-smooth">

      <Navbar />

      <main>

        <section id="home" className="min-h-screen scroll-mt-24">
          <Home />
        </section>

        <section id="about" className="min-h-screen scroll-mt-24">
          <About />
        </section>

        <section id="skills" className="min-h-screen scroll-mt-24">
          <Skills />
        </section>

         <section id="projects" className="min-h-screen scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen scroll-mt-24">
          <Contact />
        </section>

      </main>

    </div>
  );
}

export default App;
