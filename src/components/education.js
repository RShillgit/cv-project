import { useState } from "react";
import AddedEdu from "./addedEdu";
import uniqid from "uniqid";

const Education = (props) => {

    const [School, setSchool] = useState('');
    const [Title, setTitle] = useState('');
    const [DateStudy, setDateStudy] = useState('');
    const [id, setId] = useState(uniqid());

    const handleChange = (e) => {

        if (e.target.id === 'educationSchool') {
            setSchool(e.target.value); 
        }
        else if (e.target.id === 'educationTitle') {
            setTitle(e.target.value); 
        }
        else {
            setDateStudy(e.target.value); 
            setId(uniqid());
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();

        // Hide education form and display addedEducation div
        const container = e.target.parentElement.parentElement.parentElement;
        const educationForm = e.target.parentElement.parentElement;
        const addedEducationDiv = container.querySelector('.addedEducationInformation');
        educationForm.style.display = 'none';
        addedEducationDiv.style.display = 'flex';

        props.addEducation(School, Title, DateStudy, id);
    }

    return (
        <div className="education">

            <form className="educationForm">
            
                <div className='educationInformation'>
                    <label>School: 
                        <input id="educationSchool" onChange={handleChange} type="text"></input>
                    </label>

                    <label>Title of study: 
                        <input id="educationTitle" onChange={handleChange} type="text"></input>
                    </label>
    
                    <label>Date of study:
                        <input id="educationDateStudy" onChange={handleChange} type="date"></input>
                    </label>

                    <button id="addEdu" onClick={formSubmit}>Add Education</button>

                </div>    

            </form>
            <AddedEdu school={School} title={Title} datestudy={DateStudy} deleteEducation={props.deleteEducation} id={id}/>
        </div>
    )
}
export default Education;