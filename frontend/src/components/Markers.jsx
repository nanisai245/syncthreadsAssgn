import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  gap: 10px;
  max-height: 100px;

  img {
    width: 90px;
    object-fit: cover;
    height: 60px;
    border-radius: 5px;
  }

  .content {
  }

  .content p {
    margin-top: 6px;
  }

  .price {
    position: relative;
    top: -10px;
  }
`;

function Markers({ id, latitude, longitude, image, title, bedrooms, price }) {
  return (
    <Marker position={[latitude, longitude]}>
      <Popup>
        <Div>
          <img src={image} alt={title} />
          <div className="content">
            <Link to={`/hotels/${id}`}>{title}</Link>
            <p>{bedrooms} bedrooms</p>
            <p className="price">{price}</p>
          </div>
        </Div>
      </Popup>
    </Marker>
  );
}

export default Markers;
