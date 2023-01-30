import React, { useEffect, useState } from "react";
import "./Project.css";
import {BsLink45Deg} from "react-icons/bs"

const Projects = () => {
  const [product] = useState([
    {
      ProjectName: "Amazon-clone Project",
      Desc: "This Project is a clone of Amazon. It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image:
        "https://www.lifewire.com/thmb/nfg7SU0_fIU7yOBSw5wD2zc_y0I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Webp.net-gifmaker-5addf59fba61770036c5836f.gif",
    },

    {
      ProjectName: "Chat-App Project",
      Desc: "This Project is a chat-app using firebase authentication. It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image: "https://blog.flock.com/hubfs/GIFs/chat.gif",
    },

    {
      ProjectName: "E-commerce-app Project",
      Desc: "This Project is a E-commerce platform. It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image: "https://media1.giphy.com/media/GsZWKbRmg9lI6OCdxJ/giphy.gif",
    },

    {
      ProjectName: "Zomato-app clone Project",
      Desc: "This Project is a clone of Zomato.It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/967f19111202195.5ffdfc0e915cb.gif",
    },

    {
      ProjectName: "Travel-blog Project",
      Desc: "This Project is about the travel sites. It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image:
        "https://i.gifer.com/origin/3d/3d6c4ddc789e0700a31da65d3684bc3a.gif",
    },

    {
      ProjectName: "Single-page website Project",
      Desc: "This Project is a website .It is Built Using Reactjs,HTML,CSS, JavaScript and other react libraries.",
      image:
        "https://cdn.dribbble.com/users/1106204/screenshots/7063847/media/dc64a6ac0e324de8aaceec810846fff7.gif",
    },
  ]);

  return (
    <>
    <div className="project">
      <h2 className="head"
        style={{
          textAlign: "center",
          marginBottom: "60px",
          marginLeft: "30%",
          fontSize: "30px",
          letterSpacing: "10px",
        }}
      >
        <span style={{marginTop:"120px"}} >C</span>heck
        <span>O</span>ut
        <span>S</span>ome
        <span>O</span>f<span>M</span>y
        <span>W</span>orks
      </h2>

      <div className="project-container">
        {product.map((productItem) => {
          return (
            <div className="project-content">
              <div className="project-name">
                <p>{productItem.ProjectName}</p>
              </div>

              <div className="image-content">
                <img src={productItem.image} />
                

                <BsLink45Deg  className="hide"/>
               

              </div>
              <div className="project-desc">
                <p> {productItem.Desc} </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Projects;
