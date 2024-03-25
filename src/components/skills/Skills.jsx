//Skills Section 
import { useRef } from "react";
import "./skills.scss"; 
import {motion, useInView} from "framer-motion"; //Adding motion to the skills section
//Defining variants to controllig the speed animation
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
};
// Animate in View (useInView Hook)
const Skills = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

    return(
        <motion.div className="skills" 
        variants={variants} 
        initial="initial" 
        whileInView={"animate"}
        ref={ref}
        animate={isInView && "animate"}>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box">
                    <img src="/git.png" alt="Git"/>
                    <img src="/javascript.jpeg" alt="JavaScript"/>
                </motion.div>
                <motion.div className="box">
                    <img src="/pwa.png" alt="PWA"/>
                    <img src="/nodeexpress.png" alt="Node.Js & Express"/>
                </motion.div>
                <motion.div className="box">
                    <img src="/nosql.jpeg" alt="NoSQl"/>
                    <img src="/sql.png" alt="SQL"/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;