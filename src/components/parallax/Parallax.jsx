import "./parallax.scss";
import {motion} from "framer-motion";

const Parallax = ({type}) => {
    return (
        <div className="parallax" style={{background:type === "skills" 
        ? "linear-gradient(180deg, #111132, #0c0c1d)" 
        : "linear-gradient(180deg, #111132, #505064)",
        }}>
            <motion.h1>{type==="skills" ? "What I Can Offer?" : "View My Latests Projects"}</motion.h1>
            <motion.div className="mountains"></motion.div>
        </div>
    );
};

export default Parallax;