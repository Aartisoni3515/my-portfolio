import React from "react";
import "./About.css";
import bg3 from "../Images/bg3.jpg";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <div className="about-img">
            <div className="about-des">
              <h1>
                <span>A</span>bout <span>M</span>e
              </h1>
              <p>My Name is Aarti Soni.</p>
              <p>I am From Jaipur, Rajasthan.</p>
              <p style={{lineHeight:"2rem"}} >
                I am a Front-End Developer ( ReactJS, JavaScript, HTML, CSS,
                Bootstrap).
              </p>
              <button className="res">Download Resume</button>
            </div>
            <img src={bg3} alt="" />
          </div>

          {/* <hr /> */}

          <div className="about-mid">
            <h1>
              <span>Q</span>ualificaton
            </h1>
            <div className="mid-des">
              <div className="high">
                <h2>
                  <span>H</span>igher <span>E</span>ducation 
                </h2>
                  <img
                    className="mid-img"
                    src="https://img.icons8.com/office/30/000000/graduation-cap.png"
                  />
                <p>
                  <strong style={{ fontSize: "20px" , margin:"10px auto" }}>
                    University of Rajasthan
                  </strong>
                  <br /> <br />
                  Passed BCA in 2021 with 80%. <br /> <br />
                  Good knowledge of HTML , CSS , JavaScript, Reactjs.
                </p>
              </div>

              <div className="second">
                <h2>
                  <span>S</span>econdary <span>E</span>ducation
                </h2>
                  <img
                    className="mid-img2"
                    src="https://img.icons8.com/bubbles/50/000000/school.png"
                  />
                <p>
                  <strong style={{ fontSize: "20px" }}>
                    Gems India sr. sec. school,Jaipur,Rajasthan.
                  </strong>
                  <br />
                  <br />
                  Passed 10th  with 88% from Rajasthan Board. <br />
                  <br />
                  Passed 12th  (Science Maths)  with 68.40% from Rajasthan
                  Board.
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="skills">
          <Skills />
      </div>
      </div>
    </>
  );
};

export default About;
