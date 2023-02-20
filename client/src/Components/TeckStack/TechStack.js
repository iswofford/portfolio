import React from "react";
import "./TechStack.css";
import Typewriter from "typewriter-effect";

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="container">
        <div className="section-title">
          <h5>Recent Tech Stack</h5>
          <div className="line"></div>
        </div>
        <h1>
          <Typewriter
            options={{
              strings: [
                "TypeScript",
                "HTML5",
                "React.js",
                "Redux Toolkit",
                "Node.js",
                "AWS",
                "Rest API's",
                "Agile",
                "Git"
              ],
              autoStart: true,
              loop: true,
              delay: 10,
            }}
          />
        </h1>
      </div>
    </section>
  );
};

export default TechStack;
