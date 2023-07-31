import "./ContactUs.css";
import ContactLogo from '../assets/logo-image.jpg';

function ContactUs() {
    return (
        <div>
            <head>

                <meta charSet="UTF-8" />

                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
            </head>
            <body>
                <div id="container">
                    <img src={ContactLogo} alt="" className="image"/>
                    <div className="item">
                        <div className="contact">
                            <div className="first-text">Let's get in touch</div>
                            <div className="social-links">
                                <span className="secnd-text">Connect with us:</span>
                                <ul className="social-media">
                                    <li><a href="#"><i className="bx bxl-facebook"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-twitter"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-youtube"></i></a></li>
                                    <li><a href="#"><i className="bx bxl-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="submit-from">
                            <h4 className="third-text text">Contact Us</h4>
                            <form action="">
                                <div className="input-box">
                                    <input type="text" className="input" required/>
                                    <label for="">Name</label>
                                </div>
                                <div className="input-box">
                                    <input type="email" className="input" required/>
                                    <label for="">Email</label>
                                </div>
                                <div className="input-box">
                                    <input type="tel" className="input" required/>
                                    <label for="">Phone</label>
                                </div>
                                <div className="input-box">
                                    <textarea name="" className="input" cols="30" rows="10" required></textarea>
                                    <label for="">Message</label>
                                </div>
                                <input type="submit" value="Submit" className="btn"/>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ContactUs;