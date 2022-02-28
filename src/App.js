import React from "react";
import "./App.css";
import Momani from "../src/Momani.jpg";
export default function App() {
  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <div className="top">
          <div className="cover">
            <img
              className="coverImg"
              src="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"
              alt="cover"
            ></img>
          </div>
          <div className="profile">
            <img className="profileImg" src={Momani} alt="profile" />
          </div>
        </div>
        <div className="down">
          <div className="sideBar">
            <button className="button">About</button>
            <button className="button">Skills</button>
            <button className="button">Projects</button>
            <button className="button">Education & Experience</button>
            <button className="button">Interests & Refferences</button>
          </div>
          <div className="dataPage">mm</div>
        </div>
      </div>
    </div>
  );
}
