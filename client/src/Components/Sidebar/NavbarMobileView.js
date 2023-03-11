import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcTodoList,
} from "react-icons/fc";
import { GrClose } from "react-icons/gr";
import { Link } from "react-scroll";

const NavbarMobileView = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="mobile-view-navbar">
      <div className="navbar-header">
        <GiHamburgerMenu
          size={25}
          onClick={handleClick}
          aria-label="Toggle navigation menu"
        />
      </div>

      {open ? (
        <div className="mobile-nav">
          <GrClose
            size={25}
            onClick={handleClick}
            className="close"
            aria-label="Close navigation menu"
          />
          <ul>
            <li className="nav-item-mobileview">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                aria-label="About section"
              >
                <FcTodoList size={25} />
                <span className="nav-span"> About</span>
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="techstack"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                aria-label="Conference requirments"
              >
                <FcTodoList size={25} />

                <span className="nav-span"> Conference challenge</span>
              </Link>
            </li>
            <li className="nav-item-mobileview">
              <Link
                to="demo"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
                aria-label="Conference demo"
              >
                <FcTodoList size={25} />
                <span className="nav-span"> Conference demo</span>
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default NavbarMobileView;
