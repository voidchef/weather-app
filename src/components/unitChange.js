import { webAppStart } from "./index";

const unitChange = (() => {
  const unitBtn = document.querySelector(".unitBtn");
  let unit = "celsius";
  let scale = "metric";

  unitBtn.addEventListener("click", () => {
    if (unit == "celsius") {
      unit = "fahrenheit";
      scale = "imperial";
      unitBtn.innerHTML = "°C/<b>°F</b>";
    } else {
      unit = "celsius";
      scale = "metric";
      unitBtn.innerHTML = "<b>°C</b>/°F";
    }
    webAppStart.start();
  });

  const getUnit = () => {
    return unit;
  };

  const getScale = () => {
    return scale;
  };

  return {
    getUnit,
    getScale,
  };
})();

export { unitChange };
