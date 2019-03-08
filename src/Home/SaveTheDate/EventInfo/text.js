import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import FormalInvite from '../../../images/formalInvite';
import '../style.scss';

class Text extends Component {
  render() {
    return (
      <div className="textContainer">
        <div className="date">10.4</div>
        <div className="city">New<br />Orleans</div>
        <ul className="bottom-menu">
          <li className="menuItem">
            <Link to="/travel">Travel Info</Link>
          </li>
          <li className="menuItem">
            <Link to="/details">Wedding Details</Link>
          </li>
        </ul>
        <div className="formalInvite">
          <FormalInvite />
        </div>
      </div>
    );
  }
}

export default Text;
