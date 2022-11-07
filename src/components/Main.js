import React, { useRef, useState } from "react";
import "../styles/Main.css";
import Form from "./Form/Form";
import Preview from "./Preview/Preview";
import uniqid from "uniqid";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const [formState, setFormState] = useState({
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
  });

  const handleChange = (e, stateArray, id) => {
    if (stateArray === formState.personalDetails) {
      setFormState((prevState) => ({
        ...prevState,
        personalDetails: {
          ...stateArray,
          [e.target.name]: e.target.value,
        },
      }));
      return;
    }
    let section;
    if (stateArray === formState.education) {
      section = "education";
    }
    if (stateArray === formState.workExperience) {
      section = "workExperience";
    }
    setFormState((prevState) => ({
      ...prevState,
      [section]: stateArray.map((item) => {
        if (item.id === id) {
          return { ...item, [e.target.name]: e.target.value };
        }
        return item;
      }),
    }));
  };

  const onAddEducation = (e) => {
    e.preventDefault();
    setFormState((prevState) => ({
      ...prevState,
      education: [
        ...formState.education,
        {
          id: uniqid(),
          company: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    }));
  };

  const onAddWorkExperience = (e) => {
    e.preventDefault();
    setFormState((prevState) => ({
      ...prevState,
      workExperience: [
        ...formState.workExperience,
        {
          id: uniqid(),
          company: "",
          position: "",
          workStartDate: "",
          workEndDate: "",
          workDescription: "",
        },
      ],
    }));
  };

  const onDeleteSection = (e, stateArray, id) => {
    e.preventDefault();
    let section;
    if (stateArray === formState.education) {
      section = "education";
    }
    if (stateArray === formState.workExperience) {
      section = "workExperience";
    }
    setFormState((prevState) => ({
      ...prevState,
      [section]: stateArray.filter((section) => section.id !== id),
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormState((prevState) => ({
        ...prevState,
        personalDetails: {
          ...formState.personalDetails,
          photo: reader.result,
        },
      }));
    };
  };

  const componentRef = useRef();

  //throws warning because react-to-print uses findDOMNode
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="main">
      <Form
        handleChange={handleChange}
        onAddEducation={onAddEducation}
        onAddWorkExperience={onAddWorkExperience}
        onDeleteSection={onDeleteSection}
        state={formState}
        handleImageUpload={handleImageUpload}
        handlePrint={handlePrint}
      />
      <Preview
        personalDetails={formState.personalDetails}
        education={formState.education}
        workExperience={formState.workExperience}
        ref={componentRef}
      />
    </div>
  );
};

export default Main;
