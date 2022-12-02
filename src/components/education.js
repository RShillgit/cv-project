// Educational experience like school name, title of study, date of study

import { Component } from "react";

class Education extends Component {
    constructor() {
        super();

        this.state = {
            school: '',
            study: '',
            date: '',
        }
    }

    handleChange = (e) => {

        console.log(this.state)

        if (e.target.id === 'school') {
            this.setState({ school: e.target.value }) 
        }
        else if (e.target.id === 'study') {
            this.setState({ study: e.target.value }) 
        }
        else {
            this.setState({ date: e.target.value }) 
        }   
    }

    render() {
        return (
            <form className="educationInfo">
                <div className='educationInfoInputs'>
                    <label>
                        school: 
                        <input id='school' onChange={this.handleChange} type="text" value={this.name} placeholder="Name"></input>
                    </label>
                    <label>
                        Title of study: 
                        <input id='study' onChange={this.handleChange} type="text"></input>
                    </label>
                    <label>
                        Date of study: 
                        <input id='date' onChange={this.handleChange} type="date"></input>
                    </label>
                </div>
            </form>

        )
    }

}

export default Education;