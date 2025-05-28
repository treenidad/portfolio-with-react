import React, {useRef} from "react";
import CustomHook from "./CustomHook";

const Home = () => {
  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="home" ref={refTab}>
      <div className="content">
        <div className="name">
          MY NAME IS <span>Kevin Trinidad</span>
        </div>
        <div className="des">
          lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <a href="/democv.pdf" target="_blank" rel="noopeneer noreferrer">
          Download My CV
        </a>
      </div>
      <div className="avatar">
        <div className="card">
          <img src="/profile-pic.jpg" alt="profile-pic" />
          <div className="info">
            <div>Developer</div>
            <div>Filipino</div>
            <div>12/18</div>
            <div>Male</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
