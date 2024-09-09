// FIXME: Pass in 'user' as a parameter. Pass in event obj in the callback function in the event listerner,
const domEvents = () => {
  document.querySelector('#form-container').addEventListener('click', () => {
    console.warn('Clicked form container.');
  });
};

export default domEvents;
