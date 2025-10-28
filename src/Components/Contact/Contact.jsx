import React from "react";
import {
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let's Connect</h2>

      <div className="contact-container">
        {/* Left - Contact Form */}
        <div className="contact-card form-card">
          <div className="contact-header">
            <FaPaperPlane className="contact-icon" />
            <h3>Send me a message</h3>
          </div>

          <form
            action="https://formspree.io/f/xpwyorav"
            method="POST"
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;

              fetch(form.action, {
                method: form.method,
                body: new FormData(form),
                headers: { Accept: "application/json" },
              })
                .then((response) => {
                  if (response.ok) {
                    alert(
                      "Message sent successfully! I’ll get back to you soon."
                    );
                    form.reset();
                  } else {
                    alert("Something went wrong. Please try again later.");
                  }
                })
                .catch(() => {
                  alert("Network error. Please check your connection.");
                });
            }}
          >
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />

            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Info Boxes */}
        <div className="contact-info">
          <div className="contact-card info-card">
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>Ready for your next project</p>
            <a href="mailto:huzaifaajmal012@gmail.com">
              huzaifaajmal012@gmail.com
            </a>
          </div>

          <div className="contact-card info-card">
            <FaPhoneAlt className="info-icon" />
            <h4>Phone</h4>
            <p>Always reachable for collaborations</p>
            <a href="tel:+923116414103">+92 311 6414103</a>
          </div>

          <div className="contact-card info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h4>Location</h4>
            <p>Based in Faisalabad, Pakistan</p>
            <p>Available for work worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
