import { useState } from "react";
import AddedExp from "./addedExp";
import uniqid from "uniqid";

const Experience = (props) => {

    const [Company, setCompany] = useState('');
    const [Position, setPosition] = useState('');
    const [Task, setTask] = useState('');
    const [DateFrom, setDateFrom] = useState('');
    const [DateUntil, setDateUntil] = useState('');
    const [id, setId] = useState(uniqid());

    const handleChange = (e) => {

        if (e.target.id === 'experienceCompany') {
            setCompany(e.target.value); 
        }
        else if (e.target.id === 'experiencePosition') {
            setPosition(e.target.value); 
        }
        else if (e.target.id === 'experienceTask') {
            setTask(e.target.value);
        }
        else if (e.target.id === 'experienceDateFrom') {
            setDateFrom(e.target.value);
        }
        else {
            setDateUntil(e.target.value);
            setId(uniqid());
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();

        // Hide experience form and display addedExperience div
        const container = e.target.parentElement.parentElement.parentElement;
        const experienceForm = e.target.parentElement.parentElement;
        const addedExperienceDiv = container.querySelector('.addedExperienceInformation');
        experienceForm.style.display = 'none';
        addedExperienceDiv.style.display = 'flex';

        props.addExperience(Company, Position, Task, DateFrom, DateUntil, id);
    }

    return (
        <div className="experience">
        
            <form className="experienceForm">
            
                <div className='experienceInformation'>

                    <label>Company Name: 
                        <input id="experienceCompany" onChange={handleChange} type="text"></input>
                    </label>
                                            
                    <label>Position Title: 
                        <input id="experiencePosition" onChange={handleChange} type="text"></input>
                    </label>
    
                    <label>Task of Position:
                        <input id="experienceTask" onChange={handleChange} type="text"></input>
                    </label>
                
                    <label>Employed From: 
                        <input id="experienceDateFrom" onChange={handleChange} type="date"></input>
                    </label>
    
                    <label>Employed Until: 
                        <input id="experienceDateUntil" onChange={handleChange} type="date"></input>
                    </label>

                    <button id="addExp" onClick={formSubmit}>Add Experience</button>
    
                </div>
                            
            </form>
            <AddedExp company={Company} position={Position} task={Task} datefrom={DateFrom} dateuntil={DateUntil} id={id} deleteExperience={props.deleteExperience}/>
        </div>
    )
}
export default Experience;