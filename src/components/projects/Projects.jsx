//Projects Section
import { useRef} from "react";
import "./projects.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
//Defining an array of items to feature the projects 
const items = [
    {
        id: 1,
        title: "Flex Flow",
        img: "/flexflow.png",
        desc:"A full-stack workout manager application",
        link: "https://workoutmanagerflexflow-c7e5c5afbfc1.herokuapp.com/login",
    },
    {
        id: 2,
        title: "Cusine Compass",
        img: "/CusineCompass.png",
        desc:"Recipe search engine for chefs. Powered by two third party APIs: Spoonacular and Edamam.",
        link: "https://ev3ryth1ngn1c3.github.io/Cuisine-Compass/",
    },
    {
        id: 3,
        title: "Employee Tracker",
        img: "/employeetracker.png",
        desc: "Built a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, MySQL, and Console Table.",
        link: "https://github.com/humphreyt12/SQL-Employee-Tracker",
    },
    {
        id: 4,
        title: "Social Network API",
        img: "/socialnetworkapi.png",
        desc: "Built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using NoSQL.",
        link: "https://github.com/humphreyt12/NoSQL-Social-Network-API",
    },
    {
        id: 5,
        title: "SVG Logo Maker",
        img: "/svglogomaker.png",
        desc:"Built a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file]. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.",
        link: "https://github.com/humphreyt12/SVG-Logo-Maker",
    },
    {
        id: 6,
        title: "PWA Text Editor",
        img: "/TextEditor.png",
        desc: "Built a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.",
        link: "https://pwa-text-editor-awkt.onrender.com/",
    },
    {
        id: 7,
        title: "Weather Dashboard",
        img: "/WeatherDashboard.png",
        desc: "Built a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. The dashboard is for a traveler to see the weather outlook for multiple cities so that any traveler can plan a trip accordingly.",
        link: "https://humphreyt12.github.io/Weather-Dashboard/",
    },  
    {
        id: 8,
        title: "Gallery of Journeys",
        img: "/galleryofjourneys.png",
        desc: "A subscription service where users can buy photos from photographers of different places or landmarks in various cities and countries.",
        link: "gallery-of-journeys.onrender.com/",
    },
];
//Displays each Project as a Single item on a page
const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"] 
    });
    const y = useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);

//Display each Project's title, description and allows user to see demo when they click the button
    return (
        <section > 
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="Item Image" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link} target="_blank" rel="noopener noreferrer"> 
                        <button>See Demo</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>  
    );
};
//Contolling the motion of each project
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
//Displays the Featured Works Header for each project
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