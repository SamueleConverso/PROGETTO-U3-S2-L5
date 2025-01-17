/* eslint-disable react/no-unescaped-entities */
import { Form, Button } from "react-bootstrap";

function SearchLocation() {
  return (
    <>
      <h1 className="text-center mt-5">CERCA LOCALITA'</h1>

      <Form.Control type="email" placeholder="Cerca una località..." />

      <div className="d-flex justify-content-center mt-3">
        <Button variant="primary">Cerca</Button>
      </div>
    </>
  );
}

export default SearchLocation;
