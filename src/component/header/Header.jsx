import React from "react";
import CTA from "./cta";
import HeaderSocials from "./HeaderSocials";
import profileImage from "../../assets/me2.png";

import "./header.css";

const Header = () => {
  return (
    <header id="top">
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Christianah Atunbi</h1>
        <h5 className="text-light">
          I'm a Product Manager, and I manage and also grow tech solutions for
          the Universe.
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="header__profile-image-container">
          <img src={profileImage} className="profileImage" alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
