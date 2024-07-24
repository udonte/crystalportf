import React from "react";
import portfolio1 from "../../assets/portfolio1.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.png";

import "./portfolio.css";

const data = [
  {
    id: 1,
    image: portfolio1,
    title: " Product Plan: Language Learning AI Game",
    details: "A product plan for the Language Learning AI Game. ",
    link: "https://docs.google.com/presentation/d/19KtX8PbLxrj3xo7gBDEK9pivCSebLd1GnuiUuD5xKq4/edit?usp=drivesdk",
  },
  {
    id: 2,
    image: portfolio2,
    title: " Market intelligence Report: Language Learning AI Game. ",
    details: "Market intelligence Report for the language Learning AI game. ",
    link: "https://docs.google.com/document/d/11piiHW-Mth-W8dhdqVXThTtPBHAEvTphtgyTg7n1b3Q/edit?usp=drivesdk",
  },
  {
    id: 3,
    image: portfolio3,
    title: " Boilerplate Product Requirement Doc: Language Learning AI Game. ",
    details: "PRD for the php boilerplate of the language Learning AI Game ",
    link: "https://docs.google.com/document/d/1EToBnQGdevgYhb0NeQCrw4jUAIeFzGA_1j_xBxuX4js/edit?usp=drivesdk",
  },
  {
    id: 4,
    image: portfolio4,
    title: " Functional Requirement Doc: Language Learning AI Game. ",
    details: "FRD template for the language Learning AI game.  ",
    link: "https://docs.google.com/document/d/1ZsQyo_FcmSCZWwZJOHoQ13PegwldaqAzfuF8WKIcKYw/edit?usp=drivesdk",
  },
  {
    id: 5,
    image: portfolio5,
    title: " Product Requirement Doc: Language Learning AI Game. ",
    details: "PRD template for the language Learning AI game.  ",
    link: "https://docs.google.com/document/d/1aPerPLdsp4je7KcJsjBrjnVrG4m4FQxJJpTqD6kcbeM/edit?usp=drivesdk",
  },
  {
    id: 6,
    image: portfolio6,
    title: " Ticket/Tasks Creation: Language Learning AI Game. ",
    details:
      "Tickets for a feature of the FRD i.e dramatic storyline ticket for the language Learning AI game.  ",
    link: "https://docs.google.com/spreadsheets/d/1a-61O-KfLNdTR4huaBJw3g7ZMw-Vlt1aTy2hpHdYxv8/edit",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, link }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio_item-image">
                <img src={image} alt="first portfolio" />
              </div>
              <h3>{title}</h3>
              <h6>{details}</h6>
              <div className="portfolio__item-cta">
                <a
                  href={link}
                  className="btn btn-primary cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  Link
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
