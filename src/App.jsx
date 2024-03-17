// Bringing in the required import app.scss
import "./app.scss";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return <div>
        <section> 
            <Navbar/>
        </section>
        <section>Portfolio</section>
        <section>Resume</section>
        <section>Skills</section>
        <section>Contact</section>
    </div>;
  };
  
  export default App;