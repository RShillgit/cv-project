// Practical experience including company name, position title, main tasks of your jobs,
// date from and until when you worked for that company

import { Component } from "react";

class Experience extends Component {
    constructor() {
        super();

        this.state = {
            company: '',
            position: '',
            tasks: '',
            dateFrom: '',
            dateUntil: '',
        }
    }

    handleChange = (e) => {

        console.log(this.state)

        if (e.target.id === 'company') {
            this.setState({ company: e.target.value }) 
        }
        else if (e.target.id === 'position') {
            this.setState({ position: e.target.value }) 
        }
        else if (e.target.id === 'tasks') {
            this.setState({ tasks: e.target.value }) 
        }   
        else if (e.target.id === 'dateFrom') {
            this.setState({ dateFrom: e.target.value }) 
        } 
        else if (e.target.id === 'dateUntil') {
            this.setState({ dateUntil: e.target.value }) 
        } 
    }

    render() {
        return (
            <form className="educationInfo">
                <div className='educationInfoInputs'>
                    <label>
                        Company Name: 
                        <input id='company' onChange={this.handleChange} type="text" value={this.name} placeholder="Name"></input>
                    </label>
                    <label>
                        Position Title: 
                        <input id='position' onChange={this.handleChange} type="text"></input>
                    </label>
                    <label>
                        Task of Job: 
                        <input id='tasks' onChange={this.handleChange} type="text"></input>
                    </label>
                    <label>
                        Employed from: 
                        <input id='dateFrom' onChange={this.handleChange} type="date"></input>
                    </label>
                    <label>
                        Employed until: 
                        <input id='dateUntil' onChange={this.handleChange} type="date"></input>
                    </label>
                </div>
            </form>
        )
    }

}

export default Experience;