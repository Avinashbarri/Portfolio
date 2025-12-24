import React from "react";
import './Contact.css';
import emailjs from "@emailjs/browser";
import { useRef } from "react";
function Contact() {
  const formRef = useRef();
  function sendEmail(e) {
    e.preventDefault(); // stops page reload
    emailjs.sendForm(
      "service_qi3haxo",     // SERVICE ID
      "template_3a788wr",    // TEMPLATE ID
      formRef.current,
      "WCR0fR_MZJ6iFqvB7"        // PUBLIC KEY
    )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  }
  return (
    <>
      <h1>Contact Me</h1>
      <div className="contactcontainer">
        <form ref={formRef} onSubmit={sendEmail} className="contactleft">
          <div>
            <label htmlFor="name">Name</label>
          </div>
          <input className="inputtext" type="text" name="name" />
          <div>
            <label htmlFor="email">Email</label>
          </div>
          <input className="inputtext" type="text" name="email" />
          <div>
            <label htmlFor="">Message</label>
          </div>
          <textarea name="message" id="textmsg" />
          <div className="btn12container" >
            <button className="btn12" type="submit ">Send Message</button>
          </div>
        </form>
        <div className="contactright">
          <div className="contact-item">
           
            <a href="mailto:avinashb0309@gmail.com">avinashb0309@gmail.com</a>
          </div>

          <div className="contact-item">
            
            <a href="tel:+919014898087">+91-9014898087</a>
          </div>

          <div className="contact-item">
            
            <a href="https://www.linkedin.com/in/avinashb03">Avinashb</a>
          </div>

          <div className="contact-item">
            
            <a href="https://github.com/Avinashbarri">Avinashbarri</a>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact;