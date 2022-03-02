import React, { useState } from "react";
import "./App.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

import Momani from "../src/Momani.png";
export default function App() {
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [education, setEducation] = useState(false);
  const [experience, setExperience] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="pageContainer">
      <div className="pageWrapper">
        <div className="top">
          <div className="cover">
            <img
              className="coverImg"
              src="https://newrelic.com/sites/default/files/styles/1200w/public/2021-04/iStock-516727321.jpg?itok=eP9h7KUZ"
              alt="cover"
            ></img>
          </div>
          <div className="profile">
            <img className="profileImg" src={Momani} alt="profile" />
          </div>
        </div>
        <div className="down">
          <div className="sideBar">
            <button
              className={about ? "about" : "button"}
              onClick={() => {
                setAbout(true);
                setExperience(false);
                setContact(false);
                setSkills(false);
                setProjects(false);
                setEducation(false);
              }}
            >
              About
            </button>
            <button
              className={skills ? "about" : "button"}
              onClick={() => {
                setAbout(false);
                setSkills(true);
                setProjects(false);
                setEducation(false);
                setExperience(false);
                setContact(false);
              }}
            >
              Skills
            </button>
            <button
              className={projects ? "about" : "button"}
              onClick={() => {
                setAbout(false);
                setSkills(false);
                setProjects(true);
                setEducation(false);
                setExperience(false);
                setContact(false);
              }}
            >
              Projects
            </button>
            <button
              className={education ? "about" : "button"}
              onClick={() => {
                setAbout(false);
                setSkills(false);
                setProjects(false);
                setEducation(true);
                setExperience(false);
                setContact(false);
              }}
            >
              Education
            </button>
            <button
              className={experience ? "about" : "button"}
              onClick={() => {
                setAbout(false);
                setExperience(true);
                setSkills(false);
                setProjects(false);
                setEducation(false);

                setContact(false);
              }}
            >
              Experience
            </button>
            <button
              className={contact ? "about" : "button"}
              onClick={() => {
                setAbout(false);
                setExperience(false);
                setContact(true);
                setSkills(false);
                setProjects(false);
                setEducation(false);
              }}
            >
              Contact
            </button>
          </div>
          <div
            className="dataPage"
            onClick={() => {
              setAbout(false);
              setSkills(false);
              setProjects(false);
              setEducation(false);
              setExperience(false);
              setContact(false);
            }}
          >
            <h2 className="h2">Abdallah Al-Momani</h2>
            <p className="p">Full-Stack Web Developer</p>
            <div className="iconsDiv">
              <a
                className="anckor"
                href="https://www.linkedin.com/in/abdallah-al-momani/"
              >
                <BsLinkedin className="icons" />
              </a>
              <a href="https://www.facebook.com/abdallah.almomani.7">
                <AiFillFacebook className="icons" />
              </a>
              <SiGmail className="icons" />
              <a href="https://github.com/AbdullahMomani">
                <AiFillGithub className="icons" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
