import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axios";
import styled from "styled-components";
import Cards from "../components/Cards";
import Maps from "../components/Maps";

const Section = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;

  .maps {
    width: 37%;
  }
`;

const Div = styled.div`
  flex: 2;
  padding-right: 100px;

  h3 {
    font-weight: 400;
    margin-bottom: 10px;
  }

  .drop-down {
    width: 100%;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 15px;
    outline: none;
    margin-top: 2px;
    cursor: pointer;
  }

  main {
    margin-top: 30px;
    overflow: auto;
    max-height: 800px;
  }
`;

function Dashboard() {
  const [hotels, setHotels] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

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
        console.log(data);
        setHotels(data.dummyData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchHotels();
  }, []);

  const filteredHotels = selectedCity
    ? hotels.filter((hotel) => hotel.address.includes(selectedCity))
    : hotels;

  return (
    <Section>
      <Div>
        <h3>
          Search results for
          <span
            style={{ fontWeight: "600", marginLeft: "6px", fontSize: "20px" }}
          >
            {selectedCity}
          </span>
        </h3>
        <label>Location</label>
        <br />
        <select
          className="drop-down"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="" selected disabled>
            Select a city
          </option>
          <option value="Udaipur">Udaipur</option>
          <option value="Goa">Goa</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Jaipur">Jaipur</option>
        </select>
        <main>
          {filteredHotels.map((each) => (
            <Cards key={each.id} {...each} />
          ))}
        </main>
      </Div>
      <div className="maps">
        <Maps />
      </div>
    </Section>
  );
}

export default Dashboard;
