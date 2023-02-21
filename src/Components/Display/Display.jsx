import React from "react";
import { useEffect, useState } from "react";
import Background from "./Background/Background";
import Inputs from "./Inputs/Inputs";
import overcastIcon from "../../Images/overcastIcon.png";
import partiallycloudyIcon from "../../Images/partiallycloudyIcon.png";
import sunnyIcon from "../../Images/sunnyIcon.png";
import rainIcon from "../../Images/rainIcon.png";

const Display = () => {
  const [condition, setCondition] = useState();
  const [city, setCity] = useState("London");
  const [temp, setTemp] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [icon, setIcon] = useState();

  useEffect(() => {
    async function getWeatherData() {
      try {
        const response = await fetch(
          `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${process.env.REACT_APP_API_KEY}&contentType=json
      `
        );
        const data = await response.json();
        console.log(data);
        setCondition(data.currentConditions.conditions);
        setTemp(data.currentConditions.feelslike);
        setLoading(false);
        if (data.currentConditions.conditions === "Overcast") {
          setIcon(overcastIcon);
        } else if (data.currentConditions.conditions === "Partially cloudy") {
          setIcon(partiallycloudyIcon);
        } else if (data.currentConditions.conditions === "Clear") {
          setIcon(sunnyIcon);
        } else if (data.currentConditions.conditions === "Rain") {
          setIcon(rainIcon);
        } else if (data.currentConditions.conditions === "Rain, Overcast") {
          setIcon(rainIcon);
        }
      } catch {
        setError(true);
        setLoading(false);
      }
    }
    getWeatherData();
  }, [city]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <button onClick={() => setError(false) + setCity("London")}>
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <Background condition={condition}>
        <h1 className="text-[50px] font-bold text-center uppercase font-mono tracking-widest w-full ease-out duration-500">
          {city}
        </h1>
        <h2>
          <span className="text-[60px] font-bold text-center uppercase font-mono tracking-wide flex justify-center ease-out duration-500">
            {temp}°C
          </span>
        </h2>
        <h2 className="text-[20px] font-bold text-center uppercase font-mono tracking-wide pl-2 ease-out duration-500">
          It's {condition}
        </h2>
        <img src={icon} className="w-20 h-20 mx-auto" />

        <Inputs setCity={setCity} />
      </Background>
    </div>
  );
};

export default Display;
