//Animated Hero Section Design

//Importing Hero from the hero folder
import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <div className=".textContainer">
                    <h2>TINA HUMPHREY</h2>
                    <h1>Full Stack Web Developer</h1>
                    <div className="buttons">
                        <button>View my Projects</button>
                        <button>Contact Me</button>
                    </div>
                <img src ="/scroll.png" alt="Scroll Icon" />
                </div> 
            </div> 
            <div className="imageContainer">
                <img src="/hero.png" alt="Hero Picture" />
            </div>  
        </div>
    );
};

export default Hero;