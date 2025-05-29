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
          I'm a recent graduate with a strong academic background and a passion for software development. Currently, I'm gaining hands-on experience at Zaytech Software, where I contribute to innovative projects and collaborate with a dynamic team. My educational journey at San Joaquin Delta College has equipped me with a solid foundation in computer science, fueling my enthusiasm for creating efficient and user-friendly software solutions.​
        </div>
        <a href="/democv.pdf" target="_blank" rel="noopeneer noreferrer">
          DOWNLOAD MY CV
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
