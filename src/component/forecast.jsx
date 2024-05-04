import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="text-3xl font-bold mb-4">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton className="focus:outline-none cursor-pointer">
                <div className="bg-primary border border-blue-300 rounded-md p-1 m-1 flex items-center justify-between">
                  <img
                    src={`assets/icons/${item.weather[0].icon}.png`}
                    className="w-10"
                    alt="weather"
                  />
                  <label className="text-xl font-semibold">
                    {forecastDays[idx]}
                  </label>
                  <label className="flex-1 text-right">
                    {item.weather[0].description}
                  </label>
                  <label className="text-gray-600">
                    {Math.round(item.main.temp_max)}°C /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid grid-cols-2 text-white gap-4 p-4">
                <div className="flex items-center justify-between">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="flex items-center justify-between">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
