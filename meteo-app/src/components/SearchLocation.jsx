/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

function SearchLocation() {
  const [query, setQuery] = useState("");
  let country = "";
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
        console.log(data);
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
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKEY}&lang=it&units=metric`;
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
        <Container className="mt-5">
          <Row>
            <Col className="d-flex justify-content-center">
              <Card style={{ width: "18rem" }}>
                {city && (
                  <Card.Title className="text-center mt-3">
                    {city.name}
                  </Card.Title>
                )}

                <Card.Body>
                  <div className="d-flex justify-content-center">
                    {/* <Link
                    className="btn btn-success"
                    to={mainCity && /details/ + "New York,US"}
                  >
                    Info
                  </Link> */}
                  </div>
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
