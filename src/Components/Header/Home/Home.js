import React from "react";
import "./Home.css";
import bg  from "../Images/newbg.jpg"
// import bg from "../Images/newb.jpeg";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import About from "../About/About";
import { Link } from "react-router-dom";

const Home = () => {
   
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <div className="img-content"  data-aos="fade-right" >
            <img src={bg} alt="" />
          </div>

          <div className="text-content">
            <h1 id="hero">
              {" "}
              Hello, My Name is <br />
              <span style={{ color: "blueviolet" }}>A</span>arti{" "}
              <span style={{ color: "blueviolet" }}>S</span>oni
            </h1>

            {/* <h3>I am a Frontend developer.</h3> */}


            <div class='line'>
    <h3 class='pop-outin'>
  
  <span>I </span>
  <span> am </span>
  <span>a </span>
  <span>Front-End </span>
  <span>developer. </span>
 
</h3>
</div>
          </div>

        </div>
          <div className="buttons">

           <Link to="/projects"> <button className="mid-btn">Projects</button> </Link>
           <Link to= "/contact"> <button className="glow-on-hover">Contact</button> </Link>

          </div>
      </div>
      <hr style={{marginTop:"200px"}} />

      <About/>
    </>
  );
};

export default Home;
