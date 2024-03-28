// The About Me Section
import {motion, useScroll, useTransform} from "framer-motion"; //Allows and controlls animation
import React from 'react';
import "./about.scss";

const About = () => {

    const {scrollYProgress} = useScroll({
        offset: ["end start"] 
    });

const y = useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);
    return(
        <div className="about">
            <div className="wrapper">
                <motion.div className="textContainer" style={{y}}>
                    <h2>About Me</h2>
                    <p>
                    Welcome, I am happy to have you here! My name is Tina and I from south Florida with a Jamaican background 🇯🇲. 
                    I am full-stack web developer student at University of Central Florida's coding bootcamp. 
                    Prior to the bootcamp, I studied Java, Python and Object Oriented Programming from my Business Technology minor at University of Miami (Go Canes 💚🧡!). 
                    I have a Master's of Science in Leadership & Management with a concentration in HR from Purdue Global. I currently work at First Light HomeCare ☘️ as a HR Specialist. 
                    I'm currently working on an app that will help children develop their math, reading, science and vocabulary skills.
                    After the bootcamp, I plan to tranition into a software development career and create a team to help me launch my app. 
                    Contact me below if you want to collaborate together and join my team! 
                    I thrive in ambitious and passionate roles that allow me to contribute my solution-focused and innovative mindset. My hobbies include traveling, journaling, ZUMBA, kickboxing, reading, and watching movies. ✈️📖💃🏾🥊🎬
                    Please scroll down or click the sidebar to view the project section to see some samples of my work. 
                    
                    </p>
                </motion.div>   
            </div>
            <motion.div className="imageContainer" style={{y}}>
                <img src="/mountains.jpg" alt="Peru Mountains" />
            </motion.div> 
        </div>
    );
};

export default About;