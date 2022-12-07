import { Component } from "react";
import uniqid from "uniqid";

class View extends Component {
    constructor(props) {
        super(props); 
    }
    
    render() {

        const info = this.props.info; 

        const educationInfo = (
            info.Schools.map((school) => {
                return (
                    <div key={uniqid()} className="viewEducationInfo">
                        
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
                    <div key={uniqid()} className="viewExperienceInfo">
                        
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
                    <p>{info.Name}</p>
                    <p>Email: {info.Email}</p>
                    <p>Phone Number: {info.Phone}</p>
                </div>
                
                <div className="edu">
                    <h2>Education</h2>
                    {educationInfo}
                </div>

                <div className="exp">
                    <h2>Professional Experience</h2>
                    {experienceInfo}
                </div>
                
            </div>
        )
    }
}
export default View;