import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  `;

  renderToDOM('#app', domString);
};

export default domBuilder;
