import { Component } from "react";

class Education extends Component{
    constructor(props) {
        super(props);

        this.state = {
            School: '',
            Title: '',
            DateStudy: '',
        }
    }

    handleChange = (e) => {

        if (e.target.id === 'educationSchool') {
            this.setState({ School: e.target.value }); 
        }
        else if (e.target.id === 'educationTitle') {
            this.setState({ Title: e.target.value }); 
        }
        else {
            this.setState({ DateStudy: e.target.value }); 
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        e.target.style.backgroundColor = 'gray';

        const school = this.state.School;
        const title = this.state.Title;
        const date = this.state.DateStudy;

        this.props.addEducation(school, title, date);
    }

    render() {
        return (
            <form className="educationForm">
               
                <div className='educationInformation'>
                    <label>School: 
                        <input id="educationSchool" onChange={this.handleChange} type="text"></input>
                    </label>

                    <label>Title of study: 
                        <input id="educationTitle" onChange={this.handleChange} type="text"></input>
                    </label>
    
                    <label>Date of study:
                        <input id="educationDateStudy" onChange={this.handleChange} type="date"></input>
                    </label>

                    <button onClick={this.formSubmit}>Add Education</button>
                </div>    

                

            </form>
        )
    }
}
export default Education;