import "../components/Contact/ContactUs.css"
import ContactLogo from '../assets/logo-image.jpg';
import SubmitForm from '../components/Contact/Submit-form';

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
                        <SubmitForm/>
                    </div>
                </div>
            </body>
        </div>
    )
}

export default ContactUs;