import React from "react";
import { Link } from "react-router-dom";

const WebHeader: React.FC = () => {
  return (
    <React.Fragment>
      <header className="webheader">
        <nav className="web-nav">
          <Link to="/">Dubai</Link>

          <ul className="web-navbar">
            <li className="web-navitem">
              <Link to="/">Home</Link>
            </li>
            <li className="web-navitem">
              <Link to="/">About</Link>
            </li>
            <li className="web-navitem">
              <Link to="/">Service</Link>
            </li>
            <li className="web-navitem">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default WebHeader;
