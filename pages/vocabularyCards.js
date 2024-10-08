import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocabularyCards = () => {
  const domString = '<h1>No Vocabulary Cards</h1>';
  renderToDOM('#store', domString);
};

const showVocabularyCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <hr>
          <p>${item.definition}</p>
          <i class="btn btn-success fas fa-eye" id="view-book-btn--${item.firebaseKey}">View</i>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocabularyCards, emptyVocabularyCards };
