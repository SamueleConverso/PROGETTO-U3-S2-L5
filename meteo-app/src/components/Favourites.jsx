/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

function Favourites() {
  const [mainCity, setMainCity] = useState({});

  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=${APIKEY}`;

  const getMainCity = async function () {
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        setMainCity(data);
        console.log(data);
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMainCity();
  }, []);

  return;
}

export default Favourites;
