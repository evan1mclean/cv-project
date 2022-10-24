import React, { Component } from "react";
import "../styles/Main.css";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {
        name: "",
        title: "",
        email: "",
        phoneNumber: "",
        location: "",
        photo: "",
        summary: "",
      },
      education: [
        {
          id: uniqid(),
          degree: "",
          university: "",
          uniStartDate: "",
          uniEndDate: "",
          uniDescription: "",
        },
      ],
      workExperience: [
        {
          id: uniqid(),
          company: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    };
    this.handlePersonalDetailsChange =
      this.handlePersonalDetailsChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleWorkExperienceChange =
      this.handleWorkExperienceChange.bind(this);
    this.onAddEducation = this.onAddEducation.bind(this);
    this.onAddWorkExperience = this.onAddWorkExperience.bind(this);
    this.onDeleteEducation = this.onDeleteEducation.bind(this);
    this.onDeleteWorkExperience = this.onDeleteWorkExperience.bind(this);
  }

  handlePersonalDetailsChange(e) {
    this.setState({
      ...this.state,
      personalDetails: {
        ...this.state.personalDetails,
        [e.target.name]: e.target.value,
      },
    });
  }

  handleEducationChange(e, index) {
    this.setState({
      ...this.state,
      education: this.state.education.map((section, sectionIndex) => {
        if (index === sectionIndex) {
          return { ...section, [e.target.name]: e.target.value };
        }
        return section;
      }),
    });
  }

  handleWorkExperienceChange(e, index) {
    this.setState({
      ...this.state,
      workExperience: this.state.workExperience.map((section, sectionIndex) => {
        if (index === sectionIndex) {
          return { ...section, [e.target.name]: e.target.value };
        }
        return section;
      }),
    });
  }

  onAddEducation(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      education: [
        ...this.state.education,
        {
          id: uniqid(),
          company: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    });
  }

  onAddWorkExperience(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      workExperience: [
        ...this.state.workExperience,
        {
          id: uniqid(),
          company: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    });
  }

  onDeleteEducation(e, id) {
    e.preventDefault();
    this.setState({
      education: this.state.education.filter(section => section.id !== id)
    })
  }

  onDeleteWorkExperience(e, id) {
    e.preventDefault();
    this.setState({
      workExperience: this.state.workExperience.filter(section => section.id !== id)
    })
  }

  render() {
    return (
      <div className="main">
        <Form
          handlePersonalDetailsChange={this.handlePersonalDetailsChange}
          handleEducationChange={this.handleEducationChange}
          handleWorkExperienceChange={this.handleWorkExperienceChange}
          state={this.state}
          onAddEducation={this.onAddEducation}
          onAddWorkExperience={this.onAddWorkExperience}
          onDeleteEducation={this.onDeleteEducation}
          onDeleteWorkExperience={this.onDeleteWorkExperience}
        />
        <Preview
          personalDetails={this.state.personalDetails}
          education={this.state.education}
          workExperience={this.state.workExperience}
        />
      </div>
    );
  }
}

export default Main;
