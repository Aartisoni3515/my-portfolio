import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
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
        setPercentage1(percentage + 1 );
      }
    }, 20);
  }, [percentage1]);


  useEffect(() => {
    setTimeout(() => {
      if (percentage < 80) {
        setPercentage2(percentage + 1 );
      }
    }, 30);
  }, [percentage2]);


  useEffect(() => {
    setTimeout(() => {
      if (percentage < 90) {
        setPercentage3(percentage + 1 );
      }
    }, 40);
  }, [percentage3]);





  return (
    <div style={{textAlign:"center"}}>
      <h4>Check out Some Of my Skills </h4>
      <div  style={{ display:"flex", width: "50%", justifyContent:"space-between" , marginLeft:"400px" }}>
      <h3 style={{paddingRight:"30px", width: "50%" }} className='bar1'> <CircularProgressbar value={percentage} text={`${percentage}%`} />  Reactsjs</h3> 
      <h3 style={{paddingRight:"30px",width: "50%" }} className='bar1'> <CircularProgressbar value={percentage1} text={`${percentage1}%`} /> JavaScript </h3> 
      <h3 style={{paddingRight:"30px",width: "50%" }} className='bar1'> <CircularProgressbar value={percentage2} text={`${percentage2}%`} /> HTML</h3> 
      <h3 style={{paddingRight:"30px",width: "50%" }} className='bar1'> <CircularProgressbar value={percentage3} text={`${percentage3}%`} />CSS</h3> 


      </div>
    </div>
  );
}
export default Skills;