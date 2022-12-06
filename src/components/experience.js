import { Component } from "react";
import AddedExp from "./addedExp";
import uniqid from "uniqid";

class Experience extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Company: '',
            Position: '',
            Task: '',
            DateFrom: '',
            DateUntil: '',
            id: uniqid(),
        }
    }

    handleChange = (e) => {

        if (e.target.id === 'experienceCompany') {
            this.setState({ Company: e.target.value }); 
        }
        else if (e.target.id === 'experiencePosition') {
            this.setState({ Position: e.target.value }); 
        }
        else if (e.target.id === 'experienceTask') {
            this.setState({ Task: e.target.value }); 
        }
        else if (e.target.id === 'experienceDateFrom') {
            this.setState({ DateFrom: e.target.value }); 
        }
        else {
            this.setState({ DateUntil: e.target.value }); 
            this.setState({id: uniqid()})
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const company = this.state.Company;
        const position = this.state.Position;
        const task = this.state.Task;
        const datefrom = this.state.DateFrom;
        const dateuntil = this.state.DateUntil;
        const id = this.state.id;

        // Hide experience form and display addedExperience div
        const container = e.target.parentElement.parentElement.parentElement;
        const experienceForm = e.target.parentElement.parentElement;
        const addedExperienceDiv = container.querySelector('.addedExperienceInformation');
        experienceForm.style.display = 'none';
        addedExperienceDiv.style.display = 'flex';

        this.props.addExperience(company, position, task, datefrom, dateuntil, id);
    }

    render() {
        return (
            <div className="experience">
            
                <form className="experienceForm">
                
                    <div className='experienceInformation'>

                        <label>Company Name: 
                            <input id="experienceCompany" onChange={this.handleChange} type="text"></input>
                        </label>
                                                
                        <label>Position Title: 
                            <input id="experiencePosition" onChange={this.handleChange} type="text"></input>
                        </label>
        
                        <label>Task of Position:
                            <input id="experienceTask" onChange={this.handleChange} type="text"></input>
                        </label>
                    
                        <label>Employed From: 
                            <input id="experienceDateFrom" onChange={this.handleChange} type="date"></input>
                        </label>
        
                        <label>Employed Until: 
                            <input id="experienceDateUntil" onChange={this.handleChange} type="date"></input>
                        </label>

                        <button onClick={this.formSubmit}>Add Experience</button>
        
                    </div>
                                
                </form>
                <AddedExp company={this.state.Company} position={this.state.Position} task={this.state.Task} datefrom={this.state.DateFrom} dateuntil={this.state.DateUntil} id={this.state.id} deleteExperience={this.props.deleteExperience}/>
            </div>
        )
    }
}
export default Experience;