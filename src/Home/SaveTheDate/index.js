import React, { Component, Fragment } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import Plx from 'react-plx';
import sketch from './sketch';
import MiddlePointText from './middlePointText'
import EventInfo from './EventInfo';
import './style.scss';

const middlePointTextData = [
  {
    start: '.stickyTextTrigger',
    duration: window.innerHeight * .5,
    properties: [
      {
        startValue: 0,
        endValue: -window.innerHeight * .5,
        unit: 'px',
        property: 'translateY',
      },
      {
        startValue: 0,
        endValue: 1,
        property: 'opacity',
      },
    ],
  },
];

class SaveTheDate extends Component {

  render() {
    return (
      <div className="container">
          <P5Wrapper 
            sketch={sketch}
          />
        <div className='stickyTextTrigger'/>
        <Plx className='middlePointText' parallaxData={ middlePointTextData }>
            <MiddlePointText />
        </Plx>
        <div className='eventInfo'>
            <EventInfo />
        </div>
      </div>
    );
  }
}

export default SaveTheDate;
