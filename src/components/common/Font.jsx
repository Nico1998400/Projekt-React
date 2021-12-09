import "./Font.css"
import { FaFacebookSquare, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Font = () => {
    return (
        <div className="font-wrapper">
            <a href="https://www.facebook.com/nicolai.stahl.1/">
            <p className="icons"><FaFacebookSquare/></p>
            </a>
            <a href="https://www.linkedin.com/in/nicolai-stahl-62758a1b6/">
            <p className="icons"><FaLinkedin/></p>
            </a>
            <a href="https://www.instagram.com/stahl_nicolai/">
            <p className="icons"><FaInstagram/></p>
            </a>
        </div>
    );
};

export default Font;