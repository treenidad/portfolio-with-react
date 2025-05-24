import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Project 1',
      des: 'Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore',
      mission: 'Purpose/reason for the project.',
      language: 'HTML5, CSS, JS, React,...',
      image:'/project1.png'
    },
        {
      name: 'Project 2',
      des: 'Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore',
      mission: 'Purpose/reason for the project.',
      language: 'HTML5, CSS, JS, React,...',
      image:'/project2.png'
    },
        {
      name: 'Project 3',
      des: 'Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore',
      mission: 'Purpose/reason for the project.',
      language: 'HTML5, CSS, JS, React,...',
      image:'/project3.png'
    },
  ])
  
  return(
    <section className="projects">
      <div className="title">
        This is my Projects
      </div>
      
      <div className="des">
        Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore'
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div key={key} className="item">
              <div className="images">
                <img src={value.images} alt=""/>
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon= {faPersonCircleQuestion} /></div>
                    <div>
                      <h4>Mission</h4>
                      <div className="de">{value.mission}</div>
                    </div>
                  </div>
                  <div className="mission">
                  <div><FontAwesomeIcon icon= {faEarthAmericas} /></div>
                    <div>
                      <h4>Language</h4>
                      <div className="de">{value.laguage}</div>
                    </div>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
  ))
    </section>
  )
};

export default Projects;
