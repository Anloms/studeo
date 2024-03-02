import './CSS/NavBar.css';

export default function NavBar({ handleClick }) {
  return (
    <div className="nav_container">
      <button onClick={() => handleClick('create')} type="button">make a new flashcard</button>
      <button onClick={() => handleClick('study')} type="button">study your collection</button>
      <button onClick={() => handleClick('test')} type="button">test yourself</button>
      <button onClick={() => handleClick('view')} type="button">view your collection</button>
    </div>
  );
}
