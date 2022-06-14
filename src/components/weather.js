const weather = (() => {
  const apiKey = "";

  let lon;
  let lat;

  const getPos = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`,
      { mode: "cors" }
    );
    const data = await response.json();
    lon = data.coord.lon;
    lat = data.coord.lat;
  };
})();
