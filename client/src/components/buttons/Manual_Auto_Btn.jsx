import '../CSS/buttons/Manual_Auto.css'

export default function Manual_Auto_Btn({handleAuto, handleManual}) {
    return (
        <div className="manual_auto_btn_container">
            <button onClick={handleManual}>manual</button>
            <button onClick={handleAuto}>auto</button>
       </div>
    );
}