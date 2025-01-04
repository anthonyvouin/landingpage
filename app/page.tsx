import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
  import Footer from './components/Footer';
  import Projects from './components/Projects';
  import Experiences from './components/Experiences';

export default function Home() {
  return (
    <main className="bg-white border-[5px] border-black">
      <Header />
      <About />
      <Education />


      <Skills />
      <Projects />
      <Experiences />

      <Contact />
      <Footer />
    </main>
  );
}

