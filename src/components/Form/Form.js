import React, { Component } from "react";
import Education from "./FormComponents/Education";
import PersonalDetails from "./FormComponents/PersonalDetails";
import WorkExperience from "./FormComponents/WorkExperience";
import '../../styles/Form.css'

class Form extends Component {
  render() {
    const { handleChange, onAddEducation, onAddWorkExperience, onDeleteSection, state, printButton } =
      this.props;
    return (
      <form className="form">
        <PersonalDetails
          handleChange={handleChange}
          personalDetails={state.personalDetails}
        />
        <Education handleChange={handleChange} education={state.education} onAddEducation={onAddEducation} onDeleteSection={onDeleteSection}/>
        <WorkExperience handleChange={handleChange} workExperience={state.workExperience} onAddWorkExperience={onAddWorkExperience} onDeleteSection={onDeleteSection}/>
        {printButton}
      </form>
    );
  }
}

export default Form;
