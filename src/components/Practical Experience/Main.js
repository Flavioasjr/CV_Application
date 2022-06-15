import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import PracticalExperience from './PracticalExperience';

export default function Main(props) {
  const [companyName, setCompanyName] = useState('');
  const [positionTitle, setPositionTitle] = useState('');
  const [tasks, setTasks] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finishDate, setFinishDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showFormData, setShowFormData] = useState({
    showForm: false,
    classForm: 'form-general',
    classIconShow: 'btn-icon',
    classIconHide: 'btn-icon hide',
  });

  const handleChangeCompanyName = (e) => {
    setCompanyName(e.target.value);
  };

  const handleChangePositionTitle = (e) => {
    setPositionTitle(e.target.value);
  };

  const handleChangeTasks = (e) => {
    setTasks(e.target.value);
  };

  const handleChangeInitialDate = (e) => {
    setInitialDate(e.target.value);
  };

  const handleChangeFinishiDate = (e) => {
    setFinishDate(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const { showForm } = showFormData;

    if (!showForm) {
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

    const { addPractical } = props;

    if (!companyName || !tasks || !initialDate
      || !positionTitle || !finishDate) {
      setIsValid(false);
      return;
    }

    setCompanyName('');
    setPositionTitle('');
    setTasks('');
    setInitialDate('');
    setFinishDate('');
    setIsValid(true);
    setShowFormData({
      showForm: false,
      classForm: 'form-general',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    });

    addPractical({
      companyName, positionTitle, tasks, initialDate, finishDate,
    });
  };

  const { classForm, classIconShow, classIconHide } = showFormData;

  return (
    <div className="box">
      <h3 className="title-form">Practical Experience</h3>
      <div className={classIconShow}>
        <FaArrowDown onClick={handleClick} />
      </div>
      <div className={classIconHide}>
        <FaArrowUp onClick={handleClickHide} />
      </div>
      <PracticalExperience
        experienceData={{
          companyName, positionTitle, tasks, initialDate, finishDate, isValid,
        }}
        handleChangeCompanyName={handleChangeCompanyName}
        handleChangePositionTitle={handleChangePositionTitle}
        handleChangeTasks={handleChangeTasks}
        handleChangeInitialDate={handleChangeInitialDate}
        handleChangeFinishiDate={handleChangeFinishiDate}
        handleSubmit={handleSubmit}
        classForm={classForm}
      />
    </div>
  );
}

Main.propTypes = {
  addPractical: PropTypes.func.isRequired,
};
