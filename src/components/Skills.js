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
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faReact,
    },
    {
      name: "JS",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faJs,
    },
    {
      name: "HTML",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faHtml5,
    },
    {
      name: "CSS",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faCss3,
    },
    {
      name: "Github",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faGithub,
    },
    {
      name: "MySQL",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faDatabase,
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>Skills</div>
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>Lorem ipsum</div>
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
