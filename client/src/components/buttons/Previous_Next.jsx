import '../CSS/buttons/Previous_Next.css'

export default function Previous_Next({handleNextIndex, handlePreviousIndex}){
    return (
        <div className="btn_container">
            <button type="button" onClick={handlePreviousIndex} className="togglePrevious_btn">previous</button>
            <button type="button" onClick={handleNextIndex} className="toggleNext_btn">next</button>
        </div>
    )
}