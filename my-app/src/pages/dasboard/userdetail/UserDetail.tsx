import React, { useState } from "react";
import "./userdatail.scss";
import { BsArrowLeft, BsFillStarFill, BsStar } from "react-icons/bs";
import { userDetailImg } from "../../../assets";
const UserDetail = () => {
  const [showInfo, setShowinfo] = useState(1);

  const handlecomponent = (arg: any) => {
    setShowinfo(arg);
  };
  return (
    <div className="userDetail">
      <p className="icon">
        <i>
          <BsArrowLeft />
        </i>
        Back to Users
      </p>
      <div className="userDetail__containerDiv">
        <h4>User Details</h4>
        <div className="userDetail__blackActiveContainerFlex">
          <div className="userDetail__black">Blacklist User</div>
          <div className="userDetail__active">Activate User</div>
        </div>
      </div>
      <div className="userDetail__boxshadow">
        <div className="userDetail__FlexContainer">
          <img src={userDetailImg} alt="img" />
          <div className="userDetail__effiongDiv">
            <h3>Grace Effiom</h3>
            <p>LSQFf587g90</p>
          </div>
          <div className="userDetail__userTierDiv">
            <h3>User’s Tier</h3>
            <p>
              <i className="fill">
                <BsFillStarFill />
              </i>
              <i>
                <BsStar />
              </i>

              <i>
                <BsStar />
              </i>
            </p>
          </div>
          <div className="userDetail__moneyDiv">
            <h3>₦200,000.00</h3>
            <p>9912345678/Providus Bank</p>
          </div>
        </div>
        <div className="userDetail__headerContainer ">
          <p
            className={` ${showInfo ? "paragrapcolor" : ""}`}
            onClick={() => handlecomponent(1)}
          >
            General Details
          </p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className="userDetail__shadowContainer">
        {showInfo === 1 && (
          <div className="userDetail__containerInfo">
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Personal Information</h4>
              <div className="userDetail__gridDiv">
                <div>
                  <h4>full Name</h4>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>07060780922</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>grace@gmail.com</p>
                </div>
                <div>
                  <h4>Bvn</h4>
                  <p>07060780922</p>
                </div>
                <div>
                  <h4>Gender</h4>
                  <p>Female</p>
                </div>
                <div>
                  <h4>Marital status</h4>
                  <p>Single</p>
                </div>
                <div>
                  <h4>Children</h4>
                  <p>None</p>
                </div>
                <div>
                  <h4>Type of residence</h4>
                  <p>Parent’s Apartment</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Education and Employment</h4>
              <div className="userDetail__gridDivEdu">
                <div>
                  <h4>level of education</h4>
                  <p>B.Sc</p>
                </div>
                <div>
                  <h4>employment status</h4>
                  <p>Employed</p>
                </div>
                <div>
                  <h4>sector of employment</h4>
                  <p>FinTech</p>
                </div>
                <div>
                  <h4>Duration of employment</h4>
                  <p>2 years</p>
                </div>
                <div>
                  <h4>office email</h4>
                  <p>grace@lendsqr.com</p>
                </div>
                <div>
                  <h4>Monthly income</h4>
                  <p>₦200,000.00- ₦400,000.00</p>
                </div>
                <div>
                  <h4>loan repayment</h4>
                  <p>40,000</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Socials</h4>
              <div className="userDetail__gridDivSocial">
                <div>
                  <h4>Twitter</h4>
                  <p>@grace_effiom</p>
                </div>
                <div>
                  <h4>Facebook</h4>
                  <p>Grace Effiom</p>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p>@grace_effiom</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Guarantor</h4>

              <div className="userDetail__gridDivFull">
                <div>
                  <h4>full Name</h4>
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>07060780922</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <h4>Relationship</h4>
                  <p>Sister</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Socials</h4>
              <div className="userDetail__gridDivFull">
                <div>
                  <h4>full Name</h4>
                  <p>Debby Ogana</p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>07060780922</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>debby@gmail.com</p>
                </div>
                <div>
                  <h4>Relationship</h4>
                  <p>Sister</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
