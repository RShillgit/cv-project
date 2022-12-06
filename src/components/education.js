import { Component } from "react";
import AddedEdu from "./addedEdu";
import uniqid from "uniqid";

class Education extends Component{
    constructor(props) {
        super(props);

        this.state = {
            School: '',
            Title: '',
            DateStudy: '',
            id: uniqid(),
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
            this.setState({id: uniqid()})
        }
    }

    formSubmit = (e) => {
        e.preventDefault();

        const school = this.state.School;
        const title = this.state.Title;
        const date = this.state.DateStudy;
        const id = this.state.id;

        // Hide education form and display addedEducation div
        const container = e.target.parentElement.parentElement.parentElement;
        const educationForm = e.target.parentElement.parentElement;
        const addedEducationDiv = container.querySelector('.addedEducationInformation');
        educationForm.style.display = 'none';
        addedEducationDiv.style.display = 'flex';

        this.props.addEducation(school, title, date, id);
    }

    render() {
        return (
            <div className="education">

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
                <AddedEdu school={this.state.School} title={this.state.Title} datestudy={this.state.DateStudy} deleteEducation={this.props.deleteEducation} id={this.state.id}/>
            </div>
        )
    }
}
export default Education;