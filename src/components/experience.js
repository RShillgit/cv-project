// Practical experience including company name, position title, main tasks of your jobs,
// date from and until when you worked for that company

import { Component } from "react";
import Edit from "./edits";

class Experience extends Component {

    editField = (e) => {
        e.preventDefault();

        e.target.parentElement.style.display = 'none';

        const editName = document.querySelector(`.editInput${e.target.id}`);
        editName.style.display = 'flex';
    }

    render() {
        return (
            <div className="experienceInfo">

                <div className='infoCompany'>
                    <label>Company Name: </label>
                    <p>Tech Company </p>
                    <button id='Company' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputCompany" inputID="Company" inputType="text" value="Tech Company"/> 
            
                <div className='infoPosition'>
                    <label>Position Title: </label>
                    <p>Software Engineer</p>
                    <button id='Position' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputPosition" inputID="Position" inputType="text" value="Software Engineer"/> 

                <div className='infoTask'>
                    <label>Task of Position:</label>
                    <p>Code</p>
                    <button id='Task' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputTask" inputID="Task" inputType="text" value="Code"/>

                <div className='infoDateFrom'>
                    <label>Employed From:</label>
                    <p>2022-06-15</p>
                    <button id='DateFrom' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputDateFrom" inputID="DateFrom" inputType="date" value="06/15/2022"/>

                <div className='infoDateUntil'>
                    <label>Employed Until:</label>
                    <p>2022-12-02</p>
                    <button id='DateUntil' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputDateUntil" inputID="DateUntil" inputType="date" value="12/02/2022"/>

            </div>
        )
    }

}

export default Experience;