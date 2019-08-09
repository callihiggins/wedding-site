import React from 'react';

const Result = (props) => {
  return (
    <div className="resultContainer">
      <p className="title">Thanks! We've received your response for {props.name}</p>
      <button onClick={props.resetForm}>Back to form</button>
    </div>
  )
}

export default Result;
