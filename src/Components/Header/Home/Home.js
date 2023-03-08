import React from "react";
import "./Home.css";
import bg from "../Images/newbg.jpg";
// import bg from "../Images/newb.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import About from "../About/About";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
// import bg from "../Images/bg.mp4"

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="img-content" data-aos="fade-right">
            {/* <video style={{backgroundColor:"black"}} src={bg}></video> */}
            <img src={bg} alt="" />
          </div>
          <div className="content">
            <div className="text-content">
              <h1 id="hero">
                {" "}
                Hello, <br /> My Name is <br />
                <span style={{ color: "blueviolet" }}>A</span>arti{" "}
                <span style={{ color: "blueviolet" }}>S</span>oni
              </h1>

              {/* <h3>I am a Frontend developer.</h3> */}

             <div class="line">
                <h3 class="pop-outin">
                  <span>I </span>
                  <span> am </span> 
                  <span>a </span> 
                  <span>Front-End </span> <br />
                  <span style={{color:"white"}}>developer. </span>
                </h3>
              </div>
            </div>
        
          <div
            style={{ margin: "0px auto", marginTop: "0px" }}
            className="buttons"
          >
            <Link to="/projects">
              {" "}
              <button style={{ marginTop: "0px" }} className="mid-btn">
                Projects
              </button>{" "}
            </Link>
            <Link to="/contact">
              {" "}
              <button
                style={{ marginTop: "0px", fontSize: "20px" }}
                className="glow-on-hover"
              >
                Contact
              </button>{" "}
            </Link>
            </div>
          </div>
          </div>
        </div>
        <hr style={{ marginTop: "100px" }} />
        <About/>
        <Projects/>
        <Contact/>
    </>
  );
};

export default Home;
