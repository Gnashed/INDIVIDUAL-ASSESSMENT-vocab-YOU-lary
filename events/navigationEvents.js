import { getVocabularyCards } from '../api/cardData';
import addAVocabCard from '../components/forms/addAVocabCard';
import { showVocabularyCards } from '../pages/vocabularyCards';
import { signOut } from '../utils/auth';

// FIXME: Add 'user' in as a parameter.
const navigationEvents = (user) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('.navbar-brand').addEventListener('click', () => {
    getVocabularyCards(user.uid).then((cards) => showVocabularyCards(cards));
  });
  document.querySelector('#create-vocab-card-btn').addEventListener('click', () => {
    addAVocabCard();
  });
};

export default navigationEvents;
