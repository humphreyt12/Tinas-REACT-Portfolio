import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                {/* Animate Name */}
                <motion.span
                initial={{ opacity:0, scale:0.5 }} 
                animate={{ opacity:1, scale:1 }} 
                transition={{ duration:0.5 }}
                >TH
                </motion.span>
                <div className="contact">
                    <a target = "_blank" href="https://www.linkedin.com/in/tinahumphrey/"><img src="/linkedin.png" alt="Tina's LinkedIn Link" /></a>
                    <a target = "_blank" href="https://github.com/humphreyt12"><img src="/github.png" alt="Tina's Github Profile Link" /></a>
                    <a target = "_blank" href="humphrey14t@gmail.com"><img src="/mail.png" alt="Mail Link" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;