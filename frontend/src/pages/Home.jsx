import React from "react";
import { Link } from "react-router-dom";
// import { ArrowBigRightDash } from "lucide-react";
import backgroundImage from "../assets/bg.png";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .content {
    max-width: 700px;
  }

  .content h1 {
    font-size: 55px;
    font-weight: 600;
    margin-bottom: 25px;
  }

  .content p {
    font-size: 16px;
  }

  .image img {
    width: 580px;
  }

  a {
    color: inherit;
  }

  .sign-in {
    margin-top: 8rem;

    transition: all 0.6s ease;
  }

  .sign-in a {
    font-size: 18px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 10px;
    transition: all 0.6s ease;
  }

  .sign-in a:hover {
    background-color: #fcf5f3;
    outline: none;
    transition: all 0.6s ease;
  }
`;

function Home() {
  return (
    <Main>
      <div className="content">
        <h1>Find one of the best hotels in India</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam cum
          repellendus, illum totam, veniam velit eos tempore nulla dolore eius
          esse id saepe vero error. Sapiente nulla magnam similique accusamus?
        </p>
        <p className="sign-in">
          Want to view hotels ? <Link to="/login">Sign In</Link>
        </p>
      </div>
      <div className="image">
        <img src={backgroundImage} alt="background-image" />
      </div>
    </Main>
  );
}

export default Home;
