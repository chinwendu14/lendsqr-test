import React from "react";
import Header from "../components/header/Header";
import SideNav from "../components/sidebar/SideNav";
import "./layout.scss";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__container">
        <div className="layout__sidebarContainer">
          <SideNav />
        </div>
        <div className="layout__childrenDiv">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
