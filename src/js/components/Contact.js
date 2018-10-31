import React from 'react';

const Contact = () => (
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
);

export default Contact;
