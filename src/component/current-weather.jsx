import React from "react";
import { Image } from "antd";

const CurrentWeather = ({ data }) => {
  return (
    <div className="bg-primary border-2 border-primary p-4 w-[80%] mx-auto mt-5 rounded-md shadow-lg text-white">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="font-semibold text-lg leading-none tracking-wide mb-2">
            {data.city}
          </p>
          <p className="font-normal text-base leading-none mb-4">
            {data.weather[0].description}
          </p>
          <div className="flex justify-between items-center">
            <p className="font-semibold text-7xl leading-none -tracking-tighter">
              {Math.round(data.main.temp)}°C
            </p>
            <Image
              alt="weather"
              className="w-24"
              src={`assets/icons/${data.weather[0].icon}.png`}
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-left font-normal text-xs">Details</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-left font-normal text-xs">Feels like</span>
            <span className="text-right font-semibold text-xs">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-left font-normal text-xs">Wind</span>
            <span className="text-right font-semibold text-xs">
              {data.wind.speed} m/s
            </span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-left font-normal text-xs">Humidity</span>
            <span className="text-right font-semibold text-xs">
              {data.main.humidity}%
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-left font-normal text-xs">Pressure</span>
            <span className="text-right font-semibold text-xs">
              {data.main.pressure} hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
