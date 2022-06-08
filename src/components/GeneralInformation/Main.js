import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    });

    addGeneral(generalData);
  };

  render() {
    const { generalData } = this.state;
    const { handleClick, classForm } = this.props;
    return (
      <div className="box" onClick={handleClick}>
        <h3 className="title-form">General Informations</h3>
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
