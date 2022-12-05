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

        const school = this.state.School;
        const title = this.state.Title;
        const date = this.state.DateStudy;

        // Remove education info from the div and render a smaller div to show it has been added
        const addedEducationInformation = ([
            <div className="addedEducationInformation"> 
                <p>{school}</p>
                <p>{title}</p>
                <p>{date}</p>
                <button>X</button> 
            </div>
        ])

        e.target.parentElement.innerHTML = addedEducationInformation.map(() => <addedEducationInformation/>)
        
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