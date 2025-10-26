import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather? :", weather);

  // 온도 계산
  const tempC = weather?.main?.temp;
  const feelsC = weather?.main?.feels_like;
  const tempF = tempC ? (tempC * 9) / 5 + 32 : null;
  const feelsF = feelsC ? (feelsC * 9) / 5 + 32 : null;

  return (
    <div className="weather-box">
      <div className="location">{weather?.name}</div>

      {tempC !== undefined ? (
        <>
          <h2>
            🌡️ {tempC.toFixed(1)}°C / {tempF.toFixed(1)}°F
          </h2>
          <p>
            체감온도: {feelsC.toFixed(1)}°C / {feelsF.toFixed(1)}°F
          </p>
        </>
      ) : (
        <h2>온도 정보를 불러오는 중...</h2>
      )}

      <h3>{weather?.weather?.[0]?.description}</h3>
    </div>
  );
};

export default WeatherBox;
