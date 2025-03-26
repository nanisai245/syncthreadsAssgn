import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";

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

function CardMap({ mapInfo, hotelInfo }) {
  const { center, zoom } = mapInfo;
  const { image, title, bedrooms, price } = hotelInfo;

  return (
    <>
      {center && center.length === 2 ? (
        <MapContainer
          center={center}
          zoom={zoom}
          scrollWheelZoom={false}
          className="map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={center} icon={customIcon}>
            <Popup>
              <Div>
                <img src={image} alt={title} />
                <div className="content">
                  <p>{title}</p>
                  <p>{bedrooms} bedrooms</p>
                  <p className="price">{price}</p>
                </div>
              </Div>
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default CardMap;
