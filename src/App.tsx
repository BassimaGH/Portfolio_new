import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ProjectsSection from "./components/ProjectsSection";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      <div className="overflow-hidden bg-primaryDark">
        <header>
          <Navigation />
        </header>

        <main>
          <Hero />
          <About />
          <Skills />
          <WorkExperience />
          <ProjectsSection />
        </main>

        <footer>
          <Contact />
        </footer>
      </div>
    </>
  );
}

export default App;
