import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/Vector.png";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 30px;
    margin-right: 20px;
  }

  li {
    cursor: pointer;
    transition: all 0.6s ease;
    position: relative;
  }

  li a {
    color: inherit;
  }

  li::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 0;
    bottom: 0px;
    left: 0;
    background-color: black;
  }

  li:hover::after {
    width: 100%;
    transition: all 0.5s ease;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 40px;
  }
`;

function Navbar() {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  const handleLogout = async () => {
    await axiosInstance.post("/logout");
    logout();
    toast.success("User logged out successfully");
    navigate("/login");
  };

  return (
    <Header>
      <Link to="/">
        <Div>
          <img src={logo} alt="logo" />
          <h2>Expense</h2>
        </Div>
      </Link>

      <ul>
        <li>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        {!isAuth ? (
          <>
            <li>
              <NavLink to="/login">SignIn</NavLink>
            </li>
            <li>
              <NavLink to="/signup">SignUp</NavLink>
            </li>
          </>
        ) : (
          <li>
            <NavLink to="#" onClick={handleLogout}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </Header>
  );
}

export default Navbar;
