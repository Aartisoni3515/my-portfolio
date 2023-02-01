import React, { useState } from "react";
import "./Contact.css";
import { IoLocationSharp } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import {
  BsFillTelephoneFill,
  BsInstagram,
  BsFacebook,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import bg from "../Images/bg4.jpg";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <div className="contact-container">
          <h1>
            <span>C</span>ontact
            <span>M</span>e
          </h1>
          <p>Get In Touch</p>
          <div className="icons">
            <div>
              <IoLocationSharp style={{ fontSize: "25px" }} />
              <h5>
                Jaipur <br /> Rajasthan
              </h5>
            </div>
            <div>
              {" "}
              <BsFillTelephoneFill style={{ fontSize: "20px" }} />
              <h5>
                {" "}
                mobile <br />
                7357878964
              </h5>
            </div>
            <div>
              <CgMail style={{ fontSize: "27px" }} />
              <h5>
                aartisoni3517 <br />
                @gmail.com
              </h5>
            </div>
          </div>
        </div>

        <div className="icon">
          <h3>
            {" "}
            <BsInstagram />
          </h3>
          <h3>
            <BsFacebook />
          </h3>
          <h3>
            {" "}
            <BsLinkedin />
          </h3>
          <h3>
            <BsGithub />
          </h3>
        </div>
        <div className="contact-content">
        {/* <img className="contact-img" src={bg} alt="" /> */}
          <div className="contact-form">
            {/* <img src={bg} alt="" /> */}
            <h2 style={{ textAlign: "left", marginLeft: "90px" , marginTop: "50px" , fontSize:"30px"}}>
              Contact Form
            </h2>
            <form>
              <div className="form">
                <div className="contact-left">
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />
                  </div>
                  <div>
                    <label htmlFor="Phone">Phone:</label>
                    <input type="number" id="number" required />
                  </div>
                </div>

                <div className="contact-right">
                  <div>
                    <label htmlFor="message">Message:</label> <br />
                    <textarea id="message" required />
                  </div>
                </div>
              </div>
              <button
                // style={{ marginTop: "-400px", marginLeft: "100px" }}
                className="mid-btn"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <p style={{textAlign:"center", fontSize:"15px" , marginBottom:"10px"}}>Made by Aarti </p>
      </div>
    </>
  );
};

export default Contact;
