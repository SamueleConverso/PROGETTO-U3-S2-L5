/* eslint-disable react/no-unescaped-entities */
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

function SearchLocation() {
  return (
    <>
      <h1 className="text-center mt-5">CERCA LOCALITA'</h1>

      <Form.Control type="email" placeholder="Cerca una località..." />

      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary">Cerca</Button>
      </div>

      <Container>
        <Row>
          <Col>
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
