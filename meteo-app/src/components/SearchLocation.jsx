/* eslint-disable react/no-unescaped-entities */
import { Form } from "react-bootstrap";

function SearchLocation() {
  return (
    <>
      <h1 className="text-center mt-5">CERCA LOCALITA'</h1>

      <Form.Control type="email" placeholder="Cerca una località..." />
    </>
  );
}

export default SearchLocation;
