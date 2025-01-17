/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import { useEffect, useState } from "react";

function SearchLocation() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState();
  const [isError, setIsError] = useState(false);
  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";

  const getCountry = async function () {
    const URL = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${APIKEY}`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        setIsError(false);
        let data = await response.json();
        setCountry(data[0].country);

        console.log(data);
        //console.log(country);
        //getCity();
      } else {
        setIsError(true);
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async function () {
    setQuery("");
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query},${country}&appid=${APIKEY}&lang=it&units=metric`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
        setIsError(false);
        let data = await response.json();
        setCity(data);
        console.log(data);
      } else {
        setIsError(true);
        throw new Error("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (country) {
      console.log(country);
      getCity();
    }
  }, [country]);

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
      <h1 className="text-center mt-5">CERCA LOCALITA'</h1>

      <Form.Control
        className="w-50 m-auto"
        type="search"
        placeholder="Cerca una località..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="d-flex flex-column justify-content-center mt-3">
        <Button
          style={{ width: "fit-content" }}
          className="align-self-center"
          variant="primary"
          onClick={() => {
            if (query) {
              getCountry();
            }
          }}
        >
          Cerca
        </Button>
        {isError && (
          <h1 className="text-danger text-center">
            Nessuna località trovata...
          </h1>
        )}
      </div>

      {city && !isError && (
        // <Container className="mt-5">
        //   <Row>
        //     <Col className="d-flex justify-content-center">
        //       <Card style={{ width: "18rem" }}>
        //         {city && (
        //           <Card.Title className="text-center mt-3">
        //             {city.name}
        //           </Card.Title>
        //         )}

        //         <Card.Body>
        //           <div className="d-flex justify-content-center">
        //             {/* <Link
        //             className="btn btn-success"
        //             to={mainCity && /details/ + "New York,US"}
        //           >
        //             Info
        //           </Link> */}
        //           </div>
        //         </Card.Body>
        //       </Card>
        //     </Col>
        //   </Row>
        // </Container>
        <Container className="mt-5">
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
                    <>
                      <Card.Text className="text-center">
                        {city.weather[0].description.charAt(0).toUpperCase() +
                          city.weather[0].description.slice(1) +
                          "."}
                      </Card.Text>
                      <ListGroup className="border border-3 text-center">
                        <ListGroup.Item>
                          <Card.Text>
                            Temp. attuale: {Math.floor(city.main.temp)}°C
                          </Card.Text>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Card.Text>
                            Temp. max.: {Math.floor(city.main.temp_max)}°C
                          </Card.Text>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Card.Text>
                            Temp. min.: {Math.floor(city.main.temp_min)}°C
                          </Card.Text>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Card.Text>
                            Temp. percepita: {Math.floor(city.main.feels_like)}
                            °C
                          </Card.Text>
                        </ListGroup.Item>
                      </ListGroup>
                    </>
                  )}
                  <div className="d-flex justify-content-center"></div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default SearchLocation;
