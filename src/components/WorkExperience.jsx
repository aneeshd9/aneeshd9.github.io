import React from 'react';

import '../styles/WorkExperience.scss';
import { faCalendarAlt, faLocationDot, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bncollegeLogo from '../assets/bncollege-logo.jpg';
import servicenowLogo from '../assets/servicenow-logo2.jpg';
import umdLogo from '../assets/umd-logo.webp';
import reflexisLogo from '../assets/reflexis-logo.png';
import bitsLogo from '../assets/bits-logo.png';

function WorkExperience() {
  return (
    <section className="dark">
      <div className="container py-4">
        {/* <h1 className="h1 text-center" id="pageHeaderTitle">
          My Professional Work Experience
        </h1> */}
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img className="postcard__img" src={bncollegeLogo} alt="" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue"><a href="/workex">Barnes and Noble College</a></h1>
            <div className="postcard__subtitle small">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '4px' }} />
              <time dateTime="2021-12-01 00:00:00">
                Dec 2021
              </time>
              -
              <time dateTime="2023-12-01 00:00:00">
                Present
              </time>
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ marginRight: '4px' }} />
                Bookseller
              </li>
              <li className="tag__item">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '4px' }} />
                College Park, MD, USA
              </li>
            </ul>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Working as a bookseller and helping with the smooth running and management
              of course materials section at Barnes and Noble store #370 at University of
              Maryland, College Park.
            </div>
          </div>
        </article>
        <article className="postcard dark red">
          <a className="postcard__img_link" href="/workex">
            <img className="postcard__img" src={umdLogo} alt="" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title red"><a href="/workex">University of Maryland</a></h1>
            <div className="postcard__subtitle small">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '4px' }} />
              <time dateTime="2022-08-01 00:00:00">
                Aug 2022
              </time>
              -
              <time dateTime="2022-12-01 00:00:00">
                Dec 2022
              </time>
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ marginRight: '4px' }} />
                Graduate Research Assistant
              </li>
              <li className="tag__item">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '4px' }} />
                College Park, MD, USA
              </li>
            </ul>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Worked on finding an implicit neural representation for event camera data
              using SIREN multi-layer perceptron model with periodic activation functions.
            </div>
          </div>
        </article>
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img className="postcard__img" src={servicenowLogo} alt="" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue"><a href="/workex">ServiceNow</a></h1>
            <div className="postcard__subtitle small">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '4px' }} />
              <time dateTime="2019-06-01 00:00:00">
                Jun 2019
              </time>
              -
              <time dateTime="2021-07-01 00:00:00">
                Jul 2021
              </time>
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ marginRight: '4px' }} />
                Software Quality Engineer
              </li>
              <li className="tag__item">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '4px' }} />
                Hyderabad, India
              </li>
            </ul>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Member of Vulnerability Response team working on automatic grouping
              and assignment of vulnerabilities detected on clients&apos; network by third-party
              scanners, based on customisable grouping and assignment rules, to improve the
              flow of remediation process.
              Developed and maintained automation scripts written in Python to help
              with installation and deletion of apps from the ServiceNow platform reducing
              development and testing overhead. Developed and documented comprehensive test
              case plans and scripts including
              scenarios for multiple products on the ServiceNow platform as well as
              integrations with third-party applications and products to reduce risk of bugs
              and improve Root Cause Analysis (RCA) process. Performed functional,
              non-functional, Access Control List (ACL), Domain Separation, Cross-Browser
              Integration and security testing to cover all avenues of possible issues and
              to deliver a high quality product every release. Automated test plans using
              latest tools based on Java Selenium, TestNg and JUnit testing frameworks thus
              improving test code coverage from 60% to more than 80%.
            </div>
          </div>
        </article>
        <article className="postcard dark red">
          <a className="postcard__img_link" href="/workex">
            <img className="postcard__img" src={reflexisLogo} alt="" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title red"><a href="/workex">Reflexis Systems, Inc.</a></h1>
            <div className="postcard__subtitle small">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '4px' }} />
              <time dateTime="2019-01-01 00:00:00">
                Jan 2019
              </time>
              -
              <time dateTime="2019-06-01 00:00:00">
                Jun 2019
              </time>
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ marginRight: '4px' }} />
                Software Developer
              </li>
              <li className="tag__item">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '4px' }} />
                Pune, India
              </li>
            </ul>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Built a tool to parse and convert massive Unicode language translation data
              received from customers, in Excel sheets, to manageable key-value pair files
              that are consumed by the main application to translate pages from English to
              any supported language. Developed a front-end solution in React to allow easy
              access to the above mentioned tool.
            </div>
          </div>
        </article>
        <article className="postcard dark blue">
          <a className="postcard__img_link" href="/">
            <img className="postcard__img" src={bitsLogo} alt="" />
          </a>
          <div className="postcard__text">
            <h1 className="postcard__title blue"><a href="/workex">Birla Institute of Technology and Science</a></h1>
            <div className="postcard__subtitle small">
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '4px' }} />
              <time dateTime="2016-01-01 00:00:00">
                Jan 2016
              </time>
              -
              <time dateTime="2016-05-01 00:00:00">
                May 2016
              </time>
            </div>
            <ul className="postcard__tagbox">
              <li className="tag__item">
                <FontAwesomeIcon icon={faPuzzlePiece} style={{ marginRight: '4px' }} />
                Teaching Assistant
              </li>
              <li className="tag__item">
                <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '4px' }} />
                Goa, India
              </li>
            </ul>
            <div className="postcard__bar" />
            <div className="postcard__preview-txt">
              Conducted labs, tutorial classes and quizzes for a batch of 100+ students
              in topics including C programming, shell scripting and basic algorithms.
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default WorkExperience;
