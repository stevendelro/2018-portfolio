import React from 'preact-compat';
import kygoPic from '../../img/about-pic2-kygo.jpg';
import girlfriendPic from '../../img/about-pic3-nicholle-myself.jpg';
import hikingPic from '../../img/about-pic1-grand-canyon.jpg';

const About = () => (
  <div>
    <div className="section-about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary heading-secondary--primary">
          the two minute rundown
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Hey there.</h3>
          <p className="paragraph">
            Before you think I’m an incredible front-end designer, scroll down
            and check out the footer. I always give credit where credit is due.
            Having said that, I want you to leave this page with a better
            understanding of who I am.
            <br />
            <br />
            Endlessly curious and easily entertained, my appetite to learn and
            understand enriches my life on a daily basis. I feed my mind with
            books and podcasts. I meditate through running and hiking. I make
            connections. I write.
            <br />
            <br />I spent six months learning and looking for the perfect dog,
            and now I have the best dog a man could ever have. I've spent years
            searching for the right woman to become my lovely girlfriend. Having
            found her, I couldn't be happier. I've spent a decade searching for
            a career that would challenge my intellect, improve my personal
            agency and keep me relevent within this ever-changing digital world.
            <br />
            <br />
            Becoming a javascript developer has given me exactly that.
            <br />
            <br />
            Be sure to check out the blog for more insight on who I am and how I
            think. I'm always on the lookout for good book recommendations, so
            definitely reach out if you have any in mind.
          </p>
          <a href="https://medium.com/@stevendelrosario" className="btn-text">
            Visit blog &rarr;
          </a>
        </div>

        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={hikingPic}
              alt="Steven hiking at the Grand Canyon."
              className="composition__photo composition__photo--p1"
            />
            <img
              src={kygoPic}
              alt="Kygo, Steven's dog."
              className="composition__photo composition__photo--p2"
            />
            <img
              src={girlfriendPic}
              alt="Steven and Nicholle on a sunny day."
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
