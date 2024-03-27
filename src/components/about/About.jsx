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
                    Welcome, I am happy to have you here! My name is Tina and I live in south Florida (born and raised). 
                    I am full-stack web developer student at University of Central Florida's coding bootcamp. 
                    I currently work at First Light HomeCare as a HR Specialist. I am passionate about my faith in Jesus Christ, education, learning new things. 
                    I'm curretly working on an app that will help children develop their math, reading, science and vocabulary skills
                    After the bootcamp I plan to tranition into a software development career and create a team to help me launch my app. Contact me below if  you're passionate about education and helping children excel in school want to join my team!
                    I thrive in ambitious and passionate roles that allow me to contribute my solution-focused and innovative mindset.
                    Please visit my project section to find vaiours samples of my work. Visit my GitHub profile in the Navbar above or Contact section below to see more samples of my work. 
                    My hobbies include traveling, journaling, ZUMBA, kickboxing, reading, and watching movies. 
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