const renderToDOM = (divID, domString) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = domString;
};

export default renderToDOM;
