import React, { Component } from 'react';
import palm from '../images/mainPalm.png';
import CalliLucasText from '../images/calliLucasText';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <>
        <div className={'container'}>
          <img src={palm} className='mainPalm' />
          <div className="mainText">
            <CalliLucasText />
          </div>
        </div>
      </>

    );
  }
}

export default Home;
