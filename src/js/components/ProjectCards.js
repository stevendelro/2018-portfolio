import React from 'preact-compat';

const ProjectCards = () => (
  <section className="section-projects" id="projects">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary heading-secondary--primary">
        Recent Projects
      </h2>
    </div>
    <div className="row">
      {/********* LEFT CARD **********/}
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
                <li>React - Redux</li>
                <li>Bootstrap</li>
                <li>OpenWeatherMap API</li>
                <li>React-Animations/Radium</li>
                <li>Webpack - Babel</li>
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
      {/********* MIDDLE CARD **********/}
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
                <li>React - Redux - Router</li>
                <li>BulmaCSS</li>
                <li>Await/Async</li>
                <li>Redux Thunk</li>
                <li>ES7 Syntax via Babel</li>
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
      {/********* RIGHT CARD **********/}
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
                <li>AGILE/SCRUM</li>
                <li>End-to-end REST API</li>
                <li>Authentication</li>
                <li>MongoDB and mLab</li>
                <li>Controlled Inputs</li>
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
);

export default ProjectCards;
