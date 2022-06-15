import React, { useState } from 'react';
import './App.css';
import GeneralInformation from './components/GeneralInformation/Main';
import EducationalExperience from './components/EducationalExperience/Main';
import PracticalExperience from './components/Practical Experience/Main';
import ShowCv from './components/ShowCv/ShowCv';

export default function App() {
  const [practicalExperience, setPracticalExperience] = useState([]);
  const [educationalExperience, setEducationalExperience] = useState([]);
  const [generalInformation, setGeneralInformation] = useState([]);
  const [classBackground, setClassBackground] = useState('dark-background');
  const [classCv, setClassCv] = useState('cv');

  const addPractical = (value) => {
    setPracticalExperience([...practicalExperience, value]);
  };

  const addEducational = (value) => {
    setEducationalExperience([...educationalExperience, value]);
  };

  const addGeneral = (value) => {
    setGeneralInformation([value]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setClassBackground('dark-background show-dark-background');
    setClassCv('cv show-cv');
  };

  const handleClickCloseCv = (e) => {
    e.preventDefault();
    setClassBackground('dark-background');
    setClassCv('cv');
  };

  return (
    <div>
      <div className={classBackground} />

      <div className="content">
        <h1 className="title">Fill Your CV</h1>
        <GeneralInformation
          addGeneral={addGeneral}
        />
        <EducationalExperience
          addEducational={addEducational}
        />
        <PracticalExperience addPractical={addPractical} />
        <button
          type="button"
          className="btn-show-cv"
          onClick={handleClick}
        >
          Show CV
        </button>
      </div>

      <ShowCv
        practicalExperience={practicalExperience}
        educationalExperience={educationalExperience}
        generalInformation={generalInformation}
        classCv={classCv}
        handleClickCloseCv={handleClickCloseCv}
      />
    </div>
  );
}
