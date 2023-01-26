import React, { useEffect, useState } from "react";
import "./Project.css";
import ama from "../Images/ama.jpg";

const Projects = () => {
  const [product] = useState([
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image:
        "http://ecommerceguide.com/wp-content/uploads/2020/02/India-1Amazon.webp",
    },
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image:
        "https://i.pinimg.com/originals/26/5b/e1/265be188a968c831a1f58663d3d13307.png",
    },
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image: "https://i.ytimg.com/vi/Wbc2db82jLQ/maxresdefault.jpg",
    },
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image:
        "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/03/zomato-website-1647947867.jpg",
    },
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image: "https://media.nomadicmatt.com/2020/bestblogs13.jpg",
    },
    {
      ProjectName: "Amazone Project",
      Desc: "This Project is a clone of Amazon.",
      rating: "34565",
      price: "4534",
      image:
        "https://www.freecodecamp.org/news/content/images/2021/11/fresh.png",
    },
  ]);

  return (
    <>
      {/* <div className="project-container">
        <div className="project-content">
          <div className="project-head">
            <h3>Check Out Some of my works</h3>

            <div className="projects">
            <h1></h1>
            <img src="" alt="" />
              <div className="project">
                <div className="project1">

                <img src="" alt="" />
                </div>
                <div className="project2"></div>
                <div className="project3"></div>
                <div className="project4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
       */}
      <h3>Check Out Some of my works</h3>

      {product.map((productItem) => {
        return (
          <div className="project-container">

            <div className="project-content">
              <div className="product-item">
                <div className="project-name">
                  <p>{productItem.ProjectName}</p>
                </div>

                <div className="image-content">
                  <img src={productItem.image} />
                </div>
                <div className="project-desc">
                  <p> {productItem.Desc} </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Projects;
