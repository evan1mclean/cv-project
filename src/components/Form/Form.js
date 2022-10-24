import React, { Component } from "react";
import Education from "./FormComponents/Education";
import PersonalDetails from "./FormComponents/PersonalDetails";
import WorkExperience from "./FormComponents/WorkExperience";

class Form extends Component {
  render() {
    const { handlePersonalDetailsChange, handleEducationChange, handleWorkExperienceChange, onAddEducation, onAddWorkExperience, onDeleteEducation, onDeleteWorkExperience, state } =
      this.props;
    return (
      <form className="form">
        <PersonalDetails
          handlePersonalDetailsChange={handlePersonalDetailsChange}
        />
        <Education handleEducationChange={handleEducationChange} education={state.education} onAddEducation={onAddEducation} onDeleteEducation={onDeleteEducation}/>
        <WorkExperience handleWorkExperienceChange={handleWorkExperienceChange} workExperience={state.workExperience} onAddWorkExperience={onAddWorkExperience} onDeleteWorkExperience={onDeleteWorkExperience}/>
      </form>
    );
  }
}

export default Form;
