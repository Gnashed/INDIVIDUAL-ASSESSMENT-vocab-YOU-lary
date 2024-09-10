import addAVocabCard from '../components/forms/addAVocabCard';

// FIXME: Pass in 'user' as a parameter. Pass in event obj in the callback function in the event listerner,
const domEvents = () => {
  document.querySelector('#add-button').addEventListener('click', () => {
    addAVocabCard();
  });
};

export default domEvents;
