import React from 'react';
import PropTypes from 'prop-types';
import './PracticalExperience.css';

export default function PracticalExperience(
  {
    experienceData,
    handleChangeCompanyName,
    handleChangePositionTitle,
    handleChangeTasks,
    handleChangeInitialDate,
    handleChangeFinishiDate,
    handleSubmit,
    classForm,
  },
) {
  return (
    <form className={classForm} onSubmit={handleSubmit}>
      <div className="row-form">
        <label htmlFor="company">Company name:</label>
        <input
          type="test"
          id="company"
          value={experienceData.companyName}
          onChange={handleChangeCompanyName}
          className="input"
        />
      </div>

      <div className="row-form">
        <label htmlFor="position-title">Position Title:</label>
        <input
          type="test"
          id="position-title"
          value={experienceData.positionTitle}
          onChange={handleChangePositionTitle}
          className="input"
        />
      </div>

      <div className="row-form">
        <label htmlFor="tasks">Main tasks of your jobs:</label>
        <input
          type="text"
          id="tasks"
          value={experienceData.tasks}
          onChange={handleChangeTasks}
          className="input"
        />
      </div>

      <div className="row-form row-last form-dates">
        <div>
          <label htmlFor="initial-date">Initial Date:</label>
          <input
            type="date"
            id="initial-date"
            value={experienceData.initialDate}
            onChange={handleChangeInitialDate}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="finish-date">Finish date:</label>
          <input
            type="date"
            id="finish-date"
            value={experienceData.finishDate}
            onChange={handleChangeFinishiDate}
            className="input"
          />
        </div>
      </div>

      <div className="save-form">
        <button type="submit" className="btn-save">Add Experience</button>
        <p className="field-empty">
          {experienceData.isValid ? '' : 'Empty fields'}
        </p>

      </div>
    </form>
  );
}

PracticalExperience.propTypes = {
  experienceData: PropTypes.object.isRequired,
  classForm: PropTypes.string.isRequired,
  handleChangeCompanyName: PropTypes.func.isRequired,
  handleChangePositionTitle: PropTypes.func.isRequired,
  handleChangeTasks: PropTypes.func.isRequired,
  handleChangeInitialDate: PropTypes.func.isRequired,
  handleChangeFinishiDate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
