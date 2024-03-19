// Bringing in the required import app.scss
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
    return <div>
        <section id="Homepage"> 
            <Navbar/>
            <Hero/>
        </section>
        <section id="Skills">Skills</section>
        <section id="Projects">Projects</section>
        <section id="Resume">Resume</section>
        <section id="Contact">Contact</section>
        <section id="About">About</section>
    </div>;
  };
  
  export default App;