import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// For use to CREATE and UPDATE an vocabulary card.
const addAVocabCard = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-author--${obj.firebaseKey}` : 'submit-author'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" placeholder="title goes here" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="image">definition</label>
        <input type="text" class="form-control" id="definition" placeholder="Definition" value="${obj.definition || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Add Card</button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addAVocabCard;
