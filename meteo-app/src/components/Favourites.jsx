/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

function Favourites() {
  const [mainCity, setMainCity] = useState({});

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

  return (
    <Container>
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{mainCity && mainCity.name}</Card.Title>
              <Card.Text>
                {mainCity && mainCity.weather[0].description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Favourites;
