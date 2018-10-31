import React from 'react';

const PitchPortal = () => (
  <div className="popup" id="popup-pitch">
    <div className="popup__content">
      <div className="popup__left">
        <iframe
          className="popup__vid u-no-pointer-events"
          src="https://giphy.com/embed/2SYqptFnJhKjnw5KPb"
          width="100%"
          height="460"
          frameBorder="0"
        />
      </div>
      <div className="popup__right">
        <a href="#projects" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary heading-secondary--green u-margin-bottom-small">
          OCA Pitch Portal
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          A repository of ideas &ndash; A world of possibilities
        </h3>
        <p className="popup__text">
          This project was developed in an Agile/Scrum environment where I was
          on a team of five and we had three weeks to create a minimum viable
          product.
          <br />
          <br />
          Origin Code Academy receives requests from local businesses to have an
          app developed by students who have completed the curriculum. The
          students get the experience of working in a real development
          environment &ndash; with a real client. In return, the client receives
          an app that brings value to their company. <br />
          <br />A link to Pitch Portal would be emailed to a person who would
          like to pitch an idea for the students to develop. The company would
          create an account and fill out a few forms regarding the specifics of
          their idea. At this point, the OCA admin could select a few promising
          pitches for the students to choose from.
          <br />
          <br />
          Each company would have their own dashboard to manage their requests
          and exchange comments with the OCA admin. Each request would have the
          ability to upload videos and files, as well as edit the information
          that they’ve already given us.
          <br />
          <br />
          The OCA admin will have an admin dashboard which would oversee all
          requests. This admin account has the ability to approve, deny, edit
          and comment on all pitches.
          <br />
          <br />
          Within this project, we implemented: authentication, controlled inputs
          via Redux-Form, a dynamic end-to-end REST API with loopback.io,
          mongoDB and mLab to host our backend data, balsamiq for wire framing,
          lucidchart for ERD scaffolding, and much much more.
          <br />
          <br />
          If you’d like more details on the whole process and to learn more
          about my specific role, check out the blog post.
        </p>
        <a href="http://pitchportal.io/" className="btn btn--green">
          DEMO
        </a>
        <a
          href="#"
          className="btn-text btn-text__popup btn-text__popup--quaternary"
        >
          Blog post &rarr;
        </a>
      </div>
    </div>
  </div>
);

export default PitchPortal;
