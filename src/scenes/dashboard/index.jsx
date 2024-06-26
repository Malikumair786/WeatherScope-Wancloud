import React, { useEffect, useState } from "react";
import axios from "axios";

import CurrentWeather from "component/current-weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "apis/api";
import Loader from "component/Loader";
import { useLoading } from "context/LoadingContext";

import { Typography } from "antd";
const { Title, Text } = Typography;

const cities = [
  { name: "Lahore, PK", lat: "31.5497", lon: "74.3436" },
  { name: "Karachi, PK", lat: "24.8607", lon: "67.0011" },
  { name: "Islamabad, PK", lat: "33.6844", lon: "73.0479" },
  { name: "Peshawar, PK", lat: "34.0151", lon: "71.5249" },
];

const Dashboard = () => {
  const { isLoading, setLoading } = useLoading();
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const promises = cities.map((city) =>
          axios.get(`${WEATHER_API_URL}/weather`, {
            params: {
              lat: city.lat,
              lon: city.lon,
              appid: WEATHER_API_KEY,
              units: "metric",
            },
          })
        );
        const results = await Promise.all(promises);
        const weatherResults = results.map((result, index) => ({
          city: cities[index].name,
          ...result.data,
        }));
        setWeatherData(weatherResults);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="container bg-secondary max-w-full p-3">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title style={{ color: "white" }}>Weather Update</Title>
          <Text className="text-white text-md mt-3">
            Weather update for Lahore, Karachi, Islamabad, and Peshawar
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {weatherData.map((data) => (
              <CurrentWeather key={data.city} data={data} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
