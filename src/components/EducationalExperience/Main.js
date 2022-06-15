import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import EducationalExperience from './EducationalExperience';

export default function Main(props) {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showFormData, setShowFormData] = useState({
    showForm: false,
    classForm: 'form-general',
    classIconShow: 'btn-icon',
    classIconHide: 'btn-icon hide',
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!showFormData.showForm) {
      setShowFormData({
        showForm: true,
        classForm: 'form-general show',
        classIconShow: 'btn-icon hide',
        classIconHide: 'btn-icon',
      });
    }
  };

  const handleClickHide = (e) => {
    e.preventDefault();
    setShowFormData({
      showForm: false,
      classForm: 'form-general',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { addEducational } = props;

    if (!name || !title || !date) {
      setIsValid(false);
      return;
    }

    setName('');
    setTitle('');
    setDate('');
    setIsValid(true);
    setShowFormData({
      showForm: false,
      classForm: 'form-educational',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    });

    addEducational({ name, title, date });
  };

  const { classForm, classIconShow, classIconHide } = showFormData;

  return (
    <div className="box">
      <h3 className="title-form">Educational Experience</h3>
      <div className={classIconShow}>
        <FaArrowDown onClick={handleClick} />
      </div>
      <div className={classIconHide}>
        <FaArrowUp onClick={handleClickHide} />
      </div>
      <EducationalExperience
        educationalData={{
          name, title, date, isValid,
        }}
        handleChangeName={handleChangeName}
        handleChangeTitle={handleChangeTitle}
        handleChangeDate={handleChangeDate}
        handleSubmit={handleSubmit}
        classForm={classForm}
      />
    </div>
  );
}

Main.propTypes = {
  addEducational: PropTypes.func.isRequired,
};
