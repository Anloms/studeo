import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Display from './components/Display';

const url = 'http://localhost:3000';

function App() {
  const [flashcardCollection, setFlashcardCollection] = useState([]);

  const [createClick, setCreateClick] = useState(false);
  const [studyClick, setStudyClick] = useState(false);
  const [testClick, setTestClick] = useState(false);
  const [viewCollectionClick, setViewCollection] = useState(false);

  const [collectionList, setCollectionList] = useState('');

  function handleClick(id) {
    if (id === 'create') {
      setCreateClick(true);
      setStudyClick(false);
      setTestClick(false);
      setViewCollection(false);
    }
    if (id === 'study') {
      setCreateClick(false);
      setStudyClick(true);
      setTestClick(false);
      setViewCollection(false);
    }
    if (id === 'test') {
      setCreateClick(false);
      setStudyClick(false);
      setTestClick(true);
      setViewCollection(false);
    }
    if (id === 'view') {
      setCreateClick(false);
      setStudyClick(false);
      setTestClick(false);
      setViewCollection(true);
    }
  }

  const handleFetch = () => {
    fetch(url + `/flashcards`)
      .then((response) => {
        if (response.headers.get('Content-Type').includes('application/json')) {
          return response.json();
        }
        throw new TypeError({ message: 'You are not getting json' });
      })
      .then((data) => {
        setFlashcardCollection(data);
      }).catch((error) => {
        console.log('We have an error here', error);
      });     
  };

  const addFlashcard = async (flash) => {
    const res = await fetch(`${url}/flashcards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flash),
    });

    console.log(res);
    setFlashcardCollection([...flashcardCollection, flash]);
    handleFetch();
    return await res.json();
  };

  const handleFetchCollection = () => {
    fetch(url + `/collections`)
      .then((response) => {
        if (response.headers.get('Content-Type').includes('application/json')) {
          return response.json();
        }
        throw new TypeError({ message: 'You are not getting json' });
      })
      .then((data) => {
        setCollectionList(data);
      }).catch((error) => {
        console.log('We have an error here', error);
      });
  };

  const addCollection = async (flash) => {
    const res = await fetch(`${url}/collections`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(flash),
    });

    handleFetchCollection();
    return await res.json();
  };

  useEffect(() => {
    handleFetch();
    handleFetchCollection();
  }, []);

  return (
    <>
      <Header />

      <main>
        <NavBar handleClick={handleClick} />
        <Display
          addFlashcard={addFlashcard}
          addCollection={addCollection}
          createClick={createClick}
          testClick={testClick}
          viewCollectionClick={viewCollectionClick}
          studyClick={studyClick}
          collectionList={collectionList}
          flashcardCollection={flashcardCollection}
        />
      </main>
    </>
  );
}

export default App;
