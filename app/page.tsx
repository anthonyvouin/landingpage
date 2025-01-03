import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}

