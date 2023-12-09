// Target div ID elements from domBuilder.js 

const clearDOM = () => {
  document.querySelector('#navigation').innerHTML = '';
  document.querySelector('#main-content').innerHTML = '';
  document.querySelector('#flashcards').innerHTML = '';
};

export default clearDOM;
