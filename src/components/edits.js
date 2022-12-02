import { Component } from "react";

class Edit extends Component {
    constructor(props) {
        super(props);

        // Initially set state to the current value so user can submit without making changes
        this.state = {
            newInput: this.props.value,
        }

        this.buttonSubmit.bind(this);
    }

    handleChange = (e) => {
        
        this.setState({ newInput: e.target.value }); 
    }

    buttonSubmit = (e) => {

        e.target.parentElement.style.display = 'none';

        const infoBeingEdited = document.querySelector(`.generalInfo${this.props.inputID}`);
        const editingValue = infoBeingEdited.querySelector('p');
        editingValue.innerHTML = this.state.newInput;

        infoBeingEdited.style.display = 'flex';
    }

    render() {
        return (
            <div  className={this.props.divClass}>
                <input onChange={this.handleChange} id={this.props.inputID} type={this.props.inputType} defaultValue={this.props.value}></input>
                <button type="button" onClick={this.buttonSubmit}>Submit</button>
            </div>   
        )
    }
}

export default Edit;