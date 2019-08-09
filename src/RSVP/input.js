import React from 'react';
import classnames from 'classnames';
import rsvpPalm from '../images/rsvpPalm.png';

const Input = (props) => {
  return (
    <div className="formContainer">
      <div className="formGroup">
        <label className="label" htmlFor="fullName">
          Your Name:
        </label>
        <input className="textBoxInput" type="text" id="fullName" name="fullName" value={props.guestNameValue} onChange={props.handleChange} />
        {props.isInvalidName && <p className="is-error">Your name is required.</p>}
      </div>

      <div className={"formGroup"}>
        <legend className="label">Can you join us in New Orleans?</legend>
        <div className="radioGroup">
          <div className="radioInput">
            <input className="checkboxInput" class="radioButton" type="radio" value={true} name="attending" onChange={props.handleChange} />Yes, let's party
          </div>
          <div className="radioInput">
            <input className="checkboxInput" class="radioButton" type="radio" value={false} name="attending" onChange={props.handleChange} />No, sad to miss it
          </div>
          {props.isInvalidAttending && <p className="is-error">Your rsvp is required.</p>}
        </div>
      </div>

      <fieldset className={classnames("formGroup", {["hidden"]: !props.isAttending })}>
        <legend className="label">Which events will you be attending?</legend>
        <div className="checkboxGroup">
          <input className="checkboxInput" type="checkbox" id="attend-1" name="attendingWedding" defaultChecked={props.attendingCeremonyValue} onChange={props.handleChange} />
          <label className="checkboxDescription" htmlFor="attend-1">
            <span className="checkboxLabel">Ceremony & Reception</span>
            <br/>
          </label>
        </div>

        <div className="checkboxGroup">
          <input className="checkboxInput" type="checkbox" id="attend-2" name="attendingNextDay" defaultChecked={props.attendingBanquetValue} onChange={props.handleChange} />
            <label className="checkboxDescription" htmlFor="attend-2">
              <span className="checkboxLabel">The Day After Party</span>
              <br/>
            </label>
        </div>
      </fieldset>

      <div className={classnames("formGroup", {["hidden"]: !props.isAttending })}>
        <label className="label" htmlFor="fullName">
          Your Email address:
        </label>
        <input className="textBoxInput" type="text" id="emailAddress" name="emailAddress" value={props.guestEmailValue} onChange={props.handleChange} />
      </div>

      <div className={classnames("formGroup", {["hidden"]: !props.isAttending })}>
        <label className="label" htmlFor="dietaryRestrictions">Any food allergies or dietary restrictions?</label>
        <input className="textboxInput" type="text" id="dietaryRestrictions" name="dietaryRestrictions" value={props.dietaryRestrictionsValue} onChange={props.handleChange} />
      </div>

      <button type="submit" className={
        classnames("submitButton", {["inactiveClass"]: props.isLoading })
      }>
          {props.isLoading ? 'Sending' : 'Send RSVP'}
      </button>
      {props.isSubmissionError && <p className="is-error">Something went wrong</p> }
      <img src={rsvpPalm} alt="palm" className="rsvpPalm"/>
    </div>
  )
}

export default Input;
