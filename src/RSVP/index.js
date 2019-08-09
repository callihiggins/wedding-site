import React, { Component, Fragment } from 'react';
import classnames from 'classnames';
import RSVPText from '../images/rsvpText';
import Input from './input';
import Result from './result';
import './style.scss';

class RSVP extends Component {
  state = {
    fullName: '',
    emailAddress: '',
    attendingWedding: false,
    attendingNextDay: false,
    dietaryRestrictions: '',
    display: 'showForm',
    isInvalidName: false,
    isSubmissionError: false,
    isLoading: false,
    isAttending: false,
  }
    
  /* Creates request to be sent to api */
  buildRequestBody = () => {
    const { fullName, attendingWedding, attendingNextDay, emailAddress, dietaryRestrictions } = this.state;
    return { data: [{ fullName, attendingWedding, attendingNextDay, emailAddress, dietaryRestrictions }]};
  }
    
 
  /* Submits form to api */
  handleSubmit = async (e) =>{
    e.preventDefault();

    const isInvalid = this.state.fullName.trim() === '';
    this.setState({
      isInvalidName: isInvalid,
    })

    if (isInvalid) return;

    this.setState({
      isLoading: true,
    });

    const requestBody = this.buildRequestBody();
    try {
      const response = await fetch('https://sheetdb.io/api/v1/xvl8pmgom14h9', {
      'headers': {
        'Content-Type': 'application/json'
      },
      'method': 'POST',
      'body': JSON.stringify(requestBody)
      });

      //In case of http errors
      if(!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      this.setState({
        isSubmissionError: false,
        isLoading: false,
        display: 'showResult',
      });

      //In case of network errors
    } catch (err) {
      console.log(err)
      this.setState({
        isSubmissionError: true,
        isLoading: false,
      });
    }
  }
    
  /* Tracks state of input */
  handleChange = (e) => {
    let name = '';

    if(e.target.type === 'checkbox') {
      name = e.target.name
      console.warn('check');
      console.warn(name);
      this.setState(prevState => {
          console.warn(prevState);
          return {
        [name]: !prevState[name],
      }});
    }
    else if (e.target.type === 'radio'){
     this.setState({isAttending: e.target.value === "true"}); 
    }
    else {
      name = e.target.name
      this.setState({
        [name]: e.target.value
      });
    }
  }

  resetForm = () => {
    this.setState(
      {
        fullName: '',
        attendingWedding: false,
        attendingNextDay: false,
        dietaryRestrictions: '',
        display: 'showForm',
        isInvalidName: false,
        isSubmissionError: false,
        isLoading: false,
      }
    );
  };

  /* Renders component based on display state */
  renderComponents = () => {
    switch(this.state.display) {
      case "showForm":
        return (
          <>
            <Input
              handleChange={this.handleChange}
              guestNameValue={this.state.fullName}
              dietaryRestrictionsValue={this.state.dietaryRestrictions}
              attendingWeddingValue={this.state.attendingWedding}
              attendingNextDayValue={this.state.attendingNextDay}
              isInvalidName={this.state.isInvalidName}
              isLoading={this.state.isLoading}
              isSubmissionError={this.state.isSubmissionError}
              isAttending={this.state.isAttending}
              guestEmailValue={this.state.emailAddress}
            />
            <div className="rsvpDetails">Kindly RSVP indivudally for every member of your party by September 1st</div>
          </>
        );

      case "showResult":
        return (
          <Result name={this.state.fullName} resetForm={this.resetForm}/>
        );
      default:
        return;
    }
  }
    
  render() {
    return (
      <div className="rsvpContainer">
        <div className="rsvp-pageTitle"><RSVPText /></div>
        <form onSubmit={this.handleSubmit}>
          { this.renderComponents() }
        </form>
      </div>
    );
  }
 
};

export default RSVP