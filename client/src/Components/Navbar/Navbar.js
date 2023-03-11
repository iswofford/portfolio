import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navScrollColor, setNavScrollColor] = useState(false);

  useEffect(() => {
    const onChangeNavColor = () => {
      if (window.scrollY >= 100) {
        setNavScrollColor(true);
      } else {
        setNavScrollColor(false);
      }
    };

    window.addEventListener("scroll", onChangeNavColor);
    return () => window.removeEventListener("scroll", onChangeNavColor);
  }, []);

  return (
    <nav
      className={
        navScrollColor ? "navbar-scroll-color navbar-main" : "navbar-main"
      }
    >
      <ul>
        <li className="nav-item">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="About section"
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="techstack"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Conference requirments"
          >
            Conference challenge
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="demo"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Conference demo"
          >
            Conference demo
          </Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
