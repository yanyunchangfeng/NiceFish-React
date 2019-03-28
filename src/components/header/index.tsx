import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import * as nicefish from "../../assets/images/nice-fish.png";

function Header() {
  const [active, updateActive] = useState(false);
  function onToggle() {
    updateActive(!active);
  }
  return (
    <div
      className="bd-navbar main-nav navbar no-padding text-white"
      role="navigation"
    >
      <div className="container justify-content-start no-padding">
        <div className="d-flex col-sm-12 col-md-auto no-gutters">
          <div className="d-flex col-sm">
            <a className="navbar-brand-my ">
              <img width="45" src={`${nicefish}`} />
            </a>
            <a
              className="d-flex align-items-center d-md-none  ml-sm-auto"
              onClick={() => onToggle()}
            >
              <i className="fa fa-bars font-size-30 text-white" />
            </a>
          </div>
        </div>

        <div
          className={`d-flex col d-sm-none d-md-flex collapse ${
            active ? "d-sm-flex" : ""
          }`}
        >
          <ul className={`navbar-nav bd-navbar-nav flex-row`}>
            <li>
              <NavLink to="/post">阅读</NavLink>
            </li>
            <li>
              <NavLink to="/write">写作</NavLink>
            </li>
          </ul>
          <ul className={`nav navbar-nav ml-md-auto flex-row `}>
            <li>
              <NavLink to="/login">
                <i className="fa fa-sign-in" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/l">
                <i className="fa fa-user" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/manage">
                {" "}
                <i className="fa fa-cog" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/out">
                <i className="fa fa-sign-out" />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Header;
