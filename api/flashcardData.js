import client from '../utils/client';

const endpoint = client.databaseURL;

const getFlashcards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })


})
