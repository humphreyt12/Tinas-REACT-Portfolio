// The Contact Section
import "./contact.scss";

const Contact = () => {
    return (
        <div className="contact">
            <div className="textContainer">
                <h1>Let's work together</h1>
                <div className="item">
                    <h2>Email</h2>
                    <a target ="_blank" href="mailto:humphrey14t@gmail.com">
                    <span>humphrey14t@gmail.com</span>
                    </a>
                </div>
                <div className="item">
                    <h2>GitHub</h2>
                    <a target ="_blank" href="https://github.com/humphreyt12">
                    <span>@humphreyt12</span>
                    </a>
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