import React, { useState } from "react";
import { FontAwesomeIcon, FortAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  return (
    <section className="skills">
      Skill
      <div className="title">These are my skills</div>
      <div className="des">Lorem ipsum</div>
      <div className="list"> 
        {
          listSkills.map((value, key) => (
            <div key={key} className='item'>
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
