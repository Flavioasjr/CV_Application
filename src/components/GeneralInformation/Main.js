import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import GeneralInformation from './GeneralInformation';
import './GeneralInformation.css';

export default class Main extends Component {
  state = {
    generalData: {
      name: '',
      email: '',
      phone: '',
    },
    generalDatas: [],
    showFormData: {
      showForm: false,
      classForm: 'form-general',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    },
  };

  handleChangeName = (e) => {
    const { generalData } = this.state;
    const { email, phone } = generalData;

    this.setState({
      generalData: {
        name: e.target.value,
        email,
        phone,
      },
    });
  };

  handleChangeEmail = (e) => {
    const { generalData } = this.state;
    const { name, phone } = generalData;

    this.setState({
      generalData: {
        name,
        email: e.target.value,
        phone,
      },
    });
  };

  handleChangePhone = (e) => {
    const { generalData } = this.state;
    const { name, email } = generalData;

    this.setState({
      generalData: {
        name,
        email,
        phone: e.target.value,
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
    const { addGeneral } = this.props;
    const { generalData } = this.state;
    const { name, email, phone } = generalData;

    if (!name || !email || !phone) return;
    this.setState({
      generalData: {
        name,
        email,
        phone,
      },
      generalDatas: [generalData],
      showFormData: {
        showForm: false,
        classForm: 'form-general',
        classIconShow: 'btn-icon',
        classIconHide: 'btn-icon hide',
      },
    });

    addGeneral(generalData);
  };

  render() {
    const { generalData, showFormData } = this.state;
    const { classForm, classIconShow, classIconHide } = showFormData;
    return (
      <div className="box">
        <h3 className="title-form">General Informations</h3>
        <div className={classIconShow}>
          <FaArrowDown onClick={this.handleClick} />
        </div>
        <div className={classIconHide}>
          <FaArrowUp onClick={this.handleClickHide} />
        </div>
        <GeneralInformation
          generalData={generalData}
          handleChangeName={this.handleChangeName}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePhone={this.handleChangePhone}
          handleSubmit={this.handleSubmit}
          classForm={classForm}
        />
      </div>
    );
  }
}

Main.propTypes = {
  addGeneral: PropTypes.func.isRequired,
};
