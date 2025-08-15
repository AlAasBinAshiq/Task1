import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Headings */}
        <h2 className="contact-title">CONTACT US</h2>
        <p className="contact-subtitle">Get in Touch</p>

        <div className="contact-content">
          {/* Left Column */}
          <div className="contact-info">
            <h3>Send us a message</h3>
            <p>
              Feel free to reach out through contact form or find our contact information below.
              Your feedback, questions, and suggestions are important to us as we strive to provide
              exceptional service to our university community.
            </p>
            <p><strong>Email:</strong> Contact@GreatStack.dev</p>
            <p><strong>Phone:</strong> +1 123-456-7890</p>
            <p><strong>Address:</strong> 77 Massachusetts Ave, Cambridge, MA 02139, United States</p>
          </div>

          {/* Right Column - Form */}
          <form className="contact-form">
            <label>Your name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Phone Number</label>
            <input type="tel" placeholder="Enter your mobile number" required />

            <label>Your Email</label>
            <input type="email" placeholder="Enter your email id" required />

            <label>Write your messages here</label>
            <textarea placeholder="Enter your message" rows="5" required></textarea>
             
            <button type="submit" className="send-btn">Submit now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
