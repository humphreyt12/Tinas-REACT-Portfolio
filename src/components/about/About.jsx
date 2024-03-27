// The About Me Section

import React from 'react';
import "./about.scss";

const About = () => {
    return(
        <div className="about">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>About Me</h2>
                    <p>
                    Welcome, I am happy to have you here! My name is Tina and I live in south Florida (born and raised). I am full-stack web developer student at University of Central Florida's coding bootcamp. I currently work at First Light HomeCare as a HR Specialist. I am passionate about...  I'm curretly working on...
                    I thrive in ambitious and passionate roles that allow me to contribute my solution-focused and innovative mindset.
                    Please visit my project section to find samples of my work. Please note that not all projects are currently live hosted. Please visit my GitHub profile to see more. 
                    My hobbies include traveling... 
                    </p>
                </div>    

                
            </div>
             <div className="imageContainer">
                    <img src="/mountains.jpg" alt="Peru Mountains" />
                </div> 
        </div>
    );
};

export default About;