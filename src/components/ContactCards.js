import React from 'react';

function ContactCard(props) {
  return (
    <section className="contact-card">
      <div className="card">
        <h1 className="text-center">Contact Me</h1>
        <form className="card-content">
          <div>
            <div>
              <label htmlFor="name">Name:</label>
            </div>
            <div>
              <input type="text" name="name" placeholder="Preferred name" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email:</label>
            </div>
            <div>
              <input type="email" name="email" placeholder="Your email" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="message">Message:</label>
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                cols="30"
                placeholder="Your message"
              />
            </div>
          </div>
          <div>
            <div></div>
            <div>
              <button type="submit" text="Submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactCard;
