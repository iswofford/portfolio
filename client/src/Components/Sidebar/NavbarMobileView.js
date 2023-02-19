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
    <div className="mobile-view-navbar">
      <div className="navbar-header">
            <GiHamburgerMenu size={25} onClick={handleClick} />
      
      </div>

      {open ? (
         <div className="mobile-nav">
        <GrClose onClick={handleClick} className="close"/>
            <ul>
              <li className="nav-item-mobileview">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  offset={-100}
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
                >
                  <FcContacts size={25} />
                  <span className="nav-span">Contact me</span>
                </Link>
              </li>
            </ul>
          </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
