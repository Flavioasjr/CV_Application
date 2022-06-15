import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import GeneralInformation from './GeneralInformation';
import './GeneralInformation.css';

export default function Main(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
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
    const { addGeneral } = props;

    if (!name || !email || !phone) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setShowFormData({
      showForm: false,
      classForm: 'form-general',
      classIconShow: 'btn-icon',
      classIconHide: 'btn-icon hide',
    });

    addGeneral({
      name,
      email,
      phone,
    });
  };

  return (
    <div className="box">
      <h3 className="title-form">General Informations</h3>
      <div className={showFormData.classIconShow}>
        <FaArrowDown onClick={handleClick} />
      </div>
      <div className={showFormData.classIconHide}>
        <FaArrowUp onClick={handleClickHide} />
      </div>
      <GeneralInformation
        generalData={{
          name, email, phone, isValid,
        }}
        handleChangeName={handleChangeName}
        handleChangeEmail={handleChangeEmail}
        handleChangePhone={handleChangePhone}
        handleSubmit={handleSubmit}
        classForm={showFormData.classForm}
      />
    </div>
  );
}

Main.propTypes = {
  addGeneral: PropTypes.func.isRequired,
};
