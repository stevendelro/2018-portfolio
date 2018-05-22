import React from 'react';

const Main = () => (
  <div>
    {/**************** 
      Navigation
      ****************/}

    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="https://github.com/stevendelro"
              className="navigation__link"
            >
              GitHub
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.linkedin.com/in/stevendelrosario/"
              className="navigation__link"
            >
              LinkedIn
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.instagram.com/esteeeban/"
              className="navigation__link"
            >
              Instagram
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.scribd.com/document/379513842/Steven-Del-Rosario-Resume"
              className="navigation__link"
            >
              Resume
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://medium.com/@stevendelrosario"
              className="navigation__link"
            >
              Blog
            </a>
          </li>
        </ul>
      </nav>
    </div>

    {/**************** 
      HEADER
      ****************/}
    <header className="header" id="header">
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--first">Steven</span>
          <span className="heading-primary--last">Del Rosario</span>
        </h1>
      </div>
    </header>

    {/**************** 
      ABOUT - Text Area
      ****************/}

    <main>
      <div className="section-about" id="about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary heading-secondary--primary">
            the two minute rundown
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">About me</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              id, vitae odio iste, amet cum, sed ratione voluptates
              reprehenderit perspiciatis aliquid illum. Laudantium laboriosam
              porro velit impedit nostrum assumenda a.
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rerum deleniti, debitis ipsa quam est alias provident omnis ad
              libero quaerat dolorum obcaecati asperiores eligendi cum minima
              minus repellendus officia?
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              rerum deleniti, debitis ipsa quam est alias provident omnis ad
              libero quaerat dolorum obcaecati asperiores eligendi cum minima
              minus repellendus officia?
            </p>
            <a href="https://medium.com/@stevendelrosario" className="btn-text">
              Visit blog &rarr;
            </a>
          </div>

          {/**************** 
            ABOUT - Photo Area
            ****************/}

          <div className="col-1-of-2">
            <div className="composition">
              <img
                src="https://farm1.staticflickr.com/951/27170872567_098b35c540_b.jpg"
                alt="Steven hiking at the Grand Canyon."
                className="composition__photo composition__photo--p1"
              />
              <img
                src="https://farm1.staticflickr.com/960/41320846774_bb2853a4d8_b.jpg"
                alt="Kygo, Steven's dog."
                className="composition__photo composition__photo--p2"
              />
              <img
                src="https://farm1.staticflickr.com/911/42039761261_f52e75b4fe_b.jpg"
                alt="Steven and Nicholle on a sunny day."
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </div>

      {/**************** 
        ABOUT - Photo Area
        ****************/}

      <section className="section-features" id="stack">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary heading-secondary--white">
            Development Stack
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">Mongo</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quam incidunt odit iure libero quia explicabo nihil nostrum!
                Odit quibusdam earum atque veniam minima sint impedit ratione
                consequuntur iste expedita!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">
                Express
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quam incidunt odit iure libero quia explicabo nihil nostrum!
                Odit quibusdam earum atque veniam minima sint impedit ratione
                consequuntur iste expedita!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quam incidunt odit iure libero quia explicabo nihil nostrum!
                Odit quibusdam earum atque veniam minima sint impedit ratione
                consequuntur iste expedita!
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon" />
              <h3 className="heading-tertiary u-margin-bottom-small">Node</h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                quam incidunt odit iure libero quia explicabo nihil nostrum!
                Odit quibusdam earum atque veniam minima sint impedit ratione
                consequuntur iste expedita!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/**************** 
        PROJECTS - Card Area
        ****************/}

      <section className="section-projects" id="projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary heading-secondary--primary">
            Recent Projects
          </h2>
        </div>

        <div className="row">
          {/****** LEFT CARD ******/}

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2" />
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    The Weather Checker
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>React/Redux</li>
                    <li>Styled with Bootstrap</li>
                    <li>OpenWeatherMap API</li>
                    <li>React-Animations/Radium</li>
                    <li>Webpack/Babel</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__demo">
                  <div className="card__demo-box">
                    <p className="card__demo-text">Will it rain?</p>
                    <a href="#popup-weather" className="btn btn--white">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/****** MIDDLE CARD ******/}

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1" />
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The Movie Finder
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>React/Redux/Router</li>
                    <li>Styled With BulmaCSS</li>
                    <li>Await/Async</li>
                    <li>Multiple API calls In Sequence</li>
                    <li>ES6/ES7 Syntax</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__demo">
                  <div className="card__demo-box">
                    <p className="card__demo-text">Like movies?</p>
                    <a href="#popup-movie" className="btn btn--white">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/****** RIGHT CARD ******/}

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3" />
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    OCA Pitch Portal
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Full Stack MERN App</li>
                    <li>AGILE/SCRUM</li>
                    <li>Loopback.io</li>
                    <li>Redux Form</li>
                    <li>Bootstrap V4</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__demo">
                  <div className="card__demo-box">
                    <p className="card__demo-text">Got an idea?</p>
                    <a href="#popup-pitch" className="btn btn--white">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/****** BUTTON ******/}

        <div className="u-center-text u-margin-top-bigger">
          <a href="https://github.com/stevendelro" className="btn btn--primary">
            github
          </a>
        </div>
      </section>

      {/**************** 
        WORK HISTORY AREA
        ****************/}

      <section className="section-experience" id="experience">
        <div className="bg-video">
          <video muted autoPlay loop className="bg-video__content">
            <source
              src="https://coverr.co/s3/mp4/Ground-Zero.mp4"
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
                src="https://farm1.staticflickr.com/978/28259138268_53236e0fab_z.jpg"
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                veritatis est vero quam porro cum, illum eligendi esse. Modi
                tempora repellendus, obcaecati neque dignissimos magni eligendi
                fugiat aliquid fuga eveniet. Modi tempora repellendus, obcaecati
                neque dignissimos magni eligendi fugiat aliquid fuga eveniet.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="experience">
            <figure className="experience__shape">
              <img
                className="experience__img"
                src="http://www.brandchannel.com/wp-content/uploads/2015/10/Fresh-and-Easy-exterior-600.jpg"
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere
                veritatis est vero quam porro cum, illum eligendi esse. Modi
                tempora repellendus, obcaecati neque dignissimos magni eligendi
                fugiat aliquid fuga eveniet. Modi tempora repellendus, obcaecati
                neque dignissimos magni eligendi fugiat aliquid fuga eveniet.
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

      {/**************** 
        CONTACT FORM
      ****************/}

      <section className="section-contact" id="contact">
        <div className="row">
          <div className="contact">
            <div className="contact__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-small-1">
                  <h2 className="heading-secondary heading-secondary--white">
                    contact
                  </h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="FULL NAME"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    FULL NAME
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="EMAIL"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    EMAIL
                  </label>
                </div>
                <div className="form__group">
                  <textarea
                    name="message"
                    maxLength="1000"
                    form="form"
                    rows="7"
                    className="form__input"
                    placeholder="MESSAGE"
                    id="message"
                  />
                </div>
                <div className="form__group">
                  <button className="btn btn--primary u-margin-top-small">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/**************** 
      FOOTER
      ****************/}

    <footer className="footer">
      <div className="footer__logo-box">
        <a href="#header" className="logo__button">
          <img
            src="https://farm1.staticflickr.com/911/27106420297_e6cd6d2be2_o.png"
            alt="stevendelrosario-logo"
            className="footer__logo"
          />
        </a>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="https://github.com/stevendelro"
                  className="footer__link"
                >
                  GitHub
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.linkedin.com/in/stevendelrosario/"
                  className="footer__link"
                >
                  LinkedIn
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.instagram.com/esteeeban/"
                  className="footer__link"
                >
                  Instagram
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.scribd.com/document/379513842/Steven-Del-Rosario-Resume"
                  className="footer__link"
                >
                  Resume
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://medium.com/@stevendelrosario"
                  className="footer__link"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            All credit to{' '}
            <a
              href="https://www.udemy.com/user/jonasschmedtmann/"
              className="footer__link"
            >
              Jonas Schmedtmann
            </a>{' '}
            and his online course{' '}
            <a
              href="https://www.udemy.com/advanced-css-and-sass/"
              className="footer__link"
            >
              Advanced CSS and Sass
            </a>{' '}
            for the base design of this website. His original design can be
            found{' '}
            <a href="https://natours.netlify.com/" className="footer__link">
              HERE
            </a>{' '}
            .
          </p>
          <p className="footer__copyright--p">
            I've completed many unfinished features and have heavily modified
            and altered large sections of the original project code to learn,
            experiement, and ultimately produce what you now see before you.
            Every line of code was written, scrutinized and rewritten by yours
            truly.
          </p>
          <p className="footer__copyright--p">
            In no way, shape, or form do I take any personal credit for this
            website's initial design.
          </p>
          <p className="footer__copyright--p">
            Copyright &copy; by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>

    {/**************** 
      POP UP - The Weather Checker
      ****************/}

    <div className="popup" id="popup-weather">
      <div className="popup__content">
        <div className="popup__left">
          <video muted autoPlay loop className="popup__vid">
            <source src="https://goo.gl/q4Y8qR" type="video/mp4" />
            Hmm. Looks like your browser doesn't support video playback. :/
          </video>
        </div>
        <div className="popup__right">
          <a href="#projects" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary heading-secondary--primary u-margin-bottom-small">
            The Weather Checker
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; This sentence is here for filler.
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus.
          </p>
          <a
            href="http://sd-weather-app.herokuapp.com/"
            className="btn btn--primary"
          >
            DEMO
          </a>
        </div>
      </div>
    </div>

    {/**************** 
      POP UP - The Movie Finder
      ****************/}

    <div className="popup" id="popup-movie">
      <div className="popup__content">
        <div className="popup__left">
          <video muted autoPlay loop className="popup__vid">
            <source src="https://goo.gl/7roX4w" type="video/mp4" />
            Hmm. Looks like your browser doesn't support video playback. :/
          </video>
        </div>
        <div className="popup__right">
          <a href="#projects" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary heading-secondary--orange u-margin-bottom-small">
            The Movie Finder
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; This sentence is here for filler.
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus.
          </p>
          <a
            href="http://sd-movie-finder.herokuapp.com/"
            className="btn btn--orange"
          >
            LIVE DEMO
          </a>
        </div>
      </div>
    </div>

    {/**************** 
      POP UP - OCA Pitch Portal
      ****************/}

    <div className="popup" id="popup-pitch">
      <div className="popup__content">
        <div className="popup__left">
          <video muted autoPlay loop className="popup__vid">
            <source src="https://goo.gl/fPhvpy" type="video/mp4" />
            Hmm. Looks like your browser doesn't support video playback. :/
          </video>
        </div>
        <div className="popup__right">
          <a href="#projects" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary heading-secondary--green u-margin-bottom-small">
            OCA Pitch Portal
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; This sentence is here for filler.
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus. Enim
            sit numquam a ea esse ad natus maiores, ducimus, eligendi sunt quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            ratione facere alias ut cum fugiat consequuntur voluptatibus.
          </p>
          <a href="http://pitchportal.io/" className="btn btn--green">
            DEMO
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Main;
