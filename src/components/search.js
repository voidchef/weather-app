import { webAppStart } from "../index";

const search = (() => {
  const searchBar = document.querySelector(".searchBar");
  const searchBtn = document.querySelector(".searchBtn");
  let input = "Delhi";

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    input = searchBar.value;
    webAppStart.start();
  });

  const getInput = () => {
    return input;
  };

  return {
    getInput,
  };
})();

export { search };
