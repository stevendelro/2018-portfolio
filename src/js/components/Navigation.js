import React from 'preact-compat';

const Navigation = () => (
  <div className="navigation">
    <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
    <label htmlFor="navi-toggle" className="navigation__button">
      <span className="navigation__icon">&nbsp;</span>
    </label>
    <div className="navigation__background">&nbsp;</div>

    <nav className="navigation__nav">
      <ul className="navigation__list">
        <li className="navigation__item">
          <a href="https://github.com/stevendelro" className="navigation__link">
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
            href="https://drive.google.com/file/d/1z9aGJ0CgTQiaK2O-RSQtXAddJ93_ljlx/view?usp=sharing"
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
);

export default Navigation;
