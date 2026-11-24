import About from './components/About';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Project from './components/Projects';
import Technologies from './components/Technologies';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(135%_135%_at_50%_25%,#001a33_0%,#002244_40%,#002b54_70%,#003366_100%)]"></div>
      <Navbar />
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <About />
        <Experience />
        <Project />
        <Technologies />
      </div>
    </div>
  );
};

export default App;