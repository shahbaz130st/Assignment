import React, { Component } from 'react';
import './App.css';
class Contact extends Component {
    render() {
      return (
        <div id="contact">
        <h2> Let's talk business</h2>
        <h3>Phone:</h3>
        <p>0301-6264857</p>
        <h3>eMail:</h3>
        <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">shahbazmustafa130@gmail.com</a>
        <h2>Contact Me</h2>
        <form id="sendmail"  >
        <label>Name</label>
        <p><input id="name" type="text" placeholder="Your Name" /></p>
        <label>Email Address</label>
        <p><input id="email" type="text" placeholder="Your Email" /></p>
        <label>Website Link</label>
        <p><input id="website" type="text" placeholder="Your WebSite" /></p>
        <label>Ali HAssan</label>
        <p><textarea>Your Message</textarea></p>
        <button name="submit" type="submit">sendmail</button>
        </form>
        </div>
      );
    }
  }
  
  export default Contact;