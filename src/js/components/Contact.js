import React, { Component } from 'preact-compat';
import axios from 'axios';
import { route } from 'preact-router';
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    };
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handleEmail(event) {
    this.setState({ email: event.target.value });
  }
  handleMessage(event) {
    this.setState({ message: event.target.value });
  }
  async sendEmail(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    await axios
      .post('/', {
        to: 'stevendelro@pm.me',
        from: email,
        subject: `PORTFOLIO LEAD: ${name} has sent you a message!`,
        text: message,
        html: `<strong>${message}</strong>`
      })
      .then(
        this.setState({
          name: '',
          email: '',
          message: '',
          sent: true
        })
      );
  }
  render() {
    if (this.state.sent === true) {
      this.setState({ sent: false })
      route('/thanks');
    }
    return (
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
                    value={this.state.name}
                    onChange={this.handleName}
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
                    value={this.state.email}
                    onChange={this.handleEmail}
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
                    value={this.state.message}
                    onChange={this.handleMessage}
                    id="message"
                  />
                </div>
                <div className="form__group">
                  <button
                    className="btn btn--primary u-margin-top-small"
                    onClick={this.sendEmail}
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
