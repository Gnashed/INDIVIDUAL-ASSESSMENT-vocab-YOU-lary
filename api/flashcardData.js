import client from '../utils/client';

const endpoint = client.databaseURL;

const getFlashcards = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => resolve(Object.values(data)))
  .catch(reject);
});

const getSingleFlashcard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((response) => response.json())
  .then((data) => resolve(Object.values(data)))
  .catch(reject);
});

const createFlashcard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then((response) => response.json())
  .then((data) => resolve(data))
  .catch(reject);
});

const updateFlashcard = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then((response) => response.json())
  .then(resolve)
  .catch(reject);
});

const deleteFlashcard = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/flashcards/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getFlashcards,
  getSingleFlashcard,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard
};
