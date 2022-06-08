import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PracticalExperience from './PracticalExperience';

export default class Main extends Component {
  state = {
    experienceData: {
      companyName: '',
      positionTitle: '',
      tasks: '',
      initialDate: '',
      finishDate: '',
      isValid: true,
    },
    experiencesData: [],
  };

  handleChangeCompanyName = (e) => {
    const { experienceData } = this.state;
    const {
      positionTitle, tasks, initialDate, finishDate, isValid,
    } = experienceData;

    this.setState({
      experienceData: {
        companyName: e.target.value,
        positionTitle,
        tasks,
        initialDate,
        finishDate,
        isValid,
      },
    });
  };

  handleChangePositionTitle = (e) => {
    const { experienceData } = this.state;
    const {
      companyName, tasks, initialDate, finishDate, isValid,
    } = experienceData;

    this.setState({
      experienceData: {
        companyName,
        positionTitle: e.target.value,
        tasks,
        initialDate,
        finishDate,
        isValid,
      },
    });
  };

  handleChangeTasks = (e) => {
    const { experienceData } = this.state;
    const {
      companyName, positionTitle, initialDate, finishDate, isValid,
    } = experienceData;

    this.setState({
      experienceData: {
        companyName,
        positionTitle,
        tasks: e.target.value,
        initialDate,
        finishDate,
        isValid,
      },
    });
  };

  handleChangeInitialDate = (e) => {
    const { experienceData } = this.state;
    const {
      companyName, tasks, positionTitle, finishDate, isValid,
    } = experienceData;

    this.setState({
      experienceData: {
        companyName,
        positionTitle,
        tasks,
        initialDate: e.target.value,
        finishDate,
        isValid,
      },
    });
  };

  handleChangeFinishiDate = (e) => {
    const { experienceData } = this.state;
    const {
      companyName, tasks, initialDate, positionTitle, isValid,
    } = experienceData;

    this.setState({
      experienceData: {
        companyName,
        positionTitle,
        tasks,
        initialDate,
        finishDate: e.target.value,
        isValid,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { addPractical } = this.props;
    const { experienceData, experiencesData } = this.state;
    const auxExperiencesData = experiencesData;
    const {
      companyName, tasks, initialDate, positionTitle, finishDate,
    } = experienceData;

    if (!companyName || !tasks || !initialDate
    || !positionTitle || !finishDate) {
      this.setState({
        experienceData: {
          companyName,
          positionTitle,
          tasks,
          initialDate,
          finishDate,
          isValid: false,
        },
      });
      return;
    }

    this.setState({
      experienceData: {
        companyName: '',
        positionTitle: '',
        tasks: '',
        initialDate: '',
        finishDate: '',
        isValid: true,
      },
      experiencesData: [...auxExperiencesData, experienceData],
    });

    addPractical(experienceData);
  };

  render() {
    const { experienceData } = this.state;

    return (
      <div className="box">
        <h3 className="title-form">Practical Experience</h3>
        <PracticalExperience
          experienceData={experienceData}
          handleChangeCompanyName={this.handleChangeCompanyName}
          handleChangePositionTitle={this.handleChangePositionTitle}
          handleChangeTasks={this.handleChangeTasks}
          handleChangeInitialDate={this.handleChangeInitialDate}
          handleChangeFinishiDate={this.handleChangeFinishiDate}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

Main.propTypes = {
  addPractical: PropTypes.func.isRequired,
};
