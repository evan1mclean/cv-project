import React from "react";

const WorkExperience = (props) => {
  const { handleChange, workExperience, onAddWorkExperience, onDeleteSection } =
    props;
  return (
    <div className="form-section">
      <h2>Work Experience</h2>
      {workExperience.map((section) => {
        const deleteButton =
          workExperience.length > 1 ? (
            <button
              className="delete-button"
              onClick={(e) => onDeleteSection(e, workExperience, section.id)}
            >
              Delete
            </button>
          ) : null;
        return (
          <div className="form-inputs" key={section.id}>
            <div className="form-element">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                id="company"
                placeholder="Enter Company"
                onChange={(e) => handleChange(e, workExperience, section.id)}
              />
            </div>
            <div className="form-element">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                id="position"
                placeholder="Enter Position"
                onChange={(e) => handleChange(e, workExperience, section.id)}
              />
            </div>
            <div className="form-element">
              <label htmlFor="workStartDate">Start Date</label>
              <input
                type="text"
                name="workStartDate"
                id="workStartDate"
                placeholder="Enter Start Date"
                onChange={(e) => handleChange(e, workExperience, section.id)}
              />
            </div>
            <div className="form-element">
              <label htmlFor="workEndDate">End Date</label>
              <input
                type="text"
                name="workEndDate"
                id="workEndDate"
                placeholder="Enter End Date"
                onChange={(e) => handleChange(e, workExperience, section.id)}
              />
            </div>
            <div className="form-element">
              <label htmlFor="workDescription">Description</label>
              <input
                type="text"
                name="workDescription"
                id="workDescription"
                placeholder="Enter Description"
                onChange={(e) => handleChange(e, workExperience, section.id)}
              />
            </div>
            <div className="buttons">
              <button onClick={onAddWorkExperience}>Add</button>
              {deleteButton}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
