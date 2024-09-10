import domBuilder from '../components/shared/domBuilder';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navBar from '../components/shared/navBar';
// import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';
import { getVocabularyCards } from '../api/cardData';
import { showVocabularyCards } from '../pages/vocabularyCards';

// We want to make sure the following events gets access to the UID when CRUDing.
const startApp = (user) => {
  domBuilder(user); // BUILD THE DOM
  domEvents(user); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents(user); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  // logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(user); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all flashcards on the DOM on App load
  getVocabularyCards(user.uid).then((cards) => showVocabularyCards(cards));
};

export default startApp;
