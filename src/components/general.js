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
                    <p>{this.props.fullName}</p>
                    <button id='Name' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputName" inputID="Name" inputType="text" value={this.props.fullName} handleInputChange={this.props.handleInputChange}/> 
            
                <div className='infoEmail'>
                    <label>Email: </label>
                    <p>{this.props.Email}</p>
                    <button id='Email' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputEmail" inputID="Email" inputType="email" value={this.props.Email} handleInputChange={this.props.handleInputChange}/> 

                <div className='infoPhone'>
                    <label>Phone Number:</label>
                    <p>{this.props.Phone}</p>
                    <button id='Phone' onClick={this.editField}>Edit</button>
                </div>
                <Edit divClass="editInputPhone" inputID="Phone" inputType="text" value={this.props.Phone} handleInputChange={this.props.handleInputChange}/> 
            
            </div>
            
        )
    }
}

export default General;