import "./navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>Tina</span>
                <div className="contact">
                    <a target = "_blank" href="https://www.linkedin.com/in/tinahumphrey/"><img src="/linkedin.png" alt="" /></a>
                    <a target = "_blank" href="https://github.com/humphreyt12"><img src="/github.png" alt="" /></a>
                    <a target = "_blank" href="humphrey14t@gmail.com"><img src="/gmail.png" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;