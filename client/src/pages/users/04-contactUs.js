import React from "react";
import "./contactus.css";

function ContactUs() {
  return (
    <div class="main-container">
      <p className="heading">
        <span className="text">Contact Us</span>
      </p>
      <p>
      Have question and need to talk to us? Please complete this form and we will get in touch as soon as possible.
      </p>
        <form>
          <div class='forms'>
          <div class="input-area">
            <label>First Name:</label>
            <input type="text" name="firstName" placeholder="First Name" />
          </div>
          <div class='input-area'>
          <label> Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" />
          </div>

          <div class='input-area'>
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" />
          </div>
          <div class='input-area'>
          <label>Message:</label>
          <textarea name="message " placeholder="Message" />
          </div>

          <button type="submit" class="submit">
            Submit
          </button>
          </div>
        </form>
      </div>

  );
}

export default ContactUs;
