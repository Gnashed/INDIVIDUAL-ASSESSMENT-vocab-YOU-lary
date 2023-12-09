import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-content">
    <div id="flashcards">
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Question</h5>
        <p class="card-text">Dolorem voluptatem aperiam eum sunt rerum dolorem assumenda?</p>
        <a href="#" class="btn btn-primary">Answer</a>
      </div>
      </div>
    </div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
