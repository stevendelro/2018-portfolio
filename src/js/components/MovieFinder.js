import React from 'preact-compat';

const MovieFinder = () => (
  <div className="popup" id="popup-movie">
    <div className="popup__content">
      <div className="popup__left">
        <iframe
          className="popup__vid u-no-pointer-events"
          src="https://giphy.com/embed/9V5ejEkHOwf54dKltI"
          width="100%"
          height="480"
          frameBorder="0"
        />
      </div>
      <div className="popup__right">
        <a href="#projects" className="popup__close">
          &times;
        </a>
        <h2 className="heading-secondary heading-secondary--orange u-margin-bottom-small">
          The Movie Finder
        </h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          A solution for a deceivingly difficult problem
        </h3>
        <p className="popup__text">
          The goal of this project was to understand and implement React-Router
          within our app to create a multi-page experience.
          <br />
          <br />
          Movie Finder will take the user input and query The Open Movie
          Database API to retrieve a list of movies that relate to that search
          term. Each list item was required to have: a title, a poster, a year
          released, a button to show more details &ndash; and a small synopsis.
          <br />
          <br />
          After firing off a search request, the user will see a loading spinner
          while Movie Finder works it's magic. A list of movies with all the
          required items would then be presented to the user. At this point the
          user can browse the list, click on the More Information button to get
          details on a specific movie, then click Return Home to go back to the
          search results.
          <br />
          <br />
          Now, what made this tricky was getting that small synopsis to appear
          within the list of search results. The OMDB API does not provide any
          plot information when queried for a list of movies, only statistical
          data. The only way to get shortened plots would be to request the full
          details of one movie at a time.
          <br />
          <br />
          With the help of redux-thunk, I was able to solve this problem with a
          single function.
          <br />
          <br />
          In order to get the shortened plot for each list item, I scraped the
          movie IDs from the initial list of search results. With an array of
          movie IDs, I used a custom asynchronous forEach function to make
          sequential asynchronous calls to the API.
          <br />
          <br />
          As each response came in, that data would be pushed into an array and
          another response would fire off. This would occur until I collected
          the complete details for each movie. This new array contained
          everything I needed &ndash; in the correct order &ndash; for me to use
          as I pleased.
          <br />
          <br />
          For a full breakdown, check out my blog post.
        </p>
        <a
          href="http://sd-movie-finder.herokuapp.com/"
          className="btn btn--orange"
        >
          LIVE DEMO
        </a>
        <a
          href="#"
          className="btn-text btn-text__popup btn-text__popup--secondary"
        >
          Blog post &rarr;
        </a>
      </div>
    </div>
  </div>
);

export default MovieFinder;
