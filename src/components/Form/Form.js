import React, { Component } from "react";
import Education from "./FormComponents/Education";
import PersonalDetails from "./FormComponents/PersonalDetails";
import WorkExperience from "./FormComponents/WorkExperience";

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <form className="form">
        <PersonalDetails />
        <WorkExperience />
        <Education />
      </form>
    )
  }
}

export default Form