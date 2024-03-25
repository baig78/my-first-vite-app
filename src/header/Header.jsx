import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <nav className="menu">
        <ul>
          <li>
            <a href="/">
              <span>H</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </a>
          </li>
          <li>
            <a href="/about">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </a>
          </li>
          <li>
            <a href="/contact">
              <span>C</span>
              <span>o</span>
              <span>n</span>
              <span>t</span>
              <span>a</span>
              <span>c</span>
              <span>t</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="icon-container">
        <img src="/path/to/your/icon.png" alt="Icon" className="icon" />
      </div>
    </header>
  );
};

export default Header;
