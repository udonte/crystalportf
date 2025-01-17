import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        Christianah Atunbi
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li><a href="#services">Services</a></li> */}
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/christianah-atunbi-7aa36723a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
        >
          <BsLinkedin />{" "}
        </a>
        <a href="https://twitter.com/ChristianahIfe4">
          <BsTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <p>
          Powered by <a href="https://hng.tech/">HNG.TECH</a>
        </p>
        <small>&copy; Christianah Atunbi 2024. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
