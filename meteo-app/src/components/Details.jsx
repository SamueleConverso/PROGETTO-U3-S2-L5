/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

function Details() {
  const params = useParams();
  const [city, setCity] = useState();
  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";

  const getCity = async function () {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName},IT&appid=${APIKEY}&lang=it&units=metric`;
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
      <h1 className="text-center mt-5">{params.cityId}</h1>

      <Container>
        <Row>
          <Col xs={12} className="d-flex justify-content-center">
            <Card
              style={{ width: "18rem" }}
              className="border-5 border-success"
            >
              {city && (
                <Card.Title className="text-center mt-3">
                  {city.name}
                </Card.Title>
              )}

              <Card.Img
                className=""
                style={{ width: "100px", margin: "0 auto" }}
                variant="top"
                src={city && setIcon(city.weather[0].icon)}
              />
              <Card.Body>
                {city && (
                  <Card.Text className="text-center">
                    {city.weather[0].description.charAt(0).toUpperCase() +
                      city.weather[0].description.slice(1) +
                      "."}
                  </Card.Text>
                )}
                <div className="d-flex justify-content-center"></div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Details;
