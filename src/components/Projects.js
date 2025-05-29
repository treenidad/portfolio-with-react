import React, {useState, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import CustomHook from "./CustomHook";

const Projects = () => {
  const [listProjects] = useState([
    {
      name: 'Forkify – Recipe Search App',
      des: 'A responsive web application that allows users to search, view, and bookmark recipes. Features include dynamic ingredient display, serving size adjustments, and persistent bookmarks using localStorage',
      mission: 'To help users find new and exciting recipes',
      language: 'JavaScript, HTML5, CSS, API, Model-View-Controller (MVC), Git, Netlify, Parcel',
      images:'/forkify-project.jpg'
    },
        {
      name: 'Oni-Fans – E-commerce Website',
      des: 'An e-commerce platform for a custom apparel brand inspired by anime and fan-fiction. Created using WordPress and WooCommerce with custom page layouts in Elementor. Includes user-friendly product navigation, mobile responsiveness, and integrated cart/checkout experience. A hands-on project focused on real-world e-commerce functionality and branding.',
      mission: 'Build a platform for an custom apparel business to sell their products online.',
      language: 'WordPress, WooCommerce, Elementor, WordPress Design, E-Commerce',
      images:'/full-website.jpg'
    },
        {
      name: 'Weather Web App',
      des: 'Effortlessly providing weather updates for any city inputted by the user through a user-friendly web application.',
      mission: 'Provide an outlook of the current weather details for a user-designated city',
      language: 'JavaScript, HTML, CSS, API',
      images:'/weather-app.jpg'
    },
  ])
  const refTab = useRef();
  const refDivs = useRef([]);
  CustomHook(refTab, refDivs);


  return(
    <section className="projects" ref={refTab}>
      <div className="title" ref={(el) => el && refDivs.current.push(el)}>
        Projects
      </div>
      
      <div className="des" ref={(el) => el && refDivs.current.push(el)}>
        Lorem ipsum dolor sit amet. Sed libero suscipit ab nobis dolorum non consequuntur consequuntur sed voluptatem aliquam ut consectetur rerum. Eos earum sapiente rem facilis ullam qui voluptatum amet At tempore exercitationem non voluptas inventore'
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div key={key} className="item" ref={(el) => el && refDivs.current.push(el)}>
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
                      <div className="de">{value.language}</div>
                    </div>
                  </div>
                </div>
            </div>
          ))
        }
      </div>
    </section>
  )
};

export default Projects;
