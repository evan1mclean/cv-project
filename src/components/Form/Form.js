import React from "react";
import Education from "./FormComponents/Education";
import PersonalDetails from "./FormComponents/PersonalDetails";
import WorkExperience from "./FormComponents/WorkExperience";
import "../../styles/Form.css";

const Form = (props) => {
  const {
    handleChange,
    onAddEducation,
    onAddWorkExperience,
    onDeleteSection,
    state,
    handlePrint,
    handleImageUpload,
  } = props;
  return (
    <form className="form">
      <PersonalDetails
        handleChange={handleChange}
        personalDetails={state.personalDetails}
        handleImageUpload={handleImageUpload}
      />
      <Education
        handleChange={handleChange}
        education={state.education}
        onAddEducation={onAddEducation}
        onDeleteSection={onDeleteSection}
      />
      <WorkExperience
        handleChange={handleChange}
        workExperience={state.workExperience}
        onAddWorkExperience={onAddWorkExperience}
        onDeleteSection={onDeleteSection}
      />
      <button onClick={handlePrint} className="pdf-button" type="button">Generate PDF</button>
    </form>
  );
};

export default Form;
