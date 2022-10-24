import React, { Component } from "react";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handlePersonalDetailsChange } = this.props;
    return (
      <div className="form-section">
        <h2>Personal Details</h2>
        <div className="form-inputs">
          <div className="form-element">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Full Name"
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="title">Job Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Job Title"
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter Location"
              onChange={handlePersonalDetailsChange}
            />
          </div>
          <div className="form-element">
            <label htmlFor="photo">Upload a photo</label>
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*"
              multiple={false}
            />
          </div>
          <div className="form-element">
            <label htmlFor="summary">Summary</label>
            <textarea
              name="summary"
              id="summary"
              placeholder="Introduce yourself"
              onChange={handlePersonalDetailsChange}
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
