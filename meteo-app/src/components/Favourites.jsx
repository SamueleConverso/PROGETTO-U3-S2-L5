/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Favourites() {
  const [mainCity, setMainCity] = useState();
  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";
  let myFavCities = [];

  const getMainCity = async function (city) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},IT&appid=${APIKEY}&lang=it&units=metric`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        let data = await response.json();
        return data;
        // myFavCities.push(data);
        // setMainCity(data);
        // console.log(data);
      } else {
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     getMainCity("Roma");
  //     getMainCity("London");
  //   }, []);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const cities = await Promise.all([
          getMainCity("Roma"),
          getMainCity("London"),
        ]);
        setMainCity(cities);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCities();
  }, []);

  const setIcon = function (icon) {
    let newIcon = "";
    switch (icon) {
      case "01d":
        newIcon = "https://openweathermap.org/img/wn/01d@2x.png";
        break;
      case "02d":
        newIcon = "https://openweathermap.org/img/wn/02d@2x.png";
        break;
      case "03d":
        newIcon = "https://openweathermap.org/img/wn/03d@2x.png";
        break;
      case "04d":
        newIcon = "https://openweathermap.org/img/wn/04d@2x.png";
        break;
      case "09d":
        newIcon = "https://openweathermap.org/img/wn/09d@2x.png";
        break;
      case "10d":
        newIcon = "https://openweathermap.org/img/wn/10d@2x.png";
        break;
      case "11d":
        newIcon = "https://openweathermap.org/img/wn/11d@2x.png";
        break;
      case "13d":
        newIcon = "https://openweathermap.org/img/wn/13d@2x.png";
        break;
      case "50d":
        newIcon = "https://openweathermap.org/img/wn/50d@2x.png";
        break;
    }
    return newIcon;
  };

  return (
    <>
      <Container className="mt-5">
        <p className="text-center">
          Tieniti sempre aggiornato con le informazioni più recenti sul meteo
          delle tue città preferite!
        </p>
      </Container>

      <h1 className="text-center mt-5">Il meteo della tua città</h1>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              {mainCity && (
                <Card.Title className="text-center mt-3">
                  {mainCity.name}
                </Card.Title>
              )}
              <Card.Img
                className=""
                style={{ width: "100px", margin: "0 auto" }}
                variant="top"
                src={mainCity && setIcon(mainCity.weather[0].icon)}
              />
              <Card.Body>
                {mainCity && (
                  <Card.Text className="text-center">
                    {mainCity.weather[0].description.charAt(0).toUpperCase() +
                      mainCity.weather[0].description.slice(1) +
                      "."}
                  </Card.Text>
                )}
                <div className="d-flex justify-content-center">
                  <Button variant="success">Info</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className="text-center mt-5">Altre città che ti interessano</h1>
        <Row>
          <Col xs={12} className="">
            <Card style={{ width: "18rem" }}>
              {mainCity && (
                <Card.Title className="text-center mt-3">
                  {mainCity.name}
                </Card.Title>
              )}
              <Card.Img
                className=""
                style={{ width: "100px", margin: "0 auto" }}
                variant="top"
                src={mainCity && setIcon(mainCity.weather[0].icon)}
              />
              <Card.Body>
                {mainCity && (
                  <Card.Text className="text-center">
                    {mainCity.weather[0].description.charAt(0).toUpperCase() +
                      mainCity.weather[0].description.slice(1) +
                      "."}
                  </Card.Text>
                )}
                <div className="d-flex justify-content-center">
                  <Button variant="success">Info</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Favourites;
