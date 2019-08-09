import React from 'react';
import SaturdayText from '../images/saturdayText';
import FridayText from '../images/fridayText';
import leftPalm from '../images/palm1.png';
import rightPalm from '../images/palm2.png';
import './style.scss';

const Details = () => {
  return (
    <div className="detailsContainer">
     {/* <div className="pageTitle"><TravelInfoText /></div> */}
      <div className="detailsFlexContainer">
        <div className="detailsItem">
          <div className="dayTitle"><FridayText /></div>
          <h3>October 4<sup>th</sup></h3>
          <p>4:30 - 11:00 PM</p>
          Wedding Ceremony and Reception
          <p><a href="http://raceandreligious.com/" rel="noopener noreferrer" target="_blank">Race + Religious</a></p>
          510 Race St, New Orleans, LA 70130
        </div>
        <div className="detailsItem">
        <div className="dayTitle"><SaturdayText /></div>
        <h3>October 5<sup>th</sup></h3>
        <p>4:00 - 7:00 PM</p>
        The Day After Party<br/>
        <p><a href="http://www.tchoupyard.com/" rel="noopener noreferrer" target="_blank">The Tchoup Yard</a></p>
        405 Third St, New Orleans, LA 70130
      </div>
      <img src={leftPalm} className="leftPalm"/>
      <img src={rightPalm} className="rightPalm"/>
    </div>
  </div>
  );
};

export default Details