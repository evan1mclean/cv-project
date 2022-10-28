import React, { Component } from "react";
import "../styles/Main.css";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";
import ReactToPrint from 'react-to-print';

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
    this.onDeleteSection = this.onDeleteSection.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
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

  onDeleteSection(e, stateArray, id) {
    e.preventDefault();
    let section;
    if (stateArray === this.state.education) {
      section = "education";
    }
    if (stateArray === this.state.workExperience) {
      section = "workExperience";
    }
    this.setState({
      [section]: stateArray.filter((section) => section.id !== id),
    });
  }

  handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({
        ...this.state,
        personalDetails: {
          ...this.state.personalDetails,
          photo: reader.result,
        },
      });
    }
  }

  render() {
    return (
      <div className="main">
        <Form
          handleChange={this.handleChange}
          onAddEducation={this.onAddEducation}
          onAddWorkExperience={this.onAddWorkExperience}
          onDeleteSection={this.onDeleteSection}
          state={this.state}
          reference={this.myRef}
          handleImageUpload={this.handleImageUpload}
          printButton={<ReactToPrint trigger={() => {
            return <button className="pdf-button" type="button">Generate PDF</button>
          }}
          content={() => this.componentRef}/>}
        />
        <Preview
          personalDetails={this.state.personalDetails}
          education={this.state.education}
          workExperience={this.state.workExperience}
          ref={(el) => this.componentRef = el}
        />
      </div>
    );
  }
}

export default Main;
