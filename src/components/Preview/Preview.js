import React, { Component } from "react";
import avatarImg from "../../images/empty-avatar.png";
import mailImg from "../../images/envelope-solid.svg";
import phoneImg from "../../images/phone-solid.svg";
import locationImg from "../../images/location-dot-solid.svg";
import "../../styles/Preview.css";

class Preview extends Component {
  render() {
    const { personalDetails, education, workExperience } = this.props;
    const profilePhoto = personalDetails.photo === "" ? <img src={avatarImg} alt="Empty Profile Avatar" /> : <img src={personalDetails.photo} alt="Your upload" />
    return (
      <div className="cv-preview">
        <div className="personal-details">
          <h1>{personalDetails.name}</h1>
          <h2>{personalDetails.title}</h2>
          <div className="contact-details">
              <img src={mailImg} alt="Mail Icon" />
              <span>{personalDetails.email}</span>
          </div>
          <div className="contact-details">
              <img src={phoneImg} alt="Phone Icon" />{" "}
              <span>{personalDetails.phoneNumber}</span>
          </div>
          <div className="contact-details">
              <img src={locationImg} alt="Location Icon" />{" "}
              <span>{personalDetails.location}</span>
          </div>
          <div className="summary">
            <h2>Summary</h2>
            <p>{personalDetails.summary}</p>
          </div>
          <div className="profile-picture">
            {profilePhoto}
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          {education.map((section) => {
            return (
              <div className="section" key={section.id}>
                <div className="start-end-date">
                  {section.uniStartDate} - {section.uniEndDate}
                </div>
                <div className="section-details">
                  <p className="bold-detail">{section.degree},</p>
                  <p className="italic-detail">{section.university}</p>
                  <p className="description-detail">{section.uniDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="work-experience">
          <h2>Professional Experience</h2>
          {workExperience.map((section) => {
            return (
              <div className="section" key={section.id}>
                <div className="start-end-date">
                  {section.workStartDate} - {section.workEndDate}
                </div>
                <div className="section-details">
                  <p className="bold-detail">{section.position},</p>
                  <p className="italic-detail">{section.company}</p>
                  <p className="description-detail">{section.workDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Preview;
