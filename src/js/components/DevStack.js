import React from 'react';

const DevStack = () => (
  <section className="section-features" id="stack">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary heading-secondary--white">
        Development Stack
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon">
            <svg
              className="u-half-opacity"
              xmlns="http://www.w3.org/2000/svg"
              width="24%"
              height="100%"
              viewBox="0 0 32 32"
            >
              <path d="M16.373 0c-0.157 10.578 0.11 25.477-1.613 27.28-0.941-0.392-5.505-2.92-5.505-11.211 0-9.168 6.492-12.309 7.118-16.069zM16.6 2.040c0.8 2.12 6.054 7.447 6.054 14.030s-2.899 9.638-5.406 11.44v3.076c0 0.548-0.441 0.823-0.715 0.823s-0.774-0.255-0.774-0.686v-3.017c2.272-1.019 0.959-19.044 0.841-25.665z" />
            </svg>
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">Mongo</h3>
          <p className="feature-box__text">
            MongoDB is the leading modern, general purpose database platform,
            designed to unleash the power of software and data for developers
            and the applications they build.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon">
            <svg
              className="u-half-opacity"
              xmlns="http://www.w3.org/2000/svg"
              width="24%"
              height="100%"
              viewBox="0 0 32 32"
            >
              <path d="M14.903 0.85c-1.55 0.142-2.619 0.357-3.886 0.782-0.59 0.201-1.458 0.558-1.691 0.699-0.037 0.023-0.183 0.096-0.32 0.169-2.13 1.083-4.311 3.063-5.746 5.225-1.275 1.92-1.998 3.89-2.331 6.377-0.114 0.837-0.114 2.958 0 3.794 0.48 3.557 1.833 6.299 4.375 8.85 1.367 1.376 2.816 2.386 4.526 3.163 1.257 0.571 2.683 0.955 4.274 1.161 0.896 0.114 2.898 0.114 3.794 0 1.458-0.187 2.679-0.498 3.931-1.010 2.29-0.937 4.498-2.647 6.199-4.805 1.458-1.847 2.45-4.014 2.871-6.263 0.215-1.152 0.256-1.637 0.256-2.994s-0.041-1.842-0.256-2.994c-0.539-2.889-1.957-5.509-4.178-7.726-1.115-1.12-2.395-2.085-3.575-2.702-0.224-0.114-0.434-0.229-0.471-0.247-0.242-0.146-1.102-0.503-1.691-0.699-1.070-0.361-1.87-0.544-3.063-0.695-0.544-0.073-2.546-0.128-3.017-0.087zM10.811 10.057c0.407 0.041 0.992 0.16 1.111 0.229 0.041 0.023 0.197 0.091 0.338 0.155 0.672 0.293 1.518 1.024 1.966 1.696 0.558 0.837 0.869 1.723 1.047 2.994 0.105 0.782 0.114 1.202 0.014 1.298-0.064 0.064-0.507 0.073-4.229 0.073-3.84 0-4.16 0.005-4.187 0.078-0.055 0.142 0.073 1.166 0.183 1.477 0.352 0.978 0.983 1.632 1.883 1.957 1.769 0.631 3.703-0.032 4.183-1.435 0.050-0.142 0.114-0.288 0.142-0.32 0.078-0.096 1.742-0.091 1.824 0.005 0.155 0.187-0.274 1.294-0.741 1.893-0.832 1.070-2.016 1.673-3.534 1.792-0.864 0.069-1.902-0.041-2.537-0.265-0.311-0.105-0.855-0.379-1.166-0.581-0.366-0.238-1.111-0.992-1.303-1.326-0.375-0.635-0.366-0.608-0.603-1.285-0.407-1.147-0.539-2.711-0.32-3.854 0.055-0.283 0.119-0.553 0.146-0.599 0.023-0.050 0.046-0.123 0.046-0.165s0.027-0.142 0.064-0.219c0.037-0.082 0.119-0.274 0.183-0.43 0.361-0.878 1.083-1.769 1.861-2.299 1.047-0.718 2.286-1.010 3.63-0.869zM18.629 10.158c0.096 0.101 0.247 0.311 1.042 1.486 0.329 0.48 0.489 0.718 1.285 1.861 0.206 0.302 0.398 0.553 0.425 0.562 0.023 0.009 0.672-0.864 1.44-1.938 0.768-1.079 1.426-1.984 1.463-2.011 0.046-0.041 0.398-0.059 1.175-0.064 1.189-0.005 1.243 0.005 1.134 0.21-0.032 0.055-0.622 0.855-1.312 1.778s-1.55 2.066-1.906 2.546c-0.361 0.48-0.654 0.91-0.654 0.951 0 0.046 0.078 0.183 0.174 0.311 0.091 0.133 0.297 0.416 0.453 0.64 0.288 0.411 0.91 1.28 1.874 2.615 0.297 0.411 0.613 0.855 0.704 0.983s0.384 0.535 0.649 0.905c0.613 0.85 0.617 0.859 0.507 0.937-0.101 0.073-2.258 0.087-2.395 0.014-0.046-0.027-0.329-0.411-0.631-0.859-0.297-0.443-0.827-1.23-1.175-1.746s-0.818-1.211-1.042-1.545c-0.224-0.334-0.43-0.599-0.462-0.59-0.027 0.009-0.16 0.178-0.297 0.379-0.325 0.475-1.819 2.688-2.418 3.584-0.261 0.389-0.517 0.731-0.571 0.763-0.069 0.041-0.411 0.055-1.134 0.059-1.335 0-1.339-0.005-0.942-0.549 0.343-0.475 1.76-2.459 1.975-2.766 0.096-0.137 0.457-0.649 0.859-1.202 0.123-0.169 0.256-0.357 0.297-0.421s0.233-0.329 0.421-0.594c0.416-0.581 0.503-0.713 0.503-0.773 0-0.041-0.978-1.39-2.743-3.776-0.745-1.006-1.198-1.637-1.221-1.701-0.059-0.155 0.082-0.174 1.266-0.165 1.143 0.009 1.161 0.009 1.257 0.114z" />
              <path d="M9.829 11.771c-0.037 0.009-0.224 0.037-0.411 0.069-1.083 0.165-1.998 0.974-2.377 2.103-0.105 0.311-0.183 0.795-0.137 0.869 0.018 0.032 1.033 0.041 3.182 0.037l3.15-0.014-0.005-0.178c-0.014-0.443-0.361-1.275-0.722-1.728-0.453-0.567-1.097-0.942-1.861-1.093-0.421-0.078-0.64-0.096-0.818-0.064z" />
            </svg>
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">Express</h3>
          <p className="feature-box__text">
            Express is a web application framework for Node.js, released as free
            and open-source software under the MIT License. It is designed for
            building web applications and APIs.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon">
            <svg
              className="u-half-opacity"
              xmlns="http://www.w3.org/2000/svg"
              width="34%"
              height="100%"
              viewBox="0 0 45 32"
            >
              <path d="M35.817 15.938c0-1.747-2.188-3.403-5.542-4.429 0.774-3.419 0.43-6.139-1.086-7.010-0.349-0.204-0.758-0.301-1.204-0.301v1.199c0.247 0 0.446 0.048 0.613 0.14 0.731 0.419 1.048 2.016 0.801 4.069-0.059 0.505-0.156 1.037-0.274 1.58-1.054-0.258-2.204-0.457-3.413-0.586-0.726-0.994-1.478-1.898-2.236-2.688 1.752-1.629 3.397-2.521 4.515-2.521v-1.199c0 0 0 0 0 0-1.478 0-3.413 1.054-5.37 2.881-1.957-1.817-3.892-2.86-5.37-2.86v1.199c1.113 0 2.763 0.887 4.515 2.505-0.753 0.79-1.505 1.688-2.22 2.682-1.215 0.129-2.365 0.328-3.419 0.591-0.124-0.538-0.215-1.059-0.28-1.559-0.253-2.053 0.059-3.65 0.785-4.075 0.161-0.097 0.371-0.14 0.618-0.14v-1.199c0 0 0 0 0 0-0.452 0-0.86 0.097-1.215 0.301-1.511 0.871-1.849 3.585-1.070 6.993-3.344 1.032-5.521 2.682-5.521 4.424 0 1.747 2.188 3.403 5.542 4.429-0.774 3.419-0.43 6.139 1.086 7.010 0.349 0.204 0.758 0.301 1.209 0.301 1.478 0 3.413-1.054 5.37-2.881 1.957 1.817 3.892 2.86 5.37 2.86 0.452 0 0.86-0.097 1.215-0.301 1.511-0.871 1.849-3.585 1.070-6.993 3.333-1.027 5.51-2.682 5.51-4.424zM28.818 12.353c-0.199 0.693-0.446 1.408-0.726 2.123-0.22-0.43-0.452-0.86-0.704-1.29-0.247-0.43-0.511-0.849-0.774-1.258 0.763 0.113 1.5 0.253 2.204 0.425zM26.356 18.078c-0.419 0.726-0.849 1.414-1.295 2.053-0.801 0.070-1.613 0.108-2.43 0.108-0.812 0-1.623-0.038-2.419-0.102-0.446-0.64-0.882-1.322-1.301-2.043-0.409-0.704-0.779-1.419-1.118-2.139 0.333-0.72 0.71-1.441 1.113-2.145 0.419-0.726 0.849-1.414 1.295-2.053 0.801-0.070 1.613-0.107 2.43-0.107 0.812 0 1.623 0.038 2.419 0.102 0.446 0.64 0.882 1.322 1.301 2.043 0.409 0.704 0.779 1.419 1.118 2.139-0.339 0.72-0.71 1.441-1.113 2.145zM28.092 17.379c0.29 0.72 0.538 1.441 0.742 2.139-0.704 0.172-1.446 0.317-2.215 0.43 0.263-0.414 0.527-0.839 0.774-1.274 0.247-0.43 0.478-0.865 0.699-1.295zM22.641 23.114c-0.5-0.516-1-1.091-1.494-1.72 0.484 0.021 0.978 0.038 1.478 0.038 0.505 0 1.005-0.011 1.494-0.038-0.484 0.629-0.984 1.204-1.478 1.72zM18.642 19.948c-0.763-0.113-1.5-0.253-2.204-0.425 0.199-0.693 0.446-1.408 0.726-2.123 0.22 0.43 0.452 0.86 0.704 1.29s0.511 0.849 0.774 1.258zM22.614 8.762c0.5 0.516 1 1.091 1.494 1.72-0.484-0.021-0.978-0.038-1.478-0.038-0.505 0-1.005 0.011-1.494 0.038 0.484-0.629 0.984-1.204 1.478-1.72zM18.637 11.928c-0.263 0.414-0.527 0.839-0.774 1.274-0.247 0.43-0.478 0.86-0.699 1.29-0.29-0.72-0.538-1.441-0.742-2.139 0.704-0.167 1.446-0.312 2.215-0.425zM13.772 18.658c-1.903-0.812-3.134-1.876-3.134-2.72s1.231-1.914 3.134-2.72c0.462-0.199 0.968-0.376 1.489-0.543 0.306 1.054 0.71 2.15 1.209 3.274-0.495 1.118-0.892 2.209-1.193 3.258-0.532-0.167-1.037-0.349-1.505-0.548zM16.664 26.34c-0.731-0.419-1.048-2.016-0.801-4.069 0.059-0.505 0.156-1.037 0.274-1.58 1.054 0.258 2.204 0.457 3.413 0.586 0.726 0.994 1.478 1.898 2.236 2.688-1.752 1.629-3.397 2.521-4.515 2.521-0.242-0.005-0.446-0.054-0.607-0.145zM29.414 22.244c0.253 2.053-0.059 3.65-0.785 4.075-0.161 0.097-0.371 0.14-0.618 0.14-1.113 0-2.763-0.887-4.515-2.505 0.753-0.79 1.505-1.688 2.22-2.682 1.215-0.129 2.365-0.328 3.419-0.591 0.124 0.543 0.22 1.064 0.28 1.564zM31.484 18.658c-0.462 0.199-0.968 0.376-1.489 0.543-0.306-1.054-0.71-2.15-1.209-3.274 0.495-1.118 0.892-2.209 1.193-3.258 0.532 0.167 1.037 0.349 1.511 0.548 1.903 0.812 3.134 1.876 3.134 2.72-0.005 0.844-1.236 1.914-3.139 2.72z" />
              <path d="M17.244 4.214v0 0z" />
              <path d="M25.082 15.938c0 1.357-1.1 2.457-2.457 2.457s-2.457-1.1-2.457-2.457c0-1.357 1.1-2.457 2.457-2.457s2.457 1.1 2.457 2.457z" />
              <path d="M27.979 4.198v0 0z" />
            </svg>
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">React</h3>
          <p className="feature-box__text">
            In computing, React is a JavaScript library for building user
            interfaces. It is maintained by Facebook, Instagram and a community
            of individual developers and corporations.
          </p>
        </div>
      </div>
      <div className="col-1-of-4">
        <div className="feature-box">
          <i className="feature-box__icon">
            <svg
              className="u-half-opacity"
              xmlns="http://www.w3.org/2000/svg"
              width="20%"
              height="50%"
              viewBox="0 0 28 32"
            >
              <path d="M14.173 31.941c-0.44 0-0.851-0.117-1.232-0.323l-3.903-2.318c-0.587-0.323-0.293-0.44-0.117-0.499 0.792-0.264 0.939-0.323 1.761-0.792 0.088-0.059 0.205-0.029 0.293 0.029l2.993 1.79c0.117 0.059 0.264 0.059 0.352 0l11.708-6.778c0.117-0.059 0.176-0.176 0.176-0.323v-13.527c0-0.147-0.059-0.264-0.176-0.323l-11.708-6.749c-0.117-0.059-0.264-0.059-0.352 0l-11.708 6.749c-0.117 0.059-0.176 0.205-0.176 0.323v13.527c0 0.117 0.059 0.264 0.176 0.323l3.198 1.849c1.731 0.88 2.817-0.147 2.817-1.174v-13.351c0-0.176 0.147-0.352 0.352-0.352h1.497c0.176 0 0.352 0.147 0.352 0.352v13.351c0 2.318-1.262 3.668-3.463 3.668-0.675 0-1.203 0-2.7-0.734l-3.081-1.761c-0.763-0.44-1.232-1.262-1.232-2.142v-13.527c0-0.88 0.469-1.702 1.232-2.142l11.708-6.778c0.734-0.411 1.731-0.411 2.465 0l11.708 6.778c0.763 0.44 1.232 1.262 1.232 2.142v13.527c0 0.88-0.47 1.702-1.232 2.142l-11.708 6.778c-0.381 0.176-0.822 0.264-1.232 0.264v0zM17.782 22.639c-5.135 0-6.192-2.348-6.192-4.343 0-0.176 0.147-0.352 0.352-0.352h1.526c0.176 0 0.323 0.117 0.323 0.293 0.235 1.555 0.91 2.318 4.020 2.318 2.465 0 3.521-0.558 3.521-1.878 0-0.763-0.293-1.32-4.137-1.702-3.198-0.323-5.194-1.027-5.194-3.58 0-2.377 1.995-3.785 5.341-3.785 3.756 0 5.605 1.291 5.839 4.108 0 0.088-0.029 0.176-0.088 0.264-0.059 0.059-0.147 0.117-0.235 0.117h-1.526c-0.147 0-0.293-0.117-0.323-0.264-0.352-1.614-1.262-2.142-3.668-2.142-2.7 0-3.022 0.939-3.022 1.643 0 0.851 0.381 1.115 4.020 1.585 3.609 0.47 5.311 1.144 5.311 3.668-0.029 2.582-2.142 4.049-5.869 4.049v0z" />
            </svg>
          </i>
          <h3 className="heading-tertiary u-margin-bottom-small">Node</h3>
          <p className="feature-box__text">
            Node.js represents a "JavaScript everywhere" paradigm, unifying web
            app development around a single language, rather than different
            languages for server side and client side scripts.
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default DevStack;
