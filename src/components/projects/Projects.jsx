//Projects Section
import { useRef} from "react";
import "./projects.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
//Defining an array of items to feature the projects 
const items = [
    {
        id: 1,
        title: "Flex Flow",
        img: "public/flexflow.png",
        desc:"A full-stack workout manager application",
    },
    {
        id: 2,
        title: "Cusine Compass",
        img: "public/CusineCompass.png",
        desc:"Recipe search engine for chefs. Powered by two third party APIs: Spoonacular and Edamam.",
    },
    {
        id: 3,
        title: "Employee Tracker",
        img: "public/employeetracker.png",
        desc:"Built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, MySQL, and Console Table.",
    },
    {
        id: 4,
        title: "Social Network API",
        img: "public/socialnetworkapi.png",
        desc:"Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using NoSQL.",
    },
    {
        id: 5,
        title: "SVG Logo Maker",
        img: "public/svglogomaker.png",
        desc:"Built a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file]. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.",
    },
    {
        id: 6,
        title: "PWA Text Editor",
        img: "public/TextEditor.png",
        desc:"Built a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.",
    },
    {
        id: 7,
        title: "Weather Dashboard",
        img: "public/WeatherDashboard.png",
        desc:"Built a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. The dashboard is for a traveler to see the weather outlook for multiple cities so that any traveler can plan a trip accordingly.",
    },
];
//Displays each Project as a Single item on a page
const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
    });
    const y = useTransform(scrollYProgress, [0,1], ["0%", "300%"]);

    return (
        <section ref={ref}> 
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src={item.img} alt="Item Image" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>  
    );
};

const Projects = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
         <div className="projects" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
        {items.map(item => (
            <Single item={item} key={item.id} />
        ))}
        </div>
    );
};

export default Projects;