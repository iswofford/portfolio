import React from "react";
import "./TechStack.css";

const Requirments = () => {
  return (
    <section className="techstack-section" id="techstack">
      <div className="container">
        <div className="section-title">
          <h5>Conference requirments</h5>
          <div className="line"></div>
        </div>
        <ul>
          <li>
            Organizers for PegaWORLD have relied on traditional, manual
            processes for managing the annual 3-day conference: PDF agendas,
            printed materials, and spreadsheets of attendees.
          </li>
          <li>
            Feedback from event coordinators and attendees has highlighted the
            critical need for modernizing the day-to-day logistics of the
            conference.
          </li>
          <li>
            <b>
              My task: Based off my own experience, I was required to identify a
              single aspect of managing or attending a conference on which to
              focus.
            </b>
          </li>
          <li>
            Use any design method you think most suitable to showcase a possible
            solution.
          </li>
          <li>
          You may use whatever front-end technologies you deem appropriate for
          your prototype.
          </li>
          <li>
          Comply with minimum WCAG 2.1 Level A accessibility requirements. You
          should be able to speak to specific areas of accessibility within your
          prototype.
          </li>
          <li>
            Utilize Pega’s design system from design.pega.com for typography,
            color palette, and any information architecture or interaction
            patterns you feel are appropriate.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Requirments;

