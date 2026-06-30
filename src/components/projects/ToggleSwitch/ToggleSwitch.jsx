import { useState } from "react";
import "./ToggleSwitch.css"

// * REACT ICONS 
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {

    //* STATE FOR SWITCH ON/OFF
    const [isOn , setIsOn] = useState(true);
    
    const handleToggleSwitch = () => {
        setIsOn(!isOn);
    
   
    }
    const onCondition = isOn ? "On" : "Off";  
    const style = {backgroundColor : isOn ? "#4caf50" : "#f44336"};

     return(
        <>
        <h1 style={{color : "000" , textAlign : "center"}}>
            Toggle Switch<IoIosSwitch style={{color : "red" , textAlign : "center" , fontSize : "8vh"}}/></h1>
        <div className="toggle-switch" 
        style={style} onClick={handleToggleSwitch}>
            <div className={`switch ${onCondition}`}>
                <span className="switch-state">{onCondition}</span>
            </div>
        </div>
        </>
    );
}
