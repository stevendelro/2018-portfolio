import React from 'react';

const Hero = () => (
  <div>
    <header className="header">
      <div className="header__logo-box">
        <img
          className="header__logo"
          src="https://farm1.staticflickr.com/911/27106420297_e6cd6d2be2_o.png"
          alt="stevendelrosario-logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--first">Steven</span>
          <span className="heading-primary--last">Del Rosario</span>
        </h1>

        <a href="#" className="btn btn--white btn--animated">
          Portfolio
        </a>
      </div>
    </header>

  </div>
);

export default Hero;
