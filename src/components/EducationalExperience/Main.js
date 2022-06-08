import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EducationalExperience from './EducationalExperience';

export default class Main extends Component {
  state = {
    educationalData: {
      name: '',
      title: '',
      date: '',
      isValid: true,
    },
    educationalDatas: [],
  };

  handleChangeName = (e) => {
    const { educationalData } = this.state;
    const { title, date, isValid } = educationalData;

    this.setState({
      educationalData: {
        name: e.target.value,
        title,
        date,
        isValid,
      },
    });
  };

  handleChangeTitle = (e) => {
    const { educationalData } = this.state;
    const { name, date, isValid } = educationalData;

    this.setState({
      educationalData: {
        name,
        title: e.target.value,
        date,
        isValid,
      },
    });
  };

  handleChangeDate = (e) => {
    const { educationalData } = this.state;
    const { name, title, isValid } = educationalData;

    this.setState({
      educationalData: {
        name,
        title,
        date: e.target.value,
        isValid,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { addEducational } = this.props;
    const { educationalData, educationalDatas } = this.state;
    const auxEducationalDatas = educationalDatas;
    const { name, title, date } = educationalData;

    if (!name || !title || !date) {
      this.setState({
        educationalData: {
          name,
          title,
          date,
          isValid: false,
        },
      });
      return;
    }

    this.setState({
      educationalData: {
        name: '',
        title: '',
        date: '',
        isValid: true,
      },
      educationalDatas: [...auxEducationalDatas, educationalData],
    });

    addEducational(educationalData);
  };

  render() {
    const { educationalData } = this.state;

    return (
      <div className="box">
        <h3 className="title-form">Educational Experience</h3>
        <EducationalExperience
          educationalData={educationalData}
          handleChangeName={this.handleChangeName}
          handleChangeTitle={this.handleChangeTitle}
          handleChangeDate={this.handleChangeDate}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

Main.propTypes = {
  addEducational: PropTypes.func.isRequired,
};
