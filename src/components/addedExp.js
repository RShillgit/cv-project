import { Component } from "react";

class AddedExp extends Component {
    constructor() {
        super();
    }

    deleteExp = (e) => {
        e.preventDefault();

        // Remove the added experience from the DOM
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)

        // Run the delete experience function
        this.props.deleteExperience(this.props.id);
    }

    render() {
        return(
            <div className="addedExperienceInformation">
                <p>{this.props.company}</p>
                <p>{this.props.position}</p>
                <p>{this.props.task}</p>
                <p>{this.props.datefrom}</p>
                <p>{this.props.dateuntil}</p>
                <button onClick={this.deleteExp}>X</button>
            </div>
        )
    }
}
export default AddedExp;