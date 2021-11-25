import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";

const API_KEY = "182a4a25434918d6df7d79ed90796e00";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 330px;
  background: white;
  font-family: Montserrat;
  background: linear-gradient(papayawhip,rgb(233, 179, 92))
`;
const AppLable = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    updateWeather(response.data);
    console.log(response);
  };
  return (
    <Container>
      <AppLable>Weather App By Sumit </AppLable>
      {weather ? (
        <WeatherComponent weather={weather}/>
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
