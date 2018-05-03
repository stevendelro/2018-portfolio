import React from 'react';
import { Link } from 'react-router-dom';
import { wobble } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
  wobble: {
    animation: 'x 1s',
    animationName: Radium.keyframes(wobble, 'wobble')
  }
};

const NotFoundPage = () => (
  <StyleRoot style={styles.wobble}>
    <section
      className="container center-align"
      style={{paddingTop: `${3}rem`}}>
      <br />
      <i className="far fa-times-circle fa-10x" />
      <h1>Page Not Found</h1>
      <br />
      <Link to="/">
        <div>
          <a className="waves-effect waves-light btn-large">Back</a>
        </div>
      </Link>
    </section>
  </StyleRoot>
);

export default NotFoundPage;
