import { Component } from "react";

class View extends Component {
    constructor(props) {
        super(props); 
    }
    
    render() {

        const info = this.props.info; 

        return (
            <div>
                <div className="viewGeneralInfo">
                    <p>Full Name: {info.Name}</p>
                    <p>Email: {info.Email}</p>
                    <p>Phone Number: {info.Phone}</p>
                </div>

                {/* Gonna need some type of for loop to render each education/experience */}
                <div className="viewEducationInfo">
                    <p>School: {info.Schools[0].School}</p>
                    <p>Title of Study: {info.Schools[0].Title}</p>
                    <p>Date of Study: {info.Schools[0].DateStudy}</p>

                </div>

                <div className="viewExperienceInfo">
                    <p>Company: {info.Experience[0].Company}</p>
                    <p>Position Title: {info.Experience[0].Position}</p>
                    <p>Tasks: {info.Experience[0].Task}</p>
                    <p>Employed From: {info.Experience[0].DateFrom}</p>
                    <p>Employed Until: {info.Experience[0].DateUntil}</p>
                </div>
            </div>
        )
    }
}
export default View;