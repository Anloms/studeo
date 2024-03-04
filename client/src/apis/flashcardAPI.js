const url = 'http://localhost:3000';

const flashcardAPI = {
  getAll: fetch(url + `/flashcards`)
    .then((response) => {
      if (response.headers.get('Content-Type').includes('application/json')) {
        return response.json();
      }
      throw new TypeError({ message: 'You are not getting json' });
    }),
  create: (flash) => fetch(`${url}/flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(flash)
  }),


}

export default flashcardAPI;
