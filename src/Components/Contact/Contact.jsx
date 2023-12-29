import "./Contact.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { useEffect, useState } from "react";
import Loader from "../AlertAndLoader/Loader";
import axios from "axios";
import Alert from "../AlertAndLoader/Alert";
import Toast from "../AlertAndLoader/Toast";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [toastMessage, settoastMessage] = useState("");

  const handleToastClose = () => {
    settoastMessage("");
    setShowToast(false);
  };

  const handleAlertClose = () => {
    settoastMessage("");
    setShowAlert(false);
  };

  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:5000/contactUs", {
        name,
        email,
        subject,
        message,
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      // add toast
      if (response.status === 200) {
        settoastMessage("Your message has been sent successfully");
        setShowToast(true);
      }
    } catch (e) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      settoastMessage("Your message has been sent successfully");
      setShowToast(true);
      // setShowAlert(true);
      console.log(e);
    }
    
  };
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="contact">
          {showToast && (
            <Toast
              message={toastMessage}
              duration={3000}
              onClose={handleToastClose}
            />
          )}
          {showAlert && (
            <Alert
              message={toastMessage}
              duration={3000}
              onClose={handleAlertClose}
            />
          )}
          <div className="contact-container">
            <div className="ct-form">
              <div className="contact-info">
                <h3 className="contact-title" style={{ fontFamily: "Oxanium" }}>
                  Get in touch
                </h3>
                <p
                  className="contact-text"
                  style={{ color: "black", fontFamily: "Oxanium" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolorum adipisci recusandae praesentium dicta!
                </p>

                <div>
                  <div className="contact-information">
                    <a
                      href="https://maps.app.goo.gl/hvrmjxhQGCvaRBGJ7"
                      className="ct-icon"
                    >
                      <CiLocationOn className="ct-icon" />
                    </a>
                    <a
                      href="https://maps.app.goo.gl/hvrmjxhQGCvaRBGJ7"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontFamily: "Oxanium",
                      }}
                    >
                      Gwalior, Madhya Pradesh
                    </a>
                    {/* <p style={{ transform: "translateY(-2px)", color: "black" }}>
                  Gwalior, Madhya Pradesh
                </p> */}
                  </div>
                  {/* <div className="contact-information">
                <CiMail className="ct-icon" />
                <a href="mailto:abc@aurorafest.in" className='ct-tel'>abc@aurorafest.in</a>
              </div>
              <div className="contact-information">
                <CiPhone className="ct-icon"  />
                <a className="ct-tel" href="tel:12345678" >
                  123456789
                </a>
              </div> */}
                  <ContactsContainer />
                </div>

                <div className="contact-social-media">
                  <p style={{ fontFamily: "Oxanium" }}>Connect with us :</p>
                  <div className="contact-social-icons">
                    <a href="https://www.facebook.com/auroraiiitm">
                      <FaFacebook className="contact-ic" />
                    </a>

                    <a href="https://www.instagram.com/aurora_iiitm/">
                      <FaInstagram className="contact-ic" />
                    </a>
                    <a href="https://www.linkedin.com/company/aurora-iiitm-gwalior/">
                      <FaLinkedin className="contact-ic" />
                    </a>
                    <a href="https://twitter.com/IiitmAurora">
                      <FaXTwitter className="contact-ic" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCQmbFlStfjsCRkaBvy_jPMg">
                      <FaYoutube className="contact-ic" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-form">
                <span className="ct-circle ct-one"></span>
                <span className="ct-circle ct-two"></span>

                <form autoComplete="off" className="cont-form">
                  <h3
                    className="contact-title"
                    style={{ fontFamily: "Oxanium" }}
                  >
                    Contact us
                  </h3>
                  <div className="contact-input-container">
                    <input
                      type="text"
                      name="name"
                      className="ct-input"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-container">
                    <input
                      type="email"
                      name="email"
                      className="ct-input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-container">
                    <input
                      type="text"
                      name="subject"
                      className="ct-input"
                      placeholder="Subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <div className="contact-input-container textarea">
                    <textarea
                      name="message"
                      className="ct-input"
                      placeholder="Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="contact-btn"
                    onClick={async (e) => {
                      e.preventDefault();
                      if (
                        name === "" ||
                        email === "" ||
                        subject === "" ||
                        message === ""
                      ) {
                        // replace with toast
                        alert("Please fill all the fields");
                        return;
                      }
                      await sendRequest();
                    }}
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const ContactsContainer = () => {
  return (
    <div className="contacts-info">
      {/* 1st contact details */}
      <div className="cts-info">
        <p
          className="cts-title"
          style={{ fontFamily: "Oxanium", color: "black" }}
        >
          abc
        </p>
        <div className="cts-icons">
          <a href="tel:12345678" className="ct-tel">
            9998887771
            {/* <CiPhone className="ct-icon" /> */}
          </a>
          <a href="mailto:abc@aurorafest.in">
            <CiMail className="ct-icon" />
          </a>
        </div>
      </div>
      {/* 2nd Contact details */}
      <div className="cts-info">
        <p
          className="cts-title"
          style={{ fontFamily: "Oxanium", color: "black" }}
        >
          abc
        </p>
        <div className="cts-icons">
          <a href="tel:12345678" className="ct-tel">
            9998887771
            {/* <CiPhone className="ct-icon" /> */}
          </a>
          <a href="mailto:abc@aurorafest.in">
            <CiMail className="ct-icon" />
          </a>
        </div>
      </div>
      {/* 3rd details */}

      <div className="cts-info">
        <p
          className="cts-title"
          style={{ fontFamily: "Oxanium", color: "black" }}
        >
          abc
        </p>
        <div className="cts-icons">
          <a href="tel:12345678" className="ct-tel">
            9998887771{/* <CiPhone className="ct-icon" /> */}
          </a>
          <a href="mailto:abc@aurorafest.in">
            <CiMail className="ct-icon" />
          </a>
        </div>
      </div>
      {/* 4th details */}
      <div className="cts-info">
        <p
          className="cts-title"
          style={{ fontFamily: "Oxanium", color: "black" }}
        >
          abc
        </p>
        <div className="cts-icons">
          <a href="tel:12345678" className="ct-tel">
            9998887771{/* <CiPhone className="ct-icon" /> */}
          </a>
          <a href="mailto:abc@aurorafest.in">
            <CiMail className="ct-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
