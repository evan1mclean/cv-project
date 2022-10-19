import React, { Component } from "react";

class PersonalDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="form-section">
        <h2>Personal Details</h2>
        <div className="form-element">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter Full Name" />
        </div>
        <div className="form-element">
          <label htmlFor="title">Job Title</label>
          <input type="text" id="title" placeholder="Enter Job Title" />
        </div>
        <div className="form-element">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="Enter Email" />
        </div>
        <div className="form-element">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-element">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" placeholder="Enter Location" />
        </div>
        <div className="form-element">
          <label htmlFor="photo">Upload a photo</label>
          <input type="file" id="photo" />
        </div>
        <div className="form-element">
          <label htmlFor="summary">Summary</label>
          <textarea id="summary" placeholder="Introduce yourself"></textarea>
        </div>
      </div>
    );
  }
}

export default PersonalDetails;
