import React, { Component } from 'react';
import './App.css';
import GeneralInformation from './components/GeneralInformation/Main';
import EducationalExperience from './components/EducationalExperience/Main';
import PracticalExperience from './components/Practical Experience/Main';
import ShowCv from './components/ShowCv/ShowCv';

export default class App extends Component {
  state = {
    practicalExperience: [],
    educationalExperience: [],
    generalInformation: [],
    classBackground: 'dark-background',
    classCv: 'cv',
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
    const {
      practicalExperience,
      educationalExperience,
      generalInformation,
    } = this.state;

    this.setState({
      practicalExperience,
      educationalExperience,
      generalInformation,
      classBackground: 'dark-background show-dark-background',
      classCv: 'cv show-cv',
    });
  };

  handleClickCloseCv = (e) => {
    e.preventDefault();
    const {
      practicalExperience,
      educationalExperience,
      generalInformation,
    } = this.state;

    this.setState({
      practicalExperience,
      educationalExperience,
      generalInformation,
      classBackground: 'dark-background',
      classCv: 'cv',
    });
  };

  render() {
    const {
      practicalExperience,
      educationalExperience,
      generalInformation,
      classBackground,
      classCv,
    } = this.state;
    return (
      <div>
        <div className={classBackground} />

        <div className="content">
          <h1 className="title">Fill Your CV</h1>
          <GeneralInformation
            addGeneral={this.addGeneral}
          />
          <EducationalExperience
            addEducational={this.addEducational}
          />
          <PracticalExperience addPractical={this.addPractical} />
          <button
            type="button"
            className="btn-show-cv"
            onClick={this.handleClick}
          >
            Show CV
          </button>
        </div>

        <ShowCv
          practicalExperience={practicalExperience}
          educationalExperience={educationalExperience}
          generalInformation={generalInformation}
          classCv={classCv}
          handleClickCloseCv={this.handleClickCloseCv}
        />
      </div>
    );
  }
}
