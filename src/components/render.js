import { weather } from "./weather";
import { search } from "./search";
import { unitChange } from "./unitChange";

const render = (() => {
  let data;

  const current = () => {
    const location = document.querySelector(".location");
    const weatherDesc = document.querySelector(".weatherDesc");
    const temp = document.querySelector(".temp");
    const highLow = document.querySelector(".highLow");

    location.innerHTML = search.getInput();
    weatherDesc.innerHTML = data.current.weather[0].main;
    temp.innerHTML = `${data.current.temp}°`;
    highLow.innerHTML = `H: ${
      data.daily[0].temp.min
    }° ${unitChange.getUnit()}<br />L: ${
      data.daily[0].temp.max
    }° ${unitChange.getUnit()}`;
  };

  const renderPage = () => {
    data = weather.getData();
    current();
  };

  return {
    renderPage,
  };
})();

export { render };
