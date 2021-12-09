import "./Header.css";
import { Link } from "react-scroll";

function Header() {
    return (
      <header className="header">
          <nav className="nav-menu-container">
            <div className ="nav-menu">
              <Link
              className ="navbar-text"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >Home</Link>

              <Link
              className ="navbar-text"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >About</Link>

              <Link
              className ="navbar-text"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >Portfolio</Link>

              <Link
              className ="navbar-text"
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >Testimonials</Link>

              <Link
              className ="navbar-text"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration= {500}
              >Contact</Link>
      
            </div>
          </nav>
      </header>
      );
    }
  
  export default Header;
  