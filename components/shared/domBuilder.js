import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-content"></div>
  <div id="flashcards"></div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
