import React, { useState } from "react";
import "./Contact.css";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import animationData from "./hire.json";
import Lottie from "react-lottie";
import { Button } from "@material-ui/core";

function Contact({ theme }) {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const formInputHandler = (e) => {
    setFormFields({
      ...formFields,
      [e.target.id]: e.target.value,
    });
  };
  const [show] = useState(window.innerWidth <= 600 ? true : false);

  const formSubmitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const { name, email, message } = formFields;
    if (!name || !email || !message) {
      setLoading(false);
      setAlert(true);
      setAlertMessage("Duh, name, email or message cannot be empty!");
      return;
    }
    axios
      .post("/message", {
        name,
        email,
        message,
      })
      .then((data) => {
        setSuccess(true);
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      })
      .catch((err) => {
        setAlert(true);
        setAlertMessage("Some error found! Try again");
        setFormFields({
          name: "",
          email: "",
          message: "",
        });
        setLoading(false);
      });
  };

  return (
    <>
      <div id="contact" className="page contact" style={{ padding: "0" }}>
        <div className="bg-underlay-contact bg-underlay"></div>
        <div className="contact-content" style={{ marginTop: "12rem" }}>
          {" "}
          <h3 data-aos="fade-up" data-aos-offset="200" data-aos-duration="1000">
            Let's have a chat {`:D`}
          </h3>
          <div data-aos="fade-up" data-aos-duration="1000">
            <form method="POST" className="form" onSubmit={formSubmitHandler}>
              {alert ? (
                <Alert
                  className="alert"
                  onClose={() => setAlert(false)}
                  severity="error"
                >
                  {alertMessage}
                </Alert>
              ) : (
                ""
              )}
              {success ? (
                <Alert
                  className="alert"
                  onClose={() => setSuccess(false)}
                  severity="success"
                >
                  <p className="success-msg">
                    Thanks for your message! Expect a reply soon
                  </p>
                </Alert>
              ) : (
                ""
              )}
              <input
                id="name"
                type="text"
                value={formFields.name}
                onChange={formInputHandler}
                placeholder="Name"
              />
              <input
                id="email"
                type="email"
                value={formFields.email}
                onChange={formInputHandler}
                placeholder="Your email"
              />
              <textarea
                id="message"
                value={formFields.message}
                onChange={formInputHandler}
                rows="9"
                placeholder="Your message here.."
              />
              <Button
                color="secondary"
                variant="contained"
                disabled={loading ? true : false}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
        {!show ? (
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            style={{
              bottom: "-3.4rem",
              position: "absolute",
              right: "1rem",
            }}
          />
        ) : null}
      </div>
    </>
  );
}

export default Contact;
