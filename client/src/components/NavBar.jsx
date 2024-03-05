import './CSS/NavBar.css';

export default function NavBar({ 
  handleClick, 
  homeClick,
  viewCollectionClick,
  createClick,
  studyClick
}) {
  function styled(){
    if(homeClick){
      return "highlighted"
    }
  }
  function styledCreate(){
    if(createClick){
      return "highlighted"
    }
  }
  function styledStudy(){
    if(studyClick){
      return "highlighted"
    }
  }
  function styledView(){
    if(viewCollectionClick){
      return "highlighted"
    }
  }
  return (
    <div className="nav_container">
      <button onClick={() => handleClick('home')} className={styled()} type="button">Home</button>
      <button onClick={() => handleClick('create')} className={styledCreate()} type="button">Create a new flashcard</button>
      <button onClick={() => handleClick('study')} className={styledStudy()} type="button">Study your collection</button>
      <button onClick={() => handleClick('view')} className={styledView()} type="button">View your collection</button>
    </div>
  );
}
