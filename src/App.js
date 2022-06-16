import React, { useState, useEffect } from 'react';
import './App.css';
import JsPDF from 'jspdf';
import GeneralInformation from './components/GeneralInformation/Main';
import EducationalExperience from './components/EducationalExperience/Main';
import PracticalExperience from './components/Practical Experience/Main';
import ShowCv from './components/ShowCv/ShowCv';
import ExportPdf from './components/ExportPdf/ExportPdf';

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

  const [generatePDF, setGeneratePDF] = useState(false);

  const handleClickGeneratePDF = () => {
    setGeneratePDF(true);
  };
  useEffect(() => {
    if (generatePDF) {
      const report = new JsPDF('portrait', 'pt', 'a4');
      report.html(document.querySelector('#cv-pdf'), { margin: [30, 50, 70, 5] }).then(() => {
        report.save('CV.pdf');
      });
      setGeneratePDF(false);
    }
  });

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
        <div className="buttons">
          <button
            type="button"
            className="btn-show-cv"
            onClick={handleClick}
          >
            Show CV
          </button>
          <button
            type="button"
            className="btn-export-pdf"
            onClick={handleClickGeneratePDF}
          >
            Download CV
          </button>

        </div>
      </div>
      <ShowCv
        practicalExperience={practicalExperience}
        educationalExperience={educationalExperience}
        generalInformation={generalInformation}
        classCv={classCv}
        handleClickCloseCv={handleClickCloseCv}
      />
      <ExportPdf
        practicalExperience={practicalExperience}
        educationalExperience={educationalExperience}
        generalInformation={generalInformation}
      />
    </div>
  );
}
