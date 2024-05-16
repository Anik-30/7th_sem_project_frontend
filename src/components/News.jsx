import React from "react";
import "../style/news.css";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
const News = () => {
  return (
    <div>
      <h1 className="headingnews">Top <span>Stories</span></h1>
      <div className="containernews">
        <div className="card mb-3">
          <img src={image1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img src={image2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img src={image3} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img src={image8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Cyclone Alert</h5>
            <p className="card-text">
            Cyclone Michaung latest: Several districts in Andhra Pradesh on high alert ahead of landfall today
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img src={image7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Drought</h5>
            <p className="card-text">
            Missouri's Drought Assessment Committee Meets Soon | 94.7 Country
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated 10 mins ago</small>
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <img src={image6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Delhi Air not breathable</h5>
            <p className="card-text">
            Delhi air quality LIVE updates: STF formed to tackle poor AQI, pollution control committee calls smog towers ineffective | Mint
            </p>
            <a href="#" className="btn btn-outline-secondary">
              Read More
            </a>
            <p className="mt-4">
              <small className="text-wrap fs-6 text-white">Last updated few seconds ago</small>
            </p>
          </div>
        </div>
        
        </div>
      </div>
    // </div>
  );
};

export default News;
