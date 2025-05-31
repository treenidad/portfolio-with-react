import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    {
      name: "React",
      des: "Beginner level experience with React. Learning to build basic web applications using functional components and essential hooks (useState, useEffect). Familiar with component structure and basic state management concepts.",
      icon: faReact,
    },
    {
      name: "JavaScript",
      des: "Intermediate JavaScript developer with solid understanding of ES6+ features. Experienced with promises, async/await, array methods, and DOM manipulation. Continuing to expand knowledge in advanced concepts.",
      icon: faJs,
    },
    {
      name: "HTML",
      des: "Intermediate HTML5 skills with good understanding of semantic markup and document structure. Familiar with forms, multimedia elements, and basic accessibility practices. Regularly implementing responsive layouts.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Intermediate CSS3 skills including Flexbox and Grid layouts. Comfortable with responsive design, media queries, and animations. Working knowledge of CSS preprocessors and modern styling techniques.",
      icon: faCss3,
    },
    {
      name: "Github",
      des: "Beginner level Git and GitHub user. Learning version control basics including commits, pushing/pulling, and branch management. Familiar with basic repository operations and collaborative workflows.",
      icon: faGithub,
    },
    {
      name: "MySQL",
      des: "Beginner level understanding of MySQL databases. Learning to write basic queries, create tables, and perform CRUD operations. Developing knowledge of database design principles and relationships.",
      icon: faDatabase,
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>Skills</div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>Here are the technologies I'm actively learning and developing. While I continue to grow and master these skills, I'm passionate about applying what I've learned so far in real-world projects</div>
      <div className="list"> 
        {
          listSkills.map((value, key) => (
            <div key={key} className='item' ref={(el) => el && refDivs.current.push(el)}>
              <h3>{value.name}</h3>
              <FontAwesomeIcon icon={value.icon} />
              <div className="des">
                {value.des}
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default Skills;
