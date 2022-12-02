// General information like name, email, phone number
import '../styles/general.css';
import { Component } from "react";
import Edit from './edits';

class General extends Component {
    constructor() {
        super();
    }


    editField = (e) => {
        e.preventDefault();

        e.target.parentElement.style.display = 'none';

        // Need to figure out how to select which 'editInput'
        const editName = document.querySelector(`.editInput${e.target.id}`);
        editName.style.display = 'flex';
    }

    render() {
        return (
            
            <div className='generalInfoInputs'>
            
                <div className='generalInfoName'>
                    <label>Full Name: </label>
                    <p>John Smith </p>
                    <button id='Name' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputName" inputID="Name" inputType="text" value="John Smith"/> 
            
                <div className='generalInfoEmail'>
                    <label>Email: </label>
                    <p>FakeEmail@email.com </p>
                    <button id='Email' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputEmail" inputID="Email" inputType="email" value="FakeEmail@email.com"/> 

                <div className='generalInfoPhone'>
                    <label>Phone Number:</label>
                    <p>555-555-5555</p>
                    <button id='Phone' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputPhone" inputID="Phone" inputType="text" value="555-555-5555"/> 
                

            </div>
            
        )
    }
}

export default General;