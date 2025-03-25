import React from "react";
import styled from "styled-components";
import { BathIcon, BedDouble, MapPinned } from "lucide-react";
import { formatter } from "../utils/ConvertCurrency";

const Div = styled.div`
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  .address {
    font-size: 15px;
    margin-bottom: 30px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: 500;
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
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .description {
    line-height: 1.8;
    font-weight: 500;
  }
`;

function CardDetails({
  address,
  title,
  bathrooms,
  bedrooms,
  description,
  image,
  price,
}) {
  return (
    <Div>
      <img src={image} alt={title} />
      <p className="title">{title}</p>
      <p className="address">
        <MapPinned style={{ color: "gray" }} /> {address}
      </p>
      <p className="price">{formatter(price)}</p>
      <div className="bottom">
        <p>
          <BedDouble style={{ color: "gray" }} /> {bedrooms} bedrooms
        </p>
        <p>
          <BathIcon style={{ color: "gray" }} /> {bathrooms} bathrooms
        </p>
      </div>
      <p className="description">{description}</p>
    </Div>
  );
}

export default CardDetails;
