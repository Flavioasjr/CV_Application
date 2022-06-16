import React from 'react';
import PropTypes from 'prop-types';
import './ExportPdf.css';

export default function ExportPdf(
  {
    practicalExperience,
    educationalExperience,
    generalInformation,
  },
) {
  return (
    <div>
      <div className="export-pdf">
        <div id="cv-pdf">
          <section className="general-information-cv">
            <h2 className="name-cv">
              {generalInformation[0] ? generalInformation[0].name : ''}
            </h2>
            <p>
              {generalInformation[0] ? generalInformation[0].email : ''}
            </p>
            <p>
              {generalInformation[0] ? generalInformation[0].phone : ''}
            </p>
          </section>

          <section className="educational-experience-cv">
            <h3 className="title-section-cv">
              {educationalExperience[0] ? 'Educational Experiences' : ''}
            </h3>
            {educationalExperience ? educationalExperience.map((value) => (
              <div key={value.date} className="list-educational">
                <b>{value.name}</b>
                {' '}
                -
                {' '}
                {value.title}
                {' '}
                (
                {value.date}
                )
              </div>
            )) : ''}
          </section>

          <section className="practical-experience-cv">
            <h3 className="title-section-cv">
              {practicalExperience[0] ? 'Practical Experiences' : ''}
            </h3>
            {practicalExperience ? practicalExperience.map((value) => (
              <div key={value.finishDate}>
                <p className="experience-data-cv">
                  <b>{value.companyName}</b>
                  {' - '}
                  {value.positionTitle}
                  {' ('}
                  {value.initialDate}
                  {' / '}
                  {value.finishDate}
                  )
                </p>
                <p className="cv-tasks">{value.tasks}</p>
              </div>
            )) : ''}
          </section>
        </div>
      </div>
    </div>
  );
}

ExportPdf.propTypes = {
  practicalExperience: PropTypes.array.isRequired,
  educationalExperience: PropTypes.array.isRequired,
  generalInformation: PropTypes.array.isRequired,
};
