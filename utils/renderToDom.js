const renderToDom = (element, contentToRender) => {
  const selectElement = document.querySelector(element);
  selectElement.innerHTML = contentToRender;
};

export default renderToDom;
