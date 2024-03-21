// Sidebar Menu Link Animations
import {motion} from "framer-motion"; //motion allows the animation

//Defining variants
const variants = {
   open: {
    transition: {
        staggerChildren: 0.1,
    },
   },
   closed: {
    transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
    },
   },      
};

//Defining itemVariants
const itemVariants = {
    open: {
     y: 0,
     opacity:1,
    },
    closed: {
     y: 50,
     opacity:0,
    },      
 };

//Defining the Links as items
const Links = () => {
    
    const items = ["Homepage", "Skills", "Projects", "Resume", "Contact", "About"];

 //Returning the links, as user clicks on the links in the sidebar, the page scrolls down to that specific link   
    return (
        <motion.div className="links" variants={variants}>
            {items.map((item) => (
            <motion.a href={`#${item}`} key={item} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.95}}>
                {item} 
            </motion.a>
        ))}
        </motion.div>
    );
};

export default Links;