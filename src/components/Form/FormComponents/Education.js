import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleEducationChange, education, onAddEducation, onDeleteEducation } = this.props;
    return (
      <div className="form-section">
        <h2>Education</h2>
        {education.map((section, index) => {
          const deleteButton =
            education.length > 1 ? <button onClick={(e) => onDeleteEducation(e, index)}>Delete</button> : null;
          return (
            <div className="form-inputs" key={section.id}>
              <div className="form-element">
                <label htmlFor="degree">Degree</label>
                <input
                  type="text"
                  name="degree"
                  id="degree"
                  placeholder="Enter Degree"
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="university">University</label>
                <input
                  type="text"
                  name="university"
                  id="university"
                  placeholder="Enter University"
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="uniStartDate">Start Date</label>
                <input
                  type="text"
                  name="uniStartDate"
                  id="uniStartDate"
                  placeholder="Enter Start Date"
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="uniEndDate">End Date</label>
                <input
                  type="text"
                  name="uniEndDate"
                  id="uniEndDate"
                  placeholder="Enter End Date"
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
              <div className="form-element">
                <label htmlFor="uniDescription">Description</label>
                <input
                  type="text"
                  name="uniDescription"
                  id="uniDescription"
                  placeholder="Enter Description"
                  onChange={(e) => handleEducationChange(e, index)}
                />
              </div>
              <button onClick={onAddEducation}>Add</button>
              {deleteButton}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
