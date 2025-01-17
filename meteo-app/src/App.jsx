//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MyNavbar from "./components/MyNavbar";
import Favourites from "./components/Favourites";
import Details from "./components/Details";
import SearchLocation from "./components/SearchLocation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Favourites />} />
          <Route path="/details/:cityNameAndCountry" element={<Details />} />
          <Route path="/search" element={<SearchLocation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
