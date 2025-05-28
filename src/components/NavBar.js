import React, { useState } from "react";
import { Connect, connect, useDispatch } from "react-redux";
import { changeTabActive } from "../redux/action";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

const NavBar = ({ activeTab }) => {
  const [listNav] = useState(["home", "skills", "projects", "contacts"]);
  const dispatch = useDispatch();
  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();
  };
  const [statusNav, setStatusNav] = useState('');
  const toggleNav = () => {
    setStatusNav(statusNav === 'active' ? null : 'active')
  }
  return (
    <header>
      <div className="logo">
        <img src="/logo192.png" alt="" />
      </div>
      <nav className={statusNav}>
        {listNav.map((value, key) => (
          <span
            key={key}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav> 
      <div className="icon-bar" onClick={toggleNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </header>
  );
};
const mapStateToProps = (state) => ({
  activeTab: state.activeTab,
});

export default connect(mapStateToProps, { changeTabActive })(NavBar);
