import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <About />
      <Skills />
    </main>
  );
}

