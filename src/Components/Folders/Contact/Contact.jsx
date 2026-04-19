import React, { useRef, useState } from "react";
import TitleBar from "../TitleBar/TitleBar";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useGlobalContext } from "../../../Context";
import Navigation from "../Navigation/Navigation";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const MAIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_MAIN_TEMPLATE_ID;
const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const { contact, setContact } = useGlobalContext();
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);

    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };

    emailjs
      .sendForm(SERVICE_ID, MAIN_TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(() => {
        // fire auto-reply after main email succeeds
        return emailjs.send(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, formData, {
          publicKey: PUBLIC_KEY,
        });
      })
      .then(() => {
        setStatus("success");
        setSending(false);
        form.current.reset();
      })
      .catch(() => {
        setStatus("error");
        setSending(false);
      });
  };

  return (
    <div className={contact ? "contact" : "close"}>
      <TitleBar title="Contact" onToggle={() => setContact(false)} />
      <div className="split">
        <Navigation />
        <div className="windows-xp-form-container">
          <form ref={form} onSubmit={sendEmail} className="form" id="contact">
            <div className="contact-inputs">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-inputs">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-inputs">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows={5} required />
            </div>
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p
                style={{
                  color: "green",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                ✓ Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p
                style={{ color: "red", marginTop: "10px", fontWeight: "bold" }}
              >
                ✗ Something went wrong. Please try again.
              </p>
            )}
          </form>
          <h3 style={{ color: "red", margin: "10px 0 0 0" }}>
            Please Note: Provide a valid email in order to get a response
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
