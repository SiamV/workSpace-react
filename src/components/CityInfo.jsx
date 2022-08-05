import React from "react";
import Preloader from "./utiles/Preloader/Preloader.js";
import classes from "./cityInfo.module.css"

const CityInfo = ({ data }) => {
  return (
    <div>
      {data !== null ? (
        <div className={classes.cityInfoContainer}>
          <div className={classes.cityName}>{data.data.location.name}</div>
          <div>
            <img
              src={`${data.data.current.condition.icon}`}
              alt={data.data.current.condition.text}
            />
          </div>
          <div className={classes.cityTemp}>{data.data.current.temp_c}</div>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  );
};

export default CityInfo;
