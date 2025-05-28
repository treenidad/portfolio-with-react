import React, { useState, useRef } from "react";
import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import CustomHook from "./CustomHook";

const Skills = () => {
  const [listSkills] = useState([
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
      name: "JS",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faJs,
    },
    {
      name: "React",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faReact,
    },
    {
      name: "VueJS",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faVuejs,
    },
    {
      name: "Laravel",
      des: "Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore.",
      icon: faLaravel,
    },
  ]);
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);
  return (
    <section className="skills" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>These are my skills</div>
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
