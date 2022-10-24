import React, { Component } from "react";
import Education from "./FormComponents/Education";
import PersonalDetails from "./FormComponents/PersonalDetails";
import WorkExperience from "./FormComponents/WorkExperience";

class Form extends Component {
  render() {
    const { handleChange, onAddEducation, onAddWorkExperience, onDeleteEducation, onDeleteWorkExperience, state } =
      this.props;
    return (
      <form className="form">
        <PersonalDetails
          handleChange={handleChange}
          personalDetails={state.personalDetails}
        />
        <Education handleChange={handleChange} education={state.education} onAddEducation={onAddEducation} onDeleteEducation={onDeleteEducation}/>
        <WorkExperience handleChange={handleChange} workExperience={state.workExperience} onAddWorkExperience={onAddWorkExperience} onDeleteWorkExperience={onDeleteWorkExperience}/>
      </form>
    );
  }
}

export default Form;
