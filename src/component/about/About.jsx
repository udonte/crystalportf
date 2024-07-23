import React from "react";
import profileImage from "../../assets/me1.png";
// import { FaAward, FaUsers, FaLaptopCode } from "react-icons/fa";
// import { AiFillFolderOpen } from "react-icons/ai";

import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profileImage} alt="About-me" />
          </div>
        </div>

        <div className="about__content">
          <p>
            As a Product Manager with a passion for turning ideas into reality.
            I've mastered the art of juggling product lifecycles, rallying
            cross-functional teams, and delivering innovative solutions that
            make users go "Wow!" My superpower? Translating business needs into
            tech specs and driving product vision like a seasoned pro. I'm all
            about crafting software solutions that not only meet but exceed
            expectations.
            <br />
            <br />
            I thrive in dynamic environments where creativity and strategy
            converge. My approach is all about collaboration — whether it’s
            brainstorming with designers, coding with engineers, or strategizing
            with marketing teams, I bring everyone together to create products
            that delight users and drive business success.
            <br />
            <br />
            <h2> Why Work with Me?</h2>
            I’m passionate about creating products that make a difference. I
            believe in the power of technology to transform lives and drive
            business growth. My goal is to lead projects that are not only
            successful but also meaningful. Let’s build something amazing
            together and make a lasting impact!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
