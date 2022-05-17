import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact__section">
          <div className="contact__header">
            <h3>Contact Us</h3>
          </div>
          <div className="contact__content">
            <form action="" className="contact__form">
              <input className="contact__text-input" type="text" placeholder="Name" />
              <input className="contact__email-input" type="text" placeholder="Email" />
              <textarea className="contact__message-input" type="text" placeholder="Message" />
            </form>
          </div>
          <div className="contact__button">
            <button className="contact__btn">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
