import React, { useContext, useState } from "react";
import styled from "styled-components";
import backgroundImage from "../assets/bg.png";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .image img {
    width: 580px;
  }

  .form-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .form-container form {
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-container form h3 {
    margin-bottom: 2rem;
    font-size: 25px;
  }

  .form-container form input {
    margin-bottom: 20px;
    width: 100%;
    border-radius: 5px;
    outline: none;
    border: 1px solid gray;
    padding: 10px;
  }

  .form-container form input::placeholder {
    font-size: 14px;
  }

  .form-container form button {
    width: 100%;
    padding: 10px;
    border: none;
    background-color: teal;
    border-radius: 5px;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
`;

function Signup() {
  const { signup } = useContext(AuthContext);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e, name) => {
    setUserData((prev) => ({ ...prev, [name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/signup", userData);

      if (res.status === 201) {
        signup(res.data.token);
        toast.success("User created successfully");
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Signup failed");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <Main>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3>Create Account</h3>
          <input
            type="text"
            placeholder="Username"
            value={userData.username}
            onChange={(e) => handleChange(e, "username")}
          />
          <input
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) => handleChange(e, "email")}
          />
          <input
            type="password"
            placeholder="Password"
            value={userData.password}
            onChange={(e) => handleChange(e, "password")}
          />

          <button>Register</button>
        </form>
        <p style={{ fontSize: "15px" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blueviolet" }}>
            SignIn
          </Link>
        </p>
      </div>

      <div className="image">
        <img src={backgroundImage} alt="background-image" />
      </div>
    </Main>
  );
}

export default Signup;
