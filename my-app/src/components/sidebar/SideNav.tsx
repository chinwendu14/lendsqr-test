import React from "react";
import "./sideNav.scss";
import { MdArrowDropDown } from "react-icons/md";
import { briefcase } from "../../assets";
import List from "./sideList";
import SideNavLink from "./sideNavLink/SideNavLink";
const SideNav = () => {
  return (
    <div className="sideNav">
      <div className="sideNav__switchDiv">
        <img src={briefcase} alt="img"></img>
        <p className="p">Switch Organization</p>
        <i>
          <MdArrowDropDown />
        </i>
      </div>
      {List.map((item, i) => {
        return <SideNavLink {...item} key={i} />;
      })}
    </div>
  );
};

export default SideNav;
