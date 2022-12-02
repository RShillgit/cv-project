import { Component } from "react";
import './styles/app.css';
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";

class App extends Component{
  constructor() {
    super();

    this.state = {
      education: [],
      experience: [],
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

  submitInfo = (e) => {
    console.log(e.target)
  }

  render() {

    return (
      <div className="cv">

        <button onClick={this.submitInfo}>View CV</button>

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
    );

  }
}

export default App;
