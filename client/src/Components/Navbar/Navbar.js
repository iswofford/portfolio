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

    // cleanup the event listener when component unmounts
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
            aria-label="Tech Stack section"
          >
            Tech Stack
          </Link>
        </li>
        
        <li className="nav-item">
          <Link
            to="slider"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Projects slider section"
          >
            Projects slider
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Projects summary section"
          >
            Projects summary
          </Link>
        </li>

        <li className="nav-item">
          <Link
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Testimonials section"
          >
            Testimonials
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
            aria-label="Contact me section"
          >
            Contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
