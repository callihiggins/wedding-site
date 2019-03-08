import React, { Component, Fragment } from 'react';
import MiddlePointTextImage from '../../images/middlePointText';
import MiddlePointTextImageMobile from '../../images/middlePointTextMobile';

class MiddlePointText extends Component {
  render() {
    return (
        <Fragment>
            <div className="hide-mobile"><MiddlePointTextImage /></div>
            <div className="hide-desktop"><MiddlePointTextImageMobile /></div>
        </Fragment>
    );
  }
}

export default MiddlePointText;
