import React, { useState, useEffect } from "react";
import CityInfo from "./CityInfo";
import axios from 'axios';

const Main = () => {
  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("Mexico");
  const [data, setData] = useState(null);

  let onPushEnter = (e) => {
    if (e.key === "Enter") {
      setCityName(city);
    }
  };
  useEffect(() => {
      try {
        axios
          .get(
            `https://api.weatherapi.com/v1/current.json?key=dc73c66b52484a6baf024943220508&q=${cityName}&aqi=no`
          )
          .then((response) => {
            setData(response);
          });
      } catch (e) {
        console.log(e);
      }
  }, [cityName]);

  return (
    <div>
      <div>Widget Clima</div>
      <input
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
        onKeyDown={onPushEnter}
      />
      <CityInfo data={data} />
    </div>
  );
};

export default Main;
