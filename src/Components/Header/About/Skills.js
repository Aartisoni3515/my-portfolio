import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./About.css";

function Skills(props) {
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const [percentage3, setPercentage3] = useState(0);

 

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 90) {
        setPercentage(percentage + 1);
      }
    }, 10);
  }, [percentage]);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 85) {
        setPercentage1(percentage + 1);
      }
    }, 20);
  }, [percentage1]);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 80) {
        setPercentage2(percentage + 1);
      }
    }, 30);
  }, [percentage2]);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < 90) {
        setPercentage3(percentage + 1);
      }
    }, 40);
  }, [percentage3]);

  return (
    <div className="progress">
      <h4>
        <span>C</span>heck
        <span>O</span>ut 
        <span>S</span>ome 
        <span>O</span>f<span>M</span>y 
        <span>S</span>kills
      </h4>
      <div className="bar">
        <h3 className="bar1">
          {" "}
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
          />{" "}
          <span>Reactsjs</span>
        </h3>
        <h3 className="bar1">
          {" "}
          <CircularProgressbar value={percentage1} text={`${percentage1}%`} />
          <span> JavaScript </span>
        </h3>
        <h3 className="bar1">
          {" "}
          <CircularProgressbar
            value={percentage2}
            text={`${percentage2}%`}
          />{" "}
          <span> HTML</span>
        </h3>
        <h3 className="bar1">
          {" "}
          <CircularProgressbar value={percentage3} text={`${percentage3}%`} />
          <span>CSS</span>
        </h3>
      </div>
    </div>
  );
}
export default Skills;
