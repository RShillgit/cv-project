import { Component } from "react";
import Edit from './edits';

class General extends Component {

    editField = (e) => {
        e.preventDefault();

        e.target.parentElement.style.display = 'none';

        const editName = document.querySelector(`.editInput${e.target.id}`);
        editName.style.display = 'flex';
    }

    render() {
        return (
            
            <div className='generalInfo'>
            
                <div className='infoName'>
                    <label>Full Name: </label>
                    <p>John Smith </p>
                    <button id='Name' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputName" inputID="Name" inputType="text" value="John Smith"/> 
            
                <div className='infoEmail'>
                    <label>Email: </label>
                    <p>FakeEmail@email.com </p>
                    <button id='Email' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputEmail" inputID="Email" inputType="email" value="FakeEmail@email.com"/> 

                <div className='infoPhone'>
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