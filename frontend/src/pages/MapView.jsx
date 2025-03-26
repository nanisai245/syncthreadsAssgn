import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../utils/axios";
import CardDetails from "../components/CardDetails";
import CardMap from "../components/CardMap";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;

  .left {
    width: 50%;
  }

  .right {
    width: 60%;
    padding-left: 3rem;
  }
`;

function MapView() {
  const [hotelInfo, setHotelInfo] = useState({});
  const [mapInfo, setMapInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axiosInstance.get(`/map/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const mapData = {
        center: res.data.data.center,
        zoom: res.data.data.zoom,
      };

      setHotelInfo(res.data.data.hotel);
      setMapInfo(mapData);
    };

    fetchData();
  }, [id]);

  return (
    <Section>
      <div className="left">
        <CardDetails {...hotelInfo} />
      </div>
      <div className="right">
        <CardMap mapInfo={mapInfo} hotelInfo={hotelInfo} />
      </div>
    </Section>
  );
}

export default MapView;
