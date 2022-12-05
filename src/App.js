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
      education: [],
      experience: [],
      preview: false,
    }
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
    const viewCVDiv = document.querySelector('.viewCV');

    // Change button text and viewCV display depending on what screen is rendered
    if (this.state.preview === false) {
      previewEditBtn.innerHTML = 'View CV';
      viewCVDiv.style.display = 'none';
    }
    else {
      previewEditBtn.innerHTML = 'Edit CV';
      viewCVDiv.style.display = 'flex';
    }
  }

  render() {

    return (
      <div className="cv">

        <div className="editCV">
          <button id="preview-edit" onClick={this.viewEditClick}>View CV</button>

          <General />

          <button id="edu" onClick={this.addInfo}>Add Education</button>
          <div className="education">
            {this.state.education.map(() => <Education />)}
          </div>
          
          <button id="exp" onClick={this.addInfo}>Add Experience</button>
          <div className="experience">
            {this.state.experience.map(() => <Experience />)}
          </div>
        </div>

        <div className="viewCV">
          <View />
        </div>
          
      </div>
    );

  }
}

export default App;
