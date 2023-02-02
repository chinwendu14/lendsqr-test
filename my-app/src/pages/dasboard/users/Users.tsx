import React, { useEffect, useState } from "react";
import UserCard from "../../../components/userCard/UserCard";
import "./user.scss";
import { BsWifi, BsThreeDotsVertical } from "react-icons/bs";
import BASE_URL from "../../../config";
import Moment from "react-moment";
import SpinnerLoader from "../../../components/spinnerloader/SpinnerLoader";
import ReactPaginate from "react-paginate";
import { MdArrowDropDown } from "react-icons/md";
import TextField from "../../../components/inputField/TextField";
import { BsEye, BsPersonCheck, BsPersonX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [user, setUsers] = useState([]);
  const [userLoading, setUsersLoading] = useState(true);
  const [totalUser, setTotalUser] = useState([]);
  const [orgValue, setorgValue] = useState("");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [date, setdate] = useState("");
  const [status, setstatus] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    try {
      const getUsers = async () => {
        const userList = await BASE_URL.get("/users");
        const response = userList.data;
        if (response) {
          setUsers(response.slice(0, 10));
          setUsersLoading(false);
          setTotalUser(response);
        }
      };
      getUsers();
    } catch (err) {
      console.log(err);
      setUsersLoading(false);
    }
  }, []);
  const handlePageClick = async (data: any) => {
    const currentPage = data.selected + 1;
    const refreshUser = await BASE_URL.get("/users");
    const response = refreshUser.data;
    if (currentPage) {
      setUsers(response.slice(currentPage * 10 - 10, currentPage * 10));
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleOrgName();
    handleUserName();
    handleEmail();
    handleStatus();
  };
  const handleOrgName = async () => {
    const orgList = await BASE_URL.get("/users");
    if (orgValue !== "") {
      const filterOrg = orgList.data.filter((item: any) => {
        return item.orgName.toLowerCase().includes(orgValue.toLowerCase());
      });
      setUsers(filterOrg);
    }
  };

  const handleUserName = async () => {
    const orgList = await BASE_URL.get("/users");
    if (username !== "") {
      const filterOrg = orgList.data.filter((item: any) => {
        return item.userName.toLowerCase().includes(username.toLowerCase());
      });
      setUsers(filterOrg);
    }
  };
  const handleEmail = async () => {
    const orgList = await BASE_URL.get("/users");
    if (email !== "") {
      const filterOrg = orgList.data.filter((item: any) => {
        return item.email.toLowerCase().includes(email.toLowerCase());
      });
      setUsers(filterOrg);
    }
  };

  const handleStatus = async () => {
    const orgList = await BASE_URL.get("/users");
    if (status === "inactive") {
      const filterOrg = orgList.data.filter(
        (item: any) => parseInt(item.lastActiveDate) < 2020
      );
      setUsers(filterOrg);
    } else if (status === "active") {
      const filterOrg = orgList.data.filter(
        (item: any) => parseInt(item.lastActiveDate) > 2020 && 2024
      );
      setUsers(filterOrg);
    } else if (status === "pending") {
      const filterOrg = orgList.data.filter(
        (item: any) => parseInt(item.lastActiveDate) > 2025
      );
      setUsers(filterOrg);
    } else {
      const filterOrg = orgList.data.filter((item: any) =>
        parseInt(item.lastActiveDate)
      );
      setUsers(filterOrg);
    }
  };

  const handleChangeorgName = async (e: any) => {
    setorgValue(e.target.value);
  };
  const handleChangeUserName = async (e: any) => {
    setusername(e.target.value);
  };
  const handleChangeEmail = async (e: any) => {
    setemail(e.target.value);
  };
  const handleChangeDate = async (e: any) => {
    setdate(e.target.value);
  };
  const handleChangeStaus = async (e: any) => {
    setstatus(e.target.value);
  };
  const handleReset = async () => {
    const userList = await BASE_URL.get("/users");
    setUsers(userList.data);
  };
  return (
    <div className="users">
      <h3 className="h3">Users</h3>
      <UserCard />
      <div className="users__tableDiv">
        {userLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <SpinnerLoader />
          </div>
        ) : (
          <table>
            <thead>
              <tr>
                <th onClick={handleToggle}>
                  organization
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th onClick={handleToggle}>
                  Username
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th onClick={handleToggle}>
                  Email
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th onClick={handleToggle}>
                  Phone number
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th onClick={handleToggle}>
                  Date joined
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th onClick={handleToggle}>
                  Status
                  <i>
                    <BsWifi />
                  </i>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {user?.map((item: any) => {
                return <TableMap {...item} key={item.id} />;
              })}
            </tbody>
          </table>
        )}
        <div className={`users__searchDivContainer ${toggle ? "show" : ""}`}>
          <form>
            <p>Organization</p>
            <select onChange={handleChangeorgName}>
              <option value="">select </option>
              {user?.map((item: any, i: any) => {
                return (
                  <option key={i} value={item.orgName}>
                    {item.orgName}
                  </option>
                );
              })}
            </select>
            <TextField
              label="Username"
              value={username}
              onChange={handleChangeUserName}
              type="text"
            />
            <TextField
              label="Email"
              value={email}
              onChange={handleChangeEmail}
              type="email"
            />
            <TextField
              label="Date"
              value={date}
              onChange={handleChangeDate}
              type="datetime-local"
            />
            <select onChange={handleChangeStaus}>
              <option value={status}>select </option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
              <option value="blacklisted">Blacklisted</option>
            </select>
            <div className="users__btnDiv">
              <button className="reset" onClick={handleReset}>
                Reset
              </button>
              <button className="filter" type="submit" onClick={handleSubmit}>
                Filter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="users__paginationShowContainer">
        <div className="users__showContainer">
          <p>Showing</p>
          <p className="users__paragraph">
            10
            <i>
              <MdArrowDropDown />
            </i>
          </p>
          <p>out of {totalUser.length}</p>
        </div>
        <div className="users__paginationContainer">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageCount={10}
            marginPagesDisplayed={3}
            pageRangeDisplayed={3}
            previousLabel="<"
            // renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            nextClassName="page-item"
            activeClassName="active"
            previousLinkClassName="page-prev"
            nextLinkClassName="page-prev"
          />
        </div>
      </div>
    </div>
  );
};

export default Users;

interface Props {
  id: any;
  orgName: String;
  userName: String;
  email: any;
  phoneNumber: String;
  createdAt: any;
  lastActiveDate: any;
}
const TableMap: React.FC<Props> = ({
  id,
  orgName,
  userName,
  email,
  phoneNumber,
  lastActiveDate,
  createdAt,
}) => {
  const navigate = useNavigate();
  const [showdot, setShowDot] = useState(false);

  const handleShowDot = () => {
    setShowDot(!showdot);
  };

  return (
    <tr>
      <td>{orgName}</td>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>
        <Moment format="MMM DD, YYYY HH:MM A">{createdAt}</Moment>
      </td>
      <td>
        <p
          className={`${
            parseInt(lastActiveDate) < 2020
              ? "Inactive"
              : parseInt(lastActiveDate) > 2020 && 2024
              ? "Active"
              : parseInt(lastActiveDate) > 2025 && 3000
              ? "pending"
              : "Blacklisted"
          }`}
        >
          {`${
            parseInt(lastActiveDate) < 2020
              ? "Inactive"
              : parseInt(lastActiveDate) > 2020 && 2024
              ? "Active"
              : parseInt(lastActiveDate) > 2025
              ? "pending"
              : "Blacklisted"
          }`}
        </p>
      </td>
      <td>
        <i onClick={handleShowDot}>
          <BsThreeDotsVertical />
        </i>
        <div className={`users__dotDiv ${showdot ? "showdot" : ""}`}>
          <p onClick={() => navigate(`/dashboard/user/user-detail/:${id}`)}>
            <i>
              <BsEye />
            </i>
            View Details
          </p>
          <p>
            <i>
              <BsPersonX />
            </i>
            Blacklist User
          </p>
          <p>
            <i>
              <BsPersonCheck />
            </i>
            Activate User
          </p>
        </div>
      </td>
    </tr>
  );
};
