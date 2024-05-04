import React, { useEffect, useState } from "react";

import CurrentWeather from "component/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "apis/api";

import { Typography } from "antd";
const { Title, Text } = Typography;

const cities = [
  { name: "Lahore, PK", lat: "31.5497", lon: "74.3436" },
  { name: "Karachi, PK", lat: "24.8607", lon: "67.0011" },
  { name: "Islamabad, PK", lat: "33.6844", lon: "73.0479" },
  { name: "Peshawar, PK", lat: "34.0151", lon: "71.5249" },
];

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const promises = cities.map((city) =>
        fetch(
          `${WEATHER_API_URL}/weather?lat=${city.lat}&lon=${city.lon}&appid=${WEATHER_API_KEY}&units=metric`
        )
          .then((response) => response.json())
          .then((data) => ({ city: city.name, ...data }))
      );
      const results = await Promise.all(promises);
      setWeatherData(results);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container bg-secondary max-w-full p-3">
      <Title style={{ color: "white" }}>Weather Update</Title>

      <Text className="text-white text-md mt-3">
        Weather update for Lahore, Karachi, Islamabad, and Peshawar
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {weatherData.map((data) => (
          <CurrentWeather key={data.city} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
