import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
import React from "react";



const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                {/* Animate Name */}
                <motion.span
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                >TH 
                </motion.span> 
                <div className="contact">
                    <a target ="_blank" href="https://www.linkedin.com/in/tinahumphrey/"><img src="/linkedin.png" alt="LinkedIn"/></a>
                    <a target ="_blank" href="https://github.com/humphreyt12"><img src="/github.png" alt="Github"/></a>
                    <a target ="_blank" href="mailto:humphrey14t@gmail.com"><img src="/mail.png" alt="Mail"/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;