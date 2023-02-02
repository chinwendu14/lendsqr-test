import React from "react";
import { usericon, activeUsers, userloan, userSavings } from "../../assets";
import "./userCard.scss";
const UserCard = () => {
  return (
    <div className="usersCard">
      <div className="usersCard__container">
        <img src={usericon} alt="='img" />
        <p>usersCard</p>
        <h3>2,453</h3>
      </div>
      <div className="usersCard__container">
        <img src={activeUsers} alt="='img" />
        <p>Active usersCard</p>
        <h3>2,453</h3>
      </div>
      <div className="usersCard__container">
        <img src={userloan} alt="='img" />
        <p>usersCard with Loans</p>
        <h3>12,453</h3>
      </div>
      <div className="usersCard__container">
        <img src={userSavings} alt="='img" />
        <p>usersCard with Savings</p>
        <h3>102,453</h3>
      </div>
    </div>
  );
};

export default UserCard;
