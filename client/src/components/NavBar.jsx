import './CSS/NavBar.css';

export default function NavBar({ handleClick }) {
  return (
    <div className="nav_container">
      <button onClick={() => handleClick('home')} type="button">Home</button>
      <button onClick={() => handleClick('create')} type="button">Create a new flashcard</button>
      <button onClick={() => handleClick('study')} type="button">Study your collection</button>
      <button onClick={() => handleClick('view')} type="button">View your collection</button>
    </div>
  );
}
