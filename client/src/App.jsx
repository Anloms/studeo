import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Display from './components/Display';
import flashcardAPI from './apis/flashcardAPI';
const url = 'http://localhost:3000';

function App() {
  const [flashcardCollection, setFlashcardCollection] = useState([]);

  const [createClick, setCreateClick] = useState(false);
  const [studyClick, setStudyClick] = useState(false);
  const [homeClick, setHomeClick] = useState(false);
  const [viewCollectionClick, setViewCollection] = useState(false);

  const [collectionList, setCollectionList] = useState('');

  function handleClick(id) {
    if (id === 'create') {
      setCreateClick(true);
      setStudyClick(false);
      setHomeClick(false);
      setViewCollection(false);
    }
    if (id === 'study') {
      setCreateClick(false);
      setStudyClick(true);
      setHomeClick(false);
      setViewCollection(false);
    }
    if (id === 'home') {
      setCreateClick(false);
      setStudyClick(false);
      setHomeClick(true);
      setViewCollection(false);
    }
    if (id === 'view') {
      setCreateClick(false);
      setStudyClick(false);
      setHomeClick(false);
      setViewCollection(true);
    }
  }

  const addFlashcard = async (flash) => {
    const res = await fetch(`${url}/flashcards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(flash),
    });

    setFlashcardCollection([...flashcardCollection, flash]);
    return await res.json(flashcardCollection);
  };
  // const addFlashcard =  flashcardAPI.create(flash).then(flash=>{
  //   setFlashcardCollection([...flashcardCollection, flash]);
  // }).then(data=>{
  //   return data.json()
  // })

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
    return await res.json();
  };

  useEffect(() => {
    flashcardAPI.getAll.then((data) => {
    setFlashcardCollection(data);
  })
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
          homeClick={homeClick}
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
