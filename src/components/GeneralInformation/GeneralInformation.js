import React from 'react';
import PropTypes from 'prop-types';
import './GeneralInformation.css';

export default function GeneralInformation(
  {
    generalData, handleChangeName, handleChangeEmail, handleChangePhone,
  },
) {
  return (
    <form className="form" action="#">
      <h3>General Informations</h3>
      <label htmlFor="name">Name:</label>
      <input onChange={handleChangeName} value={generalData.name} id="name" />

      <label htmlFor="email">Email:</label>
      <input onChange={handleChangeEmail} value={generalData.email} type="email" />

      <label htmlFor="phone">Phone Number:</label>
      <input onChange={handleChangePhone} value={generalData.phone} type="number" />
      <button type="submit">Submit</button>
    </form>
  );
}

GeneralInformation.propTypes = {
  generalData: PropTypes.object.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePhone: PropTypes.func.isRequired,
};
