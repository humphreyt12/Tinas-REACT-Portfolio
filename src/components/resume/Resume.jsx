import "./resume.scss";

const Resume = () => {
    return(
        <div className="resume">
            <div className="wrapper">
                <div className="textContainer">
                    <h2>Resume</h2>
                    <a href="https://docs.google.com/document/d/1z5TAO-KLiRU-Ct1n5DIh2Ir9CMZoGVUVvVYNJRX2PWU/edit?usp=sharing" target="blank">
                    <button>View Resume</button>
                    </a>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/resume.png" alt="Screen Shot of Resume" />
            </div>    
        </div>
    );
};

export default Resume;