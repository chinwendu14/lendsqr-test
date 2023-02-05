import React, { useState, useEffect } from "react";
import "./userdatail.scss";
import { BsArrowLeft, BsFillStarFill, BsStar } from "react-icons/bs";
// import { userDetailImg } from "../../../assets";
import { useParams } from "react-router-dom";
import axiosInstatnce from "../../../config";
const UserDetail = () => {
  const [showInfo, setShowinfo] = useState(1);
  const params = useParams();
  const { id } = params;
  const [userdetail, setuserdetail] = useState<any>({});
  const handlecomponent = (arg: any) => {
    setShowinfo(arg);
  };
  useEffect(() => {
    const getUser = async () => {
      const detail = await axiosInstatnce.get(`/users/${id}`);
      const response = detail.data;
      setuserdetail(response);
    };
    getUser();
  }, [id]);
  console.log(userdetail, "iiiiiiiiiiiiiiii");

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
          <img src={userdetail?.profile?.avatar} alt="img" />
          <div className="userDetail__effiongDiv">
            <h3>
              {userdetail?.profile?.firstName} {userdetail?.profile?.lastName}
            </h3>
            <p>{userdetail?.accountNumber}</p>
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
            <h3>{userdetail?.accountBalance}</h3>
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
                  <p>
                    {userdetail?.profile?.firstName}{" "}
                    {userdetail?.profile?.lastName}
                  </p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>{userdetail?.profile?.phoneNumber}</p>
                </div>
                <div>
                  <h4>Email Address</h4>
                  <p>{userdetail?.email}</p>
                </div>
                <div>
                  <h4>Bvn</h4>
                  <p>{userdetail?.profile?.bvn}</p>
                </div>
                <div>
                  <h4>Gender</h4>
                  <p>{userdetail?.profile?.gender}</p>
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
                  <p>{userdetail?.education?.level}</p>
                </div>
                <div>
                  <h4>employment status</h4>
                  <p>{userdetail?.education?.employmentStatus}</p>
                </div>
                <div>
                  <h4>sector of employment</h4>
                  <p>{userdetail?.education?.sector}</p>
                </div>
                <div>
                  <h4>Duration of employment</h4>
                  <p>{userdetail?.education?.duration}</p>
                </div>
                <div>
                  <h4>office email</h4>
                  <p>{userdetail?.education?.officeEmail}</p>
                </div>
                <div>
                  <h4>Monthly income</h4>
                  <p>{`₦${userdetail?.education?.monthlyIncome[0]}- ₦${userdetail?.education?.monthlyIncome[1]}`}</p>
                </div>
                <div>
                  <h4>loan repayment</h4>
                  <p>{userdetail?.education?.loanRepayment}</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Socials</h4>
              <div className="userDetail__gridDivSocial">
                <div>
                  <h4>Twitter</h4>
                  <p>{userdetail?.socials?.twitter}</p>
                </div>
                <div>
                  <h4>Facebook</h4>
                  <p>{userdetail?.socials?.facebook}</p>
                </div>
                <div>
                  <h4>Instagram</h4>
                  <p>{userdetail?.socials?.instagram}</p>
                </div>
              </div>
            </div>
            <div className="userDetail__personalInfoDiv">
              <h4 className="h4">Guarantor</h4>

              <div className="userDetail__gridDivFull">
                <div>
                  <h4>full Name</h4>
                  <p>
                    {userdetail?.guarantor?.firstName}{" "}
                    {userdetail?.guarantor?.lastName}
                  </p>
                </div>
                <div>
                  <h4>Phone Number</h4>
                  <p>{userdetail?.guarantor?.phoneNumber}</p>
                </div>
                <div>
                  <h4> Address</h4>
                  <p>{userdetail?.guarantor?.address}</p>
                </div>
                <div>
                  <h4>Relationship</h4>
                  <p>{userdetail?.guarantor?.gender}</p>
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
