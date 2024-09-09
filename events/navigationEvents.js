import { signOut } from '../utils/auth';

// FIXME: Add 'user' in as a parameter.
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);
};

export default navigationEvents;
