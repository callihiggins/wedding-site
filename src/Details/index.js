import React from 'react';
import SaturdayText from '../images/saturdayText';
import FridayText from '../images/fridayText';
import TravelInfoText from '../images/travelInfo';
import './style.scss';

const Details = () => {
  return (
    <div className="detailsContainer">
     {/* <div className="pageTitle"><TravelInfoText /></div> */}
      <div className="detailsFlexContainer">
        <div className="detailsItem">
          <div className="dayTitle"><FridayText /></div>
          <h3>October 4<sup>th</sup></h3>
          Ceremony and Reception at<br/>
          <p><a href="http://raceandreligious.com/" target="_blank">Race + Religious</a></p>
          510 Race St, New Orleans, LA 70130
        </div>
        <div className="detailsItem">
        <div className="dayTitle"><SaturdayText /></div>
        <h3>October 5<sup>th</sup></h3>
        Afternoon drinks and snacks<br/>
        <p>TBD</p>
        Lower Garden District, New Orleans, LA
      </div>
    </div>
  </div>
  );
};

export default Details