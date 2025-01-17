/* eslint-disable no-unused-vars */
function Favourites() {
  const URL =
    "https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}";

  const getMainCity = async function () {
    try {
      let response = await fetch(URL);
    } catch (error) {
      console.log(error);
    }
  };
  return;
}

export default Favourites;
