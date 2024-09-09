// FIXME: Pass in 'user' as a parameter. Pass in event obj in the callback function in the event listerner,
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', () => {
    console.warn('Clicked main container.');
  });
};

export default domEvents;
