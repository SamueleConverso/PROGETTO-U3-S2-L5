/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

function SearchLocation() {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState();
  const [isError, setIsError] = useState(false);
  const APIKEY = "e01c44c33470e1da46fde3fc07e02bee";

  const getCity = async function () {
    setQuery("");
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIKEY}&lang=it&units=metric`;
    try {
      let response = await fetch(URL);
      if (response.ok) {
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
            getCity();
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

      <Container className="mt-5">
        <Row>
          <Col className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              {/* {mainCity && (
                <Card.Title className="text-center mt-3">New York</Card.Title>
              )} */}

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
    </>
  );
}

export default SearchLocation;
