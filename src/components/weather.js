import { search } from "./search";

const weather = (() => {
  const apiKey = "";

  let lon;
  let lat;

  const getPos = async () => {
    const city = search.getInput();
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
      { mode: "cors" }
    );
    const data = await response.json();
    lon = data.coord.lon;
    lat = data.coord.lat;
  };

  let data;
  const getWeather = async () => {
    await getPos();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${scale}&appid=${apiKey}`,
      { mode: "cors" }
    );
    data = await response.json();
  };

  const getData = () => {
    return data;
  };

  return {
    getWeather,
    getData,
  };
})();

export { weather };