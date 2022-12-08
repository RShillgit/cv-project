import React, { useState } from "react";

const Edit = (props) => {

    // Initially set state to the current value so user can submit without making changes
    const [newInput, setNewInput] = useState(props.value)

    const handleChange = (e) => {
        
        setNewInput(e.target.value); 
    }

    const buttonSubmit = (e) => {

        e.target.parentElement.style.display = 'none';

        const infoBeingEdited = document.querySelector(`.info${props.inputID}`);
        const editingValue = infoBeingEdited.querySelector('p');
        editingValue.innerHTML = newInput;

        infoBeingEdited.style.display = 'flex';

        // Change App's state
        props.handleInputChange(props.inputID, newInput);
    }

    return (
        <div className={props.divClass}>
            <input onChange={handleChange} id={props.inputID} type={props.inputType} defaultValue={props.value}></input>
            <button type="button" onClick={buttonSubmit}>Submit</button>
        </div>   
    )
}

export default Edit;