// InputForm.jsx
import React, { useState } from "react";
import useWeatherInfo from "../hooks/useWeatherInfo";

function InputForm() {
  const [input, setInput] = useState(""); // For input field
  const [city, setCity] = useState("london"); // For actual API query
  const data = useWeatherInfo(city);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input); // Trigger API call
  };

  return (
    <div className="flex justify-center items-center m-auto mt-24 min-h-72 w-1/2   shadow-xl/30 dark:shadow-gray-600 rounded-lg shadow-lg shadow-gray-400 bg-white  dark:bg-gray-800">
      <form
        onSubmit={handleSubmit}
        className="text-gray-900 dark:text-gray-100"
      >
        <input
          className="bg-transparent outline-none text-black dark:text-gray-300  bold text-2xl  border-b-2 italic border-b-gray-600  "
          type="text"
          placeholder="Enter City"
          value={input}
          onChange={(e) => setInput(e.target.value)}
         required
        />
        <button
          type="submit"
          className="text-gray-900 dark:text-gray-100 hover:bg-purple-500 hover:rounded-md ml-4 bg-red-600 px-4 py-2 rounded-lg"
        >
          Submit
        </button>

        <div className="mb-0  text-center italic text-gray-900 dark:text-gray-100">
          {data && data.cod === 200 ? (
            <>
              <h1 className="text-2xl font-bold">Name: {data.name}</h1>
              <h1 className="text-2xl font-bold">Temp: {data.main.temp}°C</h1>
              <h1 className="text-2xl font-bold">
                Description: {data.weather[0].description}
              </h1>
              <h1 className="text-2xl font-bold">
                Country: {data.sys.country}
              </h1>
            </>
          ) : data && data.cod ? (
            <h1 className="text-2xl font-bold text-red-500">City not found</h1>
          ) : (
            <h1 className="text-2xl font-bold">Enter a city name</h1>
          )}
        </div>
      </form>
    </div>
  );
}

export default InputForm;
