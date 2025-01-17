import { useParams } from "react-router-dom";

function Details() {
  const params = useParams();
  return (
    <>
      <h1 className="text-center">Dettagli meteo</h1>
    </>
  );
}

export default Details;
