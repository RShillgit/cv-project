import { Component } from "react";

class View extends Component {
    constructor(props) {
        super(props); 
    }
    
    render() {

        const info = this.props.info; 

        const educationInfo = (
            info.Schools.map((school) => {
                return (
                    <div className="viewEducationInfo">
                        <p>School: {school.School}</p>
                        <p>Title of Study: {school.Title}</p>
                        <p>Date of Study: {school.DateStudy}</p>
                    </div>
                )
            })
        );

        const experienceInfo = (
            info.Experience.map((exp) => {
                return (
                    <div className="viewExperienceInfo">
                        <p>Company: {exp.Company}</p>
                        <p>Position Title: {exp.Position}</p>
                        <p>Tasks: {exp.Task}</p>
                        <p>Employed From: {exp.DateFrom}</p>
                        <p>Employed Until: {exp.DateUntil}</p>
                    </div>
                )
            })
        );

        return (
            <div>
                <div className="viewGeneralInfo">
                    <p>Full Name: {info.Name}</p>
                    <p>Email: {info.Email}</p>
                    <p>Phone Number: {info.Phone}</p>
                </div>

                {/* Gonna need some type of for loop to render each education/experience */}
                
                {educationInfo}
                {experienceInfo}
                
            </div>
        )
    }
}
export default View;