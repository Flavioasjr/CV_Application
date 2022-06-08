import React from 'react';
import PropTypes from 'prop-types';
import './EducationalExperience.css';

export default function EducationalExperience(
  {
    educationalData,
    handleChangeName,
    handleChangeTitle,
    handleChangeDate,
    handleSubmit,
    classForm,
  },
) {
  return (
    <form className={classForm} onSubmit={handleSubmit}>
      <div className="row-form">
        <label htmlFor="school-name">School name:</label>
        <input
          type="text"
          id="school-name"
          onChange={handleChangeName}
          value={educationalData.name}
          className="input"
        />
      </div>

      <div className="row-form">
        <label htmlFor="title">Title of Study:</label>
        <input
          type="text"
          id="title"
          onChange={handleChangeTitle}
          value={educationalData.title}
          className="input"
        />
      </div>

      <div className="row-form row-last">
        <label htmlFor="date">Date of the Conclusion:</label>
        <input
          type="date"
          id="date"
          onChange={handleChangeDate}
          value={educationalData.date}
          className="input"
        />
      </div>

      {/* <p>
        {educationalData.isValid ? '' : 'Empty fields'}
      </p> */}
      <button type="submit" className="btn-save">Add Education</button>
    </form>
  );
}

EducationalExperience.propTypes = {
  educationalData: PropTypes.object.isRequired,
  classForm: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeTitle: PropTypes.func.isRequired,
  handleChangeDate: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
