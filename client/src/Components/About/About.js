import React from "react";
import "./About.css";
import ProfilePic from "../../Images/profile.jpg";
import MyResume from "../../Images/cv.pdf";
const About = () => {
  return (
    <main className=" container about-section" id="about">
      <section className="row">
        <article className="col-lg-6 col-md-12 col-sm-12 col-xs-6">
          <div className="about-image">
            <figure>
              <img
                src={ProfilePic}
                alt="A headshot of Irina Swofford"
              />
              <figcaption role="caption">
                <blockquote className="quotes">
                  "Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied is to do what you believe is
                  great work. And the only way to do great work is to love what
                  you do. If you haven’t found it yet, keep looking. Don’t
                  settle. As with all matters of the heart, you’ll know when you
                  find it."
                </blockquote>
              </figcaption>
            </figure>
          </div>
        </article>

        <article className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="about-title">
            <header className="about-title">
              <h6>About Me</h6>
            </header>
            <div>
              <p className="text-indent">
                I am passionate about technology, innovation, online media, and
                entertainment, and how new web design can improve people's
                lives. I am also fascinated by the interaction of art, design,
                and technology.
              </p>
              <p>
                I enjoy taking complex problems and turning them into simple and
                beautiful interface designs. I also love the logic and structure
                of coding and always strive to write elegant and efficient code.
                My experience spans multiple industries, including e-commerce,
                finance, healthcare, SEO, and digital signature and security.
              </p>
              <p>
                When I'm not being a nerd, you can find me shopping, cooking,
                and spending time with my beautiful family.
              </p>
              <p className="signature">Irina</p>
              <div className="button-for-action">
                <button className="button-link">
                  <a
                    href="https://github.com/irinaswofford"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Github Profile"
                  >
                    Github Profile
                  </a>
                </button>
                <button className="button-link">
                  <a
                    href="https://github.com/iswofford"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Private Github"
                  >
                    Private Github
                  </a>
                </button>
                <button className="button-link">
                  <a
                    href="https://www.linkedin.com/in/irina-swofford-910178120/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    LinkedIn Profile
                  </a>
                </button>
                <button className="button-link">
                  <a
                    href={MyResume}
                    download="Irina_Swofford.pdf"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Download Resume"
                  >
                    Get resume
                  </a>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default About;
