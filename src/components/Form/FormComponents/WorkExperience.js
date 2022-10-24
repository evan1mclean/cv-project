import React, { Component } from "react";

class WorkExperience extends Component {
  render() {
    const { handleWorkExperienceChange, workExperience, onAddWorkExperience, onDeleteWorkExperience } =
      this.props;
    return (
      <div className="form-section">
        <h2>Work Experience</h2>
        {workExperience.map((section, index) => {
          const deleteButton =
            workExperience.length > 1 ? <button onClick={(e) => onDeleteWorkExperience(e, section.id)}>Delete</button> : null;
          return (
            <div className="form-inputs" key={section.id}>
              <div className="form-element">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Enter Company"
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  placeholder="Enter Position"
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="text"
                  name="workStartDate"
                  id="workStartDate"
                  placeholder="Enter Start Date"
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="workEndDate">End Date</label>
                <input
                  type="text"
                  name="workEndDate"
                  id="workEndDate"
                  placeholder="Enter End Date"
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="workDescription">Description</label>
                <input
                  type="text"
                  name="workDescription"
                  id="workDescription"
                  placeholder="Enter Description"
                  onChange={(e) => handleWorkExperienceChange(e, index)}
                />
              </div>
              <button onClick={onAddWorkExperience}>Add</button>
              {deleteButton}
            </div>
          );
        })}
      </div>
    );
  }
}

export default WorkExperience;
