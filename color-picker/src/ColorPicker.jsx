import React , {useState} from "react"
function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value)
    }
    return( <div className="color-container">
                <h1>Color picker</h1>
                <div className="color-display" style={{backgroundColor: color }}>
                    <p>{color}</p>
                </div>
                <label>Select Color:</label>
                <input type="color" onChange={handleColorChange}></input>
            </div>
        
    )
}

export default ColorPicker