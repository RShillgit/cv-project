import { Component } from "react";
import Edit from './edits';

class Education extends Component {

    editField = (e) => {
        e.preventDefault();

        e.target.parentElement.style.display = 'none';

        const editName = document.querySelector(`.editInput${e.target.id}`);
        editName.style.display = 'flex';
    }

    render() {
        return (
            <div className="educationInfo">

                <div className='infoSchool'>
                    <label>School: </label>
                    <p>Penn State </p>
                    <button id='School' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputSchool" inputID="School" inputType="text" value="Penn State"/> 
            
                <div className='infoTitle'>
                    <label>Title of study: </label>
                    <p>Computer Science </p>
                    <button id='Title' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputTitle" inputID="Title" inputType="text" value="Computer Science"/> 

                <div className='infoDateStudy'>
                    <label>Date of study:</label>
                    <p>2022-05-14</p>
                    <button id='DateStudy' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputDateStudy" inputID="DateStudy" inputType="date" value="05/14/2022"/>

            </div>

        )
    }

}

export default Education;