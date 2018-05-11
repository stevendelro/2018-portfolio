import React from 'react';

const Main = () => (
  <div>
    {/**************** 
    HEADER
  ****************/}
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

    {/**************** 
    ABOUT
  ****************/}
    <main>
      <div className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">the two minute rundown</h2>
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
            <a href="#" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src="" alt="" className="composition__photo composition__photo--p1"/>
              <img src="" alt="" className="composition__photo composition__photo--p1"/>
              <img src="" alt="" className="composition__photo composition__photo--p1"/>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default Main;
