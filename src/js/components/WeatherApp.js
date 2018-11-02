import React from 'preact-compat';

const WeatherApp = () => (
  <div className="popup" id="popup-weather">
    <div className="popup__content">
      <div className="popup__left">
        <iframe
          className="popup__vid u-no-pointer-events"
          src="https://giphy.com/embed/1wrlkIMlvjWMy4Hx6N"
          width="100%"
          height="480"
          frameBorder="0"
        />
      </div>
      <div className="popup__right">
        <a href="#projects" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary heading-secondary--primary u-margin-bottom-small">
          The Weather Checker
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Learning and understanding redux state management
        </h3>
        <p className="popup__text">
          The goal of this project was to understand how to manage state with
          Redux. <br />
          <br />
          The user is presented with a search bar and a few quick search
          buttons. When the user clicks on a button &ndash; or manually searches
          for a city via the search bar &ndash; a request to the OpenWeatherMap
          API would be made to retrieve that city's current weather. The
          response data would then be filtered through my reducers where it will
          be organized and stored within the redux store.
          <br />
          <br /> Aside from the search bar, the UI consists of two other
          components: a weather information display and a search log. The
          weather information panel displays the weather, while the search
          history panel logs the city name, time and date of each request.
          <br />
          <br />
          For deeper insight on my development process, check out the blog post.
        </p>
        <a
          href="http://sd-weather-app.herokuapp.com/"
          className="btn btn--primary"
        >
          DEMO
        </a>
        <a href="#" className="btn-text btn-text__popup btn-text__popup">
          Blog post &rarr;
        </a>
      </div>
    </div>
  </div>
);

export default WeatherApp;
