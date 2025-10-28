import React, { useState } from "react";
import "./ContactPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxSElCozCspw67sNxCDbQ5KgnNd2AZ6m1InBJ4sP6975LHv7HfLujS5XGQZ7pPgUg7p/exec",
        {
          method: "POST",
          mode: "no-cors", // prevents CORS issues
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
      });
      console.error(error);
    }
  };

  return (
    <section id="contactsection" className="section contact">
      <div className="crow">
        <div className="cc1">
          <div className="cr1">
            <h2 className="cheading">CONTACT ME</h2>
            <p className="content">
              Feel free to reach out for any enquires, works or collaborations.
            </p>
          </div>
          <div className="cr2">
            <p>
              <img className="socialIcon" src="mail.png" alt="mail" />
              <a
                href="mailto:sharonpajay@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                sharonpajay@gmail.com
              </a>
            </p>
            <p>
              <img className="socialIcon" src="phone.png" alt="phone" />
              7994642220
            </p>
            <p>
              <img className="socialIcon" src="insta.png" alt="insta" />
              <a
                href="www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                _._sharon_p
              </a>
            </p>
          </div>
        </div>
        <div className="cc2">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="mail id"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="message"
                placeholder="message"
                className="form-input"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="send-button">
              Send message →
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactPage;
