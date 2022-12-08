import React from "react";

const AddedEdu = (props) => {

    const deleteEdu = (e) => {
        e.preventDefault();

        // Remove the added education from the DOM
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)

        // Run the delete education function
        props.deleteEducation(props.id);
    }

    return(
        <div className="addedEducationInformation">
            <p>{props.school}</p>
            <p>{props.title}</p>
            <p>{props.datestudy}</p>
            <button onClick={deleteEdu}>X</button>
        </div>
    ) 
}
export default AddedEdu;