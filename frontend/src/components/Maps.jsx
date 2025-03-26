import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { axiosInstance } from "../utils/axios";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";

function Maps() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axiosInstance.get("/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data.data;
        setHotels(data.dummyData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHotels();
  }, []);

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {hotels.map((each) => (
        <Markers key={each.id} {...each} />
      ))}
    </MapContainer>
  );
}

export default Maps;
