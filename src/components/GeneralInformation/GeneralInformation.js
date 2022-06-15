import React from 'react';
import PropTypes from 'prop-types';

export default function GeneralInformation(
  {
    generalData,
    handleChangeName,
    handleChangeEmail,
    handleChangePhone,
    handleSubmit,
    classForm,
  },
) {
  return (
    <form className={classForm} action="#" onSubmit={handleSubmit}>
      <div className="row-form">
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChangeName}
          value={generalData.name}
          id="name"
          className="input"
        />
      </div>

      <div className="row-form">
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChangeEmail}
          value={generalData.email}
          type="email"
          id="email"
          className="input"
        />
      </div>

      <div className="row-form row-last">
        <label htmlFor="phone">Phone Number:</label>
        <input
          onChange={handleChangePhone}
          value={generalData.phone}
          type="number"
          id="phone"
          className="input"
        />

      </div>

      <div className="save-form">
        <button type="submit" className="btn-save">Save</button>
        <p className="field-empty">
          {generalData.isValid ? '' : 'Empty fields'}
        </p>
      </div>
    </form>
  );
}

GeneralInformation.propTypes = {
  generalData: PropTypes.object.isRequired,
  classForm: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePhone: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
