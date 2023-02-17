import React, { useState } from "react";
import "./contact.scss";
import SimpleMap from "./SimpleMap";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
      <h2>GET IN TOUCH</h2>
      <div className="container">
     <SimpleMap/>
      </div>
      <div className="social">
      <a href=""><img className="link" src="assets/youtube.png" alt="youtube"/></a>
      <img className="link" src="assets/twitter.png" alt="twitter"/>
      <img className="link" src="assets/linkedin.png" alt="linkedin"/>
      <img className="link" src="assets/facebook.png" alt="facebook"/>
      </div></div>
      <div className="right">
        <h2>Contact.</h2>
        
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
