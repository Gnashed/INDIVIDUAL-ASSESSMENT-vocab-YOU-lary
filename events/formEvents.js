import { createVocabularyCard, getVocabularyCards, updateVocabularyCard } from '../api/cardData';
import { showVocabularyCards } from '../pages/vocabularyCards';

// FIXME: Pass in 'user' as a parameter. Pass in event obj in the callback function in the event listerner,
const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A Vocabulary Card
    if (e.target.id.includes('submit-card')) {
      // console.warn('CLICKED SUBMIT CARD', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        uid: user.uid,
      };
      // When creating a book, Firebase will give us the key of the object we just created. Console.warn
      // to see what's being returned.
      createVocabularyCard(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocabularyCard(patchPayload).then(() => {
          getVocabularyCards(user.uid).then(showVocabularyCards);
        });
      });
    }
  });
};

export default formEvents;
