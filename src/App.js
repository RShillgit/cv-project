import { Component } from "react";
import './styles/app.css';
import General from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";

class App extends Component{
  constructor() {
    super();
  }

  submitInfo = (e) => {
    console.log(e.target)
  }

  render() {

    return (
      <div>
        <General />
        <Education />
        <Experience />
        <button onClick={this.submitInfo}>Add information</button>
      </div>
    );

  }
}

export default App;
