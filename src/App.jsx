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
        <section><Parallax type="skills"/></section>
        <section id="Skills"><Skills/></section>
        <section><Parallax type="projects"/></section>
        <section id="Projects"><Projects/></section>    
        <section id="Resume">Resume</section>
        <section id="Contact">Contact</section>
        <section id="About Me">About Me</section>
    </div>;
  };
  
  export default App;