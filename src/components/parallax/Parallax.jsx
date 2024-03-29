//Framer Motion Parallax 
import { useRef} from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset:["start start", "end start"] //When animation starts and ends at the bottom of the viewpoint
    });
    //Defining yText and yBg to contorl animation speed
    const yText = useTransform(scrollYProgress, [0,1], ["0px", "500%"]); 
    
    
    return (
        <div className="parallax" 
        ref={ref}
        style={{background: type === "skills" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)" 
        : "linear-gradient(180deg, #111132, #505064)",
        }}>
            <motion.h1 style={{ y: yText }}>
                {type==="skills" ? "My Skills" : "View My Latest Projects"}
            </motion.h1>
        </div>
    );
};

export default Parallax;