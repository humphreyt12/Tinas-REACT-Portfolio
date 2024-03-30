// Bringing in the required imports
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Cursor from "./components/cursor/Cursor";


const App = () => {
    return (
    <div>
        <Cursor/>
        <section id="Homepage"> 
            <Navbar />
            <Hero />
        </section>
        <section id="About Me"><About/></section>
        <section id="Skills"><Parallax type="skills"/></section>
        <section><Skills /></section>
        <section id="Projects"><Parallax type="projects"/></section>
        <Projects/>
        <section id="Resume"><Resume/></section>
        <section id="Contact"><Contact/></section>
        
    </div>
    );
  };
  
  export default App;