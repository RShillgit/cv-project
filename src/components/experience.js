import { Component } from "react";

class Experience extends Component{
    constructor(props) {
        super(props);

        this.state = {
            Company: '',
            Position: '',
            Task: '',
            DateFrom: '',
            DateUntil: '',
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
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        e.target.style.backgroundColor = 'gray';

        const company = this.state.Company;
        const position = this.state.Position;
        const task = this.state.Task;
        const datefrom = this.state.DateFrom;
        const dateuntil = this.state.DateUntil;

        this.props.addExperience(company, position, task, datefrom, dateuntil);
    }

    render() {
        return (
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
        )
    }
}
export default Experience;