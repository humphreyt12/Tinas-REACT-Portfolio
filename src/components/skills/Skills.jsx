//Adding motion to the Skills Section 
import "./skills.scss";
import {motion} from "framer-motion";

const Skills = () => {
    return(
        <motion.div className="skills">
            <motion.div className="listContainer">
            <motion.div className="box">
                <img src="/git.png" alt="Git"/>
                <img src="/javascript.jpeg" alt="JavaScript"/>
            </motion.div>
            <motion.div className="box">
                <img src="/mern.png" alt="MERN"/>
                <img src="/nodeexpress.png" alt="Node.Js & Express"/>
            </motion.div>
            <motion.div className="box">
                <img src="/nosql.jpeg" alt="NoSQl"/>
                <img src="/sql.png" alt="SQL"/>
            </motion.div>
            <motion.div className="box">
                <img src="/pwa.png" alt="PWA"/>
            </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;