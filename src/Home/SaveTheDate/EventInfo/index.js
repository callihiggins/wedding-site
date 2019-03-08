import React, { Component, Fragment } from 'react';
import PalmScene from './palmScene';
import Text from './text';

class EventInfo extends Component {
  render() {
    return (
      <div className="lastPage">
        <div className="palmScene">
          <PalmScene/>
        </div>
        <Text className="textContainer" />
      </div>

    );
  }
}

export default EventInfo;
