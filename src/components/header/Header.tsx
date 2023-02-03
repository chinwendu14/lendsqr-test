import React, { useState } from "react";
import { logo } from "../../assets";
import TextField from "../inputField/TextField";
import "./header.scss";
import { BsSearch } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { headerImg } from "../../assets";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="header">
      <div className="header__logoDiv">
        <img src={logo} alt="img" />
      </div>
      <div className={`header__searchImdContainerFlex ${toggle ? "show" : ""}`}>
        <div className="header__searchDiv">
          <form>
            <TextField
              placeholder="Search for anything"
              className="removeBorder"
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </div>
        <div className="header__ImgDocContainerDiv">
          <p>Docs</p>
          <span>
            <i>
              <CiBellOn />
            </i>
          </span>
          <img src={headerImg} alt="img" />
          <p className="header__paraFlex">
            Adedeji
            <span>
              <i>
                <MdArrowDropDown />
              </i>
            </span>
          </p>
        </div>
      </div>
      <div className="header__containerToggleBtn">
        <div className="header__toggleBtn" onClick={handleToggle}>
          <div className={`header__div1 ${toggle ? "rotate1" : ""}`}></div>
          <div className={`header__div2 ${toggle ? "opacity" : ""}`}></div>
          <div className={`header__div1 ${toggle ? "rotate2" : ""}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
