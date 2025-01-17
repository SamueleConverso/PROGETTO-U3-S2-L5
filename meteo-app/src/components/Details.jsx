/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  const [city, setCity] = useState();
  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";

  const getCity = async function () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityId},IT&appid=${APIKEY}&lang=it&units=metric`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        setCity(data);
        console.log(data);
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCity();
  }, []);
  return (
    <>
      <h1 className="text-center">Dettagli meteo</h1>
    </>
  );
}

export default Details;
