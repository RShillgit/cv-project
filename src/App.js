import { useState } from "react";
import './styles/app.css';
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";
import View from "./components/view";
import uniqid from "uniqid";


const App = () => {

  const [information, setInformation] = useState({
    Name: 'John Smith',
    Email: 'FakeEmail@email.com',
    Phone: '555-555-5555',
    Schools: [],
    Experience: [],
  })
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [preview, setPreview] = useState(false);

  const addEducation = (school, title, date, id) => {

    const newSchool = {
      School: school,
      Title: title,
      DateStudy: date,
      id: id,
    }

    const updatedEducation = information.Schools.concat(newSchool);

    setInformation(information => ({
      ...information, 
      Schools: updatedEducation
    }))
  }

  const deleteEducation = (id) => {
    // find the school with this id and delete it from state
    const filteredSchools = information.Schools.filter(function(school) {
      return school.id !== id
    })

    setInformation(information => ({               
      ...information,    
      Schools: filteredSchools     
    }))
  }

  const addExperience = (company, position, task, datefrom, dateuntil, id) => {

    const newExperience = {
      Company: company,
      Position: position,
      Task: task,
      DateFrom: datefrom,
      DateUntil: dateuntil,
      id: id,
    }

    const updatedExperience = information.Experience.concat(newExperience)

    setInformation(information => ({
      ...information,
      Experience: updatedExperience               

    }))
  }

  const deleteExperience = (id) => {
    // find the experience with this id and delete it from state
    const filteredExperience = information.Experience.filter(function(exp) {
      return exp.id !== id
    })

    setInformation(information => ({
      ...information,                    
      Experience: filteredExperience    
    }))
  }

  const handleInputChange = (ID, val) => {

    if(ID === 'Name') setInformation(information => ({
      ...information,                 
      Name: val      
    }))
    if(ID === 'Email') setInformation(information => ({
      ...information,                 
      Email: val      
    }))
    if(ID === 'Phone') setInformation(information => ({
      ...information,                 
      Phone: val      
    })) 
  }

  const addInfo = (e) => {

    // On each button click concatenate a value to the array so it will render once for each button click
    if(e.target.id === 'edu') {
      setEducation(education.concat({
          placeholder: 0,
          key: uniqid(),
        }))
    }
    if(e.target.id === 'exp') {
      setExperience(experience.concat({
          placeholder: 1,
          key: uniqid(),
        }))
    }
  }

  const viewEditClick = () => {
    setPreview(!preview);
    handleView();
  }

  const handleView = () => {

    const previewEditBtn = document.getElementById('preview-edit');
    const editCVDiv = document.querySelector('.editCV');
    const viewCVDiv = document.querySelector('.viewCV');

    // Change button text and viewCV display depending on what screen is rendered
    if (preview === false) {
      previewEditBtn.innerHTML = 'View CV';
      editCVDiv.style.display = 'block';
      viewCVDiv.style.display = 'block'; 
    }
    else {
      previewEditBtn.innerHTML = 'Edit CV';
      editCVDiv.style.display = 'none'; 
      viewCVDiv.style.display = 'block';
    }
  }

  return (
    <div className="cv">
      <div>
        <h1 className="header">CV Generator</h1>
      </div>

      <div className="previewEditBtn">
        <button id="preview-edit" onClick={viewEditClick}>View CV</button>
      </div>

      <div className="edit-view">

        <div className="editCV">

          <General fullName={information.Name} Email={information.Email} Phone={information.Phone} handleInputChange={handleInputChange.bind(this)}/>

          <div className="eduBtn">
            <button id="edu" onClick={addInfo}>Add Education</button>
          </div>

          <div className="education">
            {education.map((edu) => <Education key={edu.key} addEducation={addEducation.bind(this)} deleteEducation={deleteEducation.bind(this)}/>)}
          </div>
          
          <div className="expBtn">
            <button id="exp" onClick={addInfo}>Add Experience</button>
          </div>
          <div className="experience">
            {experience.map((exp) => <Experience key={exp.key} addExperience={addExperience.bind(this)} deleteExperience={deleteExperience.bind(this)}/>)}
          </div>
        </div>

        <div className="viewCV"> 
          <View info={information}/>
        </div>
      </div>
    </div>
  );
}

export default App;
