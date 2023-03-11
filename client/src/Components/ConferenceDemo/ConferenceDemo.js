import React from "react";
import "./ConferenceDemo.css";

const ConferenceDemo = () => {
  return (
    <section className="demo-section" id="demo">
      <div className="container">
        <div className="section-title">
          <h5>Conference demo</h5>
          <div className="text-indent">
            Developed an agenda calendar for modernizing the day-to-day
            logistics of the conference
          </div>
          <div>
            <a
              href="https://preeminent-piroshki-797930.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="View demo"
              className="demo"
            >
              View demo
            </a>
            <a
              href="https://github.com/iswofford/conference-demo"
              target="_blank"
              rel="noreferrer"
              aria-label="/View demo"
              className="github"
            >
              Github code
            </a>
          </div>
        </div>
        <h6>My solution includes:</h6>
        <ul>
          <li>
            An interactive calendar, users can easily view their scheduled
            events, add new events, update, delete and edit them as needed
          </li>
          <li>
            Organizer: Can create, edit, and delete events. Can view attendee
            list. Attendee: Can view events and their details and can modify
            them.( shortcuts section -permission rules are a separate flow)
          </li>
          <li>
            Customization of the calendar to fit the existing conference's
            branding and design
          </li>
          <li>
            By organizing frequently asked questions into different categories
            or topics, attendees or customers can quickly and easily find the
            answers they need without having to contact customer service or
            support. This can save time and resources for the organizers or
            businesses, allowing them to focus on other important aspects of
            logistics.
          </li>
        </ul>
        <h6>
          Shortcuts – areas of the design process which I did not have time and
          here is how I will would do.
        </h6>
        <ul>
          <li>
            Add permission rules : Organizer: Can create, edit, and delete
            events. Can view attendee list. Attendee: Can view events and their
            details, but cannot modify them. Can add and remove events from
            their own schedule. Admin: Has all permissions of organizer, but can
            also add and remove attendees.
          </li>
          <li>create a personalized schedule calendar</li>
          <li>
            Add a link to the registration and improve the registration by
            adding gamification (free enteence for the first 20 atendee). Offer
            a different type( early bird, group discount, standard, vip package,
            food and beverage package ) registration.
          </li>
          <li>
            Develop a recruiting form for conducting user testing sessions for
            logistics and offering a free entrance to the event and a product to
            the first 50 attendees who complete the testing session.
          </li>
          <li>
            Scheduling deliveries: An agenda calendar can be used to schedule
            delivery times and track when shipments are expected to arrive. This
            can help ensure that shipments are delivered on time and that there
            is sufficient staff available to handle the delivery.
          </li>
          <li>
            Planning inventory management: Warehouses and distribution centers
            can use an agenda calendar to plan their inventory management. By
            tracking incoming and outgoing shipments, they can ensure that they
            have the right amount of inventory on hand to meet customer demand.
          </li>
          <li>
            Optimizing transportation routes, improving inventory management,
            and reducing turnaround times at warehouses and distribution
            centers.
          </li>
          <li>
            Coordinating with partners: Shipping companies, warehouses,
            distribution centers, and transportation providers often work with
            other businesses to move goods from one place to another. An agenda
            calendar can be used to coordinate schedules and ensure that
            everyone is on the same page.
          </li>
          <li>Add a link to show more detail about the event or a popover</li>
          <li>Add search and filter functionaity for specific sessions</li>

          <li>
            Gather feedback from organizers and attendees throughout the
            development process. This would allow me to make any necessary
            adjustments and ensure that the final product is both functional and
            user-friendly.
          </li>
          <li>
            Integration with other systems: FullCalendar can be integrated with
            other systems such as Google Calendar, Microsoft Exchange, or custom
            APIs. This allows you to sync events between different applications
            and display them all in one place.
          </li>
          <li>Display events in the user's local time zone</li>
          <li>
            Develop multiple calendars - Users can switch between different
            calendars to view different sets of events.
          </li>
          <li>
            Develop resource view - A view that displays events in the context
            of resources, such as meeting rooms or equipment.
          </li>
          <li>
            Custom views: FullCalendar allows you to create custom views that
            display events in unique ways. For example, you could create a view
            that displays events in a timeline format, or a view that groups
            events by location.
          </li>
          <li>
            Resource management: FullCalendar has built-in support for managing
            resources such as rooms, equipment, or personnel. This allows you to
            create schedules that show which resources are available at a given
            time.
          </li>
        </ul>
        <h6> Benefits:</h6>
        <ul>
          <li>
            The conference organizers can schedule sessions well in advance.
            This will help them to ensure that all sessions are properly spaced
            out and there are no conflicts.
          </li>
          <li>
            Communicate with attendees: An agenda calendar can be shared with
            attendees in advance of the conference. This will allow them to plan
            which sessions they want to attend and help them make the most of
            their time at the event and communicate important information such
            as changes in delivery schedules or unexpected delays.
          </li>
          <li>
            Atendees can better plan and manage their schedules. They can see at
            a glance what events are happening when and can ensure that they are
            not double-booked or missing important sessions.
          </li>
          <li>
            The ability to add new events to the calendar means that users can
            easily keep track of any additional meetings or events that may
            arise during the conference.
          </li>
          <li>
            Overall, this calendar can help users stay organized and on top of
            their schedules during the conference, which can lead to a more
            productive and enjoyable experience.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ConferenceDemo;
