import React, { useState } from "react";
import { FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "HTML",
      des: "Lorem ipsum",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Lorem ipsum",
      icon: faCss3,
    },
    {
      name: "JS",
      des: "Lorem ipsum",
      icon: faJs,
    },
    {
      name: "React",
      des: "Lorem ipsum",
      icon: faReact,
    },
    {
      name: "VueJS",
      des: "Lorem ispum",
      icon: faVuejs,
    },
    {
      name: "Laravel",
      des: "Lorem ipsum",
      icon: faLaravel,
    },
  ]);
  return (
    <section className="skills">
      Skill
      <div className="title">These are my skills</div>
      <div className="des">Lorem ipsum</div>
      <div className="list"></div>
    </section>
  );
};

export default Skills;
