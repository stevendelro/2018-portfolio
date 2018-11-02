import React from 'preact-compat';
import freshEasyPic from '../../img/experience-fresh-easy.jpg';
import snugPetPic from '../../img/experience-snug-pet.jpg';

const WorkHistory = () => (
  <section className="section-experience" id="experience">
    <div className="bg-video">
      <video muted autoPlay loop className="bg-video__content">
        <source
          src="https://staging.coverr.co/s3/mp4/Ground-Zero.mp4"
          type="video/mp4"
        />
        Sorry! Your browser doesn't support background videos... =/
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary heading-secondary--primary">
        recent work experience
      </h2>
    </div>

    <div className="row">
      <div className="experience">
        <figure className="experience__shape">
          <img
            className="experience__img"
            src={snugPetPic}
            alt="Snug Pet Resort & Animal Hospital"
          />
          <figcaption className="experience__caption">
            Snug Pet Resort Animal Hospital
          </figcaption>
        </figure>
        <div className="experience__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Veterinary Technician/ Veterinary Assistant
          </h3>
          <p>
            Snug Pet Resort was a place were I was able to really hone in on my
            social strengths. Here, I was able to develop and refine my
            empathetic approach to leadership. Aside from training dogs, I was
            able to master every position available. I became extremely
            proficient with Cornerstone, Avimark and Kennel Connection software.
            I developed great professional relationships with all the clientele.
            I spent my last year with them as a vet technician, assisting the
            veterinarians with all procedures and protocols.
          </p>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="experience">
        <figure className="experience__shape">
          <img
            className="experience__img"
            src={freshEasyPic}
            alt="Fresh & Easy Neighborhood Market"
          />
          <figcaption className="experience__caption">
            Fresh & Easy Neighborhood Market
          </figcaption>
        </figure>
        <div className="experience__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            Shift Manager/ Team Leader
          </h3>
          <p>
            Although I’ve been working since I was 15, Fresh & Easy was the
            first job where I proved to myself that I have what it takes to be a
            leader. As an entry level employee, I worked my way up to to shift
            manager. Here, I developed my work ethic, my sense of urgency, time
            management, the ability to take ownership of my mistakes, and how to
            cultivate a rich social landscape with all my coworkers.
          </p>
        </div>
      </div>
    </div>
    <div className="u-center-text u-margin-top-bigger">
      <a
        href="https://www.linkedin.com/in/stevendelrosario/"
        className="btn-text"
      >
        LinkedIn&rarr;
      </a>
    </div>
  </section>
);

export default WorkHistory;
