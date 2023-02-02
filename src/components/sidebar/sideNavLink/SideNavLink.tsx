import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./sideNavLink.scss";

interface Props {
  img?: any;
  text?: String;
  lk?: any;
  hd?: String;
}
const SideNavLink: React.FC<Props> = ({ text, img, lk, hd }) => {
  const location = useLocation();
  const [active, setactive] = useState(false);
  useEffect(() => {
    if (text === "Users" && location.pathname.endsWith("/user")) {
      setactive(true);
    } else if (location.pathname.includes(lk) && text !== "Users") {
      setactive(true);
    } else {
      setactive(false);
    }
  }, [lk, location.pathname, text]);

  const navigate = useNavigate();
  return (
    <div className="sideNavBarLink">
      {hd ? <h4>{hd}</h4> : ""}
      {text ? (
        <div
          className={`sideNavBarLink__listContainer ${active ? "active" : ""}`}
          onClick={() => navigate(lk)}
        >
          <img src={img} alt="img" />
          <p>{text}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SideNavLink;
