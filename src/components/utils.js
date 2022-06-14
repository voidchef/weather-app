const helper = (() => {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  return {
    removeAllChildNodes,
  };
})();

export { helper };
