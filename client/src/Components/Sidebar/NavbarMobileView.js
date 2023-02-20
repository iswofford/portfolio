import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcNightPortrait, FcTodoList, FcContacts, FcFeedIn } from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { GrClose } from "react-icons/gr"
import { Link } from "react-scroll";

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="mobile-view-navbar">
      <div className="navbar-header">
      <GiHamburgerMenu size={25} onClick={handleClick} aria-label="Toggle navigation menu" />  
      </div>

      {open ? (
         <div className="mobile-nav">
        <GrClose size={25} onClick={handleClick} className="close" 
        aria-label="Close navigation menu"/>
            <ul>
              <li className="nav-item-mobileview">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  tabIndex={open ? 0 : -1}
                >
                  <FcNightPortrait size={25} />
                  <span className="nav-span">About</span>
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  to="techstack"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  tabIndex={open ? 0 : -1}
                >
                  <MdBiotech size={25} />
                  <span className="nav-span">Tech Stack</span>
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  to="slider"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  tabIndex={open ? 0 : -1}
                >
                  <FcTodoList size={25} />
                  <span className="nav-span">Projects slider</span>
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  tabIndex={open ? 0 : -1}
                >
                  <FcTodoList size={25} />
                  <span className="nav-span">Projects Summary</span>
                </Link>
              </li>

              <li className="nav-item-mobileview">
                <Link
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  tabIndex={open ? 0 : -1}
                >
                  <FcFeedIn size={25} />
                  <span className="nav-span">Testimonials</span>
                </Link>
              </li>
              <li className="nav-item-mobileview">
                <Link
                  to="contacts"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
                  tabIndex={open ? 0 : -1}
                >
                  <FcContacts size={25} />
                  <span className="nav-span">Contact me</span>
                </Link>
              </li>
            </ul>
          </div>
      ) : null}
    </nav>
  );
};

export default NavbarMobileView;
