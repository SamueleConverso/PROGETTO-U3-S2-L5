/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Favourites() {
  const [mainCity, setMainCity] = useState();

  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Roma,IT&appid=${APIKEY}&lang=it`;

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
      <h1 className="text-center">La tua città:</h1>
      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                className=""
                style={{ width: "100px", margin: "0 auto" }}
                variant="top"
                src={mainCity && setIcon(mainCity.weather[0].icon)}
              />
              <Card.Body>
                {mainCity && <Card.Title>{mainCity.name}</Card.Title>}
                {mainCity && (
                  <Card.Text>{mainCity.weather[0].description}</Card.Text>
                )}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Favourites;
