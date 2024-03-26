// Bringing in the required import app.scss
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";

const App = () => {
    return <div>
        <section id="Homepage"> 
            <Navbar/>
            <Hero/>
        </section>
        <section id="About Me">About Me</section>
        <section id="Skills"><Parallax type="skills"/></section>
        <section><Skills/></section>
        <section id="Projects"><Parallax type="projects"/></section>
        <Projects/>
        <section id="Resume">Resume</section>
        <section id="Contact">Contact</section>
    </div>;
  };
  
  export default App;