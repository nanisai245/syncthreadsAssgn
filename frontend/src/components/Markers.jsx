import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

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
    <Marker position={[latitude, longitude]} icon={customIcon}>
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
