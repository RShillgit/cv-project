import { Component } from "react";

class AddedEdu extends Component {
    constructor() {
        super();
    }

    deleteEdu = (e) => {
        e.preventDefault();

        // Remove the added education from the DOM
        e.target.parentElement.parentElement.removeChild(e.target.parentElement)

        // Run the delete education function
        this.props.deleteEducation(this.props.id);
    }

    render() {
        return(
            <div className="addedEducationInformation">
                <p>{this.props.school}</p>
                <p>{this.props.title}</p>
                <p>{this.props.datestudy}</p>
                <button onClick={this.deleteEdu}>X</button>
            </div>
        )
    }
}
export default AddedEdu;