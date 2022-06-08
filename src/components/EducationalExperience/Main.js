import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
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
    showFormData: {
      showForm: false,
      classForm: 'form-general',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    },
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

  handleClick = (e) => {
    e.preventDefault();
    const { showFormData } = this.state;
    const { showForm } = showFormData;

    if (!showForm) {
      this.setState({
        showFormData: {
          showForm: true,
          classForm: 'form-general show',
          classIconShow: 'btn-icon hide',
          classIconHide: 'btn-icon',
        },
      });
    }
  };

  handleClickHide = (e) => {
    e.preventDefault();
    this.setState({
      showFormData: {
        showForm: false,
        classForm: 'form-general',
        classIconShow: 'btn-icon',
        classIconHide: 'btn-icon hide',
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
      showFormData: {
        showForm: false,
        classForm: 'form-educational',
        classIconShow: 'btn-icon',
        classIconHide: 'btn-icon hide',
      },
    });

    addEducational(educationalData);
  };

  render() {
    const { educationalData, showFormData } = this.state;
    const { classForm, classIconShow, classIconHide } = showFormData;

    return (
      <div className="box">
        <h3 className="title-form">Educational Experience</h3>
        <div className={classIconShow}>
          <FaArrowDown onClick={this.handleClick} />
        </div>
        <div className={classIconHide}>
          <FaArrowUp onClick={this.handleClickHide} />
        </div>
        <EducationalExperience
          educationalData={educationalData}
          handleChangeName={this.handleChangeName}
          handleChangeTitle={this.handleChangeTitle}
          handleChangeDate={this.handleChangeDate}
          handleSubmit={this.handleSubmit}
          classForm={classForm}
        />
      </div>
    );
  }
}

Main.propTypes = {
  addEducational: PropTypes.func.isRequired,
};
