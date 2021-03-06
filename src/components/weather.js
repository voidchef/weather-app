import { search } from "./search";
import { unitChange } from "./unitChange";

const weather = (() => {
  const apiKey = "483d45843c4a033f9c5b090d5196824e";

  let lon;
  let lat;

  const getPos = async () => {
    const city = search.getInput();
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
      { mode: "cors" }
    );
    const data = await response.json();
    lon = data.coord.lon;
    lat = data.coord.lat;
  };

  let data;
  const getWeather = async () => {
    const scale = unitChange.getScale();
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
