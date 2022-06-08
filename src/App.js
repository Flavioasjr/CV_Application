import React, { Component } from 'react';
import './App.css';
import GeneralInformation from './components/GeneralInformation/Main';
import EducationalExperience from './components/EducationalExperience/Main';
import PracticalExperience from './components/Practical Experience/Main';

export default class App extends Component {
  state = {
    practicalExperience: [],
    educationalExperience: [],
    generalInformation: [],
    showForm: false,
    classForm: 'form-general',
  };

  addPractical = (value) => {
    const {
      practicalExperience, educationalExperience, generalInformation,
    } = this.state;

    this.setState({
      practicalExperience: [...practicalExperience, value],
      educationalExperience,
      generalInformation,
    });
  };

  addEducational = (value) => {
    const {
      practicalExperience, educationalExperience, generalInformation,
    } = this.state;

    this.setState({
      practicalExperience,
      educationalExperience: [...educationalExperience, value],
      generalInformation,
    });
  };

  addGeneral = (value) => {
    const {
      practicalExperience, educationalExperience,
    } = this.state;

    this.setState({
      practicalExperience,
      educationalExperience,
      generalInformation: [value],
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { showForm } = this.state;

    if (!showForm) {
      this.setState({
        showForm: true,
        classForm: 'form-general show',
      });
    }
  };

  render() {
    const { classForm } = this.state;
    return (
      <div className="content">
        <h1 className="title">Fill Your CV</h1>
        <GeneralInformation
          addGeneral={this.addGeneral}
          handleClick={this.handleClick}
          classForm={classForm}
        />
        <EducationalExperience addEducational={this.addEducational} />
        <PracticalExperience addPractical={this.addPractical} />
      </div>
    );
  }
}
