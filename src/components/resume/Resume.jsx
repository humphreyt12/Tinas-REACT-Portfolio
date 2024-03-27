import "./resume.scss";

const Resume = () => {
    return(
        <div className="resume">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Resume</h2>
                    <button>View Resume</button>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/resume.jpg" alt="Screen Shot of Resume" />
            </div>    
        </div>
    );
};

export default Resume;