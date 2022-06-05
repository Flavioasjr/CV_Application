import React, { Component } from 'react';
import GeneralInformation from './GeneralInformation/GeneralInformation';
import './Main.css';

export default class Main extends Component {
  state = {
    generalData: {
      name: '',
      email: '',
      phone: '',
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

  render() {
    const { generalData } = this.state;
    return (
      <div>
        <h1>Fill your CV</h1>
        <GeneralInformation
          generalData={generalData}
          handleChangeName={this.handleChangeName}
          handleChangeEmail={this.handleChangeEmail}
          handleChangePhone={this.handleChangePhone}
        />
      </div>
    );
  }
}
