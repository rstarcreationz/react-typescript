import React from "react";
import { Link } from "react-router-dom";
import { _nav } from "../../Routes/Nav";

export const Sidebar = () => {
  return (
    <nav id="sidebar" className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="sidebar-brand">
          <a href="#">pro sidebar</a>
          <div id="close-sidebar">
            <i className="fa fa-times text-light"></i>
          </div>
        </div>

        <div className="sidebar-menu">
          <ul>
            {_nav.map((item, key) => {
              return (
                <li className="sidebar-dropdown">
                  <Link to={item.link}>
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                  {/* <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="#">
                      Dashboard 1
                      <span className="badge badge-pill badge-success">
                        Pro
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">Dashboard 2</a>
                  </li>
                  <li>
                    <a href="#">Dashboard 3</a>
                  </li>
                </ul>
              </div> */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="sidebar-footer"></div>
    </nav>
  );
};
