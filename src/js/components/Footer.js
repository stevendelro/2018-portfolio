import React from 'preact-compat';
import logo from '../../img/footer-logo-large.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo-box">
      <a href="#header" className="logo__button">
        <img src={logo} alt="stevendelrosario-logo" className="footer__logo" />
      </a>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <div className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/stevendelro" className="footer__link">
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
          for the base design of this website. His original design can be found{' '}
          <a href="https://natours.netlify.com/" className="footer__link">
            HERE
          </a>{' '}
          .
        </p>
        <p className="footer__copyright--p">
          I've completed many unfinished features and have heavily modified and
          altered large sections of the original project code to learn,
          experiement, and ultimately produce what you now see before you. Every
          line of code was written, scrutinized and rewritten by yours truly.
        </p>
        <p className="footer__copyright--p">
          The images, video/gifs and colors that are used on this site were all
          selected and edited by me. All extra functionality was developed by me
          with the techniques learned from the course. In no way, shape, or form
          do I take any personal credit for this website's initial design, but I
          did totally refine and polish it like a boss.
        </p>
        <p className="footer__copyright--p">
          Copyright &copy; by Jonas Schmedtmann.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
