import React from "react";

const CityInfo = ({ data }) => {
  return (
    <div>
      {data !== null ? (
        <div>
          <div>{data.data.location.name}</div>
          <div>
            <img
              src={`${data.data.current.condition.icon}`}
              alt={data.data.current.condition.text}
            />
          </div>
          <div>{data.data.current.temp_c}</div>
        </div>
      ) : null}
    </div>
  );
};

export default CityInfo;
