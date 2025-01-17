//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyNavbar from "./components/MyNavbar";
import Favourites from "./components/Favourites";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Favourites />} />
          <Route path="/details/:cityName" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
