import React from 'react';

const ContactPage = () => (
  <div className="row">
    <div className="col s12 m2 l2" />
    <div className="col s12 m8 l8" style={{ paddingTop: 3 + 'rem' }}>
      <div className="card hoverable">
        <div className="card-image">
          <img src="https://images.unsplash.com/photo-1521189370969-961c2262630a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64a821d32dceaa2037ed0b472218b405&auto=format&fit=crop&w=2068&q=80" />
          <span className="card-title">
            <h1 className='white-text-shadow'>Contact</h1>
          </span>
          <a className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="far fa-paper-plane" />
          </a>
        </div>
        <div className="card-content">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Last Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input type="text" className="validate" />
                  <label htmlFor="company">Company</label>
                </div>
                <div className="input-field col s6">
                  <input type="text" className="validate" />
                  <label htmlFor="position">Position</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="email" type="email" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                  <input type="text" className="validate" />
                  <label htmlFor="phone">Phone</label>
                </div>
                <div className="col s12">
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea className="materialize-textarea" />
                      <label htmlFor="message">Message (optional)</label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="col s12 m2 l2" />
  </div>
);

export default ContactPage;
