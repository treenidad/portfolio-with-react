import React, { useState } from "react";

const NavBar = () => {
  const [listNav] = useState(["home", "skills", "project", "contacts"]);
  return (
    <header>
      <div className="logo.png">
        <img src="/logo512.png" alt="" />
      </div>
      <nav>
        {listNav.map((value, key) => (
          <span key={key}>{value}</span>
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
