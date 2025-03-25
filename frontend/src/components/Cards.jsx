import React from "react";
import styled from "styled-components";
import { BathIcon, BedDouble, MapPinned } from "lucide-react";
import { formatter } from "../utils/ConvertCurrency";
import { Link } from "react-router-dom";

const Div = styled.div`
  display: flex;
  border-radius: 10px;
  gap: 1.5rem;
  margin-top: 30px;
  height: 200px;

  img {
    width: 300px;
    border-radius: 10px;
    object-fit: cover;
  }

  .card-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-right a {
    font-size: 20px;
    font-weight: 500;
    transition: all 0.6s ease;
  }

  .card-right a:hover {
    text-decoration: underline;
    transition: all 0.6s ease;
  }

  .address {
    font-size: 15px;
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .price {
    background-color: #e6de73;
    display: inline;
    padding: 5px;
    border-radius: 8px;
  }

  .bottom {
    display: flex;
    gap: 20px;
  }

  .bottom p {
    background-color: #ececec;
    padding: 5px;
    border-radius: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

function Cards({ id, title, image, bedrooms, bathrooms, price, address }) {
  return (
    <Div>
      <img src={image} alt={title} />
      <div className="card-right">
        <div>
          <Link to={`/hotels/${id}`}>{title}</Link>
          <p className="address">
            <MapPinned style={{ color: "gray" }} /> {address}
          </p>
          <p className="price">{formatter(price)}</p>
        </div>

        <div className="bottom">
          <p>
            <BedDouble style={{ color: "gray" }} /> {bedrooms} bedrooms
          </p>
          <p>
            <BathIcon style={{ color: "gray" }} /> {bathrooms} bathrooms
          </p>
        </div>
      </div>
    </Div>
  );
}

export default Cards;
