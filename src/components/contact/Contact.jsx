// The Contact Section
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let's work together</h1>
                <div className="item">
                    <h2>Mail</h2>
                    <span>humphrey14t@gmail.com</span>
                </div>
                <div className="item">
                    <h2>Location</h2>
                    <span>Sunshine State ☀️</span>
                </div>
            </div>
            <div className="formContainer">
                <form>
                    <input type="text" required placeholder="Name" />
                    <input type="email" required placeholder="Email" />
                    <textarea rows={8} placeholder="Message" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;