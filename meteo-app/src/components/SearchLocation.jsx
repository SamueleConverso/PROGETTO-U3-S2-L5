/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

function SearchLocation() {
  const [query, setQuery] = useState("");

  return (
    <>
      <h1 className="text-center mt-5">CERCA LOCALITA'</h1>

      <Form.Control
        type="search"
        placeholder="Cerca una località..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary" onClick={() => {}}>
          Cerca
        </Button>
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
