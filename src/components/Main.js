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
    this.handleChange = this.handleChange.bind(this);
    this.onAddEducation = this.onAddEducation.bind(this);
    this.onAddWorkExperience = this.onAddWorkExperience.bind(this);
    this.onDeleteEducation = this.onDeleteEducation.bind(this);
    this.onDeleteWorkExperience = this.onDeleteWorkExperience.bind(this);
  }

  handleChange(e, stateArray, id) {
    if (stateArray === this.state.personalDetails) {
      this.setState({
        ...this.state,
        personalDetails: {
          ...stateArray,
          [e.target.name]: e.target.value,
        },
      });
      return;
    }
    let section; 
    if (stateArray === this.state.education) {
      section = "education";
    }
    if (stateArray === this.state.workExperience) {
      section = "workExperience";
    }
    this.setState({
      ...this.state,
      [section]: stateArray.map((item) => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value };
        }
        return item;
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
      education: this.state.education.filter((section) => section.id !== id),
    });
  }

  onDeleteWorkExperience(e, id) {
    e.preventDefault();
    this.setState({
      workExperience: this.state.workExperience.filter(
        (section) => section.id !== id
      ),
    });
  }

  render() {
    return (
      <div className="main">
        <Form
          handleChange={this.handleChange}
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
