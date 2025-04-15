// useWeatherInfo.js
import { useEffect, useState } from 'react';

function useWeatherInfo(city) {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const api = import.meta.env.VITE_API_KEY;


  useEffect(() => {
    if (!city) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.cod === 200) {
          setWeatherInfo(res);
        } else {
          setWeatherInfo(null); // Handle city not found or API error
        }
      })
      .catch((err) => console.log(err));
  }, [city]);

 
  return weatherInfo;
  
  
}

export default useWeatherInfo;
