import React from "react";
// import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const skills = [
  "Product Management",
  "Cross-Functional Leadership",
  "Market Research and Analysis",
  "Agile Methodologies",
  "Data-Driven Decision Making",
  "Stakeholder Management",
  "User Experience (UX) Design",
  "JIRA",
  "Trello",
  "Slack",
  "Microsoft Teams",
  "Zoom",
  "Miro",
  "Canva",
  "HTML",
  "CSS",
  "Github",
  "Notion",
  "Google Workspace",
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I can do </h5>
      <h2>My Skills</h2>
      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <div className="experience__content">
            {skills.map((skill, id) => {
              return (
                <ul className="experience__details" key={id}>
                  <li className="experience_list">{skill}</li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
