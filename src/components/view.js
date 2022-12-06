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
                        <h2>Education</h2>
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
                        <h2>Professional Experience</h2>
                        <div className="expOverview">
                            <p>{exp.Company}</p>
                            <p>{exp.Position}</p>
                            <p>From: {exp.DateFrom}</p>
                            <p>Until: {exp.DateUntil}</p>
                        </div>
                        <div className="expTask">
                            <p>{exp.Task}</p>
                        </div>
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
                
                <div className="edu">
                    {educationInfo}
                </div>

                <div className="exp">
                    {experienceInfo}
                </div>
                
            </div>
        )
    }
}
export default View;