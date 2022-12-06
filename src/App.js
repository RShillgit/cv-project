import { Component } from "react";
import './styles/app.css';
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";
import View from "./components/view";


class App extends Component{
  constructor() {
    super();

    this.state = {
      information: {
        Name: 'John Smith',
        Email: 'FakeEmail@email.com',
        Phone: '555-555-5555',
        Schools: [],
        /*
        {
          School: 'Penn Dokie',
          Title: 'Computer Fiction',
          DateStudy: '2030-05-15',
          id: '',
        }
        {
          Company: 'Tech Company',
          Position: 'Software Engineer 1',
          Task: 'Code',
          DateFrom: '2022-05-15',
          DateUntil: '2050-05-15',
          id: '',
        }
        */
        Experience: [],
      },
      education: [],
      experience: [],
      preview: false,
    }
  }

  addEducation = (school, title, date, id) => {

    const newSchool = {
      School: school,
      Title: title,
      DateStudy: date,
      id: id,
    }

    this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Schools: this.state.information.Schools.concat(newSchool)      
      }
    }))
  }

  deleteEducation = (id) => {
    // find the school with this id and delete it from state
    const filteredSchools = this.state.information.Schools.filter(function(school) {
      return school.id !== id
    })

    this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Schools: filteredSchools     
      }
    }))
  }

  addExperience = (company, position, task, datefrom, dateuntil, id) => {

    const newExperience = {
      Company: company,
      Position: position,
      Task: task,
      DateFrom: datefrom,
      DateUntil: dateuntil,
      id: id,
    }

    this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Experience: this.state.information.Experience.concat(newExperience)      
      }
    }))
  }

  deleteExperience = (id) => {
    // find the experience with this id and delete it from state
    const filteredExperience = this.state.information.Experience.filter(function(exp) {
      return exp.id !== id
    })

    this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Experience: filteredExperience    
      }
    }))
  }

  handleInputChange = (ID, val) => {

    if(ID === 'Name') this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Name: val      
      }
    }))
    if(ID === 'Email') this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Email: val      
      }
    }))
    if(ID === 'Phone') this.setState(prevState => ({
      information: {                  
          ...prevState.information,    
          Phone: val      
      }
    })) 
  }

  addInfo = (e) => {

    // On each button click concatenate a value to the array so it will render once for each button click
    if(e.target.id === 'edu') {
      this.setState({
        education: this.state.education.concat(0)
      })

    }
    if(e.target.id === 'exp') {
      this.setState({
        experience: this.state.experience.concat(1)
      })

    }
  }

  viewEditClick = () => {
    this.setState(({
      preview: !this.state.preview
    }), this.handleView)
  }

  handleView = () => {

    const previewEditBtn = document.getElementById('preview-edit');
    const editCVDiv = document.querySelector('.editCV');
    const viewCVDiv = document.querySelector('.viewCV');

    // Change button text and viewCV display depending on what screen is rendered
    if (this.state.preview === false) {
      previewEditBtn.innerHTML = 'View CV';
      editCVDiv.style.display = 'block';
      viewCVDiv.style.display = 'block'; //none
    }
    else {
      previewEditBtn.innerHTML = 'Edit CV';
      editCVDiv.style.display = 'none'; //none
      viewCVDiv.style.display = 'block';
      //viewCVDiv.style.width = '100%';
    }
  }

  render() {

    return (
      <div className="cv">

        <div className="previewEditBtn">
          <button id="preview-edit" onClick={this.viewEditClick}>View CV</button>
        </div>

        <div className="edit-view">

          <div className="editCV">

            <General fullName={this.state.information.Name} Email={this.state.information.Email} Phone={this.state.information.Phone} handleInputChange={this.handleInputChange.bind(this)}/>

            <div className="eduBtn">
              <button id="edu" onClick={this.addInfo}>Add Education</button>
            </div>

            <div className="education">
              {/* <Education School={this.state.information.School} Title={this.state.information.Title} DateStudy={this.state.information.DateStudy} handleInputChange={this.handleInputChange.bind(this)}/> */}
              {this.state.education.map(() => <Education addEducation={this.addEducation.bind(this)} deleteEducation={this.deleteEducation.bind(this)}/>)}
            </div>
            
            <div className="expBtn">
              <button id="exp" onClick={this.addInfo}>Add Experience</button>
            </div>
            <div className="experience">
              {/* <Experience /> */}
              {this.state.experience.map(() => <Experience addExperience={this.addExperience.bind(this)} deleteExperience={this.deleteExperience.bind(this)}/>)}
            </div>
          </div>

          <div className="viewCV">
            <View info={this.state.information}/>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
