const search = (() => {
  const searchBar = document.querySelector(".searchBar");
  const searchBtn = document.querySelector(".searchBtn");
  let input = "Delhi";

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    input = searchBar.value;
  });

  const getInput = () => {
    return input;
  };

  return {
    getInput,
  };
})();

export { search };
