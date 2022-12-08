import React from "react";

const AddedExp = (props) => {

    const deleteExp = (e) => {
        e.preventDefault();

        // Remove the added experience from the DOM
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)

        // Run the delete experience function
        props.deleteExperience(props.id);
    }

    return(
        <div className="addedExperienceInformation">
            <p>{props.company}</p>
            <p>{props.position}</p>
            <p>{props.task}</p>
            <p>{props.datefrom}</p>
            <p>{props.dateuntil}</p>
            <button onClick={deleteExp}>X</button>
        </div>
    )
}
export default AddedExp;