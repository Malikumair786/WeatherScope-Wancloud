import { useState } from "react";

import InputSearch from "component/Search";
import CurrentWeather from "component/current-weather";
import Forecast from "component/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "apis/api";

import { Typography } from "antd";
const { Title, Text } = Typography;

function SearchComponent() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };

  return (
    <div className="bg-secondary w-full p-3">
      <Title style={{ color: "white" }}>City Weather Search</Title>

      <Text className="text-white text-md mt-3">
        Enter a city name to view detailed weather forecasts and conditions.
      </Text>
      <InputSearch onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default SearchComponent;
