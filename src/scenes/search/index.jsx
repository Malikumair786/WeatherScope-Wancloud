import { useState } from "react";
import axios from "axios";

import InputSearch from "component/Search";
import CurrentWeather from "component/current-weather";
import Forecast from "component/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "apis/api";
import Loader from "component/Loader";
import { useLoading } from "context/LoadingContext";

import { Typography } from "antd";
const { Title, Text } = Typography;

function SearchComponent() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const { isLoading, setLoading } = useLoading();

  const handleOnSearchChange = async (searchData) => {
    setLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    try {
      const urls = [
        `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
        `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      ];

      const [weatherResponse, forecastResponse] = await Promise.all(
        urls.map((url) => axios.get(url))
      );

      setCurrentWeather({ city: searchData.label, ...weatherResponse.data });
      setForecast({ city: searchData.label, ...forecastResponse.data });
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary w-full p-3">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Title style={{ color: "white" }}>City Weather Search</Title>
          <Text className="text-white text-md mt-3">
            Enter a city name to view detailed weather forecasts and conditions.
          </Text>
          <InputSearch onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </>
      )}
    </div>
  );
}

export default SearchComponent;
